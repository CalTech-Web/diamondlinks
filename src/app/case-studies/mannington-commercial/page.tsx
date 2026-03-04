import type { Metadata } from 'next'
import Link from 'next/link'
import ScrollReveal from '@/components/ScrollReveal'
import CtaBanner from '@/components/sections/CtaBanner'

export const metadata: Metadata = {
  title: 'Case Study: Mannington Commercial SEO Results | DiamondLinks',
  description:
    'How DiamondLinks helped Mannington Commercial grow organic traffic by 47%, increase backlinks from 42,500 to 68,000, and improve Domain Rating from 57 to 60 through strategic SEO.',
  alternates: { canonical: 'https://diamondlinks.com/case-studies/mannington-commercial/' },
  openGraph: {
    title: 'Case Study: Mannington Commercial SEO Results | DiamondLinks',
    description:
      'How DiamondLinks helped Mannington Commercial grow organic traffic by 47%, increase backlinks from 42,500 to 68,000, and improve Domain Rating from 57 to 60 through strategic SEO.',
    url: 'https://diamondlinks.com/case-studies/mannington-commercial/',
    type: 'article',
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Case Study: How Mannington Commercial Achieved 47% Organic Traffic Growth',
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
  mainEntityOfPage: 'https://diamondlinks.com/case-studies/mannington-commercial/',
  description:
    'How DiamondLinks helped Mannington Commercial grow organic traffic by 47%, increase backlinks from 42,500 to 68,000, and improve Domain Rating from 57 to 60.',
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://diamondlinks.com/' },
    { '@type': 'ListItem', position: 2, name: 'Case Studies', item: 'https://diamondlinks.com/case-studies/' },
    { '@type': 'ListItem', position: 3, name: 'Mannington Commercial', item: 'https://diamondlinks.com/case-studies/mannington-commercial/' },
  ],
}

export default function ManningtonCommercialCaseStudyPage() {
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
              <span className="text-gray-500">Mannington Commercial</span>
            </nav>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/25 text-blue-400 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400 inline-block" />
                  Case Study &middot; Commercial Flooring
                </div>

                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.1] tracking-tight mb-6">
                  Mannington Commercial:{' '}
                  <span
                    style={{
                      background: 'linear-gradient(135deg, #60a5fa 0%, #818cf8 50%, #a78bfa 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}
                  >
                    47% Organic Traffic Growth
                  </span>
                </h1>

                <p className="text-gray-300 text-lg leading-relaxed mb-8">
                  How DiamondLinks helped a leading commercial flooring manufacturer grow organic traffic by 47%, increase backlinks by 60%, and expand referring domains by 180% through strategic SEO.
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
                    <p className="text-3xl font-bold text-white">+47%</p>
                    <p className="text-gray-400 text-sm mt-1">Traffic Growth</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-white">57 &rarr; 60</p>
                    <p className="text-gray-400 text-sm mt-1">Domain Rating</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-white">68K</p>
                    <p className="text-gray-400 text-sm mt-1">Total Backlinks</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-white">1,400</p>
                    <p className="text-gray-400 text-sm mt-1">Referring Domains</p>
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
                      <p className="text-white text-sm font-medium">Consistent growth since Apr 2021</p>
                      <p className="text-gray-500 text-xs">Compounding results over 2+ years</p>
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
                  <span className="text-3xl font-bold text-gray-900">57</span>
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
                  >60</span>
                </div>
                <p className="text-gray-400 text-sm mt-2">+5.3% authority increase</p>
              </div>

              {/* Backlinks */}
              <div className="group relative bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-100 p-6 hover:shadow-lg hover:shadow-blue-100/50 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
                  </svg>
                </div>
                <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">Total Backlinks</p>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-bold text-gray-900">42.5K</span>
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
                  >68K</span>
                </div>
                <p className="text-gray-400 text-sm mt-2">+60% backlink growth</p>
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
                  <span className="text-3xl font-bold text-gray-900">500</span>
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
                  >1,400</span>
                </div>
                <p className="text-gray-400 text-sm mt-2">180% domain growth</p>
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
                  <span className="text-3xl font-bold text-gray-900">11.8K</span>
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
                  >17.3K</span>
                </div>
                <p className="text-gray-400 text-sm mt-2">47% monthly increase</p>
              </div>

              {/* Keyword Rankings */}
              <div className="group relative bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-100 p-6 hover:shadow-lg hover:shadow-blue-100/50 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-amber-50 border border-amber-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                  </svg>
                </div>
                <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">Keyword Rankings</p>
                <p
                  className="text-3xl font-bold"
                  style={{
                    background: 'linear-gradient(135deg, #d97706 0%, #fbbf24 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >+1&ndash;3 Positions</p>
                <p className="text-gray-400 text-sm mt-2">Across targeted keywords</p>
              </div>

              {/* Traffic Value */}
              <div className="group relative bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-100 p-6 hover:shadow-lg hover:shadow-blue-100/50 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-rose-50 border border-rose-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6 text-rose-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
                  </svg>
                </div>
                <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">New Monthly Visitors</p>
                <p
                  className="text-3xl font-bold"
                  style={{
                    background: 'linear-gradient(135deg, #e11d48 0%, #fb7185 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >+5,500</p>
                <p className="text-gray-400 text-sm mt-2">Qualified architects &amp; specifiers</p>
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
                    <h3 className="text-xl font-bold text-gray-900">Traffic &amp; Referring Domains Growth</h3>
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
                {/* SVG Chart — based on the Ahrefs trend data from the PDF */}
                <svg viewBox="0 0 800 280" className="w-full h-auto" role="img" aria-label="Traffic growth chart showing organic traffic rising from 11,800 to 17,300 monthly visits and referring domains growing from 500 to 1,400 between April 2021 and April 2024">
                  {/* Grid lines */}
                  <line x1="60" y1="30" x2="60" y2="240" stroke="#e5e7eb" strokeWidth="1" />
                  <line x1="60" y1="240" x2="780" y2="240" stroke="#e5e7eb" strokeWidth="1" />
                  <line x1="60" y1="187" x2="780" y2="187" stroke="#f3f4f6" strokeWidth="1" strokeDasharray="4 4" />
                  <line x1="60" y1="135" x2="780" y2="135" stroke="#f3f4f6" strokeWidth="1" strokeDasharray="4 4" />
                  <line x1="60" y1="82" x2="780" y2="82" stroke="#f3f4f6" strokeWidth="1" strokeDasharray="4 4" />
                  <line x1="60" y1="30" x2="780" y2="30" stroke="#f3f4f6" strokeWidth="1" strokeDasharray="4 4" />

                  {/* Y-axis labels (traffic scale) */}
                  <text x="50" y="244" textAnchor="end" className="text-[11px]" fill="#9ca3af">0</text>
                  <text x="50" y="191" textAnchor="end" className="text-[11px]" fill="#9ca3af">5K</text>
                  <text x="50" y="139" textAnchor="end" className="text-[11px]" fill="#9ca3af">10K</text>
                  <text x="50" y="86" textAnchor="end" className="text-[11px]" fill="#9ca3af">15K</text>
                  <text x="50" y="34" textAnchor="end" className="text-[11px]" fill="#9ca3af">20K</text>

                  {/* X-axis labels */}
                  <text x="80" y="260" textAnchor="middle" className="text-[11px]" fill="#9ca3af">Apr 2021</text>
                  <text x="194" y="260" textAnchor="middle" className="text-[11px]" fill="#9ca3af">Oct 2021</text>
                  <text x="308" y="260" textAnchor="middle" className="text-[11px]" fill="#9ca3af">Apr 2022</text>
                  <text x="422" y="260" textAnchor="middle" className="text-[11px]" fill="#9ca3af">Oct 2022</text>
                  <text x="536" y="260" textAnchor="middle" className="text-[11px]" fill="#9ca3af">Apr 2023</text>
                  <text x="650" y="260" textAnchor="middle" className="text-[11px]" fill="#9ca3af">Oct 2023</text>
                  <text x="760" y="260" textAnchor="middle" className="text-[11px]" fill="#9ca3af">Apr 2024</text>

                  {/* Gradient definitions */}
                  <defs>
                    <linearGradient id="mcTrafficGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#fb923c" stopOpacity="0.3" />
                      <stop offset="100%" stopColor="#fb923c" stopOpacity="0.02" />
                    </linearGradient>
                    <linearGradient id="mcDomainGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.2" />
                      <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.02" />
                    </linearGradient>
                  </defs>

                  {/* Orange organic traffic area fill — 11.8K starting, grows to ~17.3K */}
                  <path
                    d="M80,116 L137,114 L194,110 L251,105 L308,98 L365,92 L422,85 L479,78 L536,72 L593,68 L650,62 L707,58 L760,55 L760,240 L80,240 Z"
                    fill="url(#mcTrafficGrad)"
                  />
                  {/* Orange traffic line */}
                  <path
                    d="M80,116 L137,114 L194,110 L251,105 L308,98 L365,92 L422,85 L479,78 L536,72 L593,68 L650,62 L707,58 L760,55"
                    fill="none"
                    stroke="#f97316"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />

                  {/* Blue referring domains area fill — 500 starting, grows to ~1,400 */}
                  <path
                    d="M80,228 L137,225 L194,220 L251,214 L308,206 L365,196 L422,186 L479,174 L536,164 L593,156 L650,150 L707,145 L760,140 L760,240 L80,240 Z"
                    fill="url(#mcDomainGrad)"
                  />
                  {/* Blue referring domains line */}
                  <path
                    d="M80,228 L137,225 L194,220 L251,214 L308,206 L365,196 L422,186 L479,174 L536,164 L593,156 L650,150 L707,145 L760,140"
                    fill="none"
                    stroke="#3b82f6"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />

                  {/* Endpoint dots */}
                  <circle cx="760" cy="55" r="5" fill="#f97316" />
                  <circle cx="760" cy="140" r="5" fill="#3b82f6" />

                  {/* Labels at end */}
                  <rect x="685" y="33" width="58" height="20" rx="4" fill="#f97316" />
                  <text x="714" y="47" textAnchor="middle" className="text-[10px]" fill="white" fontWeight="600">17.3K</text>
                  <rect x="685" y="121" width="58" height="20" rx="4" fill="#3b82f6" />
                  <text x="714" y="135" textAnchor="middle" className="text-[10px]" fill="white" fontWeight="600">1,400</text>

                  {/* Start markers */}
                  <circle cx="80" cy="116" r="4" fill="#f97316" opacity="0.5" />
                  <circle cx="80" cy="228" r="4" fill="#3b82f6" opacity="0.5" />
                </svg>
                <p className="text-center text-gray-400 text-xs mt-4">
                  Organic traffic and referring domain growth since campaign commencement in April 2021, showing consistent upward trajectory over a two-year period.
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
                <h3 className="font-bold text-gray-900 text-lg mb-2">About Mannington Commercial</h3>
                <p className="text-gray-600 text-base leading-relaxed">
                  Mannington Commercial is a leading provider of commercial flooring solutions, serving architects, designers, and facility managers across the United States. With a product portfolio spanning luxury vinyl tile, broadloom carpet, rubber flooring, and hardwood, Mannington has built a reputation for quality and innovation in the commercial flooring space over decades of operation. When they engaged DiamondLinks in April 2021, they had a strong brand presence offline but recognized a significant opportunity to strengthen their organic search performance.
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
                Despite being a well-established brand in the commercial flooring industry, Mannington Commercial faced a common challenge among manufacturers: their online visibility did not reflect the strength of their market position. Organic keyword rankings had plateaued, and organic traffic had settled around 11,800 monthly visits &mdash; respectable, but far below the potential for a company of their caliber and product breadth.
              </p>

              {/* Before State Card */}
              <div className="bg-white rounded-2xl border border-gray-200 p-6 md:p-8">
                <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-4">Starting Position &mdash; April 2021</p>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="flex items-center gap-3 bg-gray-50 rounded-xl p-4">
                    <div className="w-2 h-2 rounded-full bg-gray-400 flex-shrink-0" />
                    <div>
                      <p className="text-gray-900 font-semibold">~11,800 visits/mo</p>
                      <p className="text-gray-400 text-sm">Organic traffic</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 bg-gray-50 rounded-xl p-4">
                    <div className="w-2 h-2 rounded-full bg-gray-400 flex-shrink-0" />
                    <div>
                      <p className="text-gray-900 font-semibold">DR 57</p>
                      <p className="text-gray-400 text-sm">Domain rating</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 bg-gray-50 rounded-xl p-4">
                    <div className="w-2 h-2 rounded-full bg-gray-400 flex-shrink-0" />
                    <div>
                      <p className="text-gray-900 font-semibold">42,500 backlinks</p>
                      <p className="text-gray-400 text-sm">Total backlink count</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 bg-gray-50 rounded-xl p-4">
                    <div className="w-2 h-2 rounded-full bg-gray-400 flex-shrink-0" />
                    <div>
                      <p className="text-gray-900 font-semibold">500 referring domains</p>
                      <p className="text-gray-400 text-sm">Unique linking websites</p>
                    </div>
                  </div>
                </div>
              </div>

              <p>
                The commercial flooring market is intensely competitive online. Major competitors were aggressively investing in content marketing, backlink acquisition, and technical SEO. Mannington needed a comprehensive strategy that would not only close the gap but establish a sustainable competitive advantage in organic search. In an industry where architects and specifiers increasingly begin their product research online, ranking visibility was not just a marketing metric &mdash; it was a direct pipeline to new business.
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
              <p className="text-gray-500 mt-3 max-w-2xl mx-auto">We built a multi-layered SEO strategy tailored to Mannington Commercial&apos;s competitive landscape in commercial flooring, with four interconnected pillars creating compounding momentum.</p>
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
                <h3 className="font-bold text-gray-900 text-lg mb-3">Keyword Optimization &amp; Competitor Analysis</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Thorough competitive analysis mapping Mannington&apos;s keyword footprint against top competitors in the commercial flooring space. We identified clusters of high-intent keywords around product categories, installation specifications, and industry applications that represented untapped demand.
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
                <h3 className="font-bold text-gray-900 text-lg mb-3">On-Page SEO &amp; Content Enhancement</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Comprehensive content audits improving title tags, meta descriptions, header structures, and internal linking. Product pages enhanced with richer content addressing architects&apos; and specifiers&apos; questions &mdash; performance specifications, installation requirements, sustainability certifications, and application guidance.
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
                <h3 className="font-bold text-gray-900 text-lg mb-3">Backlink Improvement &amp; Authority Building</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Strategic link acquisition from high-authority domains in architecture, design, construction, and sustainability verticals. Natural anchor text distribution with every link earned from contextually relevant sources, growing backlinks from 42,500 to 68,000 and referring domains from 500 to 1,400.
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
                <h3 className="font-bold text-gray-900 text-lg mb-3">Technical SEO &amp; Site Performance</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Thorough technical audits addressing page load times, image delivery optimization, mobile responsiveness, and crawl error resolution. These foundational improvements ensured search engines could fully index Mannington&apos;s product catalog, amplifying the impact of content and link-building efforts.
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
                    <span className="text-white font-semibold">~11,800/mo</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-white/5">
                    <span className="text-gray-400">Domain Rating</span>
                    <span className="text-white font-semibold">57</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-white/5">
                    <span className="text-gray-400">Total Backlinks</span>
                    <span className="text-white font-semibold">42,500</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-white/5">
                    <span className="text-gray-400">Referring Domains</span>
                    <span className="text-white font-semibold">500</span>
                  </div>
                  <div className="flex justify-between items-center py-3">
                    <span className="text-gray-400">Keyword Rankings</span>
                    <span className="text-white font-semibold">Plateaued</span>
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
                      <span className="text-white font-semibold">17,300/mo</span>
                      <span className="ml-2 text-emerald-400 text-sm font-medium">+47%</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-white/5">
                    <span className="text-gray-400">Domain Rating</span>
                    <div className="text-right">
                      <span className="text-white font-semibold">60</span>
                      <span className="ml-2 text-emerald-400 text-sm font-medium">+5.3%</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-white/5">
                    <span className="text-gray-400">Total Backlinks</span>
                    <div className="text-right">
                      <span className="text-white font-semibold">68,000</span>
                      <span className="ml-2 text-emerald-400 text-sm font-medium">+60%</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-white/5">
                    <span className="text-gray-400">Referring Domains</span>
                    <div className="text-right">
                      <span className="text-white font-semibold">1,400</span>
                      <span className="ml-2 text-emerald-400 text-sm font-medium">+180%</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center py-3">
                    <span className="text-gray-400">Keyword Rankings</span>
                    <div className="text-right">
                      <span className="text-white font-semibold">+1&ndash;3 Positions</span>
                      <span className="ml-2 text-emerald-400 text-sm font-medium">Improved</span>
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
                  &ldquo;The 180% growth in referring domains was not the result of shortcuts or mass outreach &mdash; it was earned through relevant, authoritative links in the architecture, design, and construction ecosystem.&rdquo;
                </p>
              </div>

              <p>
                The Mannington Commercial campaign demonstrates what happens when a strong brand is paired with a disciplined, data-driven SEO strategy. Mannington already had the products, the reputation, and the industry credibility. What they needed was a partner who could translate that offline authority into organic search visibility.
              </p>

              <p>
                By combining competitor-informed keyword targeting, substantive content improvements, strategic authority building through high-quality backlinks, and foundational technical optimizations, DiamondLinks helped Mannington Commercial capture significantly more of the organic search demand in their market. The 47% increase in organic traffic translated to approximately 5,500 additional qualified visitors per month &mdash; architects, designers, and facility managers actively researching commercial flooring solutions.
              </p>

              <p>
                For manufacturers and B2B companies operating in competitive verticals, this case study reinforces a fundamental truth: SEO is not a one-time project. It is an ongoing investment in visibility that compounds over time. The gains Mannington achieved were not the result of a single tactic or a quick fix. They were the product of consistent, strategic execution across every dimension of search optimization.
              </p>
            </div>

            {/* CTA Card */}
            <div className="mt-16 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl p-8 md:p-10 text-center relative overflow-hidden">
              <div className="absolute inset-0 opacity-[0.07]" style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.4) 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
              <div className="relative">
                <h3 className="text-white font-bold text-xl mb-2">
                  Ready to see results like Mannington&apos;s?
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
