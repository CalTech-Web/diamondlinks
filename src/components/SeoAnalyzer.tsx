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
  icon: string
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
  domain: string
  overallScore: number
  grade: string
  categories: AuditCategory[]
  topIssues: string[]
  strengths: string[]
  actions: SeoActionItem[]
  keyMetrics: { label: string; value: string; trend: 'up' | 'down' | 'flat' }[]
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

/* ─── Domain parser ─── */
function parseDomain(input: string): string {
  let d = input.trim().toLowerCase()
  d = d.replace(/^https?:\/\//, '')
  d = d.replace(/^www\./, '')
  d = d.split('/')[0]
  d = d.split('?')[0]
  return d
}

/* ─── Score → Grade ─── */
function scoreToGrade(score: number): string {
  if (score >= 90) return 'A+'
  if (score >= 85) return 'A'
  if (score >= 80) return 'A-'
  if (score >= 75) return 'B+'
  if (score >= 70) return 'B'
  if (score >= 65) return 'B-'
  if (score >= 60) return 'C+'
  if (score >= 55) return 'C'
  if (score >= 50) return 'C-'
  if (score >= 45) return 'D+'
  if (score >= 40) return 'D'
  if (score >= 35) return 'D-'
  return 'F'
}

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

/* ─── Mock Report Generator ─── */
function generateSeoReport(input: string): SeoReport {
  const domain = parseDomain(input)
  const seed = hashString(domain)
  const rand = seededRandom(seed)

  // Base quality level (0-3) determines the overall scenario quality
  const qualityLevel = Math.floor(rand() * 4)

  // Generate category scores based on quality level
  const baseScore = 30 + qualityLevel * 15
  const jitter = (range: number) => Math.floor(rand() * range) - Math.floor(range / 2)

  const technicalScore = Math.min(100, Math.max(15, baseScore + jitter(30) + 10))
  const onPageScore = Math.min(100, Math.max(15, baseScore + jitter(25)))
  const offPageScore = Math.min(100, Math.max(15, baseScore + jitter(35) - 5))
  const contentScore = Math.min(100, Math.max(15, baseScore + jitter(25) + 5))
  const performanceScore = Math.min(100, Math.max(15, baseScore + jitter(30)))

  // Technical SEO checks
  const technicalChecks: AuditCheck[] = shuffle([
    { label: 'HTTPS Security', status: rand() > 0.2 ? 'pass' as Severity : 'fail' as Severity, detail: rand() > 0.2 ? 'Site is served over HTTPS with valid SSL certificate' : 'Site is not using HTTPS — critical security and ranking issue' },
    { label: 'Mobile Responsive', status: rand() > 0.3 ? 'pass' as Severity : 'warning' as Severity, detail: rand() > 0.3 ? 'Site passes Google mobile-friendly test' : 'Some elements not properly sized for mobile viewports' },
    { label: 'XML Sitemap', status: rand() > 0.4 ? 'pass' as Severity : 'fail' as Severity, detail: rand() > 0.4 ? 'Valid XML sitemap found and submitted to Google' : 'No XML sitemap detected — search engines may miss pages' },
    { label: 'Robots.txt', status: rand() > 0.35 ? 'pass' as Severity : 'warning' as Severity, detail: rand() > 0.35 ? 'Robots.txt properly configured' : 'Robots.txt may be blocking important pages from indexing' },
    { label: 'Canonical Tags', status: rand() > 0.45 ? 'pass' as Severity : 'warning' as Severity, detail: rand() > 0.45 ? 'Canonical tags properly implemented across pages' : 'Missing or inconsistent canonical tags on key pages' },
    { label: 'Schema Markup', status: rand() > 0.5 ? 'pass' as Severity : 'fail' as Severity, detail: rand() > 0.5 ? 'Structured data detected (Organization, LocalBusiness)' : 'No structured data markup found — missing rich snippet opportunities' },
    { label: 'Crawl Errors', status: rand() > 0.4 ? 'pass' as Severity : 'warning' as Severity, detail: rand() > 0.4 ? 'No significant crawl errors detected' : `${Math.floor(rand() * 15) + 3} crawl errors found including broken internal links` },
    { label: 'URL Structure', status: rand() > 0.5 ? 'pass' as Severity : 'warning' as Severity, detail: rand() > 0.5 ? 'Clean, descriptive URL structure with proper hierarchy' : 'URLs contain parameters or non-descriptive paths' },
  ], rand).slice(0, 6)

  // On-Page SEO checks
  const onPageChecks: AuditCheck[] = shuffle([
    { label: 'Title Tags', status: rand() > 0.3 ? 'pass' as Severity : 'warning' as Severity, detail: rand() > 0.3 ? 'Unique, keyword-optimized title tags on all pages' : `${Math.floor(rand() * 8) + 2} pages have duplicate or missing title tags` },
    { label: 'Meta Descriptions', status: rand() > 0.4 ? 'pass' as Severity : 'fail' as Severity, detail: rand() > 0.4 ? 'Compelling meta descriptions with target keywords' : `${Math.floor(rand() * 12) + 4} pages missing meta descriptions` },
    { label: 'H1 Tags', status: rand() > 0.35 ? 'pass' as Severity : 'warning' as Severity, detail: rand() > 0.35 ? 'Single, descriptive H1 tag on each page' : 'Multiple H1 tags found on some pages or missing H1s' },
    { label: 'Image Alt Text', status: rand() > 0.5 ? 'warning' as Severity : 'fail' as Severity, detail: rand() > 0.5 ? `${Math.floor(rand() * 10) + 5} images missing alt text` : `${Math.floor(rand() * 25) + 15} images missing alt text — hurting accessibility and SEO` },
    { label: 'Internal Linking', status: rand() > 0.4 ? 'pass' as Severity : 'warning' as Severity, detail: rand() > 0.4 ? 'Good internal link structure with relevant anchor text' : 'Weak internal linking — orphan pages detected with no inbound links' },
    { label: 'Keyword Usage', status: rand() > 0.45 ? 'pass' as Severity : 'warning' as Severity, detail: rand() > 0.45 ? 'Target keywords properly used in headings and content' : 'Primary keywords underutilized in headings and body content' },
    { label: 'Header Hierarchy', status: rand() > 0.4 ? 'pass' as Severity : 'warning' as Severity, detail: rand() > 0.4 ? 'Proper H1-H6 hierarchy maintained across pages' : 'Heading hierarchy skips levels (H1 to H3) on multiple pages' },
  ], rand).slice(0, 5)

  // Off-Page SEO checks
  const estimatedBacklinks = qualityLevel === 0 ? Math.floor(rand() * 50) + 8 : qualityLevel === 1 ? Math.floor(rand() * 200) + 50 : qualityLevel === 2 ? Math.floor(rand() * 800) + 200 : Math.floor(rand() * 3000) + 500
  const estimatedDA = Math.min(95, Math.max(5, Math.floor(baseScore * 0.85 + jitter(15))))
  const referringDomains = Math.floor(estimatedBacklinks * (0.3 + rand() * 0.4))

  const offPageChecks: AuditCheck[] = shuffle([
    { label: 'Backlink Profile', status: estimatedBacklinks > 100 ? 'pass' as Severity : estimatedBacklinks > 30 ? 'warning' as Severity : 'fail' as Severity, detail: `${estimatedBacklinks.toLocaleString()} total backlinks from ${referringDomains.toLocaleString()} referring domains` },
    { label: 'Domain Authority', status: estimatedDA > 40 ? 'pass' as Severity : estimatedDA > 20 ? 'warning' as Severity : 'fail' as Severity, detail: `Estimated domain authority: ${estimatedDA}/100` },
    { label: 'Toxic Backlinks', status: rand() > 0.5 ? 'pass' as Severity : 'warning' as Severity, detail: rand() > 0.5 ? 'No significant toxic backlinks detected' : `${Math.floor(rand() * 15) + 3} potentially toxic backlinks identified for disavow` },
    { label: 'Social Signals', status: rand() > 0.4 ? 'pass' as Severity : 'warning' as Severity, detail: rand() > 0.4 ? 'Active social media presence with regular engagement' : 'Low social media engagement — limited social signals for SEO' },
    { label: 'Local Citations', status: rand() > 0.45 ? 'pass' as Severity : 'warning' as Severity, detail: rand() > 0.45 ? 'Consistent NAP across major local directories' : 'Inconsistent business name/address/phone across directories' },
    { label: 'Google Business Profile', status: rand() > 0.4 ? 'pass' as Severity : 'fail' as Severity, detail: rand() > 0.4 ? 'Google Business Profile claimed and optimized' : 'Google Business Profile not claimed or incomplete' },
  ], rand).slice(0, 5)

  // Content checks
  const contentChecks: AuditCheck[] = shuffle([
    { label: 'Content Length', status: rand() > 0.4 ? 'pass' as Severity : 'warning' as Severity, detail: rand() > 0.4 ? 'Key pages have sufficient content depth (1,000+ words)' : `${Math.floor(rand() * 8) + 3} key pages have thin content (under 300 words)` },
    { label: 'Content Freshness', status: rand() > 0.5 ? 'warning' as Severity : 'fail' as Severity, detail: rand() > 0.5 ? 'Most content updated within the last 6 months' : `${Math.floor(rand() * 10) + 5} pages haven't been updated in over 12 months` },
    { label: 'Duplicate Content', status: rand() > 0.45 ? 'pass' as Severity : 'warning' as Severity, detail: rand() > 0.45 ? 'No significant duplicate content issues detected' : `${Math.floor(rand() * 5) + 2} pages contain substantial duplicate content` },
    { label: 'Blog / Content Hub', status: rand() > 0.5 ? 'pass' as Severity : 'fail' as Severity, detail: rand() > 0.5 ? 'Active blog with regular publishing cadence' : 'No blog or content hub detected — missing organic traffic opportunities' },
    { label: 'E-E-A-T Signals', status: rand() > 0.45 ? 'pass' as Severity : 'warning' as Severity, detail: rand() > 0.45 ? 'Author bios, credentials, and trust signals present' : 'Weak E-E-A-T signals — no author bios, credentials, or about page' },
  ], rand).slice(0, 4)

  // Performance checks
  const lcp = qualityLevel >= 2 ? (1.5 + rand() * 1.5).toFixed(1) : (2.5 + rand() * 3).toFixed(1)
  const cls = qualityLevel >= 2 ? (rand() * 0.1).toFixed(2) : (0.1 + rand() * 0.3).toFixed(2)
  const fid = qualityLevel >= 2 ? Math.floor(50 + rand() * 100) : Math.floor(150 + rand() * 300)

  const performanceChecks: AuditCheck[] = shuffle([
    { label: 'Page Load Speed', status: parseFloat(lcp) < 2.5 ? 'pass' as Severity : parseFloat(lcp) < 4 ? 'warning' as Severity : 'fail' as Severity, detail: `Largest Contentful Paint: ${lcp}s (target: under 2.5s)` },
    { label: 'Layout Stability', status: parseFloat(cls) < 0.1 ? 'pass' as Severity : parseFloat(cls) < 0.25 ? 'warning' as Severity : 'fail' as Severity, detail: `Cumulative Layout Shift: ${cls} (target: under 0.1)` },
    { label: 'Interactivity', status: fid < 100 ? 'pass' as Severity : fid < 300 ? 'warning' as Severity : 'fail' as Severity, detail: `First Input Delay: ${fid}ms (target: under 100ms)` },
    { label: 'Image Optimization', status: rand() > 0.5 ? 'warning' as Severity : 'fail' as Severity, detail: rand() > 0.5 ? `${Math.floor(rand() * 8) + 2} images could be further compressed` : `${Math.floor(rand() * 15) + 8} unoptimized images adding ${(rand() * 3 + 1).toFixed(1)}MB to page weight` },
    { label: 'Render Blocking', status: rand() > 0.45 ? 'pass' as Severity : 'warning' as Severity, detail: rand() > 0.45 ? 'No significant render-blocking resources' : `${Math.floor(rand() * 5) + 2} render-blocking CSS/JS files delaying page render` },
    { label: 'Caching', status: rand() > 0.4 ? 'pass' as Severity : 'warning' as Severity, detail: rand() > 0.4 ? 'Browser caching properly configured for static assets' : 'Missing or insufficient cache headers on static resources' },
  ], rand).slice(0, 5)

  const categories: AuditCategory[] = [
    { name: 'Technical SEO', icon: 'M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l5.653-4.655m5.97-2.014L17.414 8l4.243-4.243a2 2 0 00-2.828-2.828L14.586 5.17l-2.614 2.614m5.97-2.014L13.3 10.413m0 0l-5.97 2.014m5.97-2.014L10.413 13.3m0 0l-2.014 5.97', score: technicalScore, checks: technicalChecks },
    { name: 'On-Page SEO', icon: 'M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z', score: onPageScore, checks: onPageChecks },
    { name: 'Off-Page SEO', icon: 'M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244', score: offPageScore, checks: offPageChecks },
    { name: 'Content', icon: 'M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25', score: contentScore, checks: contentChecks },
    { name: 'Performance', icon: 'M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75', score: performanceScore, checks: performanceChecks },
  ]

  // Calculate overall score as weighted average
  const overallScore = Math.round(
    technicalScore * 0.25 +
    onPageScore * 0.2 +
    offPageScore * 0.2 +
    contentScore * 0.2 +
    performanceScore * 0.15
  )

  const grade = scoreToGrade(overallScore)

  // Generate contextual issues and strengths
  const allChecks = categories.flatMap(c => c.checks.map(ch => ({ ...ch, category: c.name })))
  const failChecks = allChecks.filter(c => c.status === 'fail')
  const warnChecks = allChecks.filter(c => c.status === 'warning')
  const passChecks = allChecks.filter(c => c.status === 'pass')

  const topIssues = [
    ...failChecks.map(c => `${c.label}: ${c.detail}`),
    ...warnChecks.slice(0, 3).map(c => `${c.label}: ${c.detail}`),
  ].slice(0, 5)

  const strengths = passChecks.slice(0, 4).map(c => `${c.label}: ${c.detail}`)

  // Generate actions
  const allActions: SeoActionItem[] = shuffle([
    ...(failChecks.some(c => c.label === 'HTTPS Security') ? [{ title: 'Enable HTTPS', description: 'Install SSL certificate and redirect all HTTP traffic to HTTPS — critical for rankings and user trust', urgency: 'Immediate' as const, impact: 'High' as const }] : []),
    ...(failChecks.some(c => c.label === 'Schema Markup') ? [{ title: 'Add Schema Markup', description: 'Implement structured data (Organization, LocalBusiness, FAQ) to enable rich snippets in search results', urgency: 'This Month' as const, impact: 'Medium' as const }] : []),
    ...(failChecks.some(c => c.label === 'Meta Descriptions') ? [{ title: 'Write Meta Descriptions', description: 'Create unique, keyword-rich meta descriptions for all pages to improve click-through rates', urgency: 'Immediate' as const, impact: 'High' as const }] : []),
    ...(failChecks.some(c => c.label === 'Blog / Content Hub') ? [{ title: 'Launch Content Strategy', description: 'Start a blog targeting long-tail keywords to capture organic traffic and build topical authority', urgency: 'This Month' as const, impact: 'High' as const }] : []),
    ...(failChecks.some(c => c.label === 'Google Business Profile') ? [{ title: 'Claim Google Business Profile', description: 'Set up and optimize your Google Business Profile for local search visibility', urgency: 'Immediate' as const, impact: 'High' as const }] : []),
    ...(failChecks.some(c => c.label === 'XML Sitemap') ? [{ title: 'Create XML Sitemap', description: 'Generate and submit an XML sitemap to Google Search Console to improve crawl efficiency', urgency: 'Immediate' as const, impact: 'Medium' as const }] : []),
    { title: 'Optimize Page Speed', description: `Compress images, enable lazy loading, and minimize CSS/JS to improve Core Web Vitals scores`, urgency: 'This Month' as const, impact: 'High' as const },
    { title: 'Build Quality Backlinks', description: `Target ${Math.floor(rand() * 10) + 5} high-authority domains through guest posting and digital PR outreach`, urgency: 'Ongoing' as const, impact: 'High' as const },
    { title: 'Fix Internal Linking', description: 'Audit and improve internal link structure to distribute page authority effectively', urgency: 'This Month' as const, impact: 'Medium' as const },
    { title: 'Content Refresh', description: 'Update outdated pages with fresh data, examples, and expanded sections to maintain rankings', urgency: 'Ongoing' as const, impact: 'Medium' as const },
    { title: 'Monitor Rankings', description: 'Set up keyword tracking for top 20 target keywords and monitor weekly ranking changes', urgency: 'Ongoing' as const, impact: 'Low' as const },
  ], rand).slice(0, 4)

  // Key metrics
  const estimatedTraffic = qualityLevel === 0 ? Math.floor(rand() * 500) + 50 : qualityLevel === 1 ? Math.floor(rand() * 2000) + 500 : qualityLevel === 2 ? Math.floor(rand() * 8000) + 2000 : Math.floor(rand() * 25000) + 5000
  const indexedPages = Math.floor(rand() * 100) + 10 + qualityLevel * 30
  const keywordsRanking = Math.floor(estimatedTraffic * (0.3 + rand() * 0.5))

  const keyMetrics: SeoReport['keyMetrics'] = [
    { label: 'Domain Authority', value: `${estimatedDA}/100`, trend: estimatedDA > 30 ? 'up' : 'flat' },
    { label: 'Est. Monthly Traffic', value: estimatedTraffic.toLocaleString(), trend: rand() > 0.4 ? 'up' : 'down' },
    { label: 'Indexed Pages', value: indexedPages.toLocaleString(), trend: 'flat' },
    { label: 'Keywords Ranking', value: keywordsRanking.toLocaleString(), trend: rand() > 0.5 ? 'up' : 'down' },
    { label: 'Backlinks', value: estimatedBacklinks.toLocaleString(), trend: rand() > 0.4 ? 'up' : 'flat' },
    { label: 'Referring Domains', value: referringDomains.toLocaleString(), trend: rand() > 0.5 ? 'up' : 'down' },
  ]

  return { domain, overallScore, grade, categories, topIssues, strengths, actions: allActions, keyMetrics }
}

/* ─── Sub-components ─── */

function GradeCircle({ score, grade }: { score: number; grade: string }) {
  const percentage = score
  const color = gradeColor(grade)
  const bgColor = gradeBgColor(grade)

  return (
    <div className="text-center">
      <div className="relative w-40 h-40 mx-auto mb-4">
        <svg className="w-40 h-40 -rotate-90" viewBox="0 0 120 120">
          <circle cx="60" cy="60" r="52" fill="none" stroke="#e5e7eb" strokeWidth="8" />
          <circle
            cx="60"
            cy="60"
            r="52"
            fill="none"
            stroke="currentColor"
            strokeWidth="8"
            strokeDasharray={`${(percentage / 100) * 326.7} 326.7`}
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

function CategoryCard({ category, expanded, onToggle }: { category: AuditCategory; expanded: boolean; onToggle: () => void }) {
  const scoreColor = category.score >= 70 ? 'text-emerald-500' : category.score >= 50 ? 'text-amber-500' : 'text-red-500'
  const barColor = category.score >= 70 ? 'bg-emerald-500' : category.score >= 50 ? 'bg-amber-500' : 'bg-red-500'
  const passes = category.checks.filter(c => c.status === 'pass').length
  const fails = category.checks.filter(c => c.status === 'fail').length

  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full flex items-center gap-4 p-5 hover:bg-gray-50/50 transition-colors text-left"
      >
        <div className="w-10 h-10 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center flex-shrink-0">
          <svg className="w-5 h-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
            <path strokeLinecap="round" strokeLinejoin="round" d={category.icon} />
          </svg>
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between mb-1.5">
            <h3 className="text-gray-900 font-bold text-sm">{category.name}</h3>
            <span className={`text-xl font-black tabular-nums ${scoreColor}`}>{category.score}</span>
          </div>
          <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
            <div
              className={`h-full ${barColor} rounded-full transition-all duration-1000 ease-out`}
              style={{ width: `${category.score}%` }}
            />
          </div>
          <div className="flex items-center gap-3 mt-2 text-xs text-gray-400">
            {passes > 0 && <span className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />{passes} passed</span>}
            {fails > 0 && <span className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-red-400" />{fails} failed</span>}
            <span className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-gray-300" />{category.checks.length} checks</span>
          </div>
        </div>
        <svg
          className={`w-4 h-4 text-gray-400 transition-transform duration-200 flex-shrink-0 ${expanded ? 'rotate-180' : ''}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2.5}
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

function ImpactBadge({ impact }: { impact: string }) {
  const config: Record<string, string> = {
    High: 'bg-red-50 text-red-700 border-red-100',
    Medium: 'bg-amber-50 text-amber-700 border-amber-100',
    Low: 'bg-gray-50 text-gray-600 border-gray-100',
  }
  return (
    <span className={`inline-flex items-center text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded border ${config[impact] || config.Low}`}>
      {impact}
    </span>
  )
}

function UrgencyBadge({ urgency }: { urgency: string }) {
  const config: Record<string, string> = {
    Immediate: 'bg-red-500',
    'This Month': 'bg-amber-500',
    Ongoing: 'bg-blue-500',
  }
  return (
    <span className={`inline-flex items-center text-[10px] font-bold text-white uppercase tracking-wider px-2 py-0.5 rounded ${config[urgency] || config.Ongoing}`}>
      {urgency}
    </span>
  )
}

function RevealSection({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), delay)
    return () => clearTimeout(timer)
  }, [delay])

  return (
    <div
      ref={ref}
      className="transition-all duration-700 ease-out"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(20px)',
      }}
    >
      {children}
    </div>
  )
}

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
        <div className="w-12 h-12 rounded-full bg-emerald-500/20 flex items-center justify-center mx-auto mb-4">
          <svg className="w-6 h-6 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
          </svg>
        </div>
        <h3 className="text-white font-bold text-lg mb-2">Your Full SEO Audit Is on the Way</h3>
        <p className="text-gray-400 text-sm">
          We&apos;ll send a comprehensive analysis to <span className="text-white font-medium">{email}</span> within 24 hours.
        </p>
      </div>
    )
  }

  return (
    <div className="bg-gray-950 rounded-2xl p-8">
      <div className="max-w-xl mx-auto text-center">
        <div className="w-10 h-10 rounded-lg bg-indigo-500/20 flex items-center justify-center mx-auto mb-4">
          <svg className="w-5 h-5 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
          </svg>
        </div>
        <h3 className="text-white font-bold text-lg mb-2">Get Your Full SEO Audit</h3>
        <p className="text-gray-400 text-sm mb-6">
          This is a preview. Our team will send you a comprehensive audit with keyword opportunities, competitor analysis, and a custom SEO roadmap.
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/10 text-white placeholder:text-gray-500 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/40 focus:border-indigo-400 transition-colors"
          />
          <button
            type="submit"
            className="hero-cta-shimmer bg-indigo-600 text-white px-6 py-3 rounded-lg font-bold text-sm hover:bg-indigo-500 transition-colors shadow-lg shadow-indigo-600/25 flex-shrink-0"
          >
            Send My Audit
          </button>
        </form>
        <p className="text-gray-600 text-xs mt-3">Free. No spam. Unsubscribe anytime.</p>
      </div>
    </div>
  )
}

/* ─── Scanning Animation ─── */
function ScanningState({ domain }: { domain: string }) {
  const [phase, setPhase] = useState(0)

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 800),
      setTimeout(() => setPhase(2), 1600),
      setTimeout(() => setPhase(3), 2200),
      setTimeout(() => setPhase(4), 2800),
    ]
    return () => timers.forEach(clearTimeout)
  }, [])

  const phases = [
    'Crawling site structure...',
    'Analyzing on-page elements...',
    'Checking backlink profile...',
    'Evaluating performance metrics...',
    'Generating audit report...',
  ]

  return (
    <div className="py-16 text-center">
      <div className="relative w-20 h-20 mx-auto mb-6">
        <div className="absolute inset-0 rounded-full border-4 border-gray-100" />
        <div className="absolute inset-0 rounded-full border-4 border-indigo-500 border-t-transparent animate-spin" />
        <div className="absolute inset-3 rounded-full border-4 border-indigo-300 border-b-transparent animate-spin" style={{ animationDirection: 'reverse', animationDuration: '1.5s' }} />
        <div className="absolute inset-0 flex items-center justify-center">
          <svg className="w-6 h-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941" />
          </svg>
        </div>
      </div>
      <p className="text-gray-900 font-bold text-lg mb-2">
        Auditing <span className="text-indigo-600">{domain}</span>
      </p>
      <div className="space-y-2 text-sm max-w-xs mx-auto">
        {phases.map((text, i) => (
          <div
            key={text}
            className="flex items-center gap-2 justify-center transition-all duration-300"
            style={{
              opacity: i <= phase ? 1 : 0,
              transform: i <= phase ? 'translateY(0)' : 'translateY(8px)',
            }}
          >
            {i < phase ? (
              <svg className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
            ) : i === phase ? (
              <div className="w-3.5 h-3.5 flex items-center justify-center flex-shrink-0">
                <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse" />
              </div>
            ) : (
              <div className="w-3.5 h-3.5 flex-shrink-0" />
            )}
            <span className={i < phase ? 'text-gray-400' : i === phase ? 'text-gray-700 font-medium' : 'text-gray-300'}>
              {text}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

/* ─── Main Component ─── */
export default function SeoAnalyzer() {
  const [input, setInput] = useState('')
  const [scanning, setScanning] = useState(false)
  const [report, setReport] = useState<SeoReport | null>(null)
  const [expandedCategories, setExpandedCategories] = useState<Set<string>>(new Set())

  const handleAnalyze = useCallback(() => {
    const domain = parseDomain(input)
    if (!domain || scanning) return
    setReport(null)
    setExpandedCategories(new Set())
    setScanning(true)

    setTimeout(() => {
      const seoReport = generateSeoReport(input)
      setReport(seoReport)
      setScanning(false)
    }, 3500)
  }, [input, scanning])

  const toggleCategory = (name: string) => {
    setExpandedCategories(prev => {
      const next = new Set(prev)
      if (next.has(name)) next.delete(name)
      else next.add(name)
      return next
    })
  }

  return (
    <div>
      {/* Search Input */}
      <div className="max-w-2xl mx-auto mb-12">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
            Instant SEO Audit
          </h2>
          <p className="text-gray-500 text-sm max-w-lg mx-auto">
            Enter any website to get a comprehensive SEO health check — technical issues, content gaps, backlink analysis, and performance metrics.
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
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
            </svg>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleAnalyze()}
              placeholder="e.g. example.com, www.mybusiness.com"
              disabled={scanning}
              className="w-full pl-12 pr-4 py-4 rounded-xl border border-gray-200 bg-white text-gray-900 text-base placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/30 focus:border-indigo-400 transition-colors disabled:opacity-50"
            />
          </div>
          <button
            onClick={handleAnalyze}
            disabled={!parseDomain(input) || scanning}
            className="hero-cta-shimmer inline-flex items-center gap-2 bg-indigo-600 text-white px-7 py-4 rounded-xl font-bold hover:bg-indigo-500 transition-colors shadow-lg shadow-indigo-600/20 text-base disabled:opacity-50 disabled:cursor-not-allowed flex-shrink-0"
          >
            Audit
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
      {scanning && <ScanningState domain={parseDomain(input)} />}

      {/* Results */}
      {report && !scanning && (
        <div className="space-y-8">
          {/* Grade + Key Metrics */}
          <RevealSection delay={0}>
            <div className="grid md:grid-cols-3 gap-6">
              {/* Grade Circle */}
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
                <GradeCircle score={report.overallScore} grade={report.grade} />
              </div>

              {/* Key Metrics */}
              <div className="md:col-span-2 bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
                <h3 className="text-gray-900 font-bold text-lg mb-1">
                  SEO Audit for <span className="text-indigo-600">{report.domain}</span>
                </h3>
                <p className="text-gray-400 text-sm mb-6">
                  Comprehensive analysis of your website&apos;s search engine optimization health
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {report.keyMetrics.map((metric) => (
                    <div key={metric.label} className="bg-gray-50 rounded-xl p-3.5">
                      <div className="flex items-center justify-between mb-1">
                        <p className="text-gray-400 text-[10px] font-semibold uppercase tracking-wider">{metric.label}</p>
                        <TrendIcon trend={metric.trend} />
                      </div>
                      <p className="text-gray-900 text-lg font-bold">{metric.value}</p>
                    </div>
                  ))}
                </div>

                {report.overallScore < 60 && (
                  <div className="mt-4 bg-amber-50 border border-amber-100 rounded-xl p-4 flex items-start gap-3">
                    <svg className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
                    </svg>
                    <div>
                      <p className="text-amber-900 font-semibold text-sm">Significant SEO Issues Detected</p>
                      <p className="text-amber-800 text-sm mt-0.5">
                        Your site has critical optimization gaps that are likely costing you organic traffic and rankings.
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </RevealSection>

          {/* Category Audits */}
          <RevealSection delay={200}>
            <div className="space-y-3">
              <div className="flex items-center gap-3 mb-2">
                <h3 className="text-gray-900 font-bold text-lg">Detailed Audit</h3>
                <span className="text-gray-400 text-xs bg-gray-50 px-2 py-1 rounded-md font-medium">
                  {report.categories.reduce((sum, c) => sum + c.checks.length, 0)} checks run
                </span>
              </div>
              {report.categories.map((category) => (
                <CategoryCard
                  key={category.name}
                  category={category}
                  expanded={expandedCategories.has(category.name)}
                  onToggle={() => toggleCategory(category.name)}
                />
              ))}
            </div>
          </RevealSection>

          {/* Issues + Strengths */}
          <RevealSection delay={400}>
            <div className="grid md:grid-cols-2 gap-6">
              {/* Top Issues */}
              <div className="bg-red-50/50 rounded-2xl border border-red-100/60 p-6">
                <h3 className="text-gray-900 font-bold text-sm mb-4 flex items-center gap-2">
                  <svg className="w-4 h-4 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
                  </svg>
                  Top Issues ({report.topIssues.length})
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

              {/* Strengths */}
              <div className="bg-emerald-50/50 rounded-2xl border border-emerald-100/60 p-6">
                <h3 className="text-gray-900 font-bold text-sm mb-4 flex items-center gap-2">
                  <svg className="w-4 h-4 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg>
                  Strengths ({report.strengths.length})
                </h3>
                <ul className="space-y-3">
                  {report.strengths.map((strength) => (
                    <li key={strength} className="flex items-start gap-2 text-sm text-gray-700">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5 flex-shrink-0" />
                      {strength}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </RevealSection>

          {/* Action Plan */}
          <RevealSection delay={600}>
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 0 1 0 3.75H5.625a1.875 1.875 0 0 1 0-3.75Z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-gray-900 font-bold text-lg">SEO Action Plan</h3>
                  <p className="text-gray-400 text-xs">Prioritized steps to improve your search rankings</p>
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                {report.actions.map((action, i) => (
                  <div
                    key={action.title}
                    className="relative bg-gray-50 rounded-xl p-5 border border-gray-100"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold text-gray-300 uppercase tracking-wider">
                          Step {i + 1}
                        </span>
                        <ImpactBadge impact={action.impact} />
                      </div>
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
          <RevealSection delay={800}>
            <EmailCapture />
          </RevealSection>

          {/* CTA Card */}
          <RevealSection delay={1000}>
            <div className="bg-gray-950 rounded-2xl p-8 text-center max-w-2xl mx-auto">
              <h3 className="text-white font-bold text-xl mb-2">
                Ready for a Full SEO Strategy?
              </h3>
              <p className="text-gray-400 text-sm mb-6 leading-relaxed max-w-lg mx-auto">
                This is a preview. Our team performs a deep-dive audit, competitive analysis, keyword research, and builds a custom SEO roadmap tailored to your business goals.
              </p>
              <a
                href="tel:504-233-4365"
                className="hero-cta-shimmer inline-flex items-center gap-2 bg-indigo-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-indigo-500 transition-colors shadow-lg shadow-indigo-600/25 text-base"
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
