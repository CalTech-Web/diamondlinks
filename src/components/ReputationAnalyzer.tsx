'use client'

import { useState, useCallback, useEffect, useRef } from 'react'

/* ─── Types ─── */
interface SearchResult {
  title: string
  url: string
  snippet: string
  sentiment: 'positive' | 'neutral' | 'negative'
  type: 'social' | 'review' | 'news' | 'website' | 'directory' | 'legal' | 'complaint'
}

interface CategoryScores {
  searchPresence: number
  sentimentScore: number
  profileCoverage: number
  contentControl: number
}

interface ActionItem {
  title: string
  description: string
  urgency: 'Immediate' | 'This Month' | 'Ongoing'
}

interface AnalysisReport {
  query: string
  overallScore: number
  categoryScores: CategoryScores
  results: SearchResult[]
  risks: string[]
  opportunities: string[]
  actions: ActionItem[]
  profilesClaimed: { name: string; claimed: boolean }[]
  scenarioType: string
}

/* ─── Deterministic Hash ─── */
function hashString(str: string): number {
  let hash = 5381
  for (let i = 0; i < str.length; i++) {
    hash = ((hash << 5) + hash + str.charCodeAt(i)) & 0xffffffff
  }
  return Math.abs(hash)
}

function seededRandom(seed: number): () => number {
  let s = seed
  return () => {
    s = (s * 1664525 + 1013904223) & 0xffffffff
    return (s >>> 0) / 0xffffffff
  }
}

function pick<T>(arr: T[], rand: () => number): T {
  return arr[Math.floor(rand() * arr.length)]
}

function shuffle<T>(arr: T[], rand: () => number): T[] {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

/* ─── Scenario Templates ─── */
type ScenarioKey = 'person' | 'business' | 'medical' | 'legal' | 'restaurant'

interface ScenarioTemplate {
  key: ScenarioKey
  label: string
  positiveResults: (name: string, slug: string) => SearchResult[]
  neutralResults: (name: string, slug: string) => SearchResult[]
  negativeResults: (name: string, slug: string) => SearchResult[]
  profiles: string[]
  riskPool: (name: string, unclaimedProfiles: string[]) => string[]
  opportunityPool: (name: string) => string[]
  actionPool: (name: string) => ActionItem[]
}

const scenarios: ScenarioTemplate[] = [
  /* ── Person ── */
  {
    key: 'person',
    label: 'Individual / Personal Brand',
    positiveResults: (name, slug) => [
      { title: `${name} - LinkedIn`, url: `https://www.linkedin.com/in/${slug}`, snippet: `View ${name}'s professional profile on LinkedIn. 500+ connections. Industry thought leader with published articles and recommendations from colleagues.`, sentiment: 'positive', type: 'social' },
      { title: `${name} (@${slug}) / X`, url: `https://twitter.com/${slug}`, snippet: `The latest posts from ${name} (@${slug}). Sharing industry insights, professional updates, and thought leadership content.`, sentiment: 'positive', type: 'social' },
      { title: `${name} - About Me`, url: `https://about.me/${slug}`, snippet: `${name} is a professional with expertise in business development and strategy. Connect and learn more about their work.`, sentiment: 'positive', type: 'website' },
      { title: `${name} | Speaker Profile`, url: `https://www.speakerhub.com/${slug}`, snippet: `Book ${name} for your next event. Topics include leadership, innovation, and digital transformation.`, sentiment: 'positive', type: 'directory' },
      { title: `${name} - Medium`, url: `https://medium.com/@${slug}`, snippet: `Read writing from ${name} on Medium. Published thought leader sharing insights on business growth and professional development.`, sentiment: 'positive', type: 'website' },
    ],
    neutralResults: (name, slug) => [
      { title: `${name} | Facebook`, url: `https://www.facebook.com/${slug}`, snippet: `${name} is on Facebook. Join Facebook to connect with ${name} and others you may know. Facebook gives people the power to share.`, sentiment: 'neutral', type: 'social' },
      { title: `${name} - Wikipedia`, url: `https://en.wikipedia.org/wiki/${slug}`, snippet: `${name} may refer to several people. This disambiguation page lists individuals with similar names. See also related articles.`, sentiment: 'neutral', type: 'website' },
      { title: `${name} - Instagram`, url: `https://www.instagram.com/${slug}`, snippet: `See photos and videos from ${name} (@${slug}). Personal and professional moments shared with followers.`, sentiment: 'neutral', type: 'social' },
      { title: `${name} - ZoomInfo`, url: `https://www.zoominfo.com/p/${slug}`, snippet: `View ${name}'s business profile. Includes company information, job history, and professional contact details.`, sentiment: 'neutral', type: 'directory' },
      { title: `People Named ${name} | Whitepages`, url: `https://www.whitepages.com/name/${slug}`, snippet: `Find ${name}'s phone number, address, and public records. 3 results found for ${name} in the United States.`, sentiment: 'neutral', type: 'directory' },
    ],
    negativeResults: (name, slug) => [
      { title: `${name} Scam Alert - Complaints Board`, url: `https://www.complaintsboard.com/${slug}`, snippet: `Warning: Multiple consumers have filed complaints about ${name}. Reports include fraud allegations and deceptive business practices.`, sentiment: 'negative', type: 'complaint' },
      { title: `${name} - Ripoff Report`, url: `https://www.ripoffreport.com/${slug}`, snippet: `Ripoff Report on ${name} — filed complaint about misleading claims and poor service. Multiple reports found from different states.`, sentiment: 'negative', type: 'complaint' },
      { title: `Is ${name} a Scam? Reddit Discussion`, url: `https://www.reddit.com/r/scams/comments/${slug}`, snippet: `Has anyone dealt with ${name}? I paid for a service and never received what was promised. Multiple people confirming similar experience.`, sentiment: 'negative', type: 'review' },
      { title: `${name} Lawsuit - Court Records`, url: `https://www.courtlistener.com/${slug}`, snippet: `Public court records for ${name}. Case filed in 2023 involving breach of contract and fraud allegations. Case status: pending.`, sentiment: 'negative', type: 'legal' },
    ],
    profiles: ['LinkedIn', 'X (Twitter)', 'Facebook', 'Instagram', 'Medium', 'About.me', 'YouTube', 'GitHub'],
    riskPool: (name, unclaimed) => [
      `Complaint site content ranking on page 1 for "${name}"`,
      'Personal information exposed on data broker sites',
      'Negative Reddit threads gaining search authority',
      ...unclaimed.slice(0, 2).map(p => `Unclaimed ${p} profile vulnerable to impersonation`),
      'No personal website to anchor branded search results',
      'Court records or legal filings appearing in search results',
      'Negative content outranking positive professional profiles',
    ],
    opportunityPool: (name) => [
      'Build a personal website to anchor page 1 results',
      'Publish thought leadership content on Medium and LinkedIn',
      'Create a YouTube channel for video-based authority',
      'Request removal of inaccurate data broker listings',
      'Optimize LinkedIn profile with targeted keywords',
      `Generate positive press coverage for "${name}"`,
      'Build authoritative backlinks to owned properties',
    ],
    actionPool: (name) => [
      { title: 'Suppress Negative Content', description: `Create and optimize 5+ authoritative web properties to push negative results off page 1 for "${name}"`, urgency: 'Immediate' },
      { title: 'Claim Missing Profiles', description: 'Register and optimize profiles on all major platforms to control the narrative and prevent impersonation', urgency: 'Immediate' },
      { title: 'Launch Content Campaign', description: 'Publish 2-3 thought leadership articles per month to build positive search authority', urgency: 'This Month' },
      { title: 'Request Data Removals', description: 'Submit removal requests to data brokers and complaint sites with inaccurate or outdated information', urgency: 'This Month' },
      { title: 'Monitor Brand Mentions', description: 'Set up Google Alerts and social listening to catch new negative content early', urgency: 'Ongoing' },
      { title: 'Build Link Authority', description: 'Earn backlinks to positive pages through guest posting, PR outreach, and directory listings', urgency: 'Ongoing' },
    ],
  },

  /* ── Business ── */
  {
    key: 'business',
    label: 'Business / Brand',
    positiveResults: (name, slug) => [
      { title: `${name} - Official Website`, url: `https://www.${slug}.com`, snippet: `Welcome to ${name}. We provide industry-leading solutions trusted by thousands of customers worldwide. Learn more about our services.`, sentiment: 'positive', type: 'website' },
      { title: `${name} - Better Business Bureau`, url: `https://www.bbb.org/us/profile/${slug}`, snippet: `${name} is a BBB Accredited Business. A+ rating since 2019. See reviews, complaints, and contact information.`, sentiment: 'positive', type: 'directory' },
      { title: `${name} - LinkedIn Company Page`, url: `https://www.linkedin.com/company/${slug}`, snippet: `${name} | 2,400 followers on LinkedIn. Join us as we continue to innovate and grow. See job openings and company updates.`, sentiment: 'positive', type: 'social' },
      { title: `${name} - Crunchbase`, url: `https://www.crunchbase.com/organization/${slug}`, snippet: `${name} company profile: funding rounds, investors, valuation, and team details. Founded and headquartered in the United States.`, sentiment: 'positive', type: 'directory' },
      { title: `${name} Reviews - G2`, url: `https://www.g2.com/products/${slug}`, snippet: `${name} has a rating of 4.6 out of 5 stars on G2 based on 340+ reviews. Users praise the product's ease of use and customer support.`, sentiment: 'positive', type: 'review' },
    ],
    neutralResults: (name, slug) => [
      { title: `${name} | Facebook`, url: `https://www.facebook.com/${slug}`, snippet: `${name} business page. 8.2K likes. See posts, photos, and community updates. Check in to learn more about services offered.`, sentiment: 'neutral', type: 'social' },
      { title: `${name} Salaries - Glassdoor`, url: `https://www.glassdoor.com/Salary/${slug}`, snippet: `See what employees say about pay at ${name}. 85 salaries for 32 job titles. Average salary ranges and compensation details.`, sentiment: 'neutral', type: 'review' },
      { title: `${name} News - Google News`, url: `https://news.google.com/search?q=${encodeURIComponent(name)}`, snippet: `Latest news coverage about ${name}. Recent articles cover industry developments, partnerships, and company announcements.`, sentiment: 'neutral', type: 'news' },
      { title: `${name} on X`, url: `https://twitter.com/${slug}`, snippet: `The official X account for ${name}. Company updates, industry news, and customer engagement. Joined 2017.`, sentiment: 'neutral', type: 'social' },
      { title: `${name} - YouTube`, url: `https://www.youtube.com/@${slug}`, snippet: `Official YouTube channel for ${name}. Product demos, customer stories, and educational content. 1.2K subscribers.`, sentiment: 'neutral', type: 'social' },
    ],
    negativeResults: (name, slug) => [
      { title: `${name} Reviews - Trustpilot`, url: `https://www.trustpilot.com/review/${slug}.com`, snippet: `Read customer reviews of ${name}. 156 reviews with 2.8 out of 5 stars. Common complaints include billing issues and poor customer service.`, sentiment: 'negative', type: 'review' },
      { title: `${name} Complaints - Ripoff Report`, url: `https://www.ripoffreport.com/${slug}`, snippet: `Ripoff Report on ${name} — multiple complaints about misleading advertising, hidden fees, and refund issues. Last report filed 2 weeks ago.`, sentiment: 'negative', type: 'complaint' },
      { title: `${name} Glassdoor Reviews - Low Rating`, url: `https://www.glassdoor.com/Reviews/${slug}`, snippet: `${name} has 2.4 out of 5 stars on Glassdoor. Former employees cite poor management, low pay, and toxic work culture. "Would not recommend."`, sentiment: 'negative', type: 'review' },
      { title: `Is ${name} Legit? Consumer Warning`, url: `https://www.scamadviser.com/check-website/${slug}.com`, snippet: `Our analysis of ${name} shows a trust score of 42 out of 100. Multiple red flags detected including recent domain registration and complaints.`, sentiment: 'negative', type: 'website' },
    ],
    profiles: ['Google Business', 'LinkedIn', 'Facebook', 'X (Twitter)', 'Yelp', 'BBB', 'Crunchbase', 'Glassdoor', 'Trustpilot', 'YouTube'],
    riskPool: (name, unclaimed) => [
      `Low Trustpilot rating appearing prominently for "${name}"`,
      'Negative Glassdoor reviews deterring potential hires',
      'Complaint site results on page 1 eroding consumer trust',
      ...unclaimed.slice(0, 2).map(p => `Unclaimed ${p} profile — competitors could outrank you`),
      'Low review volume making negative reviews disproportionately visible',
      'No branded content strategy to control page 1 narrative',
      'Negative news articles gaining authority through backlinks',
    ],
    opportunityPool: (name) => [
      'Implement a review generation campaign to improve Trustpilot score',
      'Optimize company website for branded search terms',
      'Create case study content to push down negative results',
      'Build employer brand content to counter Glassdoor reviews',
      `Publish press releases to diversify page 1 results for "${name}"`,
      'Claim and optimize all unclaimed business profiles',
      'Launch a thought leadership blog to build domain authority',
    ],
    actionPool: (name) => [
      { title: 'Review Response Strategy', description: 'Respond professionally to all negative reviews on Trustpilot, Glassdoor, and BBB within 48 hours', urgency: 'Immediate' },
      { title: 'Claim All Business Profiles', description: 'Register and verify ownership on all major business directories and review platforms', urgency: 'Immediate' },
      { title: 'Launch Review Generation', description: 'Implement automated review request system to increase positive review volume by 300%', urgency: 'This Month' },
      { title: 'Content Suppression Campaign', description: `Create 8-10 optimized web properties targeting "${name}" to push negative results to page 2`, urgency: 'This Month' },
      { title: 'Employer Brand Repair', description: 'Address Glassdoor concerns internally and encourage satisfied employees to share experiences', urgency: 'Ongoing' },
      { title: 'Ongoing Monitoring', description: 'Weekly monitoring of brand mentions, new reviews, and search result changes', urgency: 'Ongoing' },
    ],
  },

  /* ── Medical Professional ── */
  {
    key: 'medical',
    label: 'Medical Professional',
    positiveResults: (name, slug) => [
      { title: `Dr. ${name}, MD - Healthgrades`, url: `https://www.healthgrades.com/physician/dr-${slug}`, snippet: `Dr. ${name} is a board-certified physician with 15+ years of experience. 4.8 out of 5 stars based on 120 patient reviews.`, sentiment: 'positive', type: 'directory' },
      { title: `${name}, MD - Practice Website`, url: `https://www.${slug}md.com`, snippet: `Welcome to the practice of Dr. ${name}. Accepting new patients. Board-certified with advanced training and a patient-first approach.`, sentiment: 'positive', type: 'website' },
      { title: `Dr. ${name} - WebMD`, url: `https://www.webmd.com/doctor/${slug}`, snippet: `Dr. ${name} is a practicing physician. See patient reviews, office locations, accepted insurance plans, and appointment availability.`, sentiment: 'positive', type: 'directory' },
      { title: `${name} MD - Doximity`, url: `https://www.doximity.com/pub/${slug}`, snippet: `Dr. ${name}'s professional profile on Doximity. Board certifications, publications, hospital affiliations, and peer endorsements.`, sentiment: 'positive', type: 'directory' },
      { title: `Dr. ${name} - Castle Connolly Top Doctor`, url: `https://www.castleconnolly.com/doctor/${slug}`, snippet: `Dr. ${name} has been recognized as a Castle Connolly Top Doctor for 2024. Peer-nominated for exceptional patient care.`, sentiment: 'positive', type: 'directory' },
    ],
    neutralResults: (name, slug) => [
      { title: `${name} NPI Number - NPPES`, url: `https://npidb.org/npi/${slug}`, snippet: `National Provider Identifier for Dr. ${name}. NPI registry information including practice location and specialization details.`, sentiment: 'neutral', type: 'directory' },
      { title: `Dr. ${name} - Zocdoc`, url: `https://www.zocdoc.com/doctor/${slug}`, snippet: `Book an appointment with Dr. ${name} on Zocdoc. See available times, accepted insurance, and patient ratings.`, sentiment: 'neutral', type: 'directory' },
      { title: `${name}, MD - LinkedIn`, url: `https://www.linkedin.com/in/${slug}-md`, snippet: `View Dr. ${name}'s professional profile. Medical education, residency, board certifications, and professional associations.`, sentiment: 'neutral', type: 'social' },
      { title: `Dr. ${name} - RateMDs`, url: `https://www.ratemds.com/doctor/${slug}`, snippet: `Patient ratings for Dr. ${name}. 3.5 out of 5 stars based on 28 reviews. See what patients are saying about their experience.`, sentiment: 'neutral', type: 'review' },
    ],
    negativeResults: (name, slug) => [
      { title: `Dr. ${name} Reviews - Vitals (1 Star)`, url: `https://www.vitals.com/doctors/Dr_${slug}`, snippet: `Dr. ${name} has 1.8 out of 5 stars on Vitals. Patients report long wait times, dismissive bedside manner, and billing issues. 12 reviews.`, sentiment: 'negative', type: 'review' },
      { title: `Malpractice History: Dr. ${name}`, url: `https://www.docinfo.org/physician/${slug}`, snippet: `Board action and malpractice history for Dr. ${name}. Records show 2 settled malpractice claims. See full disciplinary history.`, sentiment: 'negative', type: 'legal' },
      { title: `Dr. ${name} Complaint - State Medical Board`, url: `https://www.medicalboard.gov/complaints/${slug}`, snippet: `Consumer complaint filed against Dr. ${name}. Allegations include failure to obtain informed consent and substandard care.`, sentiment: 'negative', type: 'legal' },
      { title: `Bad Experience with Dr. ${name} - Yelp`, url: `https://www.yelp.com/biz/${slug}-medical`, snippet: `1 star. Dr. ${name} was rushed, didn't listen to my concerns, and the office staff was rude. Waited 90 minutes past my appointment time.`, sentiment: 'negative', type: 'review' },
    ],
    profiles: ['Healthgrades', 'WebMD', 'Zocdoc', 'Vitals', 'RateMDs', 'Doximity', 'Google Business', 'Yelp', 'LinkedIn', 'Practice Website'],
    riskPool: (name, unclaimed) => [
      `Malpractice records appearing on page 1 for "Dr. ${name}"`,
      'Low-rated review profiles outranking positive directories',
      'Patient complaint content indexed by search engines',
      ...unclaimed.slice(0, 2).map(p => `Unclaimed ${p} profile showing default or negative content`),
      'Board disciplinary records accessible via Google search',
      'Competitor doctors outranking your positive profiles',
      'Negative Yelp and Vitals reviews deterring new patients',
    ],
    opportunityPool: (name) => [
      'Optimize Healthgrades and WebMD profiles for higher rankings',
      'Generate patient reviews on Google and Healthgrades',
      'Publish patient education content to build search authority',
      'Create or improve practice website with SEO best practices',
      `Build medical authority content targeting "Dr. ${name}"`,
      'Claim and optimize all healthcare directory listings',
      'Earn backlinks from medical associations and hospital affiliations',
    ],
    actionPool: (name) => [
      { title: 'Suppress Legal Results', description: `Create optimized medical profiles and content to push malpractice/complaint results off page 1 for "Dr. ${name}"`, urgency: 'Immediate' },
      { title: 'Patient Review Campaign', description: 'Implement HIPAA-compliant review request system to generate 10+ positive reviews per month', urgency: 'Immediate' },
      { title: 'Profile Optimization', description: 'Fully optimize all healthcare directory profiles with photos, credentials, and patient-friendly bios', urgency: 'This Month' },
      { title: 'Medical Content Strategy', description: 'Publish patient education articles and videos to demonstrate expertise and build search presence', urgency: 'This Month' },
      { title: 'Reputation Monitoring', description: 'Set up alerts for new reviews, board actions, and mentions across medical directories', urgency: 'Ongoing' },
      { title: 'Review Response Protocol', description: 'Respond to all reviews within 24 hours following HIPAA-compliant response templates', urgency: 'Ongoing' },
    ],
  },

  /* ── Legal Professional ── */
  {
    key: 'legal',
    label: 'Legal Professional / Law Firm',
    positiveResults: (name, slug) => [
      { title: `${name} - Avvo`, url: `https://www.avvo.com/attorneys/${slug}`, snippet: `${name}, Attorney at Law. Avvo Rating: 9.2 Superb. Practice areas include civil litigation, business law, and contract disputes. 18 years experience.`, sentiment: 'positive', type: 'directory' },
      { title: `${name} - Law Firm Website`, url: `https://www.${slug}law.com`, snippet: `Welcome to the Law Offices of ${name}. Experienced legal representation in business law, litigation, and dispute resolution. Free consultations.`, sentiment: 'positive', type: 'website' },
      { title: `${name}, Esq. - Martindale-Hubbell`, url: `https://www.martindale.com/attorney/${slug}`, snippet: `${name} has an AV Preeminent rating, the highest peer rating standard. Areas of practice, professional background, and client reviews.`, sentiment: 'positive', type: 'directory' },
      { title: `${name} - Super Lawyers`, url: `https://www.superlawyers.com/profile/${slug}`, snippet: `${name} has been selected to the Super Lawyers list for 2024. A Thomson Reuters service recognizing outstanding attorneys in each state.`, sentiment: 'positive', type: 'directory' },
      { title: `${name} | LinkedIn`, url: `https://www.linkedin.com/in/${slug}-esq`, snippet: `${name}, Esq. — Managing Partner. Harvard Law School graduate with 18 years of trial experience. 500+ connections.`, sentiment: 'positive', type: 'social' },
    ],
    neutralResults: (name, slug) => [
      { title: `${name} - State Bar Association`, url: `https://www.statebar.org/member/${slug}`, snippet: `Member profile for ${name}. Bar number, admission date, practice areas, and membership status. Active and in good standing.`, sentiment: 'neutral', type: 'directory' },
      { title: `${name} - Justia Lawyer Directory`, url: `https://www.justia.com/lawyer/${slug}`, snippet: `${name} profile on Justia. Legal background, education, bar admissions, and contact information for prospective clients.`, sentiment: 'neutral', type: 'directory' },
      { title: `${name} - FindLaw`, url: `https://www.findlaw.com/attorney/${slug}`, snippet: `Find attorney ${name} on FindLaw. Office location, practice areas, fee information, and client reviews.`, sentiment: 'neutral', type: 'directory' },
      { title: `${name} Cases - CourtListener`, url: `https://www.courtlistener.com/attorney/${slug}`, snippet: `Court cases involving ${name} as attorney of record. 47 cases found in federal and state courts. Most recent filing: 3 weeks ago.`, sentiment: 'neutral', type: 'legal' },
    ],
    negativeResults: (name, slug) => [
      { title: `Disciplinary Action: ${name} - Bar Association`, url: `https://www.statebar.org/discipline/${slug}`, snippet: `Disciplinary action against ${name}. Public reprimand issued for failure to communicate and neglect of client matter. Record updated 2023.`, sentiment: 'negative', type: 'legal' },
      { title: `${name} Attorney Reviews - 1 Star`, url: `https://www.avvo.com/attorneys/${slug}/reviews`, snippet: `"${name} took my money and did nothing." "Worst attorney I've ever hired." 3 one-star reviews cite unresponsiveness and missed deadlines.`, sentiment: 'negative', type: 'review' },
      { title: `Complaint Against ${name}, Attorney`, url: `https://www.lawyerlegion.com/complaint/${slug}`, snippet: `Filed complaint against attorney ${name} for ethics violation. Client alleges overbilling, lack of communication, and conflict of interest.`, sentiment: 'negative', type: 'complaint' },
      { title: `${name} Lawyer Scam Warning - Reddit`, url: `https://www.reddit.com/r/legaladvice/${slug}`, snippet: `My attorney ${name} hasn't returned calls in 3 weeks and the court deadline is tomorrow. Others reporting similar issues. What are my options?`, sentiment: 'negative', type: 'review' },
    ],
    profiles: ['Avvo', 'Martindale-Hubbell', 'Super Lawyers', 'LinkedIn', 'Google Business', 'Justia', 'FindLaw', 'Yelp', 'Facebook', 'Lawyers.com'],
    riskPool: (name, unclaimed) => [
      `Bar disciplinary records appearing on page 1 for "${name} attorney"`,
      'Negative Avvo reviews visible to potential clients searching your name',
      'Ethics complaint content indexed and ranking in search results',
      ...unclaimed.slice(0, 2).map(p => `Unclaimed ${p} listing showing incomplete or default information`),
      'Negative Reddit threads about your practice gaining traction',
      'Competitor attorneys outranking your profiles in local search',
      'Court records with unfavorable outcomes appearing in search results',
    ],
    opportunityPool: (name) => [
      'Optimize Avvo and Martindale-Hubbell profiles for maximum visibility',
      'Generate client testimonials on Google and legal directories',
      'Publish legal insight articles to build search authority',
      'Create a robust firm website optimized for attorney name searches',
      `Earn legal directory links and citations for "${name}"`,
      'Build thought leadership through legal blog and speaking engagements',
      'Claim and verify all legal directory listings',
    ],
    actionPool: (name) => [
      { title: 'Address Disciplinary Visibility', description: `Create and optimize 6+ authoritative web properties to suppress bar discipline records in search for "${name}"`, urgency: 'Immediate' },
      { title: 'Client Review Strategy', description: 'Implement ethical review request system compliant with bar rules to generate positive client testimonials', urgency: 'Immediate' },
      { title: 'Legal Directory Optimization', description: 'Fully optimize profiles on Avvo, Martindale-Hubbell, Super Lawyers, and 5+ additional directories', urgency: 'This Month' },
      { title: 'Thought Leadership Content', description: 'Publish 2-3 legal analysis articles monthly on firm blog and legal publications', urgency: 'This Month' },
      { title: 'Reputation Monitoring', description: 'Monitor all legal directories, bar association records, and court filings for new negative content', urgency: 'Ongoing' },
      { title: 'PR and Speaking Outreach', description: 'Pursue CLE presentations, bar association involvement, and legal media quotes', urgency: 'Ongoing' },
    ],
  },

  /* ── Restaurant / Local Business ── */
  {
    key: 'restaurant',
    label: 'Restaurant / Local Business',
    positiveResults: (name, slug) => [
      { title: `${name} - Google Maps`, url: `https://www.google.com/maps/place/${slug}`, snippet: `${name} — 4.5 stars (890 reviews). Popular local establishment known for exceptional service and quality. Open today until 10 PM.`, sentiment: 'positive', type: 'directory' },
      { title: `${name} - Official Website`, url: `https://www.${slug}.com`, snippet: `Welcome to ${name}. View our menu, hours, and location. Order online or make a reservation. Family-owned since 2012.`, sentiment: 'positive', type: 'website' },
      { title: `${name} - TripAdvisor`, url: `https://www.tripadvisor.com/Restaurant-${slug}`, snippet: `${name}: See 340 unbiased reviews rated 4.5 of 5 on TripAdvisor. Ranked #12 of 1,400 restaurants in the area. Certificate of Excellence.`, sentiment: 'positive', type: 'review' },
      { title: `Best of 2024: ${name} Named Top Pick`, url: `https://www.localnews.com/best-of/${slug}`, snippet: `${name} has been voted the community's favorite in the 2024 Best Of awards. Praised for quality, atmosphere, and community involvement.`, sentiment: 'positive', type: 'news' },
      { title: `${name} | Facebook`, url: `https://www.facebook.com/${slug}`, snippet: `${name} — 4.7 stars on Facebook. 3.2K followers. See posts, photos, and community reviews. Check in for the latest specials.`, sentiment: 'positive', type: 'social' },
    ],
    neutralResults: (name, slug) => [
      { title: `${name} Menu & Prices - DoorDash`, url: `https://www.doordash.com/store/${slug}`, snippet: `Order delivery from ${name} on DoorDash. View the full menu, pricing, hours of operation, and customer ratings.`, sentiment: 'neutral', type: 'directory' },
      { title: `${name} - Instagram`, url: `https://www.instagram.com/${slug}`, snippet: `${name} (@${slug}) on Instagram. 1,800 followers. Food photos, daily specials, and behind-the-scenes content.`, sentiment: 'neutral', type: 'social' },
      { title: `${name} - Foursquare`, url: `https://foursquare.com/v/${slug}`, snippet: `See 45 photos and 12 tips from 200 visitors to ${name}. Popular dishes and local tips from the community.`, sentiment: 'neutral', type: 'directory' },
      { title: `${name} Health Inspection - County Records`, url: `https://www.healthinspections.gov/${slug}`, snippet: `Health inspection results for ${name}. Most recent inspection: Score 94/100. No critical violations found.`, sentiment: 'neutral', type: 'directory' },
    ],
    negativeResults: (name, slug) => [
      { title: `${name} Reviews - Yelp (2 Stars)`, url: `https://www.yelp.com/biz/${slug}`, snippet: `${name} has 2.3 stars on Yelp. "Food was cold, service was terrible." "Found a hair in my meal." "Overpriced for the quality." 45 reviews.`, sentiment: 'negative', type: 'review' },
      { title: `Food Poisoning at ${name} - Reddit`, url: `https://www.reddit.com/r/local/${slug}-food-poisoning`, snippet: `Got food poisoning from ${name} last week. Multiple commenters report similar experiences. Health department should investigate.`, sentiment: 'negative', type: 'review' },
      { title: `${name} - BBB Complaints`, url: `https://www.bbb.org/us/complaint/${slug}`, snippet: `${name} has received 8 complaints in the last 12 months. Common issues include gift card disputes, billing errors, and service quality.`, sentiment: 'negative', type: 'complaint' },
      { title: `${name} Shut Down for Health Violations`, url: `https://www.localnews.com/health-violations/${slug}`, snippet: `${name} was temporarily closed following health code violations discovered during a routine inspection. Critical violations included improper food storage.`, sentiment: 'negative', type: 'news' },
    ],
    profiles: ['Google Business', 'Yelp', 'TripAdvisor', 'Facebook', 'Instagram', 'DoorDash', 'Uber Eats', 'OpenTable', 'Foursquare', 'BBB'],
    riskPool: (name, unclaimed) => [
      `Low Yelp rating (2-3 stars) prominently displayed for "${name}"`,
      'Food safety complaints gaining search visibility',
      'Negative Reddit threads ranking on page 1',
      ...unclaimed.slice(0, 2).map(p => `Unclaimed ${p} listing showing outdated or incorrect information`),
      'Health inspection issues appearing in news coverage',
      'BBB complaints visible to potential customers',
      'Low review volume on key platforms amplifying negative ratings',
    ],
    opportunityPool: (name) => [
      'Launch a customer review generation campaign across Yelp, Google, and TripAdvisor',
      'Respond professionally to all negative reviews to demonstrate care',
      'Create a food photography strategy to improve social media presence',
      'Build local press coverage through community involvement',
      `Optimize Google Business profile for "${name}" local searches`,
      'Encourage user-generated content from satisfied customers',
      'Partner with local food bloggers and influencers for positive coverage',
    ],
    actionPool: (name) => [
      { title: 'Yelp Recovery Plan', description: `Respond to all negative Yelp reviews, flag policy-violating content, and generate 20+ new positive reviews within 60 days`, urgency: 'Immediate' },
      { title: 'Google Business Optimization', description: 'Fully optimize Google Business profile with photos, menu, hours, and posts to maximize local search visibility', urgency: 'Immediate' },
      { title: 'Review Generation System', description: 'Implement tabletop cards, follow-up emails, and staff training to systematically generate positive reviews', urgency: 'This Month' },
      { title: 'Negative Content Suppression', description: `Create optimized web properties and earn local press to push negative results off page 1 for "${name}"`, urgency: 'This Month' },
      { title: 'Social Media Engagement', description: 'Post daily on Instagram and Facebook with quality food photography and customer engagement', urgency: 'Ongoing' },
      { title: 'Review Monitoring', description: 'Monitor all review platforms daily and respond to new reviews within 12 hours', urgency: 'Ongoing' },
    ],
  },
]

/* ─── Mock Data Generator ─── */
function generateMockReport(query: string): AnalysisReport {
  const name = query.trim()
  const slug = name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
  const hash = hashString(name.toLowerCase())
  const rand = seededRandom(hash)

  // Pick scenario based on hash
  const scenarioIndex = hash % scenarios.length
  const scenario = scenarios[scenarioIndex]

  // Determine how many negatives (0-4)
  const negativeCount = Math.floor(rand() * 5)

  // Pick results
  const positives = shuffle(scenario.positiveResults(name, slug), rand)
  const neutrals = shuffle(scenario.neutralResults(name, slug), rand)
  const negatives = shuffle(scenario.negativeResults(name, slug), rand).slice(0, negativeCount)

  // Build page 1 results (10 items max)
  const totalSlots = 10
  const negSlots = negatives.length
  const posSlots = Math.min(positives.length, Math.ceil((totalSlots - negSlots) * 0.5) + Math.floor(rand() * 2))
  const neutSlots = totalSlots - negSlots - posSlots

  const selected = [
    ...positives.slice(0, Math.max(1, posSlots)),
    ...neutrals.slice(0, Math.max(1, neutSlots)),
    ...negatives,
  ].slice(0, totalSlots)

  // Shuffle the results but keep a realistic ordering (positives tend to be higher)
  const results: SearchResult[] = []
  const posPool = selected.filter(r => r.sentiment === 'positive')
  const neutPool = selected.filter(r => r.sentiment === 'neutral')
  const negPool = selected.filter(r => r.sentiment === 'negative')

  // Positives tend to rank higher, negatives scattered
  const orderedPool = [...posPool]
  // Insert neutrals
  for (const n of neutPool) {
    const insertAt = Math.floor(rand() * (orderedPool.length + 1))
    orderedPool.splice(insertAt, 0, n)
  }
  // Insert negatives at varied positions (not all at top)
  for (const n of negPool) {
    const minPos = Math.floor(rand() * 3) + 2 // position 3-5 at minimum
    const insertAt = Math.min(minPos + Math.floor(rand() * 4), orderedPool.length)
    orderedPool.splice(insertAt, 0, n)
  }

  results.push(...orderedPool.slice(0, totalSlots))

  // Calculate category scores
  const totalResults = results.length
  const posCount = results.filter(r => r.sentiment === 'positive').length
  const negCount = results.filter(r => r.sentiment === 'negative').length
  const neutCount = results.filter(r => r.sentiment === 'neutral').length

  // Profile coverage
  const profilePool = shuffle(scenario.profiles, rand)
  const numClaimed = Math.floor(rand() * 5) + 2 // 2-6 claimed
  const profilesClaimed = profilePool.map((p, i) => ({
    name: p,
    claimed: i < numClaimed,
  }))

  const claimedCount = profilesClaimed.filter(p => p.claimed).length
  const ownedResults = results.filter(r => r.type === 'website' || r.type === 'social').length

  const searchPresence = Math.min(10, Math.max(1, Math.round(
    (totalResults / 10) * 6 + (posCount / totalResults) * 4 + (rand() * 2 - 1)
  )))

  const sentimentScore = Math.min(10, Math.max(1, Math.round(
    ((posCount * 2 + neutCount * 1) / (totalResults * 2)) * 10 - (negCount * 1.5) + (rand() * 1.5 - 0.75)
  )))

  const profileCoverageScore = Math.min(10, Math.max(1, Math.round(
    (claimedCount / profilesClaimed.length) * 10 + (rand() * 1 - 0.5)
  )))

  const contentControl = Math.min(10, Math.max(1, Math.round(
    (ownedResults / totalResults) * 8 + (posCount / totalResults) * 3 - (negCount * 0.8) + (rand() * 1.5 - 0.75)
  )))

  const categoryScores: CategoryScores = {
    searchPresence: Math.max(2, Math.min(9, searchPresence)),
    sentimentScore: Math.max(2, Math.min(9, sentimentScore)),
    profileCoverage: Math.max(2, Math.min(9, profileCoverageScore)),
    contentControl: Math.max(2, Math.min(9, contentControl)),
  }

  // Weighted average for overall score
  const overallScore = Math.max(2, Math.min(9, Math.round(
    categoryScores.searchPresence * 0.2 +
    categoryScores.sentimentScore * 0.3 +
    categoryScores.profileCoverage * 0.2 +
    categoryScores.contentControl * 0.3
  )))

  // Generate contextual risks
  const unclaimedProfiles = profilesClaimed.filter(p => !p.claimed).map(p => p.name)
  const riskPool = scenario.riskPool(name, unclaimedProfiles)
  const numRisks = Math.min(riskPool.length, Math.max(3, negCount + 2))
  const risks = shuffle(riskPool, rand).slice(0, numRisks)

  // Generate contextual opportunities
  const oppPool = scenario.opportunityPool(name)
  const numOpps = Math.min(oppPool.length, Math.max(3, 5 - negCount + 1))
  const opportunities = shuffle(oppPool, rand).slice(0, numOpps)

  // Generate action items
  const actionPool = scenario.actionPool(name)
  const actions = shuffle(actionPool, rand).slice(0, 3)
  // Ensure we have at least one of each urgency if possible
  const urgencies = new Set(actions.map(a => a.urgency))
  if (!urgencies.has('Immediate') && actionPool.find(a => a.urgency === 'Immediate')) {
    actions[0] = actionPool.find(a => a.urgency === 'Immediate')!
  }
  if (!urgencies.has('Ongoing') && actionPool.find(a => a.urgency === 'Ongoing')) {
    actions[2] = actionPool.find(a => a.urgency === 'Ongoing')!
  }

  return {
    query: name,
    overallScore,
    categoryScores,
    results,
    risks,
    opportunities,
    actions,
    profilesClaimed,
    scenarioType: scenario.label,
  }
}

/* ─── Sub-components ─── */

function ScoreGauge({ score, animated }: { score: number; animated: boolean }) {
  const percentage = (score / 10) * 100
  const color =
    score >= 7 ? 'text-emerald-500' : score >= 5 ? 'text-amber-500' : 'text-red-500'
  const bgColor =
    score >= 7 ? 'bg-emerald-500' : score >= 5 ? 'bg-amber-500' : 'bg-red-500'
  const label = score >= 7 ? 'Good' : score >= 5 ? 'Needs Work' : 'At Risk'

  return (
    <div className="text-center">
      <div className="relative w-36 h-36 mx-auto mb-4">
        <svg className="w-36 h-36 -rotate-90" viewBox="0 0 120 120">
          <circle cx="60" cy="60" r="52" fill="none" stroke="#e5e7eb" strokeWidth="10" />
          <circle
            cx="60"
            cy="60"
            r="52"
            fill="none"
            stroke="currentColor"
            strokeWidth="10"
            strokeDasharray={animated ? `${percentage * 3.267} 326.7` : '0 326.7'}
            strokeLinecap="round"
            className={`${color} transition-all duration-1000 ease-out`}
            style={animated ? { transitionDelay: '300ms' } : undefined}
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className={`text-4xl font-bold ${color}`}>{animated ? score : 0}</span>
          <span className="text-gray-400 text-xs">/10</span>
        </div>
      </div>
      <span
        className={`inline-flex items-center gap-1.5 ${bgColor} text-white text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full`}
      >
        {label}
      </span>
    </div>
  )
}

function CategoryScoreBar({ label, score, icon, delay }: { label: string; score: number; icon: React.ReactNode; delay: number }) {
  const [animated, setAnimated] = useState(false)
  const color = score >= 7 ? 'bg-emerald-500' : score >= 5 ? 'bg-amber-500' : 'bg-red-500'
  const textColor = score >= 7 ? 'text-emerald-600' : score >= 5 ? 'text-amber-600' : 'text-red-600'

  useEffect(() => {
    const timer = setTimeout(() => setAnimated(true), delay)
    return () => clearTimeout(timer)
  }, [delay])

  return (
    <div className="flex items-center gap-3">
      <div className="flex-shrink-0 w-7 h-7 rounded-lg bg-gray-50 flex items-center justify-center text-gray-400">
        {icon}
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between mb-1">
          <span className="text-xs font-medium text-gray-600 truncate">{label}</span>
          <span className={`text-xs font-bold ${textColor}`}>{score}/10</span>
        </div>
        <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
          <div
            className={`h-full rounded-full ${color} transition-all duration-700 ease-out`}
            style={{ width: animated ? `${(score / 10) * 100}%` : '0%' }}
          />
        </div>
      </div>
    </div>
  )
}

function SentimentBadge({ sentiment }: { sentiment: SearchResult['sentiment'] }) {
  const config = {
    positive: { bg: 'bg-emerald-50 text-emerald-700 border-emerald-100', label: 'Positive' },
    neutral: { bg: 'bg-gray-50 text-gray-600 border-gray-100', label: 'Neutral' },
    negative: { bg: 'bg-red-50 text-red-700 border-red-100', label: 'Negative' },
  }
  const { bg, label } = config[sentiment]
  return (
    <span className={`inline-flex items-center text-[11px] font-semibold px-2 py-0.5 rounded border ${bg}`}>
      {label}
    </span>
  )
}

function SearchResultCard({ result, position }: { result: SearchResult; position: number }) {
  return (
    <div className="group py-4 first:pt-0 last:pb-0">
      <div className="flex items-start gap-3">
        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gray-100 text-gray-400 text-xs font-bold flex items-center justify-center mt-0.5">
          {position}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-0.5 flex-wrap">
            <span className="text-xs text-gray-400 truncate max-w-[240px]">{result.url}</span>
            <SentimentBadge sentiment={result.sentiment} />
          </div>
          <h4 className="text-blue-700 font-medium text-sm mb-1 group-hover:underline cursor-default">
            {result.title}
          </h4>
          <p className="text-gray-500 text-xs leading-relaxed">{result.snippet}</p>
        </div>
      </div>
    </div>
  )
}

function ProfileStatus({ profiles }: { profiles: AnalysisReport['profilesClaimed'] }) {
  const claimed = profiles.filter((p) => p.claimed).length
  return (
    <div className="bg-gray-50 rounded-2xl border border-gray-100 p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-gray-900 font-bold text-sm">Profile Coverage</h3>
        <span className="text-gray-400 text-xs font-medium">
          {claimed}/{profiles.length} claimed
        </span>
      </div>
      <div className="space-y-2.5">
        {profiles.map((p) => (
          <div key={p.name} className="flex items-center justify-between">
            <span className="text-gray-600 text-sm">{p.name}</span>
            {p.claimed ? (
              <span className="flex items-center gap-1 text-emerald-600 text-xs font-medium">
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
                Claimed
              </span>
            ) : (
              <span className="flex items-center gap-1 text-gray-400 text-xs font-medium">
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z" />
                </svg>
                Missing
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

function UrgencyBadge({ urgency }: { urgency: ActionItem['urgency'] }) {
  const config = {
    Immediate: 'bg-red-50 text-red-700 border-red-100',
    'This Month': 'bg-amber-50 text-amber-700 border-amber-100',
    Ongoing: 'bg-blue-50 text-blue-700 border-blue-100',
  }
  return (
    <span className={`inline-flex items-center text-[11px] font-semibold px-2 py-0.5 rounded border ${config[urgency]}`}>
      {urgency}
    </span>
  )
}

/* ─── Scanning animation ─── */
function ScanningState({ query }: { query: string }) {
  const [phase, setPhase] = useState(0)

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 800),
      setTimeout(() => setPhase(2), 1800),
      setTimeout(() => setPhase(3), 2400),
    ]
    return () => timers.forEach(clearTimeout)
  }, [])

  const phases = [
    'Scanning Google results...',
    'Analyzing sentiment...',
    'Checking profile coverage...',
    'Generating recommendations...',
  ]

  return (
    <div className="py-16 text-center">
      <div className="relative w-20 h-20 mx-auto mb-6">
        <div className="absolute inset-0 rounded-full border-4 border-gray-100" />
        <div className="absolute inset-0 rounded-full border-4 border-blue-500 border-t-transparent animate-spin" />
        <div className="absolute inset-3 rounded-full border-4 border-blue-300 border-b-transparent animate-spin" style={{ animationDirection: 'reverse', animationDuration: '1.5s' }} />
        <div className="absolute inset-0 flex items-center justify-center">
          <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
          </svg>
        </div>
      </div>
      <p className="text-gray-900 font-bold text-lg mb-4">
        Scanning Google for &ldquo;{query}&rdquo;
      </p>
      <div className="space-y-2 text-sm max-w-xs mx-auto">
        {phases.map((text, i) => (
          <div
            key={text}
            className={`flex items-center gap-2.5 justify-center transition-all duration-500 ${
              i <= phase ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
            }`}
          >
            {i < phase ? (
              <svg className="w-4 h-4 text-emerald-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
            ) : i === phase ? (
              <div className="w-4 h-4 flex-shrink-0 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
              </div>
            ) : (
              <div className="w-4 h-4 flex-shrink-0" />
            )}
            <span className={i <= phase ? 'text-gray-700' : 'text-gray-300'}>{text}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

/* ─── Staggered Section Wrapper ─── */
function RevealSection({ children, delay }: { children: React.ReactNode; delay: number }) {
  const [visible, setVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), delay)
    return () => clearTimeout(timer)
  }, [delay])

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`}
    >
      {children}
    </div>
  )
}

/* ─── Email Capture ─── */
function EmailCapture() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email.trim()) return
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="bg-gray-950 rounded-2xl p-8 text-center">
        <div className="w-12 h-12 rounded-full bg-emerald-500/10 flex items-center justify-center mx-auto mb-4">
          <svg className="w-6 h-6 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
          </svg>
        </div>
        <h3 className="text-white font-bold text-lg mb-2">Report Requested</h3>
        <p className="text-gray-400 text-sm leading-relaxed max-w-md mx-auto">
          We&apos;ll send your detailed analysis within 24 hours to <span className="text-white font-medium">{email}</span>. Check your inbox (and spam folder) for your full reputation report.
        </p>
      </div>
    )
  }

  return (
    <div className="bg-gray-950 rounded-2xl p-8">
      <div className="text-center mb-6">
        <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center mx-auto mb-3">
          <svg className="w-5 h-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
          </svg>
        </div>
        <h3 className="text-white font-bold text-lg mb-1">Get Your Full Report</h3>
        <p className="text-gray-400 text-sm max-w-md mx-auto">
          This preview covers the basics. The full report includes deep-link analysis, competitor benchmarking, suppression feasibility scores, and a custom action plan.
        </p>
      </div>
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@company.com"
          required
          className="flex-1 px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500/30 transition-colors"
        />
        <button
          type="submit"
          className="hero-cta-shimmer inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-xl font-bold text-sm hover:bg-blue-500 transition-colors shadow-lg shadow-blue-600/25 flex-shrink-0"
        >
          Send Report
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
          </svg>
        </button>
      </form>
      <p className="text-center text-gray-600 text-xs mt-3">No spam. Unsubscribe anytime.</p>
    </div>
  )
}

/* ─── Main component ─── */
export default function ReputationAnalyzer() {
  const [query, setQuery] = useState('')
  const [scanning, setScanning] = useState(false)
  const [report, setReport] = useState<AnalysisReport | null>(null)
  const [gaugeAnimated, setGaugeAnimated] = useState(false)

  const handleAnalyze = useCallback(() => {
    if (!query.trim() || scanning) return
    setReport(null)
    setGaugeAnimated(false)
    setScanning(true)

    setTimeout(() => {
      const mockReport = generateMockReport(query)
      setReport(mockReport)
      setScanning(false)
      // Trigger gauge animation after report renders
      setTimeout(() => setGaugeAnimated(true), 100)
    }, 3200)
  }, [query, scanning])

  const negativeCount = report?.results.filter((r) => r.sentiment === 'negative').length ?? 0
  const positiveCount = report?.results.filter((r) => r.sentiment === 'positive').length ?? 0
  const neutralCount = report?.results.filter((r) => r.sentiment === 'neutral').length ?? 0

  return (
    <div>
      {/* Search Input */}
      <div className="max-w-2xl mx-auto mb-12">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
            Instant Reputation Scan
          </h2>
          <p className="text-gray-500 text-sm max-w-lg mx-auto">
            Enter your name, brand, or business to see what Google&apos;s first page looks
            like — and where you&apos;re vulnerable.
          </p>
        </div>

        <div className="flex gap-3">
          <div className="relative flex-1">
            <svg
              className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleAnalyze()}
              placeholder="e.g. John Smith, Acme Corp, Dr. Jane Doe"
              disabled={scanning}
              className="w-full pl-12 pr-4 py-4 rounded-xl border border-gray-200 bg-white text-gray-900 text-base placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-400 transition-colors disabled:opacity-50"
            />
          </div>
          <button
            onClick={handleAnalyze}
            disabled={!query.trim() || scanning}
            className="hero-cta-shimmer inline-flex items-center gap-2 bg-blue-600 text-white px-7 py-4 rounded-xl font-bold hover:bg-blue-500 transition-colors shadow-lg shadow-blue-600/20 text-base disabled:opacity-50 disabled:cursor-not-allowed flex-shrink-0"
          >
            Analyze
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </button>
        </div>

        <p className="text-center text-gray-400 text-xs mt-3">
          100% free. No signup required. Results are confidential.
        </p>
      </div>

      {/* Scanning State */}
      {scanning && <ScanningState query={query} />}

      {/* Results */}
      {report && !scanning && (
        <div className="space-y-8">
          {/* Score + Summary Row */}
          <RevealSection delay={0}>
            <div className="grid md:grid-cols-3 gap-6">
              {/* Score Gauge + Category Breakdown */}
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
                <ScoreGauge score={report.overallScore} animated={gaugeAnimated} />

                {/* Category mini-scores */}
                <div className="mt-6 pt-6 border-t border-gray-100 space-y-3.5">
                  <CategoryScoreBar
                    label="Search Presence"
                    score={report.categoryScores.searchPresence}
                    delay={400}
                    icon={
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                      </svg>
                    }
                  />
                  <CategoryScoreBar
                    label="Sentiment Score"
                    score={report.categoryScores.sentimentScore}
                    delay={550}
                    icon={
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z" />
                      </svg>
                    }
                  />
                  <CategoryScoreBar
                    label="Profile Coverage"
                    score={report.categoryScores.profileCoverage}
                    delay={700}
                    icon={
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                      </svg>
                    }
                  />
                  <CategoryScoreBar
                    label="Content Control"
                    score={report.categoryScores.contentControl}
                    delay={850}
                    icon={
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
                      </svg>
                    }
                  />
                </div>
              </div>

              {/* Quick Stats */}
              <div className="md:col-span-2 bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
                <div className="flex items-start justify-between mb-1">
                  <h3 className="text-gray-900 font-bold text-lg">
                    Reputation Snapshot for &ldquo;{report.query}&rdquo;
                  </h3>
                  <span className="text-[11px] font-medium text-gray-400 bg-gray-50 px-2 py-1 rounded-md flex-shrink-0 ml-2">
                    {report.scenarioType}
                  </span>
                </div>
                <p className="text-gray-400 text-sm mb-6">
                  Based on simulated analysis of Google&apos;s first page results
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
                  <div className="bg-gray-50 rounded-xl p-4 text-center">
                    <p className="text-2xl font-bold text-gray-900">{report.results.length}</p>
                    <p className="text-gray-500 text-xs mt-0.5">Results</p>
                  </div>
                  <div className="bg-emerald-50 rounded-xl p-4 text-center">
                    <p className="text-2xl font-bold text-emerald-600">{positiveCount}</p>
                    <p className="text-gray-500 text-xs mt-0.5">Positive</p>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-4 text-center">
                    <p className="text-2xl font-bold text-gray-500">{neutralCount}</p>
                    <p className="text-gray-500 text-xs mt-0.5">Neutral</p>
                  </div>
                  <div className="bg-red-50 rounded-xl p-4 text-center">
                    <p className="text-2xl font-bold text-red-600">{negativeCount}</p>
                    <p className="text-gray-500 text-xs mt-0.5">Negative</p>
                  </div>
                </div>

                {report.overallScore < 7 ? (
                  <div className="bg-amber-50 border border-amber-100 rounded-xl p-4 flex items-start gap-3">
                    <svg className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
                    </svg>
                    <div>
                      <p className="text-amber-900 font-semibold text-sm">Action Recommended</p>
                      <p className="text-amber-800 text-sm mt-0.5">
                        Negative or risky content was found on Google&apos;s first page. This is what your prospects, patients, or clients see first when they search your name.
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="bg-emerald-50 border border-emerald-100 rounded-xl p-4 flex items-start gap-3">
                    <svg className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                    <div>
                      <p className="text-emerald-800 font-semibold text-sm">Looking Good</p>
                      <p className="text-emerald-700 text-xs mt-0.5">
                        Your page 1 results are mostly positive. Continue monitoring and building authority to maintain this position.
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </RevealSection>

          {/* Search Results + Sidebar */}
          <RevealSection delay={200}>
            <div className="grid lg:grid-cols-3 gap-6">
              {/* Simulated Google Results */}
              <div className="lg:col-span-2 bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
                <div className="flex items-center gap-3 mb-6">
                  <h3 className="text-gray-900 font-bold text-lg">Google Page 1 Preview</h3>
                  <span className="text-gray-400 text-xs bg-gray-50 px-2 py-1 rounded-md font-medium">
                    Simulated
                  </span>
                </div>
                <div className="divide-y divide-gray-100">
                  {report.results.map((result, i) => (
                    <SearchResultCard key={i} result={result} position={i + 1} />
                  ))}
                </div>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Profile Coverage */}
                <ProfileStatus profiles={report.profilesClaimed} />

                {/* Risks */}
                <div className="bg-red-50/50 rounded-2xl border border-red-100/60 p-6">
                  <h3 className="text-gray-900 font-bold text-sm mb-4 flex items-center gap-2">
                    <svg className="w-4 h-4 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
                    </svg>
                    Risks Identified
                  </h3>
                  <ul className="space-y-3">
                    {report.risks.map((risk) => (
                      <li key={risk} className="flex items-start gap-2 text-sm text-gray-700">
                        <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-1.5 flex-shrink-0" />
                        {risk}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Opportunities */}
                <div className="bg-emerald-50/50 rounded-2xl border border-emerald-100/60 p-6">
                  <h3 className="text-gray-900 font-bold text-sm mb-4 flex items-center gap-2">
                    <svg className="w-4 h-4 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
                    </svg>
                    Opportunities
                  </h3>
                  <ul className="space-y-3">
                    {report.opportunities.map((opp) => (
                      <li key={opp} className="flex items-start gap-2 text-sm text-gray-700">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5 flex-shrink-0" />
                        {opp}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </RevealSection>

          {/* Action Priority Section */}
          <RevealSection delay={400}>
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 0 1 0 3.75H5.625a1.875 1.875 0 0 1 0-3.75Z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-gray-900 font-bold text-lg">Recommended Action Plan</h3>
                  <p className="text-gray-400 text-xs">Prioritized steps to improve your reputation score</p>
                </div>
              </div>
              <div className="grid sm:grid-cols-3 gap-4">
                {report.actions.map((action, i) => (
                  <div
                    key={action.title}
                    className="relative bg-gray-50 rounded-xl p-5 border border-gray-100"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-bold text-gray-300 uppercase tracking-wider">
                        Step {i + 1}
                      </span>
                      <UrgencyBadge urgency={action.urgency} />
                    </div>
                    <h4 className="text-gray-900 font-bold text-sm mb-2">{action.title}</h4>
                    <p className="text-gray-500 text-xs leading-relaxed">{action.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </RevealSection>

          {/* Email Capture */}
          <RevealSection delay={600}>
            <EmailCapture />
          </RevealSection>

          {/* CTA Card */}
          <RevealSection delay={800}>
            <div className="bg-gray-950 rounded-2xl p-8 text-center max-w-2xl mx-auto">
              <h3 className="text-white font-bold text-xl mb-2">
                Want the Full Report?
              </h3>
              <p className="text-gray-400 text-sm mb-6 leading-relaxed max-w-lg mx-auto">
                This is a preview. Our team manually audits every result, analyzes deeper threats, and delivers a custom action plan with suppression timelines and cost estimates.
              </p>
              <a
                href="tel:504-233-4365"
                className="hero-cta-shimmer inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-blue-500 transition-colors shadow-lg shadow-blue-600/25 text-base"
              >
                Call 504.233.4365
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              </a>
              <p className="text-gray-500 text-xs mt-4">Free consultation. No obligation. 24-hour turnaround.</p>
            </div>
          </RevealSection>
        </div>
      )}
    </div>
  )
}
