import type { Metadata } from 'next'
import Link from 'next/link'
import ScrollReveal from '@/components/ScrollReveal'
import CtaBanner from '@/components/sections/CtaBanner'

export const metadata: Metadata = {
  title: 'Mountain View Retreat Case Study | DiamondLinks',
  description:
    'How DiamondLinks helped a struggling New England rehab center go from near-closure to 118,000+ impressions, 620+ organic clicks, and new patient admissions within weeks.',
  alternates: { canonical: 'https://diamondlinks.com/case-studies/mountain-view-retreat/' },
  openGraph: {
    title: 'Mountain View Retreat Case Study | DiamondLinks',
    description:
      'How DiamondLinks helped a struggling New England rehab center go from near-closure to 118,000+ impressions, 620+ organic clicks, and new patient admissions within weeks.',
    url: 'https://diamondlinks.com/case-studies/mountain-view-retreat/',
    type: 'article',
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'From Crisis to Growth: How DiamondLinks Revived a Struggling Rehab Center',
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
  mainEntityOfPage: 'https://diamondlinks.com/case-studies/mountain-view-retreat/',
  description:
    'How DiamondLinks helped a struggling New England rehab center go from near-closure to 118,000+ impressions, 620+ organic clicks, and new patient admissions within weeks.',
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://diamondlinks.com/' },
    { '@type': 'ListItem', position: 2, name: 'Case Studies', item: 'https://diamondlinks.com/case-studies/' },
    { '@type': 'ListItem', position: 3, name: 'Mountain View Retreat', item: 'https://diamondlinks.com/case-studies/mountain-view-retreat/' },
  ],
}

export default function MountainViewRetreatCaseStudyPage() {
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
              <span className="text-gray-500">Mountain View Retreat</span>
            </nav>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/25 text-blue-400 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400 inline-block" />
                  Case Study &middot; Healthcare
                </div>

                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.1] tracking-tight mb-6">
                  From Crisis to Growth:{' '}
                  <span
                    style={{
                      background: 'linear-gradient(135deg, #60a5fa 0%, #818cf8 50%, #a78bfa 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}
                  >
                    Rehab Center Saved From Closure
                  </span>
                </h1>

                <p className="text-gray-300 text-lg leading-relaxed mb-8">
                  How DiamondLinks took a struggling New England treatment facility from near-closure to 118,000+ impressions, 620+ organic clicks, and new patient admissions within weeks.
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
                    <p className="text-3xl font-bold text-white">118K+</p>
                    <p className="text-gray-400 text-sm mt-1">Total Impressions</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-white">620+</p>
                    <p className="text-gray-400 text-sm mt-1">Organic Clicks</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-white">3</p>
                    <p className="text-gray-400 text-sm mt-1">Admissions Week One</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-white">11</p>
                    <p className="text-gray-400 text-sm mt-1">Tracked Calls in Days</p>
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
                      <p className="text-white text-sm font-medium">Owner: &ldquo;DiamondLinks saved his company&rdquo;</p>
                      <p className="text-gray-500 text-xs">Results visible within the first week</p>
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
              {/* Total Impressions */}
              <div className="group relative bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-100 p-6 hover:shadow-lg hover:shadow-blue-100/50 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  </svg>
                </div>
                <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">Total Impressions</p>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-bold text-gray-900">~0</span>
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
                  >118K+</span>
                </div>
                <p className="text-gray-400 text-sm mt-2">Explosive visibility surge</p>
              </div>

              {/* Organic Clicks */}
              <div className="group relative bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-100 p-6 hover:shadow-lg hover:shadow-blue-100/50 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.042 21.672 13.684 16.6m0 0-2.51 2.225.569-9.47 5.227 7.917-3.286-.672Zm-7.518-.267A8.25 8.25 0 1 1 20.25 10.5M8.288 14.212A5.25 5.25 0 1 1 17.25 10.5" />
                  </svg>
                </div>
                <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">Organic Clicks</p>
                <p
                  className="text-3xl font-bold"
                  style={{
                    background: 'linear-gradient(135deg, #4f46e5 0%, #818cf8 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >620+</p>
                <p className="text-gray-400 text-sm mt-2">High-intent treatment searches</p>
              </div>

              {/* Average CTR */}
              <div className="group relative bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-100 p-6 hover:shadow-lg hover:shadow-blue-100/50 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-violet-50 border border-violet-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6 text-violet-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
                  </svg>
                </div>
                <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">Average CTR</p>
                <p
                  className="text-3xl font-bold"
                  style={{
                    background: 'linear-gradient(135deg, #7c3aed 0%, #a78bfa 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >0.5%</p>
                <p className="text-gray-400 text-sm mt-2">Strong engagement for healthcare</p>
              </div>

              {/* Patient Admissions */}
              <div className="group relative bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-100 p-6 hover:shadow-lg hover:shadow-blue-100/50 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
                  </svg>
                </div>
                <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">New Admissions</p>
                <p
                  className="text-3xl font-bold"
                  style={{
                    background: 'linear-gradient(135deg, #059669 0%, #34d399 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >3</p>
                <p className="text-gray-400 text-sm mt-2">Within the first week of tracking</p>
              </div>

              {/* Tracked Calls */}
              <div className="group relative bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-100 p-6 hover:shadow-lg hover:shadow-blue-100/50 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-amber-50 border border-amber-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                  </svg>
                </div>
                <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">Tracked Calls</p>
                <p
                  className="text-3xl font-bold"
                  style={{
                    background: 'linear-gradient(135deg, #d97706 0%, #fbbf24 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >11</p>
                <p className="text-gray-400 text-sm mt-2">Within days of call tracking setup</p>
              </div>

              {/* Traffic Source Split */}
              <div className="group relative bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-100 p-6 hover:shadow-lg hover:shadow-blue-100/50 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-rose-50 border border-rose-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6 text-rose-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6a7.5 7.5 0 1 0 7.5 7.5h-7.5V6Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0 0 13.5 3v7.5Z" />
                  </svg>
                </div>
                <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">GBP Traffic Share</p>
                <p
                  className="text-3xl font-bold"
                  style={{
                    background: 'linear-gradient(135deg, #e11d48 0%, #fb7185 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >55%</p>
                <p className="text-gray-400 text-sm mt-2">Google Business Profile dominant</p>
              </div>
            </div>
          </div>
        </section>

        {/* Growth Chart */}
        <section className="py-16 px-6 bg-gray-50 border-y border-gray-100">
          <div className="max-w-5xl mx-auto">
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
              <div className="p-6 md:p-8 border-b border-gray-100">
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-blue-600 mb-1">Search Performance</p>
                    <h3 className="text-xl font-bold text-gray-900">Impressions &amp; Clicks Growth</h3>
                  </div>
                  <div className="flex items-center gap-6 text-sm">
                    <div className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full bg-blue-500" />
                      <span className="text-gray-500">Impressions</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full bg-emerald-500" />
                      <span className="text-gray-500">Clicks</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-6 md:p-8">
                {/* SVG Chart — Impressions & Clicks growth from Nov 2024 to Jul 2025 */}
                <svg viewBox="0 0 800 280" className="w-full h-auto" role="img" aria-label="Search performance chart showing impressions rising from near zero to over 118,000 and clicks growing to 620+ between November 2024 and July 2025">
                  {/* Grid lines */}
                  <line x1="60" y1="30" x2="60" y2="240" stroke="#e5e7eb" strokeWidth="1" />
                  <line x1="60" y1="240" x2="780" y2="240" stroke="#e5e7eb" strokeWidth="1" />
                  <line x1="60" y1="187" x2="780" y2="187" stroke="#f3f4f6" strokeWidth="1" strokeDasharray="4 4" />
                  <line x1="60" y1="135" x2="780" y2="135" stroke="#f3f4f6" strokeWidth="1" strokeDasharray="4 4" />
                  <line x1="60" y1="82" x2="780" y2="82" stroke="#f3f4f6" strokeWidth="1" strokeDasharray="4 4" />
                  <line x1="60" y1="30" x2="780" y2="30" stroke="#f3f4f6" strokeWidth="1" strokeDasharray="4 4" />

                  {/* Y-axis labels (impressions scale) */}
                  <text x="50" y="244" textAnchor="end" className="text-[11px]" fill="#9ca3af">0</text>
                  <text x="50" y="191" textAnchor="end" className="text-[11px]" fill="#9ca3af">30K</text>
                  <text x="50" y="139" textAnchor="end" className="text-[11px]" fill="#9ca3af">60K</text>
                  <text x="50" y="86" textAnchor="end" className="text-[11px]" fill="#9ca3af">90K</text>
                  <text x="50" y="34" textAnchor="end" className="text-[11px]" fill="#9ca3af">120K</text>

                  {/* X-axis labels */}
                  <text x="100" y="260" textAnchor="middle" className="text-[11px]" fill="#9ca3af">Nov 24</text>
                  <text x="214" y="260" textAnchor="middle" className="text-[11px]" fill="#9ca3af">Jan 25</text>
                  <text x="328" y="260" textAnchor="middle" className="text-[11px]" fill="#9ca3af">Mar 25</text>
                  <text x="442" y="260" textAnchor="middle" className="text-[11px]" fill="#9ca3af">Apr 25</text>
                  <text x="556" y="260" textAnchor="middle" className="text-[11px]" fill="#9ca3af">May 25</text>
                  <text x="670" y="260" textAnchor="middle" className="text-[11px]" fill="#9ca3af">Jun 25</text>
                  <text x="760" y="260" textAnchor="middle" className="text-[11px]" fill="#9ca3af">Jul 25</text>

                  {/* Gradient fills */}
                  <defs>
                    <linearGradient id="impressionGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.25" />
                      <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.02" />
                    </linearGradient>
                    <linearGradient id="clickGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#10b981" stopOpacity="0.2" />
                      <stop offset="100%" stopColor="#10b981" stopOpacity="0.02" />
                    </linearGradient>
                  </defs>

                  {/* Impressions area fill — starts near zero, slow ramp through winter, steeper ramp spring, surge to 118K by Jul */}
                  <path
                    d="M100,238 L157,236 L214,233 L271,228 L328,218 L385,200 L442,172 L499,145 L556,110 L613,78 L670,55 L730,42 L760,35 L760,240 L100,240 Z"
                    fill="url(#impressionGrad)"
                  />
                  {/* Impressions line */}
                  <path
                    d="M100,238 L157,236 L214,233 L271,228 L328,218 L385,200 L442,172 L499,145 L556,110 L613,78 L670,55 L730,42 L760,35"
                    fill="none"
                    stroke="#3b82f6"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />

                  {/* Clicks area fill — much smaller scale, hugs closer to baseline, grows proportionally */}
                  <path
                    d="M100,239 L157,239 L214,238 L271,237 L328,235 L385,232 L442,228 L499,222 L556,215 L613,206 L670,198 L730,192 L760,188 L760,240 L100,240 Z"
                    fill="url(#clickGrad)"
                  />
                  {/* Clicks line */}
                  <path
                    d="M100,239 L157,239 L214,238 L271,237 L328,235 L385,232 L442,228 L499,222 L556,215 L613,206 L670,198 L730,192 L760,188"
                    fill="none"
                    stroke="#10b981"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />

                  {/* Endpoint dots */}
                  <circle cx="760" cy="35" r="5" fill="#3b82f6" />
                  <circle cx="760" cy="188" r="5" fill="#10b981" />

                  {/* Labels at end */}
                  <rect x="685" y="14" width="58" height="20" rx="4" fill="#3b82f6" />
                  <text x="714" y="28" textAnchor="middle" className="text-[10px]" fill="white" fontWeight="600">118K</text>
                  <rect x="685" y="170" width="58" height="20" rx="4" fill="#10b981" />
                  <text x="714" y="184" textAnchor="middle" className="text-[10px]" fill="white" fontWeight="600">620+</text>

                  {/* Start markers */}
                  <circle cx="100" cy="238" r="4" fill="#3b82f6" opacity="0.5" />
                  <circle cx="100" cy="239" r="4" fill="#10b981" opacity="0.5" />
                </svg>
                <p className="text-center text-gray-400 text-xs mt-4">
                  Google Search Console impressions and clicks from campaign launch in November 2024 through July 2025, showing accelerating growth trajectory.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* About the Client */}
        <section className="py-16 px-6 bg-white">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-start gap-4 bg-blue-50 border border-blue-100 rounded-2xl p-6 md:p-8">
              <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center flex-shrink-0 mt-1">
                <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 7.5h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z" />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 text-lg mb-2">About Mountain View Retreat</h3>
                <p className="text-gray-600 text-base leading-relaxed">
                  Mountain View Retreat is a drug and alcohol treatment center serving patients across New England. Operating in one of the most competitive and heavily regulated verticals in healthcare marketing, the facility was facing a critical turning point when they reached out to DiamondLinks. Online visibility was virtually nonexistent, admissions had dried up, and the owner was candid: the facility was on the verge of closing.
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
                The addiction treatment industry is one of the most competitive and heavily regulated verticals in healthcare marketing. Facilities face strict advertising guidelines, intense competition from well-funded national chains, and the inherent sensitivity of marketing services that people often search for in moments of crisis.
              </p>

              <p>
                When Mountain View came to us, the facility was facing a perfect storm of problems. Their website was generating almost no organic traffic. They had no meaningful presence in local search results or Google Maps. Their Google Business Profile was underoptimized and generating minimal engagement. Admissions were unpredictable at best and nonexistent at worst. The owner was running out of runway.
              </p>

              {/* Before State Card */}
              <div className="bg-white rounded-2xl border border-gray-200 p-6 md:p-8">
                <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-4">Starting Position</p>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="flex items-center gap-3 bg-gray-50 rounded-xl p-4">
                    <div className="w-2 h-2 rounded-full bg-gray-400 flex-shrink-0" />
                    <div>
                      <p className="text-gray-900 font-semibold">Near zero traffic</p>
                      <p className="text-gray-400 text-sm">Organic visibility</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 bg-gray-50 rounded-xl p-4">
                    <div className="w-2 h-2 rounded-full bg-gray-400 flex-shrink-0" />
                    <div>
                      <p className="text-gray-900 font-semibold">No Map Pack presence</p>
                      <p className="text-gray-400 text-sm">Local search results</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 bg-gray-50 rounded-xl p-4">
                    <div className="w-2 h-2 rounded-full bg-gray-400 flex-shrink-0" />
                    <div>
                      <p className="text-gray-900 font-semibold">Avg position: 50</p>
                      <p className="text-gray-400 text-sm">Google search ranking</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 bg-gray-50 rounded-xl p-4">
                    <div className="w-2 h-2 rounded-full bg-gray-400 flex-shrink-0" />
                    <div>
                      <p className="text-gray-900 font-semibold">Facility near closure</p>
                      <p className="text-gray-400 text-sm">Business viability at risk</p>
                    </div>
                  </div>
                </div>
              </div>

              <p>
                Previous marketing efforts had failed to account for the unique dynamics of the addiction treatment space. Generic SEO tactics do not work in healthcare verticals where Google applies heightened scrutiny under its Your Money or Your Life (YMYL) guidelines. Content needs to demonstrate genuine expertise. Local signals need to be exceptionally strong. And the competitive landscape is filled with facilities spending tens of thousands of dollars per month on paid advertising, making organic visibility the only sustainable path for a smaller operator.
              </p>
            </div>
          </div>
        </section>

        {/* Strategy & Execution */}
        <section className="py-16 px-6 bg-white">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-xs font-semibold uppercase tracking-widest text-blue-600 mb-3">Strategy &amp; Execution</p>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">AI/AEO Boost Strategy</h2>
              <p className="text-gray-500 mt-3 max-w-2xl mx-auto">We deployed a comprehensive approach combining AI-enhanced search optimization with Answer Engine Optimization techniques, executed with the urgency the situation demanded.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Pillar 1 */}
              <div className="relative bg-gradient-to-br from-blue-50 to-white rounded-2xl border border-blue-100 p-6 md:p-8">
                <div className="absolute top-6 right-6 text-5xl font-black text-blue-100">01</div>
                <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
                  </svg>
                </div>
                <h3 className="font-bold text-gray-900 text-lg mb-3">AI-Enhanced SEO Foundation</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Exhaustive competitive keyword analysis using AI-powered research tools, identifying the specific search terms prospective patients and families use in New England. We mapped competitive difficulty, uncovered content gaps, and built a structured content strategy prioritizing high-intent terms with achievable ranking potential.
                </p>
              </div>

              {/* Pillar 2 */}
              <div className="relative bg-gradient-to-br from-indigo-50 to-white rounded-2xl border border-indigo-100 p-6 md:p-8">
                <div className="absolute top-6 right-6 text-5xl font-black text-indigo-100">02</div>
                <div className="w-12 h-12 rounded-xl bg-indigo-100 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                  </svg>
                </div>
                <h3 className="font-bold text-gray-900 text-lg mb-3">Hyper-Localization with AEO</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Tailored every element for geographic relevance: location-specific landing pages, locally optimized meta tags, and content referencing the communities served. Every page was rebuilt with structured schema markup to help search engines and AI answer engines understand exactly what Mountain View offers.
                </p>
              </div>

              {/* Pillar 3 */}
              <div className="relative bg-gradient-to-br from-violet-50 to-white rounded-2xl border border-violet-100 p-6 md:p-8">
                <div className="absolute top-6 right-6 text-5xl font-black text-violet-100">03</div>
                <div className="w-12 h-12 rounded-xl bg-violet-100 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-violet-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498 4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 0 0-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0Z" />
                  </svg>
                </div>
                <h3 className="font-bold text-gray-900 text-lg mb-3">Map Pack Domination</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Built a citation profile across healthcare directories, local business listings, and industry-specific platforms. Implemented a review generation strategy to build social proof, and created location-based content designed to signal relevance to Google&apos;s local algorithm. Map Pack visibility is often the difference between getting calls and being invisible.
                </p>
              </div>

              {/* Pillar 4 */}
              <div className="relative bg-gradient-to-br from-emerald-50 to-white rounded-2xl border border-emerald-100 p-6 md:p-8">
                <div className="absolute top-6 right-6 text-5xl font-black text-emerald-100">04</div>
                <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
                  </svg>
                </div>
                <h3 className="font-bold text-gray-900 text-lg mb-3">Google Business Profile Overhaul</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Complete GBP optimization: every field optimized, service categories built out, high-quality photos added, and a sustained system for generating and responding to patient reviews. This was not a one-time update but a living, active representation of the business. 55% of all traffic ultimately came through GBP.
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
                    <span className="text-gray-400">Search Impressions</span>
                    <span className="text-white font-semibold">~0</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-white/5">
                    <span className="text-gray-400">Organic Clicks</span>
                    <span className="text-white font-semibold">~0</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-white/5">
                    <span className="text-gray-400">Average Position</span>
                    <span className="text-white font-semibold">50+</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-white/5">
                    <span className="text-gray-400">Map Pack Visibility</span>
                    <span className="text-white font-semibold">None</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-white/5">
                    <span className="text-gray-400">Inbound Calls</span>
                    <span className="text-white font-semibold">Minimal</span>
                  </div>
                  <div className="flex justify-between items-center py-3">
                    <span className="text-gray-400">Patient Admissions</span>
                    <span className="text-white font-semibold">Near zero</span>
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
                    <span className="text-gray-400">Search Impressions</span>
                    <div className="text-right">
                      <span className="text-white font-semibold">118,000+</span>
                      <span className="ml-2 text-emerald-400 text-sm font-medium">From zero</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-white/5">
                    <span className="text-gray-400">Organic Clicks</span>
                    <div className="text-right">
                      <span className="text-white font-semibold">620+</span>
                      <span className="ml-2 text-emerald-400 text-sm font-medium">From zero</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-white/5">
                    <span className="text-gray-400">Average CTR</span>
                    <div className="text-right">
                      <span className="text-white font-semibold">0.5%</span>
                      <span className="ml-2 text-emerald-400 text-sm font-medium">Active</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-white/5">
                    <span className="text-gray-400">GBP Traffic Share</span>
                    <div className="text-right">
                      <span className="text-white font-semibold">55%</span>
                      <span className="ml-2 text-emerald-400 text-sm font-medium">Dominant</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-white/5">
                    <span className="text-gray-400">Tracked Calls</span>
                    <div className="text-right">
                      <span className="text-white font-semibold">11 in days</span>
                      <span className="ml-2 text-emerald-400 text-sm font-medium">Immediate</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center py-3">
                    <span className="text-gray-400">Patient Admissions</span>
                    <div className="text-right">
                      <span className="text-white font-semibold">3 in week one</span>
                      <span className="ml-2 text-emerald-400 text-sm font-medium">Revenue</span>
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
                  &ldquo;DiamondLinks saved his company.&rdquo; — The owner&apos;s words after seeing 3 new patient admissions in the first week and 11 tracked calls within days of launch.
                </p>
              </div>

              <p>
                Mountain View Retreat&apos;s story is a powerful reminder that the right digital strategy can fundamentally change the trajectory of a business, even one on the brink of failure. The owner did not need a bigger advertising budget. He did not need a flashy rebrand. He needed a partner who understood the specific dynamics of his industry and could execute a data-driven strategy with precision and speed.
              </p>

              <p>
                The addiction treatment space is unforgiving. Competition is fierce, regulations are strict, and the stakes are as high as they get: every missed call is a person who might not get the help they need. For facilities operating in this environment, generic marketing approaches are not just ineffective — they are dangerous, because every month without results is a month closer to closing the doors.
              </p>

              <p>
                What made the difference for Mountain View was a combination of factors: AI-powered keyword research that found opportunities human analysis would have missed, AEO techniques that positioned the facility where modern searchers actually look, and a relentless focus on local signals that earned Google&apos;s trust. The technology mattered, but it was the strategic thinking behind it that turned a failing business into a growing one.
              </p>
            </div>

            {/* CTA Card */}
            <div className="mt-16 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl p-8 md:p-10 text-center relative overflow-hidden">
              <div className="absolute inset-0 opacity-[0.07]" style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.4) 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
              <div className="relative">
                <h3 className="text-white font-bold text-xl mb-2">
                  Get results like Mountain View Retreat
                </h3>
                <p className="text-blue-100 text-sm mb-6 max-w-md mx-auto">
                  Find out how DiamondLinks can drive real admissions, calls, and revenue for your treatment center or healthcare facility.
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
