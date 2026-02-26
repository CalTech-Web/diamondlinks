import { NextRequest, NextResponse } from 'next/server'
import Sentiment from 'sentiment'
import type { SearchResult, ActionItem, OrmReport } from '@/types/orm'

/* ═══════════════════════════════════════════════════════
   Sentiment Classification — AFINN-165 lexicon + domain rules
   ═══════════════════════════════════════════════════════ */

const analyzer = new Sentiment()

// ORM-specific terms the AFINN lexicon doesn't cover well
const ORM_EXTRAS: Record<string, number> = {
  'scam': -4, 'scammer': -4, 'ripoff': -4, 'mugshot': -4,
  'indictment': -4, 'convicted': -4, 'guilty': -3, 'pleaded': -3,
  'tampering': -3, 'felony': -4, 'misdemeanor': -3, 'probation': -2,
  'sentenced': -3, 'allegation': -3, 'lawsuit': -2, 'sued': -3,
  'fired': -2, 'terminated': -2, 'dishonest': -3,
  'ceo': 2, 'founder': 2, 'keynote': 2, 'philanthrop': 3,
  'thought leader': 3, 'top rated': 3, 'featured': 2, 'honored': 3,
}

// Domains that are inherently negative/positive regardless of content
const NEGATIVE_DOMAINS = [
  'ripoffreport.com', 'complaintsboard.com', 'pissedconsumer.com',
  'scamadviser.com', 'courtlistener.com', 'unicourt.com',
  'mugshots.com', 'arrests.org', 'bustedmugshots.com',
  'cheaterland.com', 'scam.com', 'complaints.com',
]

const POSITIVE_DOMAINS = [
  'linkedin.com', 'crunchbase.com', 'medium.com',
  'speakerhub.com', 'about.me', 'github.com', 'ted.com',
]

// News/authority sites — sentiment determined entirely by content
const NEUTRAL_AUTHORITY_DOMAINS = [
  'forbes.com', 'inc.com', 'entrepreneur.com', 'businessinsider.com',
  'nytimes.com', 'wsj.com', 'bbc.com', 'reuters.com', 'apnews.com',
]

function classifySentiment(url: string, title: string, snippet: string): 'positive' | 'neutral' | 'negative' {
  const domain = url.toLowerCase()

  // Hard negative domains — always negative
  if (NEGATIVE_DOMAINS.some(d => domain.includes(d))) return 'negative'

  // Analyze combined text with AFINN-165 + ORM extras
  const text = `${title} ${snippet}`
  const result = analyzer.analyze(text, { extras: ORM_EXTRAS })

  // Authority/news domains — let the content score decide fully
  if (NEUTRAL_AUTHORITY_DOMAINS.some(d => domain.includes(d))) {
    if (result.comparative <= -0.15) return 'negative'
    if (result.comparative >= 0.15) return 'positive'
    // Tie-break: check if negative words dominate
    if (result.negative.length >= 3 && result.positive.length <= 1) return 'negative'
    if (result.positive.length >= 3 && result.negative.length <= 1) return 'positive'
    return 'neutral'
  }

  // Hard positive domains — but content can override
  if (POSITIVE_DOMAINS.some(d => domain.includes(d))) {
    if (result.comparative <= -0.25) return 'negative'
    return 'positive'
  }

  // General content — use AFINN comparative score
  // comparative = score / number of tokens, normalized for text length
  if (result.comparative <= -0.15) return 'negative'
  if (result.comparative >= 0.1) return 'positive'

  // Near-zero: lean on word counts as a tiebreaker
  if (result.negative.length >= 2 && result.positive.length === 0) return 'negative'
  if (result.positive.length >= 2 && result.negative.length === 0) return 'positive'

  return 'neutral'
}

/* ═══════════════════════════════════════════════════════
   Profile Detection
   ═══════════════════════════════════════════════════════ */

const PROFILE_PLATFORMS = [
  { name: 'LinkedIn', domain: 'linkedin.com' },
  { name: 'X (Twitter)', domains: ['twitter.com', 'x.com'] },
  { name: 'Facebook', domain: 'facebook.com' },
  { name: 'Instagram', domain: 'instagram.com' },
  { name: 'YouTube', domain: 'youtube.com' },
  { name: 'GitHub', domain: 'github.com' },
  { name: 'Medium', domain: 'medium.com' },
  { name: 'Crunchbase', domain: 'crunchbase.com' },
  { name: 'Google Business', domain: 'google.com/maps' },
  { name: 'Yelp', domain: 'yelp.com' },
]

function detectProfiles(results: SearchResult[]): { name: string; claimed: boolean }[] {
  const urls = results.map(r => r.url.toLowerCase())
  return PROFILE_PLATFORMS.map(platform => {
    const domains = 'domains' in platform
      ? (platform as { domains: string[] }).domains
      : [(platform as { domain: string }).domain]
    return {
      name: platform.name,
      claimed: urls.some(url => domains.some(d => url.includes(d))),
    }
  })
}

/* ═══════════════════════════════════════════════════════
   Score Calculation
   ═══════════════════════════════════════════════════════ */

function calculateScores(results: SearchResult[], profiles: { name: string; claimed: boolean }[]) {
  const total = results.length || 1
  const posCount = results.filter(r => r.sentiment === 'positive').length
  const negCount = results.filter(r => r.sentiment === 'negative').length
  const neutCount = results.filter(r => r.sentiment === 'neutral').length
  const claimedCount = profiles.filter(p => p.claimed).length
  const totalProfiles = profiles.length || 1

  const searchPresence = Math.max(1, Math.min(10, Math.round(
    (total / 10) * 6 + (posCount / total) * 4
  )))

  const sentimentScore = Math.max(1, Math.min(10, Math.round(
    ((posCount * 2 + neutCount) / (total * 2)) * 10 - negCount * 1.5
  )))

  const profileCoverage = Math.max(1, Math.min(10, Math.round(
    (claimedCount / totalProfiles) * 10
  )))

  const contentControl = Math.max(1, Math.min(10, Math.round(
    (posCount / total) * 8 + ((total - negCount) / total) * 2 - negCount * 0.8
  )))

  const overall = Math.max(1, Math.min(10, Math.round(
    searchPresence * 0.2 + sentimentScore * 0.3 + profileCoverage * 0.2 + contentControl * 0.3
  )))

  return { overall, categories: { searchPresence, sentimentScore, profileCoverage, contentControl } }
}

/* ═══════════════════════════════════════════════════════
   "After" Projection — what DiamondLinks would build
   ═══════════════════════════════════════════════════════ */

function generateAfterResults(query: string, currentResults: SearchResult[]): SearchResult[] {
  const name = query.trim()
  const slug = name.toLowerCase().replace(/[^a-z0-9]+/g, '-')

  const replacements: SearchResult[] = [
    {
      title: `${name} — Official Website`,
      url: `https://www.${slug}.com`,
      displayUrl: `${slug}.com`,
      snippet: `Welcome to the official website of ${name}. Learn about their background, achievements, mission, and how to get in touch.`,
      sentiment: 'positive',
    },
    {
      title: `${name} | LinkedIn`,
      url: `https://www.linkedin.com/in/${slug}`,
      displayUrl: 'linkedin.com',
      snippet: `${name} — Fully optimized LinkedIn profile with 500+ connections, published articles, and thought leadership content.`,
      sentiment: 'positive',
    },
    {
      title: `${name} | Forbes Councils`,
      url: `https://www.forbes.com/councils/members/${slug}`,
      displayUrl: 'forbes.com',
      snippet: `${name} is a Forbes Council contributor sharing expert insights on industry trends, leadership, and business growth.`,
      sentiment: 'positive',
    },
    {
      title: `${name} (@${slug}) | X`,
      url: `https://x.com/${slug}`,
      displayUrl: 'x.com',
      snippet: `Follow ${name} for industry insights and professional updates. Active thought leader with an engaged community.`,
      sentiment: 'positive',
    },
    {
      title: `About ${name} | Crunchbase`,
      url: `https://www.crunchbase.com/person/${slug}`,
      displayUrl: 'crunchbase.com',
      snippet: `${name} — Professional profile with verified career history, education, board positions, and business affiliations.`,
      sentiment: 'positive',
    },
    {
      title: `${name} — Medium`,
      url: `https://medium.com/@${slug}`,
      displayUrl: 'medium.com',
      snippet: `Read ${name}'s published articles covering industry insights, leadership strategies, and professional development.`,
      sentiment: 'positive',
    },
    {
      title: `${name} Featured in Inc. Magazine`,
      url: `https://www.inc.com/author/${slug}`,
      displayUrl: 'inc.com',
      snippet: `${name} has been featured in Inc. Magazine for contributions to business growth, innovation, and entrepreneurial leadership.`,
      sentiment: 'positive',
    },
    {
      title: `${name} - YouTube`,
      url: `https://www.youtube.com/@${slug}`,
      displayUrl: 'youtube.com',
      snippet: `Watch ${name}'s expert video content covering industry insights, presentations, and professional development.`,
      sentiment: 'positive',
    },
  ]

  const afterResults: SearchResult[] = []
  let ri = 0
  const usedDisplayUrls = new Set<string>()

  for (const result of currentResults) {
    if (result.sentiment === 'negative') {
      // Replace with next available positive property
      while (ri < replacements.length) {
        const rep = replacements[ri]
        ri++
        if (!usedDisplayUrls.has(rep.displayUrl) &&
            !afterResults.some(r => r.displayUrl === rep.displayUrl) &&
            !currentResults.some(r => r.sentiment !== 'negative' && r.displayUrl === rep.displayUrl)) {
          afterResults.push(rep)
          usedDisplayUrls.add(rep.displayUrl)
          break
        }
      }
    } else {
      // Upgrade neutral results to positive — DiamondLinks optimizes existing content
      afterResults.push({ ...result, sentiment: result.sentiment === 'neutral' ? 'positive' : result.sentiment })
      usedDisplayUrls.add(result.displayUrl)
    }
  }

  // If we have unfilled slots, add more positive content
  while (afterResults.length < currentResults.length && ri < replacements.length) {
    const rep = replacements[ri]
    ri++
    if (!usedDisplayUrls.has(rep.displayUrl)) {
      afterResults.push(rep)
      usedDisplayUrls.add(rep.displayUrl)
    }
  }

  // Re-sort: positive first, then neutral
  const positives = afterResults.filter(r => r.sentiment === 'positive')
  const neutrals = afterResults.filter(r => r.sentiment === 'neutral')
  return [...positives, ...neutrals].slice(0, currentResults.length)
}

/* ═══════════════════════════════════════════════════════
   Insights Generation
   ═══════════════════════════════════════════════════════ */

function generateRisks(query: string, results: SearchResult[], profiles: { name: string; claimed: boolean }[]): string[] {
  const risks: string[] = []
  const negatives = results.filter(r => r.sentiment === 'negative')
  const unclaimed = profiles.filter(p => !p.claimed).map(p => p.name)
  const posCount = results.filter(r => r.sentiment === 'positive').length

  if (negatives.length > 0) {
    risks.push(`${negatives.length} negative result${negatives.length > 1 ? 's' : ''} on Google page 1 for "${query}"`)
    for (const neg of negatives.slice(0, 2)) {
      try {
        const domain = new URL(neg.url).hostname.replace('www.', '')
        risks.push(`Damaging content on ${domain} visible to anyone searching your name`)
      } catch {
        risks.push(`Negative content visible in search results for "${query}"`)
      }
    }
  }

  if (unclaimed.length > 0) {
    risks.push(`${unclaimed.slice(0, 3).join(', ')} profile${unclaimed.length > 1 ? 's' : ''} unclaimed — vulnerable to impersonation`)
  }

  if (posCount < 4) {
    risks.push('Insufficient positive content to dominate page 1 results')
  }

  if (!results.some(r => r.url.includes('linkedin.com'))) {
    risks.push('No LinkedIn profile ranking — missing key professional signal')
  }

  return risks.slice(0, 5)
}

function generateOpportunities(query: string, results: SearchResult[], profiles: { name: string; claimed: boolean }[]): string[] {
  const opportunities: string[] = []
  const negatives = results.filter(r => r.sentiment === 'negative')
  const unclaimed = profiles.filter(p => !p.claimed).map(p => p.name)

  if (negatives.length > 0) {
    opportunities.push(`Suppress ${negatives.length} negative result${negatives.length > 1 ? 's' : ''} by building authoritative positive content`)
  }

  if (unclaimed.length > 0) {
    opportunities.push(`Claim and optimize ${unclaimed.slice(0, 3).join(', ')} to control your search results`)
  }

  opportunities.push(`Build a content strategy to own 8+ of 10 page 1 results for "${query}"`)

  if (!results.some(r => r.url.includes('medium.com'))) {
    opportunities.push('Publish thought leadership on Medium and industry publications')
  }

  if (!results.some(r => r.url.includes('youtube.com'))) {
    opportunities.push('Create YouTube presence for video-based search authority')
  }

  opportunities.push('Set up ongoing monitoring to catch new threats within 24 hours')

  return opportunities.slice(0, 5)
}

function generateActions(query: string, results: SearchResult[], profiles: { name: string; claimed: boolean }[]): ActionItem[] {
  const actions: ActionItem[] = []
  const negatives = results.filter(r => r.sentiment === 'negative')
  const unclaimed = profiles.filter(p => !p.claimed)

  if (negatives.length > 0) {
    actions.push({
      title: 'Suppress Negative Content',
      description: `Create and optimize ${Math.max(5, negatives.length * 3)}+ authoritative web properties to push ${negatives.length} negative result${negatives.length > 1 ? 's' : ''} off page 1`,
      urgency: 'Immediate',
    })
  }

  if (unclaimed.length > 0) {
    actions.push({
      title: 'Claim Missing Profiles',
      description: `Register and optimize ${unclaimed.map(p => p.name).slice(0, 3).join(', ')}${unclaimed.length > 3 ? ` and ${unclaimed.length - 3} more` : ''} to own the narrative`,
      urgency: 'Immediate',
    })
  }

  actions.push({
    title: 'Launch Content Campaign',
    description: `Publish 2-3 articles per month targeting "${query}" to build positive search authority`,
    urgency: 'This Month',
  })

  actions.push({
    title: 'Monitor & Protect',
    description: 'Set up 24/7 brand monitoring with instant alerts for new mentions, reviews, and result changes',
    urgency: 'Ongoing',
  })

  return actions.slice(0, 3)
}

/* ═══════════════════════════════════════════════════════
   Mock Fallback (when no Google API key)
   ═══════════════════════════════════════════════════════ */

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

function generateMockResults(query: string): SearchResult[] {
  const name = query.trim()
  const slug = name.toLowerCase().replace(/[^a-z0-9]+/g, '-')
  const hash = hashString(name.toLowerCase())
  const rand = seededRandom(hash)

  const positivePool: SearchResult[] = [
    { title: `${name} - LinkedIn`, url: `https://www.linkedin.com/in/${slug}`, displayUrl: 'linkedin.com', snippet: `View ${name}'s professional profile on LinkedIn. 500+ connections, published articles, and industry recommendations.`, sentiment: 'positive' },
    { title: `${name} (@${slug}) | X`, url: `https://x.com/${slug}`, displayUrl: 'x.com', snippet: `Follow ${name} for industry insights and professional updates. Active thought leader with engaged community.`, sentiment: 'positive' },
    { title: `${name} - Official Website`, url: `https://www.${slug}.com`, displayUrl: `${slug}.com`, snippet: `Welcome to ${name}'s official website. Learn about their background, expertise, and professional accomplishments.`, sentiment: 'positive' },
    { title: `About ${name} | Crunchbase`, url: `https://www.crunchbase.com/person/${slug}`, displayUrl: 'crunchbase.com', snippet: `${name} — Professional profile with career history, education, and business affiliations.`, sentiment: 'positive' },
    { title: `${name} - Medium`, url: `https://medium.com/@${slug}`, displayUrl: 'medium.com', snippet: `Read articles by ${name} covering industry insights, leadership, and professional development.`, sentiment: 'positive' },
  ]

  const neutralPool: SearchResult[] = [
    { title: `${name} | Facebook`, url: `https://www.facebook.com/${slug}`, displayUrl: 'facebook.com', snippet: `${name} is on Facebook. Join Facebook to connect with ${name} and others you may know.`, sentiment: 'neutral' },
    { title: `People Named ${name} | Whitepages`, url: `https://www.whitepages.com/name/${slug}`, displayUrl: 'whitepages.com', snippet: `Find ${name}'s phone number, address, and public records. Multiple results found in the United States.`, sentiment: 'neutral' },
    { title: `${name} - Instagram`, url: `https://www.instagram.com/${slug}`, displayUrl: 'instagram.com', snippet: `See photos and videos from ${name} (@${slug}). Personal and professional moments.`, sentiment: 'neutral' },
    { title: `${name} | ZoomInfo`, url: `https://www.zoominfo.com/p/${slug}`, displayUrl: 'zoominfo.com', snippet: `View ${name}'s business profile including company information, job history, and contact details.`, sentiment: 'neutral' },
    { title: `${name} - Wikipedia`, url: `https://en.wikipedia.org/wiki/${slug}`, displayUrl: 'wikipedia.org', snippet: `${name} may refer to several people. This disambiguation page lists individuals with similar names.`, sentiment: 'neutral' },
  ]

  const negativePool: SearchResult[] = [
    { title: `${name} Complaints - Ripoff Report`, url: `https://www.ripoffreport.com/${slug}`, displayUrl: 'ripoffreport.com', snippet: `Complaints about ${name}. Reports include allegations of misleading practices and poor service. Multiple reports filed.`, sentiment: 'negative' },
    { title: `Is ${name} Legit? - Reddit Discussion`, url: `https://www.reddit.com/r/scams/comments/${slug}`, displayUrl: 'reddit.com', snippet: `Has anyone dealt with ${name}? Multiple people confirming negative experiences. Thread has 50+ comments with warnings.`, sentiment: 'negative' },
    { title: `${name} - BBB Complaints`, url: `https://www.bbb.org/us/complaint/${slug}`, displayUrl: 'bbb.org', snippet: `${name} has received complaints in the last 12 months. Common issues include service quality and billing disputes.`, sentiment: 'negative' },
    { title: `${name} Court Records | CourtListener`, url: `https://www.courtlistener.com/${slug}`, displayUrl: 'courtlistener.com', snippet: `Public court records involving ${name}. Case filed involving breach of contract and fraud allegations. Status: pending.`, sentiment: 'negative' },
  ]

  // Shuffle helper
  const shuffle = <T,>(arr: T[]): T[] => {
    const a = [...arr]
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(rand() * (i + 1))
      ;[a[i], a[j]] = [a[j], a[i]]
    }
    return a
  }

  // 0-3 negatives based on hash
  const negCount = hash % 4
  const negatives = shuffle(negativePool).slice(0, negCount)
  const positives = shuffle(positivePool).slice(0, Math.min(positivePool.length, 10 - negCount - 2))
  const neutrals = shuffle(neutralPool).slice(0, 10 - positives.length - negatives.length)

  // Build realistic ordering — positives first, negatives scattered lower
  const all = [...positives, ...neutrals]
  for (const neg of negatives) {
    const pos = Math.min(Math.floor(rand() * (all.length - 2)) + 3, all.length)
    all.splice(pos, 0, neg)
  }

  return all.slice(0, 10)
}

/* ═══════════════════════════════════════════════════════
   API Handler
   ═══════════════════════════════════════════════════════ */

interface BraveSearchResult {
  title: string
  url: string
  description: string
  meta_url?: { hostname?: string }
}

interface BraveSearchResponse {
  web?: { results?: BraveSearchResult[] }
}

function extractDisplayUrl(url: string): string {
  try {
    return new URL(url).hostname.replace('www.', '')
  } catch {
    return url
  }
}

export async function POST(request: NextRequest) {
  try {
    const { query } = await request.json()

    if (!query?.trim()) {
      return NextResponse.json({ error: 'Query is required' }, { status: 400 })
    }

    const braveKey = process.env.BRAVE_SEARCH_API_KEY

    let results: SearchResult[]
    let isLive = false

    if (braveKey) {
      const searchUrl = `https://api.search.brave.com/res/v1/web/search?q=${encodeURIComponent(query.trim())}&count=10`
      const response = await fetch(searchUrl, {
        headers: {
          'X-Subscription-Token': braveKey,
          'Accept': 'application/json',
        },
      })

      if (!response.ok) {
        const errorText = await response.text()
        console.error('Brave Search API error:', response.status, errorText)
        results = generateMockResults(query.trim())
      } else {
        const data: BraveSearchResponse = await response.json()
        const stripHtml = (s: string) => s.replace(/<[^>]*>/g, '').replace(/&quot;/g, '"').replace(/&#x27;/g, "'").replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>')
        results = (data.web?.results || []).map(item => ({
          title: stripHtml(item.title),
          url: item.url,
          displayUrl: item.meta_url?.hostname?.replace('www.', '') || extractDisplayUrl(item.url),
          snippet: stripHtml(item.description || ''),
          sentiment: classifySentiment(item.url, item.title, item.description || ''),
        }))
        isLive = true
      }
    } else {
      results = generateMockResults(query.trim())
    }

    const profiles = detectProfiles(results)
    const { overall, categories } = calculateScores(results, profiles)

    // "After" projection
    const afterResults = generateAfterResults(query.trim(), results)
    const afterProfiles = [...new Set(PROFILE_PLATFORMS.map(p => p.name))].map(name => ({
      name,
      claimed: true,
    }))
    const { overall: afterOverall, categories: afterCategories } = calculateScores(afterResults, afterProfiles)

    const risks = generateRisks(query.trim(), results, profiles)
    const opportunities = generateOpportunities(query.trim(), results, profiles)
    const actions = generateActions(query.trim(), results, profiles)

    const report: OrmReport = {
      query: query.trim(),
      isLive,
      overallScore: overall,
      afterScore: afterOverall,
      categoryScores: categories,
      afterCategoryScores: afterCategories,
      results,
      afterResults,
      risks,
      opportunities,
      actions,
      profilesClaimed: profiles,
    }

    return NextResponse.json(report)
  } catch (error) {
    console.error('ORM scan error:', error)
    return NextResponse.json(
      { error: 'Failed to analyze. Please try again.' },
      { status: 500 }
    )
  }
}
