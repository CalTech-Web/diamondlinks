import type { Metadata } from 'next'
import Link from 'next/link'
import ScrollReveal from '@/components/ScrollReveal'
import CtaBanner from '@/components/sections/CtaBanner'

export const metadata: Metadata = {
  title: 'ALV Flooring Case Study: #1 Rankings in 26 Days | DiamondLinks',
  description:
    'How ALV Flooring achieved #1 organic rankings and a 333% increase in sales calls within 26 days using DiamondLinks\' LinkLift + AI/AEO Boost strategy.',
  alternates: { canonical: 'https://diamondlinks.com/case-studies/alv-flooring/' },
  openGraph: {
    title: 'ALV Flooring Case Study: #1 Rankings in 26 Days | DiamondLinks',
    description:
      'How ALV Flooring achieved #1 organic rankings and a 333% increase in sales calls within 26 days using DiamondLinks\' LinkLift + AI/AEO Boost strategy.',
    url: 'https://diamondlinks.com/case-studies/alv-flooring/',
    type: 'article',
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'ALV Flooring: From Invisible to #1 in 26 Days',
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
  dateModified: '2026-03-03',
  mainEntityOfPage: 'https://diamondlinks.com/case-studies/alv-flooring/',
  description:
    'How ALV Flooring achieved #1 organic rankings and a 333% increase in sales calls within 26 days using DiamondLinks\' LinkLift + AI/AEO Boost strategy.',
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://diamondlinks.com/' },
    { '@type': 'ListItem', position: 2, name: 'Case Studies', item: 'https://diamondlinks.com/case-studies/' },
    { '@type': 'ListItem', position: 3, name: 'ALV Flooring', item: 'https://diamondlinks.com/case-studies/alv-flooring/' },
  ],
}

export default function AlvFlooringCaseStudyPage() {
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
              <span className="text-gray-500">ALV Flooring</span>
            </nav>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/25 text-blue-400 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400 inline-block" />
                  Case Study &middot; Local Business
                </div>

                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.1] tracking-tight mb-6">
                  ALV Flooring:{' '}
                  <span
                    style={{
                      background: 'linear-gradient(135deg, #60a5fa 0%, #818cf8 50%, #a78bfa 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}
                  >
                    From Invisible to #1 in 26 Days
                  </span>
                </h1>

                <p className="text-gray-300 text-lg leading-relaxed mb-8">
                  How DiamondLinks catapulted a family-owned flooring provider past Home Depot with strategic link building, AI-enhanced SEO, and local search dominance.
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
                    <p className="text-3xl font-bold text-white">26</p>
                    <p className="text-gray-400 text-sm mt-1">Days to #1</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-white">333%</p>
                    <p className="text-gray-400 text-sm mt-1">More Sales Calls</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-white">+69</p>
                    <p className="text-gray-400 text-sm mt-1">New Keywords</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-white">47</p>
                    <p className="text-gray-400 text-sm mt-1">GBP Calls</p>
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
                      <p className="text-white text-sm font-medium">Explosive growth since Jun 2025</p>
                      <p className="text-gray-500 text-xs">Outranking Home Depot locally</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Results Overview */}
        <section className="py-16 px-6 bg-white">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-xs font-semibold uppercase tracking-widest text-blue-600 mb-3">Results At a Glance</p>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Key Performance Metrics</h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Days to #1 */}
              <div className="group relative bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-100 p-6 hover:shadow-lg hover:shadow-blue-100/50 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg>
                </div>
                <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">Time to #1</p>
                <p
                  className="text-3xl font-bold"
                  style={{
                    background: 'linear-gradient(135deg, #2563eb 0%, #818cf8 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >26 Days</p>
                <p className="text-gray-400 text-sm mt-2">From invisible to page one</p>
              </div>

              {/* Keyword Growth */}
              <div className="group relative bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-100 p-6 hover:shadow-lg hover:shadow-blue-100/50 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                  </svg>
                </div>
                <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">Total Keywords</p>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-bold text-gray-900">15</span>
                  <svg className="w-5 h-5 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                  </svg>
                  <span
                    className="text-3xl font-bold"
                    style={{
                      background: 'linear-gradient(135deg, #4f46e5 0%, #818cf8 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}
                  >84</span>
                </div>
                <p className="text-gray-400 text-sm mt-2">217% keyword expansion</p>
              </div>

              {/* Sales Calls */}
              <div className="group relative bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-100 p-6 hover:shadow-lg hover:shadow-blue-100/50 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                  </svg>
                </div>
                <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">Sales Calls</p>
                <p
                  className="text-3xl font-bold"
                  style={{
                    background: 'linear-gradient(135deg, #059669 0%, #34d399 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >+333%</p>
                <p className="text-gray-400 text-sm mt-2">Direct revenue impact</p>
              </div>

              {/* GBP Calls */}
              <div className="group relative bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-100 p-6 hover:shadow-lg hover:shadow-blue-100/50 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-amber-50 border border-amber-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                  </svg>
                </div>
                <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">Google Business Calls</p>
                <p
                  className="text-3xl font-bold"
                  style={{
                    background: 'linear-gradient(135deg, #d97706 0%, #fbbf24 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >47</p>
                <p className="text-gray-400 text-sm mt-2">From GBP optimization</p>
              </div>

              {/* Total Impressions */}
              <div className="group relative bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-100 p-6 hover:shadow-lg hover:shadow-blue-100/50 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-violet-50 border border-violet-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6 text-violet-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  </svg>
                </div>
                <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">Total Impressions</p>
                <p
                  className="text-3xl font-bold"
                  style={{
                    background: 'linear-gradient(135deg, #7c3aed 0%, #a78bfa 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >19.8K</p>
                <p className="text-gray-400 text-sm mt-2">Search visibility surge</p>
              </div>

              {/* Map Pack Rankings */}
              <div className="group relative bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-100 p-6 hover:shadow-lg hover:shadow-blue-100/50 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-rose-50 border border-rose-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6 text-rose-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 0 1 3 3h-15a3 3 0 0 1 3-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 0 1-.982-3.172M9.497 14.25a7.454 7.454 0 0 0 .981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 0 0 7.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M18.75 4.236c.982.143 1.954.317 2.916.52A6.003 6.003 0 0 1 16.27 9.728M18.75 4.236V4.5c0 2.108-.966 3.99-2.48 5.228m0 0a6.003 6.003 0 0 1-4.52 1.522 6.003 6.003 0 0 1-4.52-1.522" />
                  </svg>
                </div>
                <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">Map Pack Rankings</p>
                <p
                  className="text-3xl font-bold"
                  style={{
                    background: 'linear-gradient(135deg, #e11d48 0%, #fb7185 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >#1</p>
                <p className="text-gray-400 text-sm mt-2">Multiple flooring keywords</p>
              </div>
            </div>
          </div>
        </section>

        {/* Performance Growth Chart */}
        <section className="py-16 px-6 bg-gray-50 border-y border-gray-100">
          <div className="max-w-5xl mx-auto">
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
              <div className="p-6 md:p-8 border-b border-gray-100">
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-blue-600 mb-1">Google Search Console</p>
                    <h3 className="text-xl font-bold text-gray-900">Ranking &amp; Keyword Growth</h3>
                  </div>
                  <div className="flex items-center gap-6 text-sm">
                    <div className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full bg-blue-500" />
                      <span className="text-gray-500">Keywords Ranked</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full bg-orange-400" />
                      <span className="text-gray-500">Total Clicks</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-6 md:p-8">
                {/* SVG Chart showing keyword/click growth from campaign start Jun 17 2025 */}
                <svg viewBox="0 0 800 280" className="w-full h-auto" role="img" aria-label="Chart showing keyword growth from 15 to 84 and click growth after campaign launch on June 17, 2025">
                  {/* Grid lines */}
                  <line x1="60" y1="30" x2="60" y2="240" stroke="#e5e7eb" strokeWidth="1" />
                  <line x1="60" y1="240" x2="780" y2="240" stroke="#e5e7eb" strokeWidth="1" />
                  <line x1="60" y1="187" x2="780" y2="187" stroke="#f3f4f6" strokeWidth="1" strokeDasharray="4 4" />
                  <line x1="60" y1="135" x2="780" y2="135" stroke="#f3f4f6" strokeWidth="1" strokeDasharray="4 4" />
                  <line x1="60" y1="82" x2="780" y2="82" stroke="#f3f4f6" strokeWidth="1" strokeDasharray="4 4" />
                  <line x1="60" y1="30" x2="780" y2="30" stroke="#f3f4f6" strokeWidth="1" strokeDasharray="4 4" />

                  {/* Y-axis labels (Keywords) */}
                  <text x="50" y="244" textAnchor="end" className="text-[11px]" fill="#9ca3af">0</text>
                  <text x="50" y="191" textAnchor="end" className="text-[11px]" fill="#9ca3af">25</text>
                  <text x="50" y="139" textAnchor="end" className="text-[11px]" fill="#9ca3af">50</text>
                  <text x="50" y="86" textAnchor="end" className="text-[11px]" fill="#9ca3af">75</text>
                  <text x="50" y="34" textAnchor="end" className="text-[11px]" fill="#9ca3af">100</text>

                  {/* X-axis labels */}
                  <text x="100" y="260" textAnchor="middle" className="text-[11px]" fill="#9ca3af">Apr 19</text>
                  <text x="200" y="260" textAnchor="middle" className="text-[11px]" fill="#9ca3af">May 1</text>
                  <text x="300" y="260" textAnchor="middle" className="text-[11px]" fill="#9ca3af">May 17</text>
                  <text x="400" y="260" textAnchor="middle" className="text-[11px]" fill="#9ca3af">Jun 3</text>
                  <text x="500" y="260" textAnchor="middle" className="text-[11px]" fill="#9ca3af">Jun 17</text>
                  <text x="620" y="260" textAnchor="middle" className="text-[11px]" fill="#9ca3af">Jun 30</text>
                  <text x="740" y="260" textAnchor="middle" className="text-[11px]" fill="#9ca3af">Jul 14</text>

                  {/* Campaign start marker */}
                  <line x1="500" y1="30" x2="500" y2="240" stroke="#3b82f6" strokeWidth="1" strokeDasharray="6 4" opacity="0.5" />
                  <rect x="445" y="14" width="110" height="20" rx="4" fill="#3b82f6" opacity="0.9" />
                  <text x="500" y="28" textAnchor="middle" className="text-[9px]" fill="white" fontWeight="600">PROGRAM STARTED</text>

                  {/* Blue keywords area fill */}
                  <defs>
                    <linearGradient id="kwGradAlv" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.25" />
                      <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.02" />
                    </linearGradient>
                    <linearGradient id="clickGradAlv" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#fb923c" stopOpacity="0.25" />
                      <stop offset="100%" stopColor="#fb923c" stopOpacity="0.02" />
                    </linearGradient>
                  </defs>

                  {/* Keywords line — flat at ~15 then climbing after campaign start to 84 */}
                  <path
                    d="M100,228 L200,228 L300,226 L400,227 L500,226 L540,218 L580,200 L620,175 L660,148 L700,118 L740,64"
                    fill="none"
                    stroke="#3b82f6"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M100,228 L200,228 L300,226 L400,227 L500,226 L540,218 L580,200 L620,175 L660,148 L700,118 L740,64 L740,240 L100,240 Z"
                    fill="url(#kwGradAlv)"
                  />

                  {/* Clicks line — near zero then climbing after campaign to 152 */}
                  <path
                    d="M100,238 L200,237 L300,238 L400,237 L500,236 L540,228 L580,218 L620,200 L660,180 L700,162 L740,140"
                    fill="none"
                    stroke="#f97316"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M100,238 L200,237 L300,238 L400,237 L500,236 L540,228 L580,218 L620,200 L660,180 L700,162 L740,140 L740,240 L100,240 Z"
                    fill="url(#clickGradAlv)"
                  />

                  {/* Endpoint dots */}
                  <circle cx="740" cy="64" r="5" fill="#3b82f6" />
                  <circle cx="740" cy="140" r="5" fill="#f97316" />

                  {/* Labels at end */}
                  <rect x="748" y="54" width="40" height="20" rx="4" fill="#3b82f6" />
                  <text x="768" y="68" textAnchor="middle" className="text-[10px]" fill="white" fontWeight="600">84</text>
                  <rect x="748" y="130" width="40" height="20" rx="4" fill="#f97316" />
                  <text x="768" y="144" textAnchor="middle" className="text-[10px]" fill="white" fontWeight="600">152</text>

                  {/* Start markers */}
                  <circle cx="100" cy="228" r="4" fill="#3b82f6" opacity="0.5" />
                  <circle cx="100" cy="238" r="4" fill="#f97316" opacity="0.5" />
                </svg>
                <p className="text-center text-gray-400 text-xs mt-4">
                  Keyword rankings and total clicks since campaign launch on June 17, 2025, showing dramatic growth within the first 26 days.
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
                <h3 className="font-bold text-gray-900 text-lg mb-2">About ALV Flooring</h3>
                <p className="text-gray-600 text-base leading-relaxed">
                  ALV Flooring is a family-owned flooring provider in Smyrna, Tennessee, specializing in residential flooring and contractor-direct sales. They offer everything from laminate and luxury vinyl to waterproof flooring, serving homeowners and contractors across the greater Nashville area. Despite offering competitive pricing and quality products, ALV Flooring was virtually invisible online when they came to DiamondLinks with a clear goal: get found online and start generating leads.
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
                The flooring industry is one of the most competitive local markets in home improvement. National chains like Home Depot and Lowe&apos;s dominate search results for nearly every flooring-related keyword, backed by enormous domain authority and decades of SEO investment. For a family-owned business in Smyrna, TN, competing against these retailers felt nearly impossible.
              </p>

              {/* Before State Card */}
              <div className="bg-white rounded-2xl border border-gray-200 p-6 md:p-8">
                <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-4">Starting Position — June 2025</p>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="flex items-center gap-3 bg-gray-50 rounded-xl p-4">
                    <div className="w-2 h-2 rounded-full bg-gray-400 flex-shrink-0" />
                    <div>
                      <p className="text-gray-900 font-semibold">15 keywords</p>
                      <p className="text-gray-400 text-sm">Total ranked terms</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 bg-gray-50 rounded-xl p-4">
                    <div className="w-2 h-2 rounded-full bg-gray-400 flex-shrink-0" />
                    <div>
                      <p className="text-gray-900 font-semibold">Zero page-one</p>
                      <p className="text-gray-400 text-sm">No first-page rankings</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 bg-gray-50 rounded-xl p-4">
                    <div className="w-2 h-2 rounded-full bg-gray-400 flex-shrink-0" />
                    <div>
                      <p className="text-gray-900 font-semibold">No Map Pack</p>
                      <p className="text-gray-400 text-sm">Invisible in local results</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 bg-gray-50 rounded-xl p-4">
                    <div className="w-2 h-2 rounded-full bg-gray-400 flex-shrink-0" />
                    <div>
                      <p className="text-gray-900 font-semibold">Minimal calls</p>
                      <p className="text-gray-400 text-sm">Word-of-mouth only</p>
                    </div>
                  </div>
                </div>
              </div>

              <p>
                ALV Flooring had no presence in Google&apos;s Map Pack, no organic rankings for high-intent commercial keywords like &ldquo;flooring contractors,&rdquo; &ldquo;affordable flooring,&rdquo; or &ldquo;waterproof flooring,&rdquo; and no visibility in AI-generated search results. Virtually all business came from word-of-mouth referrals. The question was not whether ALV Flooring had a good product. It was whether they could be found by the people actively searching for it.
              </p>
            </div>
          </div>
        </section>

        {/* Strategy & Execution */}
        <section className="py-16 px-6 bg-white">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-xs font-semibold uppercase tracking-widest text-blue-600 mb-3">Strategy &amp; Execution</p>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">LinkLift + AI/AEO Boost</h2>
              <p className="text-gray-500 mt-3 max-w-2xl mx-auto">We deployed a comprehensive four-pillar strategy combining strategic link building, AI-enhanced SEO, and Answer Engine Optimization to generate rapid, measurable results.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Pillar 1 */}
              <div className="relative bg-gradient-to-br from-blue-50 to-white rounded-2xl border border-blue-100 p-6 md:p-8">
                <div className="absolute top-6 right-6 text-5xl font-black text-blue-100">01</div>
                <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
                  </svg>
                </div>
                <h3 className="font-bold text-gray-900 text-lg mb-3">Strategic Link Building</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Targeted backlinks from high-authority sites in home improvement, real estate, contractor networks, and local business directories. Each link was contextually placed within content reinforcing ALV Flooring&apos;s expertise, building topical authority quickly.
                </p>
              </div>

              {/* Pillar 2 */}
              <div className="relative bg-gradient-to-br from-indigo-50 to-white rounded-2xl border border-indigo-100 p-6 md:p-8">
                <div className="absolute top-6 right-6 text-5xl font-black text-indigo-100">02</div>
                <div className="w-12 h-12 rounded-xl bg-indigo-100 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 0 0-2.455 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
                  </svg>
                </div>
                <h3 className="font-bold text-gray-900 text-lg mb-3">AI-Enhanced SEO</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  AI-powered keyword discovery identifying long-tail variations and semantic clusters real buyers use. Comprehensive schema markup across the site including LocalBusiness, Product, and FAQ schema targeting common buyer questions.
                </p>
              </div>

              {/* Pillar 3 */}
              <div className="relative bg-gradient-to-br from-violet-50 to-white rounded-2xl border border-violet-100 p-6 md:p-8">
                <div className="absolute top-6 right-6 text-5xl font-black text-violet-100">03</div>
                <div className="w-12 h-12 rounded-xl bg-violet-100 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-violet-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
                  </svg>
                </div>
                <h3 className="font-bold text-gray-900 text-lg mb-3">Hyper-Localization &amp; AEO</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Answer Engine Optimization positioning ALV Flooring in AI-generated search results. Content and structured data optimized to directly answer questions AI models pull from, paired with thorough Google Business Profile optimization.
                </p>
              </div>

              {/* Pillar 4 */}
              <div className="relative bg-gradient-to-br from-emerald-50 to-white rounded-2xl border border-emerald-100 p-6 md:p-8">
                <div className="absolute top-6 right-6 text-5xl font-black text-emerald-100">04</div>
                <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                  </svg>
                </div>
                <h3 className="font-bold text-gray-900 text-lg mb-3">Map Pack Optimization</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Treated the Google Map Pack as its own ranking channel. Built local citations, generated review velocity signals, and ensured NAP consistency across every platform. For a local flooring provider, the Map Pack is often more valuable than organic position one.
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
                    <span className="text-gray-400">Total Keywords</span>
                    <span className="text-white font-semibold">15</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-white/5">
                    <span className="text-gray-400">Page-One Rankings</span>
                    <span className="text-white font-semibold">0</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-white/5">
                    <span className="text-gray-400">Map Pack Presence</span>
                    <span className="text-white font-semibold">None</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-white/5">
                    <span className="text-gray-400">Sales Call Volume</span>
                    <span className="text-white font-semibold">Minimal</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-white/5">
                    <span className="text-gray-400">GBP Calls</span>
                    <span className="text-white font-semibold">Near Zero</span>
                  </div>
                  <div className="flex justify-between items-center py-3">
                    <span className="text-gray-400">AI Overview</span>
                    <span className="text-white font-semibold">Not Appearing</span>
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
                    <span className="text-gray-400">Total Keywords</span>
                    <div className="text-right">
                      <span className="text-white font-semibold">84</span>
                      <span className="ml-2 text-emerald-400 text-sm font-medium">+217%</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-white/5">
                    <span className="text-gray-400">Page-One Rankings</span>
                    <div className="text-right">
                      <span className="text-white font-semibold">Multiple #1</span>
                      <span className="ml-2 text-emerald-400 text-sm font-medium">New</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-white/5">
                    <span className="text-gray-400">Map Pack Presence</span>
                    <div className="text-right">
                      <span className="text-white font-semibold">#1 Position</span>
                      <span className="ml-2 text-emerald-400 text-sm font-medium">New</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-white/5">
                    <span className="text-gray-400">Sales Call Volume</span>
                    <div className="text-right">
                      <span className="text-white font-semibold">4.3x</span>
                      <span className="ml-2 text-emerald-400 text-sm font-medium">+333%</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-white/5">
                    <span className="text-gray-400">GBP Calls</span>
                    <div className="text-right">
                      <span className="text-white font-semibold">47</span>
                      <span className="ml-2 text-emerald-400 text-sm font-medium">New</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center py-3">
                    <span className="text-gray-400">AI Overview</span>
                    <div className="text-right">
                      <span className="text-white font-semibold">Featured</span>
                      <span className="ml-2 text-emerald-400 text-sm font-medium">New</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Keyword Ranking Timeline Table */}
            <div className="mt-12">
              <p className="text-xs font-semibold uppercase tracking-widest text-blue-400 mb-4 text-center">Keyword Ranking Timeline</p>
              <div className="overflow-x-auto rounded-2xl border border-white/10">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-white/[0.06]">
                      <th className="text-left px-5 py-3.5 font-semibold text-gray-300">Keyword</th>
                      <th className="text-left px-5 py-3.5 font-semibold text-gray-300">Result</th>
                      <th className="text-left px-5 py-3.5 font-semibold text-gray-300">Timeline</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    <tr className="bg-white/[0.02]">
                      <td className="px-5 py-3.5 text-white font-medium">&ldquo;Flooring Contractors&rdquo;</td>
                      <td className="px-5 py-3.5 text-blue-400 font-bold">#1 Organic + #1 Map Pack</td>
                      <td className="px-5 py-3.5 text-gray-400">Day 18</td>
                    </tr>
                    <tr className="bg-white/[0.04]">
                      <td className="px-5 py-3.5 text-white font-medium">&ldquo;Affordable Flooring&rdquo;</td>
                      <td className="px-5 py-3.5 text-blue-400 font-bold">#1 Organic</td>
                      <td className="px-5 py-3.5 text-gray-400">Day 19</td>
                    </tr>
                    <tr className="bg-white/[0.02]">
                      <td className="px-5 py-3.5 text-white font-medium">&ldquo;Laminate Flooring&rdquo;</td>
                      <td className="px-5 py-3.5 text-blue-400 font-bold">#2, behind Home Depot</td>
                      <td className="px-5 py-3.5 text-gray-400">Day 21</td>
                    </tr>
                    <tr className="bg-white/[0.04]">
                      <td className="px-5 py-3.5 text-white font-medium">&ldquo;LV Flooring Smyrna TN&rdquo;</td>
                      <td className="px-5 py-3.5 text-blue-400 font-bold">#2 Organic + #1 Map Pack</td>
                      <td className="px-5 py-3.5 text-gray-400">Day 24</td>
                    </tr>
                    <tr className="bg-white/[0.02]">
                      <td className="px-5 py-3.5 text-white font-medium">&ldquo;Waterproof Flooring&rdquo;</td>
                      <td className="px-5 py-3.5 text-blue-400 font-bold">#2, above Home Depot</td>
                      <td className="px-5 py-3.5 text-gray-400">Day 26</td>
                    </tr>
                  </tbody>
                </table>
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
                  &ldquo;You do not need a massive budget to outrank national retailers. What you need is a precise, multi-channel strategy that attacks the problem from every angle simultaneously.&rdquo;
                </p>
              </div>

              <p>
                ALV Flooring&apos;s results demonstrate something that many local businesses do not realize: link building alone would not have produced these results. SEO optimization alone would not have produced these results. It was the combination of strategic backlinks, AI-enhanced SEO, Answer Engine Optimization, and Map Pack optimization working together that created compounding momentum.
              </p>

              <p>
                The speed of these results is also worth noting. Twenty-six days from campaign launch to #1 rankings is not typical for the SEO industry, where timelines of three to six months are standard. By layering multiple ranking signals at once and targeting both traditional and AI-powered search channels, we compressed the timeline dramatically.
              </p>

              <p>
                For ALV Flooring, the transformation is about more than rankings. It is about a family-owned business that can now compete on equal footing with Home Depot in their local market. They have a steady stream of inbound calls from qualified buyers. They are visible in every search channel that matters, including AI overviews. And they have a foundation that will continue to compound as we build on these early results.
              </p>
            </div>

            {/* CTA Card */}
            <div className="mt-16 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl p-8 md:p-10 text-center relative overflow-hidden">
              <div className="absolute inset-0 opacity-[0.07]" style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.4) 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
              <div className="relative">
                <h3 className="text-white font-bold text-xl mb-2">
                  Ready to outrank the competition?
                </h3>
                <p className="text-blue-100 text-sm mb-6 max-w-md mx-auto">
                  See how DiamondLinks can deliver page-one rankings and measurable business growth for your local business.
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
