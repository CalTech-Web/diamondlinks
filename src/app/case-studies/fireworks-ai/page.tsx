import type { Metadata } from 'next'
import Link from 'next/link'
import ScrollReveal from '@/components/ScrollReveal'
import CtaBanner from '@/components/sections/CtaBanner'

export const metadata: Metadata = {
  title: 'Case Study: Fireworks.ai — 1,100% Organic Traffic Growth | DiamondLinks',
  description:
    'How DiamondLinks helped Fireworks.ai achieve 1,100% organic traffic growth, increase domain rating from 45 to 56, and grow organic keywords from 221 to 4,500 through strategic SEO.',
  alternates: { canonical: 'https://diamondlinks.com/case-studies/fireworks-ai/' },
  openGraph: {
    title: 'Case Study: Fireworks.ai — 1,100% Organic Traffic Growth | DiamondLinks',
    description:
      'How DiamondLinks helped Fireworks.ai achieve 1,100% organic traffic growth, increase domain rating from 45 to 56, and grow organic keywords from 221 to 4,500 through strategic SEO.',
    url: 'https://diamondlinks.com/case-studies/fireworks-ai/',
    type: 'article',
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Case Study: How Fireworks.ai Achieved 1,100% Organic Traffic Growth',
  author: {
    '@type': 'Person',
    name: 'Brandon Hopkins',
    jobTitle: 'Founder & CEO',
    url: 'https://diamondlinks.com/about/',
  },
  publisher: {
    '@type': 'Organization',
    name: 'DiamondLinks',
    url: 'https://diamondlinks.com/',
  },
  datePublished: '2026-03-03',
  dateModified: '2026-03-04',
  mainEntityOfPage: 'https://diamondlinks.com/case-studies/fireworks-ai/',
  description:
    'How DiamondLinks helped Fireworks.ai achieve 1,100% organic traffic growth, increase domain rating from 45 to 56, and grow organic keywords from 221 to 4,500.',
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://diamondlinks.com/' },
    { '@type': 'ListItem', position: 2, name: 'Case Studies', item: 'https://diamondlinks.com/case-studies/' },
    { '@type': 'ListItem', position: 3, name: 'Fireworks.ai', item: 'https://diamondlinks.com/case-studies/fireworks-ai/' },
  ],
}

export default function FireworksAiCaseStudyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <ScrollReveal>
        {/* Hero Header */}
        <section className="bg-gray-950 text-white pt-20 pb-24 px-6 relative overflow-hidden">
          {/* Gradient orbs */}
          <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-indigo-500/15 rounded-full blur-[100px] pointer-events-none" />
          {/* Dot grid */}
          <div
            className="absolute inset-0 pointer-events-none opacity-[0.12]"
            style={{
              backgroundImage: 'radial-gradient(rgba(255,255,255,0.25) 1px, transparent 1px)',
              backgroundSize: '28px 28px',
            }}
          />
          {/* Diagonal cut */}
          <div
            className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none"
            style={{ background: 'linear-gradient(to bottom right, transparent 49.9%, white 50%)' }}
          />

          <div className="relative max-w-5xl mx-auto">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-sm text-gray-400 mb-8">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <Link href="/case-studies/" className="hover:text-white transition-colors">Case Studies</Link>
              <span>/</span>
              <span className="text-gray-500">Fireworks.ai</span>
            </nav>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/25 text-blue-400 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400 inline-block" />
                  Case Study &middot; SaaS / AI
                </div>

                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.1] tracking-tight mb-6">
                  Fireworks.ai:{' '}
                  <span
                    style={{
                      background: 'linear-gradient(135deg, #60a5fa 0%, #818cf8 50%, #a78bfa 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}
                  >
                    1,100% Organic Traffic Growth
                  </span>
                </h1>

                <p className="text-gray-300 text-lg leading-relaxed mb-8">
                  How DiamondLinks transformed an AI infrastructure company&apos;s organic search presence through strategic SEO, earning 2,100 new backlinks and 20x keyword expansion.
                </p>

                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                    BH
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm">Brandon Hopkins</p>
                    <p className="text-gray-400 text-sm">Founder &amp; CEO &middot; Mar 2026</p>
                  </div>
                </div>
              </div>

              {/* Hero Stats Card */}
              <div className="bg-white/[0.04] backdrop-blur-sm border border-white/10 rounded-2xl p-8 space-y-6">
                <p className="text-xs font-semibold uppercase tracking-widest text-blue-400 mb-2">Campaign Highlights</p>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <p className="text-3xl font-bold text-white">1,100%</p>
                    <p className="text-gray-400 text-sm mt-1">Traffic Growth</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-white">45 &rarr; 56</p>
                    <p className="text-gray-400 text-sm mt-1">Domain Rating</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-white">+2,100</p>
                    <p className="text-gray-400 text-sm mt-1">New Backlinks</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-white">4,500</p>
                    <p className="text-gray-400 text-sm mt-1">Organic Keywords</p>
                  </div>
                </div>
                <div className="pt-4 border-t border-white/10">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                      <svg className="w-4 h-4 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-white text-sm font-medium">Consistent growth since Nov 2023</p>
                      <p className="text-gray-500 text-xs">Compounding results across 8+ months</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Results Overview — Full-width visual strip */}
        <section className="py-16 px-6 bg-white">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-xs font-semibold uppercase tracking-widest text-blue-600 mb-3">Results At a Glance</p>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Key Performance Metrics</h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Domain Rating */}
              <div className="group relative bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-100 p-6 hover:shadow-lg hover:shadow-blue-100/50 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
                  </svg>
                </div>
                <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">Domain Rating</p>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-bold text-gray-900">45</span>
                  <svg className="w-5 h-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                  </svg>
                  <span
                    className="text-3xl font-bold"
                    style={{
                      background: 'linear-gradient(135deg, #2563eb 0%, #818cf8 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}
                  >56</span>
                </div>
                <p className="text-gray-400 text-sm mt-2">+24% authority increase</p>
              </div>

              {/* Backlinks */}
              <div className="group relative bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-100 p-6 hover:shadow-lg hover:shadow-blue-100/50 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
                  </svg>
                </div>
                <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">New Backlinks</p>
                <p
                  className="text-3xl font-bold"
                  style={{
                    background: 'linear-gradient(135deg, #4f46e5 0%, #818cf8 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >+2,100</p>
                <p className="text-gray-400 text-sm mt-2">High-authority domains</p>
              </div>

              {/* Referring Domains */}
              <div className="group relative bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-100 p-6 hover:shadow-lg hover:shadow-blue-100/50 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-violet-50 border border-violet-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6 text-violet-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
                  </svg>
                </div>
                <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">Referring Domains</p>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-bold text-gray-900">286</span>
                  <svg className="w-5 h-5 text-violet-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                  </svg>
                  <span
                    className="text-3xl font-bold"
                    style={{
                      background: 'linear-gradient(135deg, #7c3aed 0%, #a78bfa 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}
                  >676</span>
                </div>
                <p className="text-gray-400 text-sm mt-2">136% domain growth</p>
              </div>

              {/* Organic Traffic */}
              <div className="group relative bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-100 p-6 hover:shadow-lg hover:shadow-blue-100/50 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941" />
                  </svg>
                </div>
                <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">Organic Traffic</p>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-bold text-gray-900">416</span>
                  <svg className="w-5 h-5 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                  </svg>
                  <span
                    className="text-3xl font-bold"
                    style={{
                      background: 'linear-gradient(135deg, #059669 0%, #34d399 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}
                  >4,500</span>
                </div>
                <p className="text-gray-400 text-sm mt-2">~1,100% monthly increase</p>
              </div>

              {/* Organic Keywords */}
              <div className="group relative bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-100 p-6 hover:shadow-lg hover:shadow-blue-100/50 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-amber-50 border border-amber-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                  </svg>
                </div>
                <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">Organic Keywords</p>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-bold text-gray-900">221</span>
                  <svg className="w-5 h-5 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                  </svg>
                  <span
                    className="text-3xl font-bold"
                    style={{
                      background: 'linear-gradient(135deg, #d97706 0%, #fbbf24 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}
                  >4,500</span>
                </div>
                <p className="text-gray-400 text-sm mt-2">20x keyword expansion</p>
              </div>

              {/* Traffic Value */}
              <div className="group relative bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-100 p-6 hover:shadow-lg hover:shadow-blue-100/50 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 0 1 3 3h-15a3 3 0 0 1 3-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 0 1-.982-3.172M9.497 14.25a7.454 7.454 0 0 0 .981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 0 0 7.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M18.75 4.236c.982.143 1.954.317 2.916.52A6.003 6.003 0 0 1 16.27 9.728M18.75 4.236V4.5c0 2.108-.966 3.99-2.48 5.228m0 0a6.003 6.003 0 0 1-4.52 1.522 6.003 6.003 0 0 1-4.52-1.522" />
                  </svg>
                </div>
                <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">Campaign Duration</p>
                <p
                  className="text-3xl font-bold"
                  style={{
                    background: 'linear-gradient(135deg, #475569 0%, #64748b 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >8 Months</p>
                <p className="text-gray-400 text-sm mt-2">Nov 2023 &mdash; Jul 2024</p>
              </div>
            </div>
          </div>
        </section>

        {/* Traffic Growth Chart */}
        <section className="py-16 px-6 bg-gray-50 border-y border-gray-100">
          <div className="max-w-5xl mx-auto">
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
              <div className="p-6 md:p-8 border-b border-gray-100">
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-blue-600 mb-1">Organic Performance</p>
                    <h3 className="text-xl font-bold text-gray-900">Traffic Growth Timeline</h3>
                  </div>
                  <div className="flex items-center gap-6 text-sm">
                    <div className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full bg-orange-400" />
                      <span className="text-gray-500">Organic Traffic</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full bg-blue-500" />
                      <span className="text-gray-500">Referring Domains</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-6 md:p-8">
                {/* SVG Chart — based on Fireworks.ai growth data from Nov 2023 to Jul 2024 */}
                {/* Traffic: 416 -> ~600 -> ~900 -> ~1500 -> ~2200 -> ~3000 -> ~3800 -> ~4200 -> ~4500 */}
                {/* Referring Domains: 286 -> ~310 -> ~350 -> ~400 -> ~460 -> ~530 -> ~600 -> ~650 -> ~676 */}
                <svg viewBox="0 0 830 280" className="w-full h-auto" role="img" aria-label="Traffic growth chart showing organic traffic rising from 416 to 4,500 monthly visits between November 2023 and July 2024">
                  {/* Grid lines */}
                  <line x1="60" y1="30" x2="60" y2="240" stroke="#e5e7eb" strokeWidth="1" />
                  <line x1="60" y1="240" x2="780" y2="240" stroke="#e5e7eb" strokeWidth="1" />
                  <line x1="60" y1="187" x2="780" y2="187" stroke="#f3f4f6" strokeWidth="1" strokeDasharray="4 4" />
                  <line x1="60" y1="135" x2="780" y2="135" stroke="#f3f4f6" strokeWidth="1" strokeDasharray="4 4" />
                  <line x1="60" y1="82" x2="780" y2="82" stroke="#f3f4f6" strokeWidth="1" strokeDasharray="4 4" />
                  <line x1="60" y1="30" x2="780" y2="30" stroke="#f3f4f6" strokeWidth="1" strokeDasharray="4 4" />

                  {/* Y-axis labels — left for traffic (0 to 5K), right for referring domains (0 to 800) */}
                  <text x="50" y="244" textAnchor="end" className="text-[11px]" fill="#9ca3af">0</text>
                  <text x="50" y="191" textAnchor="end" className="text-[11px]" fill="#9ca3af">1.5K</text>
                  <text x="50" y="139" textAnchor="end" className="text-[11px]" fill="#9ca3af">3K</text>
                  <text x="50" y="86" textAnchor="end" className="text-[11px]" fill="#9ca3af">4.5K</text>
                  <text x="50" y="34" textAnchor="end" className="text-[11px]" fill="#9ca3af">6K</text>

                  {/* Right Y-axis labels for referring domains */}
                  <text x="790" y="244" textAnchor="start" className="text-[11px]" fill="#9ca3af">0</text>
                  <text x="790" y="191" textAnchor="start" className="text-[11px]" fill="#9ca3af">200</text>
                  <text x="790" y="139" textAnchor="start" className="text-[11px]" fill="#9ca3af">400</text>
                  <text x="790" y="86" textAnchor="start" className="text-[11px]" fill="#9ca3af">600</text>
                  <text x="790" y="34" textAnchor="start" className="text-[11px]" fill="#9ca3af">800</text>

                  {/* X-axis labels */}
                  <text x="100" y="260" textAnchor="middle" className="text-[11px]" fill="#9ca3af">Nov 2023</text>
                  <text x="200" y="260" textAnchor="middle" className="text-[11px]" fill="#9ca3af">Dec 2023</text>
                  <text x="310" y="260" textAnchor="middle" className="text-[11px]" fill="#9ca3af">Feb 2024</text>
                  <text x="420" y="260" textAnchor="middle" className="text-[11px]" fill="#9ca3af">Apr 2024</text>
                  <text x="540" y="260" textAnchor="middle" className="text-[11px]" fill="#9ca3af">May 2024</text>
                  <text x="660" y="260" textAnchor="middle" className="text-[11px]" fill="#9ca3af">Jun 2024</text>
                  <text x="760" y="260" textAnchor="middle" className="text-[11px]" fill="#9ca3af">Jul 2024</text>

                  {/* Gradient definitions */}
                  <defs>
                    <linearGradient id="fwTrafficGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#fb923c" stopOpacity="0.3" />
                      <stop offset="100%" stopColor="#fb923c" stopOpacity="0.02" />
                    </linearGradient>
                    <linearGradient id="fwRefdomGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.2" />
                      <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.02" />
                    </linearGradient>
                  </defs>

                  {/* Orange organic traffic area fill */}
                  {/* Traffic path: 416(Nov) -> 600(Dec) -> 900(Jan) -> 1500(Feb) -> 2200(Mar) -> 3000(Apr) -> 3800(May) -> 4200(Jun) -> 4500(Jul) */}
                  {/* Y mapping: 0=240, 6000=30 => y = 240 - (val/6000)*210 */}
                  {/* 416=225, 600=219, 900=209, 1500=188, 2200=163, 3000=135, 3800=107, 4200=93, 4500=83 */}
                  <path
                    d="M100,225 L200,219 L255,209 L310,188 L365,163 L420,135 L540,107 L660,93 L760,83 L760,240 L100,240 Z"
                    fill="url(#fwTrafficGrad)"
                  />
                  {/* Orange traffic line */}
                  <path
                    d="M100,225 L200,219 L255,209 L310,188 L365,163 L420,135 L540,107 L660,93 L760,83"
                    fill="none"
                    stroke="#f97316"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />

                  {/* Blue referring domains area fill */}
                  {/* Ref domains: 286(Nov) -> 310(Dec) -> 350(Jan) -> 400(Feb) -> 460(Mar) -> 530(Apr) -> 600(May) -> 650(Jun) -> 676(Jul) */}
                  {/* Y mapping for right axis: 0=240, 800=30 => y = 240 - (val/800)*210 */}
                  {/* 286=165, 310=159, 350=148, 400=135, 460=120, 530=101, 600=83, 650=70, 676=63 */}
                  <path
                    d="M100,165 L200,159 L255,148 L310,135 L365,120 L420,101 L540,83 L660,70 L760,63 L760,240 L100,240 Z"
                    fill="url(#fwRefdomGrad)"
                  />
                  {/* Blue referring domains line */}
                  <path
                    d="M100,165 L200,159 L255,148 L310,135 L365,120 L420,101 L540,83 L660,70 L760,63"
                    fill="none"
                    stroke="#3b82f6"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />

                  {/* Endpoint dots */}
                  <circle cx="760" cy="83" r="5" fill="#f97316" />
                  <circle cx="760" cy="63" r="5" fill="#3b82f6" />

                  {/* Label at end */}
                  <rect x="685" y="62" width="55" height="20" rx="4" fill="#f97316" />
                  <text x="712" y="76" textAnchor="middle" className="text-[10px]" fill="white" fontWeight="600">4.5K</text>
                  <rect x="685" y="40" width="55" height="20" rx="4" fill="#3b82f6" />
                  <text x="712" y="54" textAnchor="middle" className="text-[10px]" fill="white" fontWeight="600">676</text>

                  {/* Start markers */}
                  <circle cx="100" cy="225" r="4" fill="#f97316" opacity="0.5" />
                  <circle cx="100" cy="165" r="4" fill="#3b82f6" opacity="0.5" />
                </svg>
                <p className="text-center text-gray-400 text-xs mt-4">
                  Organic traffic and referring domains since campaign commencement in November 2023, showing consistent upward trajectory.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* About the Client */}
        <section className="py-10 px-6 bg-white">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-start gap-4 bg-blue-50 border border-blue-100 rounded-2xl p-6 md:p-8">
              <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center flex-shrink-0 mt-1">
                <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 7.5h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z" />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 text-lg mb-2">About Fireworks.ai</h3>
                <p className="text-gray-600 text-base leading-relaxed">
                  Fireworks.ai is a leading company in the AI production workflow space, providing infrastructure and tools that enable developers to deploy and scale generative AI models with speed and efficiency. Operating in one of the most competitive and fast-evolving sectors in technology, Fireworks.ai needed a search presence that matched the caliber of their product. When they came to DiamondLinks in November 2023, we set out to build exactly that.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* The Challenge */}
        <section className="py-16 px-6 bg-gray-50 border-y border-gray-100">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-red-50 border border-red-100 flex items-center justify-center">
                <svg className="w-5 h-5 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
                </svg>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">The Challenge</h2>
            </div>

            <div className="space-y-5 text-gray-600 text-base leading-relaxed">
              <p>
                When Fireworks.ai engaged DiamondLinks, their organic search performance had significant room for growth. Despite building a strong product in a high-demand market, their website was not capturing the search traffic their brand deserved. The AI infrastructure space is crowded and fast-moving, with established players commanding significant organic search real estate.
              </p>

              {/* Before State Card */}
              <div className="bg-white rounded-2xl border border-gray-200 p-6 md:p-8">
                <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-4">Starting Position — November 2023</p>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="flex items-center gap-3 bg-gray-50 rounded-xl p-4">
                    <div className="w-2 h-2 rounded-full bg-gray-400 flex-shrink-0" />
                    <div>
                      <p className="text-gray-900 font-semibold">~416 visits/mo</p>
                      <p className="text-gray-400 text-sm">Organic traffic</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 bg-gray-50 rounded-xl p-4">
                    <div className="w-2 h-2 rounded-full bg-gray-400 flex-shrink-0" />
                    <div>
                      <p className="text-gray-900 font-semibold">DR 45</p>
                      <p className="text-gray-400 text-sm">Domain rating</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 bg-gray-50 rounded-xl p-4">
                    <div className="w-2 h-2 rounded-full bg-gray-400 flex-shrink-0" />
                    <div>
                      <p className="text-gray-900 font-semibold">221 keywords</p>
                      <p className="text-gray-400 text-sm">Organic rankings</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 bg-gray-50 rounded-xl p-4">
                    <div className="w-2 h-2 rounded-full bg-gray-400 flex-shrink-0" />
                    <div>
                      <p className="text-gray-900 font-semibold">286 ref. domains</p>
                      <p className="text-gray-400 text-sm">Backlink profile</p>
                    </div>
                  </div>
                </div>
              </div>

              <p>
                The goal was clear: achieve first-page Google rankings for identified target keywords, grow organic traffic substantially, strengthen domain authority, and build a backlink profile that would sustain long-term competitiveness in the AI SaaS space. This was not a matter of incremental improvement — they needed a comprehensive strategy that would produce measurable, compounding results.
              </p>
            </div>
          </div>
        </section>

        {/* Strategy & Execution */}
        <section className="py-16 px-6 bg-white">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-xs font-semibold uppercase tracking-widest text-blue-600 mb-3">Strategy &amp; Execution</p>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Four Pillars of Growth</h2>
              <p className="text-gray-500 mt-3 max-w-2xl mx-auto">We designed a comprehensive SEO strategy built on four pillars, each reinforcing the others to create compounding results over time.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Pillar 1 */}
              <div className="relative bg-gradient-to-br from-blue-50 to-white rounded-2xl border border-blue-100 p-6 md:p-8">
                <div className="absolute top-6 right-6 text-5xl font-black text-blue-100">01</div>
                <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                  </svg>
                </div>
                <h3 className="font-bold text-gray-900 text-lg mb-3">Keyword Optimization</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Exhaustive analysis of Fireworks.ai&apos;s competitive landscape, identifying the exact keywords their direct competitors were ranking for. We mapped content gaps and prioritized opportunities based on search volume, ranking difficulty, and business relevance — focusing on terms with clear commercial intent aligned with their AI infrastructure product offering.
                </p>
              </div>

              {/* Pillar 2 */}
              <div className="relative bg-gradient-to-br from-indigo-50 to-white rounded-2xl border border-indigo-100 p-6 md:p-8">
                <div className="absolute top-6 right-6 text-5xl font-black text-indigo-100">02</div>
                <div className="w-12 h-12 rounded-xl bg-indigo-100 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                  </svg>
                </div>
                <h3 className="font-bold text-gray-900 text-lg mb-3">On-Page SEO &amp; Content</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Thorough content audit identifying pages underperforming due to thin content, poor keyword targeting, or suboptimal on-page structure. We developed a content roadmap with both optimized existing pages and new SEO-focused content, built with proper heading hierarchy, internal linking, meta optimization, and natural keyword integration across every stage of the funnel.
                </p>
              </div>

              {/* Pillar 3 */}
              <div className="relative bg-gradient-to-br from-violet-50 to-white rounded-2xl border border-violet-100 p-6 md:p-8">
                <div className="absolute top-6 right-6 text-5xl font-black text-violet-100">03</div>
                <div className="w-12 h-12 rounded-xl bg-violet-100 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-violet-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
                  </svg>
                </div>
                <h3 className="font-bold text-gray-900 text-lg mb-3">Backlink Improvement</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  A domain rating of 45 was not sufficient to compete in the AI technology space, where many established players carry ratings of 70 or higher. We implemented strategic link building focused on high-authority, topically relevant domains with a natural anchor text mix, adding 2,100 new backlinks and growing referring domains from 286 to 676.
                </p>
              </div>

              {/* Pillar 4 */}
              <div className="relative bg-gradient-to-br from-emerald-50 to-white rounded-2xl border border-emerald-100 p-6 md:p-8">
                <div className="absolute top-6 right-6 text-5xl font-black text-emerald-100">04</div>
                <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z" />
                  </svg>
                </div>
                <h3 className="font-bold text-gray-900 text-lg mb-3">Technical SEO</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Thorough technical audits to identify and resolve crawl issues, optimize site speed and Core Web Vitals, improve URL structure and internal linking architecture, and ensure proper indexation of priority pages. Technical health is the invisible factor that separates a site that ranks from one that does not.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Before/After Comparison */}
        <section className="py-16 px-6 bg-gray-950 text-white relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none opacity-[0.06]" style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.3) 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
          <div className="absolute top-0 left-1/3 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

          <div className="relative max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-xs font-semibold uppercase tracking-widest text-blue-400 mb-3">Impact</p>
              <h2 className="text-2xl md:text-3xl font-bold">Before &amp; After</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Before */}
              <div className="bg-white/[0.04] border border-white/10 rounded-2xl p-6 md:p-8">
                <div className="inline-flex items-center gap-2 bg-gray-500/10 border border-gray-500/20 text-gray-400 text-xs font-semibold uppercase tracking-widest px-3 py-1.5 rounded-full mb-6">
                  Before DiamondLinks
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-3 border-b border-white/5">
                    <span className="text-gray-400">Organic Traffic</span>
                    <span className="text-white font-semibold">~416/mo</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-white/5">
                    <span className="text-gray-400">Domain Rating</span>
                    <span className="text-white font-semibold">45</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-white/5">
                    <span className="text-gray-400">Organic Keywords</span>
                    <span className="text-white font-semibold">221</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-white/5">
                    <span className="text-gray-400">Referring Domains</span>
                    <span className="text-white font-semibold">286</span>
                  </div>
                  <div className="flex justify-between items-center py-3">
                    <span className="text-gray-400">Backlinks</span>
                    <span className="text-white font-semibold">Baseline</span>
                  </div>
                </div>
              </div>

              {/* After */}
              <div className="bg-gradient-to-br from-blue-600/10 to-indigo-600/10 border border-blue-500/20 rounded-2xl p-6 md:p-8">
                <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/25 text-blue-400 text-xs font-semibold uppercase tracking-widest px-3 py-1.5 rounded-full mb-6">
                  After DiamondLinks
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-3 border-b border-white/5">
                    <span className="text-gray-400">Organic Traffic</span>
                    <div className="text-right">
                      <span className="text-white font-semibold">4,500/mo</span>
                      <span className="ml-2 text-emerald-400 text-sm font-medium">+1,100%</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-white/5">
                    <span className="text-gray-400">Domain Rating</span>
                    <div className="text-right">
                      <span className="text-white font-semibold">56</span>
                      <span className="ml-2 text-emerald-400 text-sm font-medium">+24%</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-white/5">
                    <span className="text-gray-400">Organic Keywords</span>
                    <div className="text-right">
                      <span className="text-white font-semibold">4,500</span>
                      <span className="ml-2 text-emerald-400 text-sm font-medium">+1,936%</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-white/5">
                    <span className="text-gray-400">Referring Domains</span>
                    <div className="text-right">
                      <span className="text-white font-semibold">676</span>
                      <span className="ml-2 text-emerald-400 text-sm font-medium">+136%</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center py-3">
                    <span className="text-gray-400">Backlinks</span>
                    <div className="text-right">
                      <span className="text-white font-semibold">+2,100</span>
                      <span className="ml-2 text-emerald-400 text-sm font-medium">New</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Takeaway */}
        <section className="py-16 px-6 bg-white">
          <div className="max-w-3xl mx-auto">
            <div className="space-y-6 text-gray-600 text-base leading-relaxed">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-100 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
                  </svg>
                </div>
                Key Takeaway
              </h2>

              {/* Highlight quote */}
              <div className="border-l-4 border-blue-500 bg-blue-50 rounded-r-2xl py-5 px-6">
                <p className="text-gray-800 font-medium text-lg leading-relaxed italic">
                  &ldquo;The 1,100% traffic increase was not a temporary spike — it was sustained growth built on a broadening keyword footprint and strengthened domain authority.&rdquo;
                </p>
              </div>

              <p>
                The Fireworks.ai campaign demonstrates what becomes possible when technical excellence, strategic content, and disciplined link building work together over time. There was no single silver bullet. The results came from a coordinated effort across every dimension of SEO, executed consistently and refined based on ongoing performance data.
              </p>

              <p>
                For SaaS companies operating in competitive technology markets, the lesson is straightforward: organic growth at this scale is achievable, but it requires a partner who understands both the technical foundations of SEO and the strategic nuance of competing in high-stakes search landscapes. A domain rating does not climb 11 points by accident. Organic traffic does not grow 1,100% without a deliberate, well-executed plan.
              </p>

              <p>
                Because the strategy was built on sustainable practices — high-quality content, earned backlinks from authoritative domains, and a technically sound site foundation — those gains are durable. Following the conclusion of Fireworks.ai&apos;s SEO campaign, the strategies set in place continue to drive results and compound over time.
              </p>
            </div>

            {/* CTA Card */}
            <div className="mt-16 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl p-8 md:p-10 text-center relative overflow-hidden">
              <div className="absolute inset-0 opacity-[0.07]" style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.4) 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
              <div className="relative">
                <h3 className="text-white font-bold text-xl mb-2">
                  Ready to see results like Fireworks.ai&apos;s?
                </h3>
                <p className="text-blue-100 text-sm mb-6 max-w-md mx-auto">
                  Discover how DiamondLinks can transform your organic search presence with a data-driven SEO strategy tailored to your industry.
                </p>
                <Link
                  href="/free-seo-audit/"
                  className="inline-flex items-center gap-2 bg-white text-blue-700 px-6 py-3 rounded-lg font-bold text-sm hover:bg-blue-50 transition-colors shadow-lg shadow-black/10"
                >
                  Get Your Free SEO Audit
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <CtaBanner />
      </ScrollReveal>
    </>
  )
}
