'use client'

import { useState, useCallback, useEffect, useRef } from 'react'

/* ─── Types ─── */
type Severity = 'pass' | 'warning' | 'fail'

interface AuditCheck {
  label: string
  status: Severity
  detail: string
}

interface AuditCategory {
  name: string
  score: number
  checks: AuditCheck[]
}

interface SeoActionItem {
  title: string
  description: string
  urgency: 'Immediate' | 'This Month' | 'Ongoing'
  impact: 'High' | 'Medium' | 'Low'
}

interface SeoReport {
  url: string
  domain: string
  overallScore: number
  grade: string
  categories: AuditCategory[]
  topIssues: string[]
  strengths: string[]
  actions: SeoActionItem[]
  keyMetrics: { label: string; value: string; trend: 'up' | 'down' | 'flat' }[]
}

/* ─── Helpers ─── */
function gradeColor(grade: string): string {
  if (grade.startsWith('A')) return 'text-emerald-500'
  if (grade.startsWith('B')) return 'text-blue-500'
  if (grade.startsWith('C')) return 'text-amber-500'
  return 'text-red-500'
}

function gradeBgColor(grade: string): string {
  if (grade.startsWith('A')) return 'bg-emerald-500'
  if (grade.startsWith('B')) return 'bg-blue-500'
  if (grade.startsWith('C')) return 'bg-amber-500'
  return 'bg-red-500'
}

const CATEGORY_ICONS: Record<string, string> = {
  'Technical SEO': 'M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l5.653-4.655m5.97-2.014L17.414 8l4.243-4.243a2 2 0 00-2.828-2.828L14.586 5.17l-2.614 2.614m5.97-2.014L13.3 10.413m0 0l-5.97 2.014m5.97-2.014L10.413 13.3m0 0l-2.014 5.97',
  'On-Page SEO': 'M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z',
  'Off-Page SEO': 'M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244',
  'Content': 'M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25',
  'Performance': 'M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75',
}

/* ─── Sub-components ─── */

function GradeCircle({ score, grade }: { score: number; grade: string }) {
  const color = gradeColor(grade)
  const bgColor = gradeBgColor(grade)
  return (
    <div className="text-center">
      <div className="relative w-40 h-40 mx-auto mb-4">
        <svg className="w-40 h-40 -rotate-90" viewBox="0 0 120 120">
          <circle cx="60" cy="60" r="52" fill="none" stroke="#e5e7eb" strokeWidth="8" />
          <circle
            cx="60" cy="60" r="52" fill="none" stroke="currentColor" strokeWidth="8"
            strokeDasharray={`${(score / 100) * 326.7} 326.7`}
            strokeLinecap="round"
            className={`${color} transition-all duration-1000 ease-out`}
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className={`text-5xl font-black ${color}`}>{grade}</span>
          <span className="text-gray-400 text-xs mt-0.5">{score}/100</span>
        </div>
      </div>
      <span className={`inline-flex items-center gap-1.5 ${bgColor} text-white text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full`}>
        {score >= 80 ? 'Strong' : score >= 60 ? 'Needs Work' : score >= 40 ? 'Below Average' : 'Critical'}
      </span>
    </div>
  )
}

function StatusIcon({ status }: { status: Severity }) {
  if (status === 'pass') {
    return (
      <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0">
        <svg className="w-3 h-3 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
        </svg>
      </div>
    )
  }
  if (status === 'warning') {
    return (
      <div className="w-5 h-5 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0">
        <svg className="w-3 h-3 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z" />
        </svg>
      </div>
    )
  }
  return (
    <div className="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
      <svg className="w-3 h-3 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
      </svg>
    </div>
  )
}

function TrendIcon({ trend }: { trend: 'up' | 'down' | 'flat' }) {
  if (trend === 'up') {
    return (
      <svg className="w-3.5 h-3.5 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
      </svg>
    )
  }
  if (trend === 'down') {
    return (
      <svg className="w-3.5 h-3.5 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25" />
      </svg>
    )
  }
  return (
    <svg className="w-3.5 h-3.5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 12h9" />
    </svg>
  )
}

function CategoryCard({ category, expanded, onToggle }: { category: AuditCategory; expanded: boolean; onToggle: () => void }) {
  const scoreColor = category.score >= 70 ? 'text-emerald-500' : category.score >= 50 ? 'text-amber-500' : 'text-red-500'
  const barColor = category.score >= 70 ? 'bg-emerald-500' : category.score >= 50 ? 'bg-amber-500' : 'bg-red-500'
  const passes = category.checks.filter(c => c.status === 'pass').length
  const fails = category.checks.filter(c => c.status === 'fail').length
  const iconPath = CATEGORY_ICONS[category.name] || CATEGORY_ICONS['On-Page SEO']

  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full flex items-center gap-4 p-5 hover:bg-gray-50/50 transition-colors text-left"
      >
        <div className="w-10 h-10 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center flex-shrink-0">
          <svg className="w-5 h-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
            <path strokeLinecap="round" strokeLinejoin="round" d={iconPath} />
          </svg>
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between mb-1.5">
            <h3 className="text-gray-900 font-bold text-sm">{category.name}</h3>
            <span className={`text-xl font-black tabular-nums ${scoreColor}`}>{category.score}</span>
          </div>
          <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
            <div className={`h-full ${barColor} rounded-full transition-all duration-1000 ease-out`} style={{ width: `${category.score}%` }} />
          </div>
          <div className="flex items-center gap-3 mt-2 text-xs text-gray-400">
            {passes > 0 && <span className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />{passes} passed</span>}
            {fails > 0 && <span className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-red-400" />{fails} failed</span>}
            <span className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-gray-300" />{category.checks.length} checks</span>
          </div>
        </div>
        <svg
          className={`w-4 h-4 text-gray-400 transition-transform duration-200 flex-shrink-0 ${expanded ? 'rotate-180' : ''}`}
          fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
      </button>
      {expanded && (
        <div className="border-t border-gray-100 px-5 pb-5">
          <div className="divide-y divide-gray-50">
            {category.checks.map((check) => (
              <div key={check.label} className="flex items-start gap-3 py-3.5">
                <StatusIcon status={check.status} />
                <div className="flex-1 min-w-0">
                  <p className="text-gray-900 font-medium text-sm">{check.label}</p>
                  <p className="text-gray-500 text-xs mt-0.5 leading-relaxed">{check.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

function RevealSection({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), delay)
    return () => clearTimeout(timer)
  }, [delay])
  return (
    <div style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(20px)' }}
      className="transition-all duration-700 ease-out"
    >
      {children}
    </div>
  )
}

/* ─── Scanning animation ─── */
function ScanningState({ url }: { url: string }) {
  const [phase, setPhase] = useState(0)
  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 600),
      setTimeout(() => setPhase(2), 1400),
      setTimeout(() => setPhase(3), 2200),
      setTimeout(() => setPhase(4), 3000),
      setTimeout(() => setPhase(5), 3800),
    ]
    return () => timers.forEach(clearTimeout)
  }, [])

  const phases = [
    'Fetching page HTML...',
    'Analyzing on-page SEO...',
    'Checking technical health...',
    'Evaluating off-page signals...',
    'Measuring performance...',
    'Building recommendations...',
  ]

  return (
    <div className="py-16 text-center">
      <div className="relative w-20 h-20 mx-auto mb-6">
        <div className="absolute inset-0 rounded-full border-4 border-gray-100" />
        <div className="absolute inset-0 rounded-full border-4 border-indigo-500 border-t-transparent animate-spin" />
        <div className="absolute inset-3 rounded-full border-4 border-indigo-300 border-b-transparent animate-spin" style={{ animationDirection: 'reverse', animationDuration: '1.5s' }} />
        <div className="absolute inset-0 flex items-center justify-center">
          <svg className="w-6 h-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
          </svg>
        </div>
      </div>
      <p className="text-gray-900 font-bold text-lg mb-4">Auditing {url}</p>
      <div className="space-y-2 text-sm max-w-xs mx-auto">
        {phases.map((text, i) => (
          <div key={text} className={`flex items-center gap-2.5 justify-center transition-all duration-500 ${i <= phase ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>
            {i < phase ? (
              <svg className="w-4 h-4 text-emerald-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
            ) : i === phase ? (
              <div className="w-4 h-4 flex-shrink-0 flex items-center justify-center"><div className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" /></div>
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

/* ─── Main component ─── */
export default function SeoAnalyzer() {
  const [url, setUrl] = useState('')
  const [scanning, setScanning] = useState(false)
  const [report, setReport] = useState<SeoReport | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [expandedCategories, setExpandedCategories] = useState<Set<string>>(new Set())
  const resultsRef = useRef<HTMLDivElement>(null)

  const toggleCategory = useCallback((name: string) => {
    setExpandedCategories(prev => {
      const next = new Set(prev)
      if (next.has(name)) next.delete(name)
      else next.add(name)
      return next
    })
  }, [])

  const handleAnalyze = useCallback(async () => {
    if (!url.trim() || scanning) return
    setReport(null)
    setError(null)
    setExpandedCategories(new Set())
    setScanning(true)

    try {
      const res = await fetch('/api/seo-audit/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url: url.trim() }),
      })
      if (!res.ok) {
        const data = await res.json().catch(() => null)
        throw new Error(data?.error || 'Audit failed')
      }
      const data: SeoReport = await res.json()
      setReport(data)
      setTimeout(() => resultsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 300)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong. Please try again.')
    } finally {
      setScanning(false)
    }
  }, [url, scanning])

  const totalChecks = report?.categories.reduce((s, c) => s + c.checks.length, 0) ?? 0

  return (
    <div>
      {/* Search Input */}
      <div className="max-w-2xl mx-auto mb-12">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">Instant SEO Audit</h2>
          <p className="text-gray-500 text-sm max-w-lg mx-auto">
            Enter any website to get a comprehensive SEO health check — technical, on-page, off-page,
            content, and performance analyzed in seconds.
          </p>
        </div>

        <div className="flex gap-3">
          <div className="relative flex-1">
            <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
            </svg>
            <input
              type="text"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleAnalyze()}
              placeholder="e.g. example.com, https://mysite.com"
              disabled={scanning}
              className="w-full pl-12 pr-4 py-4 rounded-xl border border-gray-200 bg-white text-gray-900 text-base placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/30 focus:border-indigo-400 transition-colors disabled:opacity-50"
            />
          </div>
          <button
            onClick={handleAnalyze}
            disabled={!url.trim() || scanning}
            className="hero-cta-shimmer inline-flex items-center gap-2 bg-indigo-600 text-white px-7 py-4 rounded-xl font-bold hover:bg-indigo-500 transition-colors shadow-lg shadow-indigo-600/20 text-base disabled:opacity-50 disabled:cursor-not-allowed flex-shrink-0"
          >
            Audit
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </button>
        </div>
        <p className="text-center text-gray-400 text-xs mt-3">100% free. No signup required. Results are confidential.</p>
      </div>

      {/* Error State */}
      {error && (
        <div className="max-w-2xl mx-auto mb-8 bg-red-50 border border-red-100 rounded-xl p-4 flex items-start gap-3">
          <svg className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z" />
          </svg>
          <div>
            <p className="text-red-800 font-semibold text-sm">Audit Failed</p>
            <p className="text-red-700 text-sm mt-0.5">{error}</p>
          </div>
        </div>
      )}

      {/* Scanning */}
      {scanning && <ScanningState url={url} />}

      {/* Results */}
      {report && !scanning && (
        <div ref={resultsRef} className="space-y-8">
          {/* Grade + Key Metrics Row */}
          <RevealSection delay={0}>
            <div className="grid md:grid-cols-3 gap-6">
              {/* Grade Circle */}
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 flex items-center justify-center">
                <GradeCircle score={report.overallScore} grade={report.grade} />
              </div>

              {/* Key Metrics Grid */}
              <div className="md:col-span-2 bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="text-gray-900 font-bold text-lg">{report.domain}</h3>
                    <p className="text-gray-400 text-sm">SEO audit based on live page analysis</p>
                  </div>
                  <span className="text-gray-400 text-xs bg-gray-50 px-2.5 py-1 rounded-md font-medium">{totalChecks} checks run</span>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {report.keyMetrics.map((m) => (
                    <div key={m.label} className="bg-gray-50 rounded-xl p-4">
                      <div className="flex items-center justify-between mb-1">
                        <p className="text-gray-400 text-xs font-medium">{m.label}</p>
                        <TrendIcon trend={m.trend} />
                      </div>
                      <p className="text-gray-900 text-lg font-bold">{m.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </RevealSection>

          {/* Detailed Audit */}
          <RevealSection delay={200}>
            <div className="space-y-3">
              <h3 className="text-gray-900 font-bold text-lg flex items-center gap-2">
                Detailed Audit
                <span className="text-gray-400 text-xs bg-gray-50 px-2 py-1 rounded-md font-medium">{totalChecks} checks run</span>
              </h3>
              {report.categories.map((cat) => (
                <CategoryCard
                  key={cat.name}
                  category={cat}
                  expanded={expandedCategories.has(cat.name)}
                  onToggle={() => toggleCategory(cat.name)}
                />
              ))}
            </div>
          </RevealSection>

          {/* Issues + Strengths */}
          <RevealSection delay={400}>
            <div className="grid md:grid-cols-2 gap-6">
              {report.topIssues.length > 0 && (
                <div className="bg-red-50/50 rounded-2xl border border-red-100/60 p-6">
                  <h3 className="text-gray-900 font-bold text-sm mb-4 flex items-center gap-2">
                    <svg className="w-4 h-4 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
                    </svg>
                    Top Issues
                  </h3>
                  <ul className="space-y-3">
                    {report.topIssues.map((issue) => (
                      <li key={issue} className="flex items-start gap-2 text-sm text-gray-700">
                        <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-1.5 flex-shrink-0" />
                        {issue}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {report.strengths.length > 0 && (
                <div className="bg-emerald-50/50 rounded-2xl border border-emerald-100/60 p-6">
                  <h3 className="text-gray-900 font-bold text-sm mb-4 flex items-center gap-2">
                    <svg className="w-4 h-4 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                    Strengths
                  </h3>
                  <ul className="space-y-3">
                    {report.strengths.map((s) => (
                      <li key={s} className="flex items-start gap-2 text-sm text-gray-700">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5 flex-shrink-0" />
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </RevealSection>

          {/* Action Plan */}
          {report.actions.length > 0 && (
            <RevealSection delay={600}>
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 0 1 0 3.75H5.625a1.875 1.875 0 0 1 0-3.75Z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-gray-900 font-bold text-lg">Recommended Action Plan</h3>
                    <p className="text-gray-400 text-xs">Prioritized steps to improve your SEO score</p>
                  </div>
                </div>
                <div className="grid sm:grid-cols-3 gap-4">
                  {report.actions.map((action, i) => {
                    const urgencyStyle: Record<string, string> = {
                      Immediate: 'bg-red-500',
                      'This Month': 'bg-amber-500',
                      Ongoing: 'bg-blue-500',
                    }
                    const impactStyle: Record<string, string> = {
                      High: 'bg-red-50 text-red-700 border-red-100',
                      Medium: 'bg-amber-50 text-amber-700 border-amber-100',
                      Low: 'bg-gray-50 text-gray-600 border-gray-100',
                    }
                    return (
                      <div key={action.title} className="relative bg-gray-50 rounded-xl p-5 border border-gray-100">
                        <div className="flex items-center justify-between mb-3">
                          <span className={`inline-flex items-center text-[10px] font-bold text-white uppercase tracking-wider px-2 py-0.5 rounded ${urgencyStyle[action.urgency]}`}>
                            {action.urgency}
                          </span>
                          <span className={`inline-flex items-center text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded border ${impactStyle[action.impact]}`}>
                            {action.impact} Impact
                          </span>
                        </div>
                        <h4 className="text-gray-900 font-bold text-sm mb-2">Step {i + 1}: {action.title}</h4>
                        <p className="text-gray-500 text-xs leading-relaxed">{action.description}</p>
                      </div>
                    )
                  })}
                </div>
              </div>
            </RevealSection>
          )}

          {/* CTA */}
          <RevealSection delay={800}>
            <div className="bg-gray-950 rounded-2xl p-8 text-center max-w-2xl mx-auto">
              <div className="w-10 h-10 rounded-lg bg-indigo-500/20 flex items-center justify-center mx-auto mb-4">
                <svg className="w-5 h-5 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75" />
                </svg>
              </div>
              <h3 className="text-white font-bold text-lg mb-2">Ready to Fix These Issues?</h3>
              <p className="text-gray-400 text-sm mb-6">
                DiamondLinks builds custom SEO strategies that address every issue found in your audit — from technical fixes to content optimization, link building, and off-page authority.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <a href="tel:504-233-4365" className="hero-cta-shimmer inline-flex items-center gap-2 bg-indigo-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-indigo-500 transition-colors shadow-lg shadow-indigo-600/25 text-base">
                  Call 504.233.4365
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                  </svg>
                </a>
                <a href="/free-orm-scan/" className="inline-flex items-center gap-2 border-2 border-white/20 text-white px-8 py-4 rounded-xl font-bold hover:bg-white/5 transition-colors text-base">
                  Try ORM Scan
                </a>
              </div>
              <p className="text-gray-500 text-xs mt-4">Free consultation. No obligation. 48-hour turnaround.</p>
            </div>
          </RevealSection>
        </div>
      )}
    </div>
  )
}
