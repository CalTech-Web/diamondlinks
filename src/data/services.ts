export interface SubPageData {
  slug: string
  category: 'orm' | 'seo' | 'services'
  title: string
  headline: string
  gradientText: string
  description: string
  whatItIs: { title: string; body: string }
  whyItMatters: { title: string; body: string; stats: { value: string; label: string }[] }
  howWeDoIt: { icon: string; title: string; description: string }[]
  faqs: { q: string; a: string }[]
}

export const ormSubPages: SubPageData[] = [
  {
    slug: 'orm-individuals',
    category: 'orm',
    title: 'ORM for Individuals',
    headline: 'Personal Online',
    gradientText: 'Reputation Management',
    description: 'Protect your name. When employers, partners, or clients Google you, make sure they find the real story — not unfair content that defines you.',
    whatItIs: {
      title: 'What Is Personal ORM?',
      body: 'Personal online reputation management is the practice of monitoring, influencing, and improving what appears when someone searches your name. Whether you\'re a professional, executive, or public figure, your search results shape how the world perceives you. We suppress damaging content and build a positive, accurate digital footprint.',
    },
    whyItMatters: {
      title: 'Why Personal ORM Matters',
      body: 'A single negative search result can derail a job offer, a business deal, or a personal relationship. Most people never look past the first page of Google — so controlling those results is essential.',
      stats: [
        { value: '97%', label: 'of employers Google candidates before hiring' },
        { value: '70%', label: 'of recruiters have rejected a candidate based on search results' },
        { value: '85%', label: 'of consumers trust online search as much as a referral' },
      ],
    },
    howWeDoIt: [
      { icon: 'M21 21l-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z', title: 'Full Search Audit', description: 'We analyze every result on page 1 and 2 for your name, identifying risks and opportunities.' },
      { icon: 'M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5', title: 'Content Strategy', description: 'We create authoritative content — profiles, articles, and web properties — optimized to rank for your name.' },
      { icon: 'M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m9.86-2.556a4.5 4.5 0 0 0-1.242-7.244l4.5-4.5a4.5 4.5 0 0 1 6.364 6.364l-1.757 1.757', title: 'Link Building & Authority', description: 'Strategic link building to boost positive content and suppress negative results.' },
      { icon: 'M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z', title: 'Monthly Reporting', description: 'Transparent monthly progress reports showing exactly how your search results have changed.' },
    ],
    faqs: [
      { q: 'How long does personal ORM take?', a: 'Most individuals see meaningful page 1 improvement within 60–120 days. Deeply entrenched content may take 6–12 months.' },
      { q: 'Can you remove content from Google?', a: 'In most cases, content cannot be removed from the source. We suppress it by ranking positive content above it in search results.' },
      { q: 'Is this service confidential?', a: 'Absolutely. All engagements are 100% confidential. We never disclose client names or details.' },
      { q: 'What if new negative content appears?', a: 'Our ongoing monitoring catches new threats early, and the positive content foundation we build provides resilience against future issues.' },
    ],
  },
  {
    slug: 'orm-businesses',
    category: 'orm',
    title: 'ORM for Businesses',
    headline: 'Business Online',
    gradientText: 'Reputation Management',
    description: 'Your company\'s search results are your digital storefront. We ensure prospects find a brand they can trust — not complaints that drive them to competitors.',
    whatItIs: {
      title: 'What Is Business ORM?',
      body: 'Business reputation management focuses on controlling what appears when someone searches your company name, brand, or products. We suppress negative reviews, news articles, and competitor content while amplifying positive stories, testimonials, and your own web properties.',
    },
    whyItMatters: {
      title: 'Why Business ORM Matters',
      body: 'One negative search result can cost your business thousands in lost revenue — and you\'ll never know about the deals that walked away. Proactive ORM ensures your digital presence matches the quality of your actual business.',
      stats: [
        { value: '94%', label: 'of consumers avoid a business after reading negative reviews' },
        { value: '75%', label: 'of clicks go to the first three search results' },
        { value: '$15K+', label: 'average revenue lost per negative page-1 result per year' },
      ],
    },
    howWeDoIt: [
      { icon: 'M21 21l-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z', title: 'Brand Search Audit', description: 'We analyze every result for your company name, key executives, and product names.' },
      { icon: 'M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z', title: 'Multi-Channel Suppression', description: 'Suppress negative content across Google, Bing, review sites, and social platforms.' },
      { icon: 'M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5', title: 'Positive Content Creation', description: 'Build and rank case studies, press mentions, and testimonial pages for your brand.' },
      { icon: 'M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z', title: 'Ongoing Monitoring & Reporting', description: 'Monthly reports and real-time alerts keep you informed of your brand\'s search health.' },
    ],
    faqs: [
      { q: 'How quickly can you start a business ORM campaign?', a: 'We deliver your initial brand search audit within 48 hours and begin active work within the first week.' },
      { q: 'Do you handle review management?', a: 'Yes. We can help optimize your review profiles and develop strategies to encourage positive reviews from satisfied customers.' },
      { q: 'Can you suppress competitor comparison content?', a: 'Absolutely. We build and rank content that outranks competitor-created comparison pages and alternative sites.' },
      { q: 'What size businesses do you work with?', a: 'From solo consultants to national brands. Each engagement is tailored to the specific challenges and goals of your business.' },
    ],
  },
  {
    slug: 'social-media-reviews',
    category: 'orm',
    title: 'Social Media & Review Management',
    headline: 'Social Media &',
    gradientText: 'Review Management',
    description: 'Your social media profiles and online reviews are often the first thing people see. We help you manage and optimize both for maximum trust and credibility.',
    whatItIs: {
      title: 'What Is Social Media & Review Management?',
      body: 'Social media and review management encompasses monitoring, responding to, and optimizing your presence across social platforms and review sites. This includes Google Reviews, Yelp, Facebook, TrustPilot, industry-specific review platforms, and all major social networks.',
    },
    whyItMatters: {
      title: 'Why Review Management Matters',
      body: 'Reviews are modern word-of-mouth. A strong review profile drives new business; a weak one pushes prospects to competitors. Most consumers read multiple reviews before making a decision.',
      stats: [
        { value: '88%', label: 'of consumers trust online reviews as much as personal recommendations' },
        { value: '73%', label: 'only consider reviews from the last month relevant' },
        { value: '4.0★', label: 'minimum rating consumers consider trustworthy' },
      ],
    },
    howWeDoIt: [
      { icon: 'M21 21l-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z', title: 'Review Audit', description: 'We analyze your review presence across all major platforms and identify gaps and risks.' },
      { icon: 'M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z', title: 'Response Strategy', description: 'Professional response templates and strategies for addressing negative reviews appropriately.' },
      { icon: 'M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.563.563 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.563.563 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z', title: 'Review Generation', description: 'Ethical strategies to encourage satisfied customers to share their positive experiences.' },
      { icon: 'M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z', title: 'Monitoring & Alerts', description: 'Real-time monitoring of new reviews and social mentions with instant alerts for negative content.' },
    ],
    faqs: [
      { q: 'Can you delete negative Google reviews?', a: 'Google only removes reviews that violate their policies. We can flag policy-violating reviews and, more importantly, build a strong positive review presence that minimizes the impact of negative outliers.' },
      { q: 'Do you post fake reviews?', a: 'Never. We only use ethical, platform-compliant strategies to encourage genuine positive reviews from real customers.' },
      { q: 'Which platforms do you manage?', a: 'Google, Yelp, Facebook, TrustPilot, BBB, Glassdoor, industry-specific platforms, and all major social networks.' },
      { q: 'How quickly will I see results?', a: 'Review profile improvements can begin within weeks. Significant changes in overall ratings and search visibility typically take 2–3 months.' },
    ],
  },
  {
    slug: 'google-reviews',
    category: 'orm',
    title: 'Google Review Management',
    headline: 'Google Review',
    gradientText: 'Management',
    description: 'Google Reviews directly impact whether prospects contact you. We help you build, manage, and optimize your Google review presence for maximum trust.',
    whatItIs: {
      title: 'What Is Google Review Management?',
      body: 'Google Review management is the process of monitoring, responding to, and improving your Google Business Profile reviews. Since Google Reviews appear prominently in local search results and Maps, they are one of the most visible and influential elements of your online reputation.',
    },
    whyItMatters: {
      title: 'Why Google Reviews Matter',
      body: 'Google Reviews are the first thing most people see when searching for a local business. Your star rating, review count, and the content of recent reviews directly influence whether someone calls you or your competitor.',
      stats: [
        { value: '93%', label: 'of consumers say Google Reviews influence their decisions' },
        { value: '4.1★', label: 'minimum rating consumers trust for local businesses' },
        { value: '63%', label: 'check Google Reviews specifically before visiting a business' },
      ],
    },
    howWeDoIt: [
      { icon: 'M21 21l-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z', title: 'Google Profile Audit', description: 'Full analysis of your Google Business Profile, reviews, and local search visibility.' },
      { icon: 'M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z', title: 'Review Response System', description: 'Professional, timely responses to all reviews — positive and negative — that build trust.' },
      { icon: 'M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.563.563 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.563.563 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z', title: 'Review Growth Strategy', description: 'Ethical, systematic approach to generating more positive Google Reviews from real customers.' },
      { icon: 'M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z', title: 'Negative Review Mitigation', description: 'Flag policy-violating reviews and develop suppression strategies for unfair negative content.' },
    ],
    faqs: [
      { q: 'Can you remove fake or unfair Google Reviews?', a: 'If a review violates Google\'s policies (fake, spam, off-topic, conflict of interest), we can flag it for removal. Google makes the final decision, but we have experience identifying policy violations.' },
      { q: 'How do you help get more positive reviews?', a: 'We implement ethical review generation strategies — timing, follow-up systems, and customer communication templates — that make it easy for satisfied customers to share their experience.' },
      { q: 'Should we respond to negative reviews?', a: 'Yes, always. A thoughtful, professional response to a negative review often matters more than the review itself. We help craft responses that demonstrate accountability and care.' },
      { q: 'How does Google Review count affect local SEO?', a: 'Google considers review quantity, quality, recency, and your responses as ranking signals for local search. A strong review profile directly improves your local search visibility.' },
    ],
  },
  {
    slug: 'cost-of-orm',
    category: 'orm',
    title: 'Cost of Online Reputation Management',
    headline: 'How Much Does',
    gradientText: 'ORM Cost?',
    description: 'Understanding ORM pricing helps you make informed decisions. Here\'s an honest breakdown of what reputation management costs and what drives the investment.',
    whatItIs: {
      title: 'Understanding ORM Pricing',
      body: 'Online reputation management costs vary based on the severity of your situation, the number of negative results to suppress, and the competitiveness of your search landscape. There\'s no one-size-fits-all price because every situation is unique. What we can tell you: investing in ORM almost always costs less than the business you\'re losing to bad search results.',
    },
    whyItMatters: {
      title: 'Why ORM Is Worth the Investment',
      body: 'The cost of not managing your online reputation far exceeds the cost of ORM. Negative search results silently drive away prospects, costing you revenue you never even know you lost.',
      stats: [
        { value: '$15K+', label: 'average annual revenue lost per negative page-1 result' },
        { value: '22%', label: 'of customers won\'t buy from a business with one negative article' },
        { value: '70%', label: 'of employers have rejected candidates based on search results' },
      ],
    },
    howWeDoIt: [
      { icon: 'M21 21l-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z', title: 'Free Analysis First', description: 'We provide a free, no-obligation analysis of your search results before quoting any price.' },
      { icon: 'M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z', title: 'Custom Strategy & Pricing', description: 'Every engagement is priced based on your specific situation, goals, and timeline.' },
      { icon: 'M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z', title: 'No Lock-In Contracts', description: 'We earn your business every month. No long-term contracts required.' },
      { icon: 'M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z', title: 'Transparent Monthly Reporting', description: 'See exactly what your investment is producing each month.' },
    ],
    faqs: [
      { q: 'How much does ORM cost?', a: 'ORM pricing varies based on your situation. We always start with a free analysis to understand your needs before providing a custom quote. There is no one-size-fits-all price.' },
      { q: 'Is there a minimum contract length?', a: 'No. We do not require long-term contracts. However, meaningful results typically take 3–6 months, so we recommend committing to at least that timeline for best results.' },
      { q: 'What determines the price?', a: 'Key factors include the number and severity of negative results, how competitive your search landscape is, how many search terms need management, and your timeline goals.' },
      { q: 'Is ORM worth the investment?', a: 'For most clients, the cost of ORM is a fraction of the revenue lost to negative search results. A single negative page-1 result can cost $15K+ per year in lost business.' },
    ],
  },
  {
    slug: 'orm-tools',
    category: 'orm',
    title: 'ORM Tools & Technology',
    headline: 'ORM Tools &',
    gradientText: 'Technology',
    description: 'Professional-grade tools and technology power our ORM campaigns. Here\'s a look at what drives results behind the scenes.',
    whatItIs: {
      title: 'What ORM Tools Do We Use?',
      body: 'Effective ORM requires a combination of enterprise-grade SEO tools, content management platforms, monitoring software, and link building technology. We use a comprehensive tech stack to monitor your search results, identify threats, deploy content, and measure progress — giving you complete visibility into your campaign.',
    },
    whyItMatters: {
      title: 'Why Professional Tools Matter',
      body: 'DIY reputation management with free tools rarely works for serious issues. Professional ORM tools provide the data, scale, and precision needed to move search results reliably.',
      stats: [
        { value: '24/7', label: 'monitoring across search engines and review platforms' },
        { value: '100+', label: 'data points tracked per campaign monthly' },
        { value: '48hr', label: 'alert response time for new negative content' },
      ],
    },
    howWeDoIt: [
      { icon: 'M21 21l-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z', title: 'Search Monitoring', description: 'Continuous tracking of your search results across Google, Bing, and other engines.' },
      { icon: 'M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0 0 20.25 18V6A2.25 2.25 0 0 0 18 3.75H6A2.25 2.25 0 0 0 3.75 6v12A2.25 2.25 0 0 0 6 20.25Z', title: 'Analytics & Reporting', description: 'Custom dashboards showing ranking changes, content performance, and campaign ROI.' },
      { icon: 'M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z', title: 'Threat Detection', description: 'Real-time alerts when new negative content appears in search results or review platforms.' },
      { icon: 'M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m9.86-2.556a4.5 4.5 0 0 0-1.242-7.244l4.5-4.5a4.5 4.5 0 0 1 6.364 6.364l-1.757 1.757', title: 'Link Building Platform', description: 'Proprietary and enterprise tools for building high-quality backlinks to positive content.' },
    ],
    faqs: [
      { q: 'Can I manage my reputation myself with free tools?', a: 'For minor issues, some free tools help with monitoring. For serious reputation problems, professional tools and expertise are necessary to reliably move search results.' },
      { q: 'What tools do you use?', a: 'We use a combination of enterprise SEO platforms, custom monitoring software, content management systems, and proprietary link building tools. The specific tools depend on your campaign needs.' },
      { q: 'Will I have access to the tools and data?', a: 'You receive comprehensive monthly reports with all relevant data. Our tools operate behind the scenes, but you see every result and metric that matters.' },
      { q: 'How is professional ORM different from DIY?', a: 'Professional ORM brings enterprise-grade tools, years of experience, established content networks, and proven methodologies that DIY approaches simply cannot replicate.' },
    ],
  },
  {
    slug: 'orm-consulting',
    category: 'orm',
    title: 'ORM Consulting',
    headline: 'ORM',
    gradientText: 'Consulting Services',
    description: 'Not ready for a full campaign? Our ORM consulting services provide expert guidance, audit reports, and strategic roadmaps you can execute on your own.',
    whatItIs: {
      title: 'What Is ORM Consulting?',
      body: 'ORM consulting provides expert analysis and strategic guidance without a full-service engagement. We audit your search results, identify threats and opportunities, and deliver a detailed roadmap you can implement internally or with your existing marketing team. Ideal for organizations with in-house resources who need expert direction.',
    },
    whyItMatters: {
      title: 'Why ORM Consulting Matters',
      body: 'Many businesses know they have a reputation problem but don\'t know where to start. A professional ORM consultation provides clarity, prioritization, and a clear path forward.',
      stats: [
        { value: '48hr', label: 'turnaround on initial search audit delivery' },
        { value: '90%', label: 'of consulting clients upgrade to full campaigns' },
        { value: '100%', label: 'of engagements include actionable recommendations' },
      ],
    },
    howWeDoIt: [
      { icon: 'M21 21l-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z', title: 'Comprehensive Search Audit', description: 'Full analysis of your page 1 and page 2 results, identifying every risk and opportunity.' },
      { icon: 'M9 6.75V15m6-6v8.25m.503 3.498 4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 0 0-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0Z', title: 'Strategic Roadmap', description: 'Detailed, prioritized action plan with specific content, link building, and platform strategies.' },
      { icon: 'M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z', title: 'Expert Consultation', description: 'Direct access to our ORM specialists for Q&A, strategy refinement, and ongoing guidance.' },
      { icon: 'M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z', title: 'Progress Benchmarks', description: 'Clear milestones and metrics to track the effectiveness of your ORM efforts.' },
    ],
    faqs: [
      { q: 'What does an ORM consultation include?', a: 'A comprehensive search audit, threat assessment, competitive analysis, content strategy recommendations, and a prioritized action plan you can implement immediately.' },
      { q: 'Can I implement the recommendations myself?', a: 'Yes. Our consulting deliverables are designed to be actionable by your in-house team. However, many clients choose to upgrade to full-service after seeing the scope of work involved.' },
      { q: 'How much does ORM consulting cost?', a: 'Consulting engagements are priced based on scope. Contact us for a free initial conversation to understand your needs before we quote.' },
      { q: 'How is consulting different from full-service ORM?', a: 'Consulting provides the strategy and roadmap. Full-service ORM provides strategy plus execution — we do all the work for you.' },
    ],
  },
]

export const seoSubPages: SubPageData[] = [
  {
    slug: 'link-building',
    category: 'seo',
    title: 'Link Building Services',
    headline: 'Strategic',
    gradientText: 'Link Building',
    description: 'High-quality backlinks are the foundation of search rankings. We build authoritative, relevant links that drive lasting organic growth.',
    whatItIs: {
      title: 'What Is Link Building?',
      body: 'Link building is the process of acquiring hyperlinks from other websites to your own. Search engines use these links as signals of authority and relevance. The more high-quality sites that link to yours, the higher your content ranks. We focus exclusively on white-hat, editorial link building that delivers lasting results.',
    },
    whyItMatters: {
      title: 'Why Link Building Matters',
      body: 'Backlinks remain one of Google\'s top ranking factors. Without a strong link profile, even great content struggles to rank. Strategic link building is the difference between page 5 and page 1.',
      stats: [
        { value: '#1', label: 'ranking factor: pages with more quality backlinks rank higher' },
        { value: '75%', label: 'average organic traffic increase for DiamondLinks clients' },
        { value: '3.8x', label: 'more backlinks on average for page 1 results vs page 2' },
      ],
    },
    howWeDoIt: [
      { icon: 'M21 21l-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z', title: 'Link Profile Audit', description: 'Full analysis of your existing backlink profile, identifying strengths, gaps, and toxic links.' },
      { icon: 'M9 6.75V15m6-6v8.25m.503 3.498 4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 0 0-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0Z', title: 'Outreach & Acquisition', description: 'Manual outreach to relevant, authoritative sites in your industry for editorial link placements.' },
      { icon: 'M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5', title: 'Content-Driven Links', description: 'Create linkable assets — guides, data, tools — that naturally attract backlinks over time.' },
      { icon: 'M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z', title: 'Monthly Reporting', description: 'Detailed reports showing new links acquired, domain authority changes, and ranking improvements.' },
    ],
    faqs: [
      { q: 'What types of links do you build?', a: 'We build white-hat, editorial links from real, authoritative websites in relevant industries. No PBNs, no spam, no shortcuts that risk penalties.' },
      { q: 'How many links will I get per month?', a: 'Link quantity depends on your package and goals. We focus on quality over quantity — a single link from a high-authority site can outperform dozens of low-quality links.' },
      { q: 'How long until I see ranking improvements?', a: 'Most clients see measurable ranking improvements within 60–90 days of consistent link building. Competitive niches may take longer.' },
      { q: 'Do you disavow toxic links?', a: 'Yes. As part of our link audit, we identify and disavow toxic or spammy backlinks that may be harming your search performance.' },
    ],
  },
  {
    slug: 'long-form-content',
    category: 'seo',
    title: 'Long-Form Content & SEO Writing',
    headline: 'Long-Form Content &',
    gradientText: 'SEO Writing',
    description: 'Content is the fuel that powers SEO. We create authoritative, well-researched long-form content that ranks, converts, and builds your topical authority.',
    whatItIs: {
      title: 'What Is Long-Form SEO Content?',
      body: 'Long-form content — typically 1,500 to 5,000+ words — provides comprehensive coverage of a topic. Search engines favor depth and thoroughness, rewarding content that fully answers user queries. Our SEO writing combines keyword research, competitive analysis, and subject matter expertise to create content that ranks and resonates.',
    },
    whyItMatters: {
      title: 'Why Long-Form Content Matters for SEO',
      body: 'Long-form content consistently outperforms short content in search rankings. It earns more backlinks, ranks for more keywords, and keeps visitors on your site longer.',
      stats: [
        { value: '2x', label: 'more organic traffic for long-form vs short-form content' },
        { value: '77%', label: 'more backlinks earned by content over 1,500 words' },
        { value: '3x', label: 'more social shares for comprehensive, in-depth articles' },
      ],
    },
    howWeDoIt: [
      { icon: 'M21 21l-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z', title: 'Keyword & Topic Research', description: 'Data-driven research to identify high-value topics and keywords your audience is searching for.' },
      { icon: 'M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5', title: 'Expert Content Creation', description: 'Well-researched, professionally written content optimized for both search engines and readers.' },
      { icon: 'M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941', title: 'On-Page SEO Optimization', description: 'Technical optimization including headings, internal links, schema markup, and keyword placement.' },
      { icon: 'M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z', title: 'Performance Tracking', description: 'Monitor rankings, traffic, and engagement for every piece of content we create.' },
    ],
    faqs: [
      { q: 'How long should SEO content be?', a: 'Length depends on the topic and competition. Our content typically ranges from 1,500 to 5,000+ words, driven by what the top-ranking content requires to compete effectively.' },
      { q: 'Do you write for specific industries?', a: 'Yes. Our writers research and write for any industry. We combine keyword data with subject matter expertise to create content that is both accurate and optimized.' },
      { q: 'How often should we publish new content?', a: 'Consistency matters more than frequency. We recommend a sustainable publishing cadence — whether that\'s weekly, bi-weekly, or monthly — aligned with your capacity and goals.' },
      { q: 'Can content alone improve my rankings?', a: 'Content is essential but works best combined with link building and technical SEO. We often combine content creation with link building for maximum impact.' },
    ],
  },
  {
    slug: 'social-media-management',
    category: 'seo',
    title: 'Social Media Management',
    headline: 'Social Media',
    gradientText: 'Management',
    description: 'A consistent, professional social media presence supports your SEO, builds brand authority, and keeps you connected with your audience across every platform.',
    whatItIs: {
      title: 'What Is Social Media Management?',
      body: 'Social media management encompasses the creation, scheduling, publishing, and monitoring of content across your social media profiles. For ORM and SEO clients, social profiles are critical because they rank highly in search results for your name and brand. We ensure your social presence is active, professional, and aligned with your reputation goals.',
    },
    whyItMatters: {
      title: 'Why Social Media Matters for Reputation',
      body: 'Social media profiles consistently rank on page 1 of Google for brand and personal name searches. An active, professional social presence is one of the fastest ways to improve what people find.',
      stats: [
        { value: '3–5', label: 'social profiles typically appear on page 1 for brand searches' },
        { value: '71%', label: 'of consumers with positive social media experience recommend the brand' },
        { value: '54%', label: 'of social browsers use social media to research products' },
      ],
    },
    howWeDoIt: [
      { icon: 'M21 21l-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z', title: 'Social Audit', description: 'Full review of your existing social media presence, identifying gaps, risks, and optimization opportunities.' },
      { icon: 'M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5', title: 'Content Calendar', description: 'Strategic content planning and scheduling to maintain consistent, professional posting.' },
      { icon: 'M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z', title: 'Community Management', description: 'Respond to comments, messages, and mentions to maintain active engagement with your audience.' },
      { icon: 'M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z', title: 'Performance Reporting', description: 'Monthly reports on engagement, reach, follower growth, and search ranking impact.' },
    ],
    faqs: [
      { q: 'Which social media platforms do you manage?', a: 'We manage LinkedIn, Facebook, Instagram, X/Twitter, and other platforms based on your industry and goals.' },
      { q: 'How does social media affect my search results?', a: 'Social media profiles rank highly for brand and name searches. An active, optimized social presence directly improves what people see on page 1 of Google.' },
      { q: 'Do you create the content or do we provide it?', a: 'We handle everything — content creation, graphic design, scheduling, and posting. We collaborate with you to ensure messaging aligns with your brand voice.' },
      { q: 'Can social media management be added to an ORM campaign?', a: 'Yes. Social media management is a natural complement to ORM and is often bundled with our reputation management packages.' },
    ],
  },
  {
    slug: 'pay-per-click',
    category: 'seo',
    title: 'Pay-Per-Click (PPC) Advertising',
    headline: 'Pay-Per-Click',
    gradientText: 'Advertising',
    description: 'Complement your organic SEO and ORM strategy with targeted PPC campaigns that put your brand at the top of search results immediately.',
    whatItIs: {
      title: 'What Is PPC Advertising?',
      body: 'Pay-per-click advertising places your brand at the top of search results through paid placements on Google Ads, Bing Ads, and social platforms. For reputation management clients, PPC provides an immediate way to control the top of search results while organic strategies build momentum. You only pay when someone clicks.',
    },
    whyItMatters: {
      title: 'Why PPC Matters for Reputation & SEO',
      body: 'PPC provides instant visibility at the top of search results. For ORM clients, branded PPC campaigns ensure your message appears first — above any negative organic results — while long-term suppression strategies take effect.',
      stats: [
        { value: '65%', label: 'of high-intent searches result in an ad click' },
        { value: '#1', label: 'position — PPC ads appear above all organic results' },
        { value: '200%', label: 'average ROI for well-managed branded PPC campaigns' },
      ],
    },
    howWeDoIt: [
      { icon: 'M21 21l-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z', title: 'Campaign Strategy', description: 'Research-driven campaign design targeting your brand name, service keywords, and competitor terms.' },
      { icon: 'M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z', title: 'Budget Optimization', description: 'Maximize your ad spend with ongoing bid management, A/B testing, and conversion optimization.' },
      { icon: 'M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5', title: 'Landing Pages', description: 'Custom landing pages designed to convert PPC traffic into leads, calls, and consultations.' },
      { icon: 'M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z', title: 'Performance Reporting', description: 'Transparent weekly and monthly reports showing clicks, conversions, cost per lead, and ROI.' },
    ],
    faqs: [
      { q: 'How does PPC help with reputation management?', a: 'Branded PPC campaigns place your chosen message at the very top of search results for your name or brand, above any negative organic results. This provides immediate control while organic ORM works.' },
      { q: 'What platforms do you manage ads on?', a: 'Primarily Google Ads and Bing Ads. We also manage social media advertising on LinkedIn, Facebook, and Instagram when it supports your goals.' },
      { q: 'What budget do I need for PPC?', a: 'Budget depends on your goals, industry, and competition. We work with you to set a budget that delivers meaningful results while maximizing ROI.' },
      { q: 'Can PPC replace organic SEO and ORM?', a: 'PPC complements but doesn\'t replace organic strategies. PPC provides immediate visibility; SEO and ORM build long-term, sustainable results. The best results come from combining both.' },
    ],
  },
]

export const serviceSubPages: SubPageData[] = [
  {
    slug: 'content-strategy',
    category: 'services',
    title: 'Content Strategy & Development',
    headline: 'Content Strategy &',
    gradientText: 'Development',
    description: 'Strategic content plans that drive organic visibility, establish topical authority, and turn your website into a lead-generating engine — powered by people, perfected with AI.',
    whatItIs: {
      title: 'What Is Content Strategy & Development?',
      body: 'Content strategy and development is the process of planning, creating, and managing content that aligns with your business goals and audience needs. We combine human editorial expertise with AI-driven data analysis to identify high-impact topics, map content to the buyer journey, and build topical authority clusters that search engines reward with higher rankings.',
    },
    whyItMatters: {
      title: 'Why Content Strategy Matters',
      body: 'Publishing content without a strategy is like driving without a map. A data-driven content plan ensures every piece you publish serves a purpose — attracting qualified traffic, building authority, and moving prospects closer to conversion.',
      stats: [
        { value: '434%', label: 'more indexed pages for sites with a documented content strategy' },
        { value: '72%', label: 'of marketers say content strategy increased their engagement' },
        { value: '3x', label: 'more leads generated by content marketing vs. outbound' },
      ],
    },
    howWeDoIt: [
      { icon: 'M21 21l-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z', title: 'Content Audit & Gap Analysis', description: 'We analyze your existing content, competitor landscape, and keyword opportunities to identify gaps worth filling.' },
      { icon: 'M9 6.75V15m6-6v8.25m.503 3.498 4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 0 0-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0Z', title: 'Topic Cluster Mapping', description: 'We build pillar-and-cluster content architectures that establish topical authority and boost rankings across entire keyword families.' },
      { icon: 'M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5', title: 'Editorial Calendar & Production', description: 'We create a prioritized publishing roadmap and produce expert-written, SEO-optimized content on a consistent cadence.' },
      { icon: 'M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z', title: 'Performance Measurement', description: 'We track rankings, organic traffic, engagement metrics, and conversions for every content asset to refine strategy over time.' },
    ],
    faqs: [
      { q: 'How is content strategy different from just writing blog posts?', a: 'Blog posts without a strategy are isolated efforts. Content strategy maps every piece to specific keywords, audience segments, and business goals — ensuring each asset contributes to a larger system that compounds over time.' },
      { q: 'How long before content strategy delivers results?', a: 'Most clients see measurable organic traffic improvements within 90–120 days. Topical authority builds over 6–12 months, with compounding returns as your content library grows.' },
      { q: 'Do you use AI to create the content?', a: 'We use AI as a research and optimization tool, but every piece is written and edited by human experts. Our approach is powered by people, perfected with AI — ensuring quality, accuracy, and authentic voice.' },
      { q: 'What industries do you develop content for?', a: 'We develop content strategies for healthcare, legal, finance, SaaS, marketing agencies, education, and more. Our writers research each industry deeply to produce authoritative, accurate content.' },
    ],
  },
  {
    slug: 'seo-and-content-audits',
    category: 'services',
    title: 'SEO & Content Audits',
    headline: 'SEO & Content',
    gradientText: 'Audits',
    description: 'Comprehensive audits that uncover technical issues, content gaps, and optimization opportunities hiding in plain sight — giving you a clear roadmap to higher rankings.',
    whatItIs: {
      title: 'What Are SEO & Content Audits?',
      body: 'An SEO and content audit is a thorough examination of your website\'s technical health, on-page optimization, content quality, and competitive positioning. We combine automated crawl analysis with human expert review to identify the specific issues holding back your search performance and the opportunities your competitors are missing.',
    },
    whyItMatters: {
      title: 'Why SEO & Content Audits Matter',
      body: 'Most websites leave significant organic traffic on the table due to technical errors, thin content, or missed optimization opportunities. An audit reveals exactly where those gaps are and how to fix them.',
      stats: [
        { value: '68%', label: 'of online experiences begin with a search engine' },
        { value: '90%', label: 'of websites have at least one critical SEO issue' },
        { value: '53%', label: 'of organic traffic is lost due to technical SEO problems' },
      ],
    },
    howWeDoIt: [
      { icon: 'M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z', title: 'Technical Crawl Analysis', description: 'We crawl your entire site to identify broken links, redirect chains, duplicate content, indexation issues, and crawl errors.' },
      { icon: 'M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5', title: 'Content Quality Review', description: 'Expert evaluation of every page\'s content depth, keyword targeting, readability, and competitive positioning.' },
      { icon: 'M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941', title: 'Competitive Benchmarking', description: 'We analyze your top competitors\' SEO strategies to identify what they rank for that you don\'t — and how to close the gap.' },
      { icon: 'M9 6.75V15m6-6v8.25m.503 3.498 4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 0 0-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0Z', title: 'Prioritized Action Plan', description: 'A detailed, prioritized roadmap of fixes and opportunities ranked by impact, so your team knows exactly where to start.' },
    ],
    faqs: [
      { q: 'How long does an SEO audit take?', a: 'A comprehensive audit typically takes 5–10 business days depending on site size. We deliver a detailed report with prioritized recommendations you can act on immediately.' },
      { q: 'What will the audit deliverable look like?', a: 'You receive a detailed report covering technical issues, content gaps, keyword opportunities, competitor insights, and a prioritized action plan with estimated impact for each recommendation.' },
      { q: 'Do you fix the issues you find?', a: 'We can. Audit clients often engage us for ongoing SEO services to implement the recommendations. Alternatively, your in-house team can execute the roadmap independently.' },
      { q: 'How often should we run an SEO audit?', a: 'We recommend a comprehensive audit annually, with quarterly check-ins on critical technical metrics. Search engine algorithms evolve constantly, and regular audits keep your site aligned.' },
    ],
  },
  {
    slug: 'premium-backlink-outreach',
    category: 'services',
    title: 'Premium Backlink Outreach',
    headline: 'Premium Backlink',
    gradientText: 'Outreach',
    description: 'High-quality, editorial link acquisition from authoritative publications — built through real relationships, not spam. The links your competitors wish they had.',
    whatItIs: {
      title: 'What Is Premium Backlink Outreach?',
      body: 'Premium backlink outreach is the practice of earning editorial links from high-authority websites through genuine relationship building and compelling content. Unlike mass outreach or link farms, we secure placements on reputable publications, industry journals, and trusted domains that pass meaningful authority to your site. Every link is manually vetted and editorially placed.',
    },
    whyItMatters: {
      title: 'Why Premium Backlinks Matter',
      body: 'Not all backlinks are equal. A single link from an authoritative, relevant publication can outperform hundreds of low-quality links. Premium backlinks are the currency of trust in Google\'s eyes.',
      stats: [
        { value: '91%', label: 'of pages get zero organic traffic — mostly due to weak backlink profiles' },
        { value: '14x', label: 'more ranking power from editorial links vs. directory submissions' },
        { value: '58%', label: 'of SEO professionals say link building is most effective for rankings' },
      ],
    },
    howWeDoIt: [
      { icon: 'M21 21l-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z', title: 'Prospect Research', description: 'We identify authoritative, relevant publications in your industry using AI-enhanced prospecting combined with human vetting.' },
      { icon: 'M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z', title: 'Relationship-Driven Outreach', description: 'Our team builds genuine relationships with editors, journalists, and content managers — no mass email blasts or generic templates.' },
      { icon: 'M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5', title: 'Content Creation & Placement', description: 'We produce high-quality guest articles, expert quotes, and data-driven pieces that publications want to feature.' },
      { icon: 'M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z', title: 'Link Reporting & Attribution', description: 'Transparent monthly reports showing every link acquired, its domain authority, relevance, and impact on your rankings.' },
    ],
    faqs: [
      { q: 'What makes your backlinks "premium"?', a: 'Every link we build is editorially placed on a real, authoritative website with genuine traffic. We never use PBNs, link farms, or paid directory submissions. Each placement is manually vetted for quality and relevance.' },
      { q: 'How many backlinks will I receive per month?', a: 'Quantity depends on your package, but we prioritize quality over volume. A single link from a DA 70+ publication delivers more ranking power than dozens of low-quality links.' },
      { q: 'Are these links safe from Google penalties?', a: 'Yes. Our white-hat approach mirrors how links are naturally earned — through great content placed on real publications. These are the links Google\'s algorithm was designed to reward.' },
      { q: 'How long until I see ranking improvements from new links?', a: 'Most clients see measurable ranking movement within 60–90 days of consistent link acquisition. Competitive keywords may take longer, but the authority compounds over time.' },
    ],
  },
  {
    slug: 'local-search-optimization',
    category: 'services',
    title: 'Local Search Optimization',
    headline: 'Local Search',
    gradientText: 'Optimization',
    description: 'Dominate local search results, optimize your Google Business Profile, and ensure customers in your area find you first — not your competitors.',
    whatItIs: {
      title: 'What Is Local Search Optimization?',
      body: 'Local search optimization is the process of improving your visibility in geographically targeted search results, Google Maps, and the Local Pack. This includes optimizing your Google Business Profile, building consistent local citations, managing reviews, and creating location-specific content. For businesses serving specific areas, local SEO is the fastest path to qualified leads.',
    },
    whyItMatters: {
      title: 'Why Local Search Optimization Matters',
      body: 'When customers search for services "near me" or in your city, appearing in the Local Pack and Maps results is critical. Local searchers have high purchase intent — they are actively looking for a provider right now.',
      stats: [
        { value: '46%', label: 'of all Google searches have local intent' },
        { value: '76%', label: 'of people who search for something nearby visit a business within a day' },
        { value: '28%', label: 'of local searches result in a purchase within 24 hours' },
      ],
    },
    howWeDoIt: [
      { icon: 'M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z', title: 'Google Business Profile Optimization', description: 'Complete optimization of your GBP including categories, attributes, services, photos, posts, and Q&A management.' },
      { icon: 'M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418', title: 'Citation Building & Cleanup', description: 'We build and correct your business listings across 50+ directories to ensure NAP consistency and strengthen local signals.' },
      { icon: 'M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.563.563 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.563.563 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z', title: 'Review Strategy & Management', description: 'Systematic review generation, professional response management, and reputation monitoring across Google and local platforms.' },
      { icon: 'M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z', title: 'Local Ranking Tracking', description: 'Grid-based local rank tracking showing your visibility across your service area, with monthly progress reports.' },
    ],
    faqs: [
      { q: 'How long does it take to rank in the Local Pack?', a: 'Most businesses see Local Pack improvements within 60–90 days. Competitive markets may take longer, but consistent optimization builds momentum that compounds over time.' },
      { q: 'Do you manage Google Business Profile posts?', a: 'Yes. Regular GBP posts signal activity to Google and keep your profile fresh. We create and publish posts as part of our local SEO strategy.' },
      { q: 'Can you help with multiple locations?', a: 'Absolutely. We manage local SEO campaigns for single-location businesses and multi-location enterprises alike, with location-specific strategies for each.' },
      { q: 'How important are reviews for local SEO?', a: 'Reviews are one of the top three ranking factors for the Local Pack. Review quantity, quality, recency, and your responses all influence where you appear in local search results.' },
    ],
  },
  {
    slug: 'technical-seo-audits',
    category: 'services',
    title: 'Technical SEO Audits',
    headline: 'Technical SEO',
    gradientText: 'Audits',
    description: 'Deep technical audits that uncover crawlability issues, indexation problems, and site architecture flaws preventing your content from reaching its full ranking potential.',
    whatItIs: {
      title: 'What Is a Technical SEO Audit?',
      body: 'A technical SEO audit examines the infrastructure of your website to ensure search engines can efficiently crawl, index, and render your content. We analyze site architecture, URL structures, internal linking, Core Web Vitals, structured data implementation, JavaScript rendering, mobile usability, and server configuration — identifying every technical barrier between your content and higher rankings.',
    },
    whyItMatters: {
      title: 'Why Technical SEO Matters',
      body: 'Great content and strong backlinks cannot overcome a technically broken website. If search engines cannot crawl and index your pages properly, your content simply will not rank — regardless of its quality.',
      stats: [
        { value: '59%', label: 'of SEO professionals cite technical issues as the top ranking barrier' },
        { value: '42%', label: 'of websites have critical crawlability errors affecting indexation' },
        { value: '25%', label: 'average organic traffic increase after resolving technical SEO issues' },
      ],
    },
    howWeDoIt: [
      { icon: 'M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z', title: 'Full-Site Crawl & Indexation Review', description: 'We crawl your site the way Google does, identifying orphaned pages, crawl traps, redirect chains, and indexation gaps.' },
      { icon: 'M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6', title: 'Core Web Vitals Assessment', description: 'We measure and diagnose LCP, INP, and CLS issues, providing specific fixes to meet Google\'s performance thresholds.' },
      { icon: 'M6.429 9.75 2.25 12l4.179 2.25m0-4.5 5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0 4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0-5.571 3-5.571-3', title: 'Site Architecture & Structured Data', description: 'We evaluate your URL hierarchy, internal linking, breadcrumbs, and schema markup to maximize crawl efficiency and rich results.' },
      { icon: 'M9 6.75V15m6-6v8.25m.503 3.498 4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 0 0-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0Z', title: 'Prioritized Fix Roadmap', description: 'Every issue is ranked by severity and impact, giving your development team a clear, actionable plan with estimated effort and expected lift.' },
    ],
    faqs: [
      { q: 'How is a technical SEO audit different from a general SEO audit?', a: 'A technical audit focuses specifically on your site\'s infrastructure — crawlability, indexation, site speed, structured data, and server configuration. A general SEO audit also includes content and backlink analysis.' },
      { q: 'Do we need a technical audit if our site looks fine?', a: 'Yes. Most technical SEO issues are invisible to the naked eye. Crawl errors, indexation problems, and rendering issues happen behind the scenes but directly impact your rankings.' },
      { q: 'Will you implement the fixes or just report them?', a: 'We deliver a detailed report with specific recommendations. We can also work directly with your development team to implement fixes, or handle implementation as part of an ongoing engagement.' },
      { q: 'How often should we run a technical audit?', a: 'We recommend a full technical audit at least annually, with quarterly monitoring of critical metrics. Major site changes, migrations, or redesigns should always trigger a fresh audit.' },
    ],
  },
  {
    slug: 'site-speed-optimizations',
    category: 'services',
    title: 'Site Speed Optimizations',
    headline: 'Site Speed',
    gradientText: 'Optimizations',
    description: 'Faster pages rank higher, convert better, and keep visitors engaged. We optimize your Core Web Vitals and page load performance for measurable results.',
    whatItIs: {
      title: 'What Is Site Speed Optimization?',
      body: 'Site speed optimization is the process of improving how quickly your web pages load and become interactive. This includes optimizing images, minifying code, implementing caching strategies, reducing server response times, eliminating render-blocking resources, and addressing Core Web Vitals (LCP, INP, CLS). Faster sites rank higher, convert more visitors, and deliver better user experiences.',
    },
    whyItMatters: {
      title: 'Why Site Speed Matters',
      body: 'Google has confirmed page speed as a ranking factor, and Core Web Vitals are part of their page experience signals. Beyond SEO, every second of delay costs you conversions and revenue.',
      stats: [
        { value: '53%', label: 'of mobile users abandon sites that take over 3 seconds to load' },
        { value: '7%', label: 'decrease in conversions for every 1-second delay in page load' },
        { value: '70%', label: 'of consumers say page speed affects their purchasing decisions' },
      ],
    },
    howWeDoIt: [
      { icon: 'M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z', title: 'Performance Audit', description: 'We measure your current speed metrics across devices, identify bottlenecks, and benchmark against competitors and Google thresholds.' },
      { icon: 'M2.25 15.75l5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0 0 22.5 18.75V5.25A2.25 2.25 0 0 0 20.25 3H3.75A2.25 2.25 0 0 0 1.5 5.25v13.5A2.25 2.25 0 0 0 3.75 21Z', title: 'Image & Asset Optimization', description: 'We compress images, convert to next-gen formats, implement lazy loading, and optimize all static assets for minimal payload.' },
      { icon: 'M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5', title: 'Code & Rendering Optimization', description: 'We eliminate render-blocking resources, minify CSS and JavaScript, defer non-critical scripts, and optimize critical rendering paths.' },
      { icon: 'M5.25 14.25h13.5m-13.5 0a3 3 0 0 1-3-3m3 3a3 3 0 1 0 0 6h13.5a3 3 0 1 0 0-6m-16.5-3a3 3 0 0 1 3-3h13.5a3 3 0 0 1 3 3m-19.5 0a4.5 4.5 0 0 1 .9-2.7L5.737 5.1a3.375 3.375 0 0 1 2.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 0 1 .9 2.7m0 0a3 3 0 0 1-3 3m0 3h.008v.008h-.008v-.008Zm0-6h.008v.008h-.008v-.008Zm-3 6h.008v.008h-.008v-.008Zm0-6h.008v.008h-.008v-.008Z', title: 'Caching & CDN Configuration', description: 'We implement browser caching, server-side caching, and CDN configuration to deliver content from the closest edge location.' },
    ],
    faqs: [
      { q: 'What are Core Web Vitals?', a: 'Core Web Vitals are Google\'s specific metrics for page experience: Largest Contentful Paint (loading speed), Interaction to Next Paint (interactivity), and Cumulative Layout Shift (visual stability). Passing these thresholds is a ranking factor.' },
      { q: 'How much faster can you make my site?', a: 'Results vary by site, but most clients see 40–70% improvements in load times. We target passing all Core Web Vitals thresholds and achieving sub-3-second load times on mobile.' },
      { q: 'Will speed optimizations break my site?', a: 'No. We implement changes carefully, testing each optimization in staging before deploying to production. Every change is validated to ensure functionality is preserved.' },
      { q: 'How does site speed affect SEO rankings?', a: 'Google uses Core Web Vitals as a ranking signal in its page experience update. Faster sites get a ranking advantage, especially on mobile, and better engagement metrics like lower bounce rates further boost rankings.' },
    ],
  },
  {
    slug: 'content-distribution-and-syndication',
    category: 'services',
    title: 'Content Distribution & Syndication',
    headline: 'Content Distribution &',
    gradientText: 'Syndication',
    description: 'Amplify your content\'s reach through strategic distribution channels and syndication networks — ensuring your best work gets seen by the right audiences at scale.',
    whatItIs: {
      title: 'What Is Content Distribution & Syndication?',
      body: 'Content distribution and syndication is the strategic process of promoting and republishing your content across multiple channels, platforms, and networks to maximize its reach and impact. We combine owned, earned, and paid distribution strategies with syndication partnerships to ensure every piece of content works harder — driving traffic, building authority, and generating backlinks long after initial publication.',
    },
    whyItMatters: {
      title: 'Why Content Distribution Matters',
      body: 'Creating great content is only half the battle. Without a distribution strategy, even the best content sits unread. Strategic distribution multiplies your content investment and accelerates SEO results.',
      stats: [
        { value: '60%', label: 'of content published online gets zero engagement without active distribution' },
        { value: '4x', label: 'more traffic for content with a structured distribution plan' },
        { value: '31%', label: 'of referral traffic comes from content syndication and partner networks' },
      ],
    },
    howWeDoIt: [
      { icon: 'M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z', title: 'Multi-Channel Strategy', description: 'We develop a tailored distribution plan spanning email, social media, industry communities, newsletters, and partner networks.' },
      { icon: 'M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m9.86-2.556a4.5 4.5 0 0 0-1.242-7.244l4.5-4.5a4.5 4.5 0 0 1 6.364 6.364l-1.757 1.757', title: 'Syndication Network', description: 'We place your content on vetted syndication platforms and partner publications with proper canonical tags to preserve SEO value.' },
      { icon: 'M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941', title: 'Amplification & Promotion', description: 'Paid promotion, influencer outreach, and community seeding to accelerate initial visibility and engagement for priority content.' },
      { icon: 'M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z', title: 'Performance Analytics', description: 'We track reach, referral traffic, backlinks earned, and engagement across every distribution channel to optimize spend and effort.' },
    ],
    faqs: [
      { q: 'Will syndication create duplicate content issues?', a: 'No. We use proper canonical tags and syndication best practices to ensure search engines attribute authority to your original content. Syndicated copies reference your site as the source.' },
      { q: 'What types of content work best for syndication?', a: 'Data-driven research, industry guides, expert roundups, and original insights syndicate best. We help identify which pieces in your content library have the highest syndication potential.' },
      { q: 'How is this different from social media management?', a: 'Social media management focuses on your owned social profiles. Content distribution is broader — it includes syndication networks, email newsletters, industry publications, paid promotion, and partner channels.' },
      { q: 'Can you distribute content we have already published?', a: 'Absolutely. We audit your existing content library to identify high-performing pieces that can be refreshed, reformatted, and distributed to new audiences for additional reach and backlinks.' },
    ],
  },
  {
    slug: 'dedicated-seo-partnership',
    category: 'services',
    title: 'Dedicated SEO Partnership',
    headline: 'Dedicated SEO',
    gradientText: 'Partnership',
    description: 'A long-term, embedded SEO partnership where our team becomes an extension of yours — driving strategy, execution, and results as a true growth partner.',
    whatItIs: {
      title: 'What Is a Dedicated SEO Partnership?',
      body: 'A dedicated SEO partnership goes beyond traditional agency-client relationships. We embed a dedicated team of SEO strategists, content specialists, and link builders into your organization, functioning as an extension of your marketing department. Your dedicated team learns your business deeply, attends your planning meetings, and drives SEO strategy alongside your internal stakeholders — powered by people who know your brand, perfected with data-driven insights.',
    },
    whyItMatters: {
      title: 'Why a Dedicated Partnership Matters',
      body: 'SEO is not a set-it-and-forget-it service. The businesses that win in organic search treat SEO as a continuous, integrated function — not a siloed project. A dedicated partnership ensures consistent momentum and strategic alignment.',
      stats: [
        { value: '67%', label: 'higher ROI for businesses with dedicated, long-term SEO partnerships' },
        { value: '3x', label: 'faster execution speed with an embedded team vs. traditional agency model' },
        { value: '89%', label: 'client retention rate — partnerships that deliver keep clients invested' },
      ],
    },
    howWeDoIt: [
      { icon: 'M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z', title: 'Dedicated Team Assignment', description: 'You get a named strategist, content specialist, and link builder who learn your business, industry, and competitive landscape inside and out.' },
      { icon: 'M9 6.75V15m6-6v8.25m.503 3.498 4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 0 0-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0Z', title: 'Integrated Strategy & Planning', description: 'We participate in your marketing planning, align SEO goals with business objectives, and adapt strategy as your priorities evolve.' },
      { icon: 'M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z', title: 'Full-Stack Execution', description: 'Technical SEO, content creation, link building, and conversion optimization — all handled by your dedicated team with no handoff delays.' },
      { icon: 'M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z', title: 'Executive Reporting & Accountability', description: 'Monthly strategic reviews, quarterly business impact reports, and transparent KPIs that tie SEO performance directly to revenue.' },
    ],
    faqs: [
      { q: 'How is this different from a regular SEO retainer?', a: 'A dedicated partnership provides a named team that works exclusively on your account, attends your internal meetings, and operates as an embedded extension of your marketing department. It is far more integrated than a standard retainer.' },
      { q: 'What is the minimum commitment?', a: 'We recommend a minimum 6-month engagement to allow your dedicated team to learn your business and deliver meaningful results. However, there are no rigid long-term lock-in contracts.' },
      { q: 'Can we scale the team up or down?', a: 'Yes. The partnership model is flexible. As your needs evolve — launching new products, entering new markets, or scaling back — we adjust team composition and focus areas accordingly.' },
      { q: 'How do you measure success?', a: 'We establish KPIs tied to your business goals from day one: organic traffic, keyword rankings, leads, revenue attribution, and market share. Monthly and quarterly reporting keeps everyone aligned and accountable.' },
    ],
  },
]
