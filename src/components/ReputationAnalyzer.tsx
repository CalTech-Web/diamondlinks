'use client'

import { useState, useCallback, useEffect, useRef } from 'react'
import type { OrmReport, SearchResult, ActionItem } from '@/types/orm'

/* ─── Sub-components ─── */

function ScoreGauge({ score, label, animated }: { score: number; label?: string; animated: boolean }) {
  const percentage = (score / 10) * 100
  const color =
    score >= 7 ? 'text-emerald-500' : score >= 5 ? 'text-amber-500' : 'text-red-500'
  const bgColor =
    score >= 7 ? 'bg-emerald-500' : score >= 5 ? 'bg-amber-500' : 'bg-red-500'
  const statusLabel = label ?? (score >= 7 ? 'Good' : score >= 5 ? 'Needs Work' : 'At Risk')

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
        {statusLabel}
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

function SearchResultCard({ result, position, isNew }: { result: SearchResult; position: number; isNew?: boolean }) {
  const isNegative = result.sentiment === 'negative'
  return (
    <div className={`group py-4 first:pt-0 last:pb-0 ${isNegative ? '-mx-4 px-4 bg-red-50/60 rounded-xl border border-red-100/60' : ''}`}>
      <div className="flex items-start gap-3">
        <div className={`flex-shrink-0 w-6 h-6 rounded-full text-xs font-bold flex items-center justify-center mt-0.5 ${
          isNew ? 'bg-emerald-50 text-emerald-500' : 'bg-gray-100 text-gray-400'
        }`}>
          {position}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-0.5 flex-wrap">
            <span className="text-xs text-gray-400 truncate max-w-[240px]">{result.displayUrl || result.url}</span>
            <SentimentBadge sentiment={result.sentiment} />
            {isNew && (
              <span className="text-[10px] font-semibold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-100">
                DiamondLinks
              </span>
            )}
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

function ProfileStatus({ profiles }: { profiles: { name: string; claimed: boolean }[] }) {
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
    'Building recommendations...',
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

/* ─── Staggered reveal ─── */
function RevealSection({ children, delay }: { children: React.ReactNode; delay: number }) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), delay)
    return () => clearTimeout(timer)
  }, [delay])

  return (
    <div
      className={`transition-all duration-700 ease-out ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`}
    >
      {children}
    </div>
  )
}

/* ─── Before / After Toggle ─── */
function ViewToggle({ view, onToggle }: { view: 'before' | 'after'; onToggle: (v: 'before' | 'after') => void }) {
  return (
    <div className="inline-flex items-center bg-gray-100 rounded-xl p-1">
      <button
        onClick={() => onToggle('before')}
        className={`relative px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
          view === 'before'
            ? 'bg-white text-gray-900 shadow-sm'
            : 'text-gray-500 hover:text-gray-700'
        }`}
      >
        <span className="flex items-center gap-1.5">
          <span className={`w-2 h-2 rounded-full ${view === 'before' ? 'bg-red-400' : 'bg-gray-300'}`} />
          Current Results
        </span>
      </button>
      <button
        onClick={() => onToggle('after')}
        className={`relative px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
          view === 'after'
            ? 'bg-white text-gray-900 shadow-sm'
            : 'text-gray-500 hover:text-gray-700'
        }`}
      >
        <span className="flex items-center gap-1.5">
          <span className={`w-2 h-2 rounded-full ${view === 'after' ? 'bg-emerald-400' : 'bg-gray-300'}`} />
          With DiamondLinks
        </span>
      </button>
    </div>
  )
}

/* ─── Score Comparison ─── */
function ScoreComparison({ before, after }: { before: number; after: number }) {
  const improvement = after - before
  return (
    <div className="bg-gradient-to-r from-gray-950 to-gray-900 rounded-2xl p-6 flex items-center justify-between gap-6">
      <div className="text-center flex-1">
        <p className="text-gray-500 text-xs font-medium uppercase tracking-wider mb-1">Current</p>
        <p className={`text-3xl font-bold ${before >= 7 ? 'text-emerald-400' : before >= 5 ? 'text-amber-400' : 'text-red-400'}`}>
          {before}/10
        </p>
      </div>
      <div className="flex items-center gap-2 text-emerald-400">
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
        </svg>
        <span className="text-xs font-bold">+{improvement}</span>
      </div>
      <div className="text-center flex-1">
        <p className="text-emerald-400/70 text-xs font-medium uppercase tracking-wider mb-1">With DiamondLinks</p>
        <p className="text-3xl font-bold text-emerald-400">{after}/10</p>
      </div>
    </div>
  )
}

/* ─── Category score icons ─── */
const CATEGORY_ICONS = {
  searchPresence: (
    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
    </svg>
  ),
  sentimentScore: (
    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z" />
    </svg>
  ),
  profileCoverage: (
    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
    </svg>
  ),
  contentControl: (
    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
    </svg>
  ),
}

/* ─── Main component ─── */
export default function ReputationAnalyzer() {
  const [query, setQuery] = useState('')
  const [scanning, setScanning] = useState(false)
  const [report, setReport] = useState<OrmReport | null>(null)
  const [view, setView] = useState<'before' | 'after'>('before')
  const [gaugeAnimated, setGaugeAnimated] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const resultsRef = useRef<HTMLDivElement>(null)

  const handleAnalyze = useCallback(async () => {
    if (!query.trim() || scanning) return
    setReport(null)
    setView('before')
    setGaugeAnimated(false)
    setError(null)
    setScanning(true)

    try {
      const res = await fetch('/api/orm-scan/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query: query.trim() }),
      })

      if (!res.ok) {
        const data = await res.json().catch(() => null)
        throw new Error(data?.error || 'Analysis failed')
      }

      const data: OrmReport = await res.json()
      setReport(data)
      setTimeout(() => setGaugeAnimated(true), 100)
      // Scroll to results after a beat
      setTimeout(() => {
        resultsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }, 300)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong. Please try again.')
    } finally {
      setScanning(false)
    }
  }, [query, scanning])

  const isAfterView = view === 'after'
  const activeResults = isAfterView ? report?.afterResults : report?.results
  const activeScore = isAfterView ? report?.afterScore : report?.overallScore
  const activeCategories = isAfterView ? report?.afterCategoryScores : report?.categoryScores

  const negativeCount = report?.results.filter((r) => r.sentiment === 'negative').length ?? 0
  const positiveCount = report?.results.filter((r) => r.sentiment === 'positive').length ?? 0
  const neutralCount = report?.results.filter((r) => r.sentiment === 'neutral').length ?? 0

  const afterNegativeCount = report?.afterResults.filter((r) => r.sentiment === 'negative').length ?? 0
  const afterPositiveCount = report?.afterResults.filter((r) => r.sentiment === 'positive').length ?? 0
  const afterNeutralCount = report?.afterResults.filter((r) => r.sentiment === 'neutral').length ?? 0

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

      {/* Error State */}
      {error && (
        <div className="max-w-2xl mx-auto mb-8 bg-red-50 border border-red-100 rounded-xl p-4 flex items-start gap-3">
          <svg className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z" />
          </svg>
          <div>
            <p className="text-red-800 font-semibold text-sm">Analysis Failed</p>
            <p className="text-red-700 text-sm mt-0.5">{error}</p>
          </div>
        </div>
      )}

      {/* Scanning State */}
      {scanning && <ScanningState query={query} />}

      {/* Results */}
      {report && !scanning && (
        <div ref={resultsRef} className="space-y-8">
          {/* Score Comparison Bar */}
          {report.overallScore < report.afterScore && (
            <RevealSection delay={0}>
              <ScoreComparison before={report.overallScore} after={report.afterScore} />
            </RevealSection>
          )}

          {/* View Toggle */}
          <RevealSection delay={100}>
            <div className="flex items-center justify-between flex-wrap gap-4">
              <ViewToggle view={view} onToggle={setView} />
            </div>
          </RevealSection>

          {/* Score + Summary Row */}
          <RevealSection delay={200}>
            <div className="grid md:grid-cols-3 gap-6">
              {/* Score Gauge + Category Breakdown */}
              <div className={`rounded-2xl border shadow-sm p-8 transition-colors duration-300 ${
                isAfterView ? 'bg-emerald-50/30 border-emerald-100' : 'bg-white border-gray-100'
              }`}>
                <ScoreGauge
                  score={activeScore ?? 0}
                  label={isAfterView ? 'Projected' : undefined}
                  animated={gaugeAnimated}
                />

                <div className="mt-6 pt-6 border-t border-gray-100 space-y-3.5">
                  <CategoryScoreBar
                    label="Search Presence"
                    score={activeCategories?.searchPresence ?? 0}
                    delay={400}
                    icon={CATEGORY_ICONS.searchPresence}
                  />
                  <CategoryScoreBar
                    label="Sentiment Score"
                    score={activeCategories?.sentimentScore ?? 0}
                    delay={550}
                    icon={CATEGORY_ICONS.sentimentScore}
                  />
                  <CategoryScoreBar
                    label="Profile Coverage"
                    score={activeCategories?.profileCoverage ?? 0}
                    delay={700}
                    icon={CATEGORY_ICONS.profileCoverage}
                  />
                  <CategoryScoreBar
                    label="Content Control"
                    score={activeCategories?.contentControl ?? 0}
                    delay={850}
                    icon={CATEGORY_ICONS.contentControl}
                  />
                </div>
              </div>

              {/* Quick Stats */}
              <div className="md:col-span-2 bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
                <div className="flex items-start justify-between mb-1">
                  <h3 className="text-gray-900 font-bold text-lg">
                    {isAfterView ? 'Projected Results' : 'Reputation Snapshot'} for &ldquo;{report.query}&rdquo;
                  </h3>
                </div>
                <p className="text-gray-400 text-sm mb-6">
                  {isAfterView
                    ? 'What your Google page 1 could look like with DiamondLinks ORM'
                    : report.isLive
                      ? 'Based on live analysis of Google\u2019s first page results'
                      : 'Based on simulated analysis of Google\u2019s first page results'
                  }
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
                  <div className="bg-gray-50 rounded-xl p-4 text-center">
                    <p className="text-2xl font-bold text-gray-900">{(isAfterView ? report.afterResults : report.results).length}</p>
                    <p className="text-gray-500 text-xs mt-0.5">Results</p>
                  </div>
                  <div className="bg-emerald-50 rounded-xl p-4 text-center">
                    <p className="text-2xl font-bold text-emerald-600">{isAfterView ? afterPositiveCount : positiveCount}</p>
                    <p className="text-gray-500 text-xs mt-0.5">Positive</p>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-4 text-center">
                    <p className="text-2xl font-bold text-gray-500">{isAfterView ? afterNeutralCount : neutralCount}</p>
                    <p className="text-gray-500 text-xs mt-0.5">Neutral</p>
                  </div>
                  <div className={`rounded-xl p-4 text-center ${isAfterView && afterNegativeCount === 0 ? 'bg-emerald-50' : 'bg-red-50'}`}>
                    <p className={`text-2xl font-bold ${isAfterView && afterNegativeCount === 0 ? 'text-emerald-600' : 'text-red-600'}`}>
                      {isAfterView ? afterNegativeCount : negativeCount}
                    </p>
                    <p className="text-gray-500 text-xs mt-0.5">Negative</p>
                  </div>
                </div>

                {isAfterView ? (
                  <div className="bg-emerald-50 border border-emerald-100 rounded-xl p-4 flex items-start gap-3">
                    <svg className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                    <div>
                      <p className="text-emerald-800 font-semibold text-sm">Page 1 Dominated</p>
                      <p className="text-emerald-700 text-xs mt-0.5">
                        Negative content pushed off page 1. Positive, owned properties fill the top results. This is what your prospects will see.
                      </p>
                    </div>
                  </div>
                ) : (report.overallScore ?? 0) < 7 ? (
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
          <RevealSection delay={400}>
            <div className="grid lg:grid-cols-3 gap-6">
              {/* Google Results */}
              <div className={`lg:col-span-2 rounded-2xl border shadow-sm p-8 transition-colors duration-300 ${
                isAfterView ? 'bg-emerald-50/20 border-emerald-100' : 'bg-white border-gray-100'
              }`}>
                <div className="flex items-center gap-3 mb-6">
                  <h3 className="text-gray-900 font-bold text-lg">
                    {isAfterView ? 'Projected Page 1' : 'Google Page 1 Results'}
                  </h3>
                  {isAfterView && (
                    <span className="text-emerald-600 text-xs bg-emerald-50 px-2 py-1 rounded-md font-medium border border-emerald-100">
                      After ORM
                    </span>
                  )}
                </div>
                <div className="divide-y divide-gray-100">
                  {(activeResults ?? []).map((result, i) => {
                    const isNew = isAfterView && !report.results.some(r => r.url === result.url)
                    return (
                      <SearchResultCard key={`${view}-${i}`} result={result} position={i + 1} isNew={isNew} />
                    )
                  })}
                </div>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Profile Coverage */}
                <ProfileStatus
                  profiles={isAfterView
                    ? report.profilesClaimed.map(p => ({ ...p, claimed: true }))
                    : report.profilesClaimed
                  }
                />

                {/* Risks (only in before view) */}
                {!isAfterView && report.risks.length > 0 && (
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
                )}

                {/* Opportunities */}
                <div className={`rounded-2xl border p-6 ${
                  isAfterView ? 'bg-emerald-50/50 border-emerald-100/60' : 'bg-emerald-50/50 border-emerald-100/60'
                }`}>
                  <h3 className="text-gray-900 font-bold text-sm mb-4 flex items-center gap-2">
                    <svg className="w-4 h-4 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
                    </svg>
                    {isAfterView ? 'What DiamondLinks Delivers' : 'Opportunities'}
                  </h3>
                  <ul className="space-y-3">
                    {isAfterView ? (
                      <>
                        <li className="flex items-start gap-2 text-sm text-gray-700">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5 flex-shrink-0" />
                          All negative content suppressed from page 1
                        </li>
                        <li className="flex items-start gap-2 text-sm text-gray-700">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5 flex-shrink-0" />
                          Optimized profiles across all major platforms
                        </li>
                        <li className="flex items-start gap-2 text-sm text-gray-700">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5 flex-shrink-0" />
                          Positive, owned content filling top positions
                        </li>
                        <li className="flex items-start gap-2 text-sm text-gray-700">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5 flex-shrink-0" />
                          24/7 monitoring catching new threats early
                        </li>
                      </>
                    ) : (
                      report.opportunities.map((opp) => (
                        <li key={opp} className="flex items-start gap-2 text-sm text-gray-700">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5 flex-shrink-0" />
                          {opp}
                        </li>
                      ))
                    )}
                  </ul>
                </div>
              </div>
            </div>
          </RevealSection>

          {/* Action Priority Section (only in before view) */}
          {!isAfterView && (
            <RevealSection delay={600}>
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
          )}

          {/* CTA — see the after, or call us */}
          <RevealSection delay={isAfterView ? 600 : 800}>
            {!isAfterView ? (
              <div className="bg-gradient-to-br from-gray-950 to-gray-900 rounded-2xl p-8 text-center max-w-2xl mx-auto">
                <h3 className="text-white font-bold text-xl mb-2">
                  See What DiamondLinks Can Do
                </h3>
                <p className="text-gray-400 text-sm mb-6 leading-relaxed max-w-lg mx-auto">
                  Toggle to &ldquo;With DiamondLinks&rdquo; above to preview your projected results — or talk to our team for a custom strategy.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                  <button
                    onClick={() => {
                      setView('after')
                      resultsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
                    }}
                    className="hero-cta-shimmer inline-flex items-center gap-2 bg-emerald-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-emerald-500 transition-colors shadow-lg shadow-emerald-600/25 text-base"
                  >
                    Preview &ldquo;After&rdquo; Results
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                    </svg>
                  </button>
                  <a
                    href="tel:504-233-4365"
                    className="inline-flex items-center gap-2 border-2 border-white/20 text-white px-8 py-4 rounded-xl font-bold hover:bg-white/5 transition-colors text-base"
                  >
                    Call 504.233.4365
                  </a>
                </div>
              </div>
            ) : (
              <div className="bg-gradient-to-br from-gray-950 to-gray-900 rounded-2xl p-8 text-center max-w-2xl mx-auto">
                <div className="w-12 h-12 rounded-full bg-emerald-500/10 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg>
                </div>
                <h3 className="text-white font-bold text-xl mb-2">
                  Ready to Own Your Page 1?
                </h3>
                <p className="text-gray-400 text-sm mb-6 leading-relaxed max-w-lg mx-auto">
                  This is what your Google results look like after DiamondLinks ORM. Our team builds and manages every asset — you just approve the strategy.
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
            )}
          </RevealSection>
        </div>
      )}
    </div>
  )
}
