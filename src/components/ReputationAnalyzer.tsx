'use client'

import { useState, useCallback } from 'react'

/* ─── Types ─── */
interface SearchResult {
  title: string
  url: string
  snippet: string
  sentiment: 'positive' | 'neutral' | 'negative'
  type: 'social' | 'review' | 'news' | 'website' | 'directory' | 'legal'
}

interface AnalysisReport {
  query: string
  overallScore: number
  results: SearchResult[]
  risks: string[]
  opportunities: string[]
  profilesClaimed: { name: string; claimed: boolean }[]
}

/* ─── Mock API ─── */
function generateMockReport(query: string): AnalysisReport {
  const name = query.trim()
  const slug = name.toLowerCase().replace(/\s+/g, '-')

  // Deterministic-ish score based on query length
  const seed = name.length + name.charCodeAt(0)
  const overallScore = Math.max(3, Math.min(8, Math.round((seed % 6) + 3)))

  const results: SearchResult[] = [
    {
      title: `${name} - LinkedIn`,
      url: `https://www.linkedin.com/in/${slug}`,
      snippet: `View ${name}'s professional profile on LinkedIn. Connect with ${name} and other professionals in your network.`,
      sentiment: 'positive',
      type: 'social',
    },
    {
      title: `${name} | Facebook`,
      url: `https://www.facebook.com/${slug}`,
      snippet: `${name} is on Facebook. Join Facebook to connect with ${name} and others you may know.`,
      sentiment: 'neutral',
      type: 'social',
    },
    {
      title: `${name} Reviews - Trustpilot`,
      url: `https://www.trustpilot.com/review/${slug}.com`,
      snippet: `Read customer reviews of ${name}. 23 reviews with an average rating of 3.2 out of 5 stars. Some customers report billing issues.`,
      sentiment: 'negative',
      type: 'review',
    },
    {
      title: `${name} - Better Business Bureau`,
      url: `https://www.bbb.org/us/profile/${slug}`,
      snippet: `${name} is a BBB Accredited Business. See rating, customer reviews, contact information, and more.`,
      sentiment: 'positive',
      type: 'directory',
    },
    {
      title: `${name} Complaints & Lawsuit - RipoffReport`,
      url: `https://www.ripoffreport.com/${slug}`,
      snippet: `Ripoff Report on ${name} — filed complaint about poor service and refund issues. Multiple reports found.`,
      sentiment: 'negative',
      type: 'review',
    },
    {
      title: `${name} (@${slug}) / X`,
      url: `https://twitter.com/${slug}`,
      snippet: `The latest posts from ${name} (@${slug}). Industry thoughts, updates, and professional content.`,
      sentiment: 'neutral',
      type: 'social',
    },
    {
      title: `${name} - Glassdoor`,
      url: `https://www.glassdoor.com/Overview/${slug}`,
      snippet: `See what employees say about working at ${name}. Salaries, reviews, and interview tips posted anonymously.`,
      sentiment: 'neutral',
      type: 'review',
    },
    {
      title: `Is ${name} Legit? What You Need to Know`,
      url: `https://www.scamadviser.com/check-website/${slug}.com`,
      snippet: `Our analysis of ${name} shows a trust score of 62 out of 100. The website has some positive indicators but caution is advised.`,
      sentiment: 'negative',
      type: 'website',
    },
    {
      title: `${name} - Crunchbase`,
      url: `https://www.crunchbase.com/organization/${slug}`,
      snippet: `${name} company profile: funding, investors, valuation, revenue, and more. Founded in 2018, headquartered in the United States.`,
      sentiment: 'positive',
      type: 'directory',
    },
    {
      title: `${name} News - Google News`,
      url: `https://news.google.com/search?q=${encodeURIComponent(name)}`,
      snippet: `Latest news coverage about ${name}. Recent articles cover industry developments and company updates.`,
      sentiment: 'neutral',
      type: 'news',
    },
  ]

  const risks = [
    'Negative review site appearing on page 1',
    '"Scam" or "complaint" related results indexed',
    'Unclaimed profiles on major platforms',
    'Low review volume diluting brand trust',
  ]

  const opportunities = [
    'Create authoritative content to push down negatives',
    'Claim and optimize unclaimed business profiles',
    'Build a review generation strategy',
    'Publish thought leadership content for page 1 dominance',
  ]

  const profilesClaimed = [
    { name: 'Google Business', claimed: true },
    { name: 'LinkedIn', claimed: true },
    { name: 'Facebook', claimed: seed % 2 === 0 },
    { name: 'X (Twitter)', claimed: false },
    { name: 'Yelp', claimed: false },
    { name: 'BBB', claimed: seed % 3 === 0 },
    { name: 'Crunchbase', claimed: false },
    { name: 'Glassdoor', claimed: seed % 2 !== 0 },
  ]

  return { query: name, overallScore, results, risks, opportunities, profilesClaimed }
}

/* ─── Sub-components ─── */

function ScoreGauge({ score }: { score: number }) {
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
            strokeDasharray={`${percentage * 3.267} 326.7`}
            strokeLinecap="round"
            className={`${color} transition-all duration-1000 ease-out`}
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className={`text-4xl font-bold ${color}`}>{score}</span>
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

/* ─── Scanning animation ─── */
function ScanningState({ query }: { query: string }) {
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
      <p className="text-gray-900 font-bold text-lg mb-2">
        Scanning Google for &ldquo;{query}&rdquo;
      </p>
      <div className="space-y-1.5 text-sm text-gray-400">
        <p className="animate-pulse">Checking search results...</p>
        <p className="animate-pulse" style={{ animationDelay: '300ms' }}>
          Analyzing sentiment...
        </p>
        <p className="animate-pulse" style={{ animationDelay: '600ms' }}>
          Identifying risks...
        </p>
      </div>
    </div>
  )
}

/* ─── Main component ─── */
export default function ReputationAnalyzer() {
  const [query, setQuery] = useState('')
  const [scanning, setScanning] = useState(false)
  const [report, setReport] = useState<AnalysisReport | null>(null)

  const handleAnalyze = useCallback(() => {
    if (!query.trim() || scanning) return
    setReport(null)
    setScanning(true)

    // Simulate API call with 3-second delay
    setTimeout(() => {
      const mockReport = generateMockReport(query)
      setReport(mockReport)
      setScanning(false)
    }, 3000)
  }, [query, scanning])

  const negativeCount = report?.results.filter((r) => r.sentiment === 'negative').length ?? 0
  const positiveCount = report?.results.filter((r) => r.sentiment === 'positive').length ?? 0

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
        <div className="space-y-8 animate-in fade-in duration-500">
          {/* Score + Summary Row */}
          <div className="grid md:grid-cols-3 gap-6">
            {/* Score */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
              <ScoreGauge score={report.overallScore} />
            </div>

            {/* Quick Stats */}
            <div className="md:col-span-2 bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
              <h3 className="text-gray-900 font-bold text-lg mb-1">
                Reputation Snapshot for &ldquo;{report.query}&rdquo;
              </h3>
              <p className="text-gray-400 text-sm mb-6">
                Based on simulated analysis of Google&apos;s first page results
              </p>

              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="bg-gray-50 rounded-xl p-4 text-center">
                  <p className="text-2xl font-bold text-gray-900">{report.results.length}</p>
                  <p className="text-gray-500 text-xs mt-0.5">Results Analyzed</p>
                </div>
                <div className="bg-red-50 rounded-xl p-4 text-center">
                  <p className="text-2xl font-bold text-red-600">{negativeCount}</p>
                  <p className="text-gray-500 text-xs mt-0.5">Negative Results</p>
                </div>
                <div className="bg-emerald-50 rounded-xl p-4 text-center">
                  <p className="text-2xl font-bold text-emerald-600">{positiveCount}</p>
                  <p className="text-gray-500 text-xs mt-0.5">Positive Results</p>
                </div>
              </div>

              {report.overallScore < 7 && (
                <div className="bg-amber-50 border border-amber-100 rounded-xl p-4 flex items-start gap-3">
                  <svg className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
                  </svg>
                  <div>
                    <p className="text-amber-800 font-semibold text-sm">Action Recommended</p>
                    <p className="text-amber-700 text-xs mt-0.5">
                      Negative or risky content was found on Google&apos;s first page. This is what your prospects see first.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Search Results + Sidebar */}
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

              {/* CTA Card */}
              <div className="bg-gray-950 rounded-2xl p-6 text-center">
                <h3 className="text-white font-bold text-base mb-2">
                  Want the Full Report?
                </h3>
                <p className="text-gray-400 text-xs mb-5 leading-relaxed">
                  This is a preview. Our team manually audits every result, analyzes deeper threats, and delivers a custom action plan.
                </p>
                <a
                  href="tel:504-233-4365"
                  className="hero-cta-shimmer inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-blue-500 transition-colors shadow-lg shadow-blue-600/25 text-sm w-full justify-center"
                >
                  Call 504.233.4365
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                  </svg>
                </a>
                <p className="text-gray-500 text-xs mt-3">Free. No obligation. 24-hour turnaround.</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
