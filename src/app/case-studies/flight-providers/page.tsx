import type { Metadata } from 'next'
import Link from 'next/link'
import ScrollReveal from '@/components/ScrollReveal'
import CtaBanner from '@/components/sections/CtaBanner'

export const metadata: Metadata = {
  title: 'Flight Providers Case Study: 1,600% Keyword Growth in 4 Months | DiamondLinks',
  description:
    'How DiamondLinks helped Flight Providers, a Branson skydiving company, grow organic keywords by 1,600%, increase traffic by 300%, and drive bookings through targeted SEO.',
  alternates: { canonical: 'https://diamondlinks.com/case-studies/flight-providers/' },
  openGraph: {
    title: 'Flight Providers Case Study: 1,600% Keyword Growth in 4 Months | DiamondLinks',
    description:
      'How DiamondLinks helped Flight Providers, a Branson skydiving company, grow organic keywords by 1,600%, increase traffic by 300%, and drive bookings through targeted SEO.',
    url: 'https://diamondlinks.com/case-studies/flight-providers/',
    type: 'article',
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Flight Providers: From Zero Visibility to Booked Flights in Under 4 Months',
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
  mainEntityOfPage: 'https://diamondlinks.com/case-studies/flight-providers/',
  description:
    'How DiamondLinks helped Flight Providers, a Branson skydiving company, grow organic keywords by 1,600% and increase traffic by 300% in under four months.',
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://diamondlinks.com/' },
    { '@type': 'ListItem', position: 2, name: 'Case Studies', item: 'https://diamondlinks.com/case-studies/' },
    { '@type': 'ListItem', position: 3, name: 'Flight Providers', item: 'https://diamondlinks.com/case-studies/flight-providers/' },
  ],
}

export default function FlightProvidersCaseStudyPage() {
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
              <span className="text-gray-500">Flight Providers</span>
            </nav>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/25 text-blue-400 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400 inline-block" />
                  Case Study &middot; Adventure Tourism
                </div>

                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.1] tracking-tight mb-6">
                  Flight Providers:{' '}
                  <span
                    style={{
                      background: 'linear-gradient(135deg, #60a5fa 0%, #818cf8 50%, #a78bfa 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}
                  >
                    1,600% Keyword Growth in&nbsp;4&nbsp;Months
                  </span>
                </h1>

                <p className="text-gray-300 text-lg leading-relaxed mb-8">
                  How DiamondLinks took a Branson skydiving company from near-zero search visibility to booked flights through targeted SEO, earning 75 new backlinks and driving a 300% traffic increase.
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
                    <p className="text-3xl font-bold text-white">1,600%</p>
                    <p className="text-gray-400 text-sm mt-1">Keyword Growth</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-white">300%</p>
                    <p className="text-gray-400 text-sm mt-1">Traffic Increase</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-white">+75</p>
                    <p className="text-gray-400 text-sm mt-1">New Backlinks</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-white">64 &rarr; 139</p>
                    <p className="text-gray-400 text-sm mt-1">Referring Domains</p>
                  </div>
                </div>
                <div className="pt-4 border-t border-white/10">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                      <svg className="w-4 h-4 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-white text-sm font-medium">Bookings increasing by Dec 2024</p>
                      <p className="text-gray-500 text-xs">Revenue impact in under 4 months</p>
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
              {/* Organic Keywords */}
              <div className="group relative bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-100 p-6 hover:shadow-lg hover:shadow-blue-100/50 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                  </svg>
                </div>
                <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">Organic Keywords</p>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-bold text-gray-900">2</span>
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
                  >32</span>
                </div>
                <p className="text-gray-400 text-sm mt-2">1,600% keyword growth</p>
              </div>

              {/* Organic Traffic */}
              <div className="group relative bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-100 p-6 hover:shadow-lg hover:shadow-blue-100/50 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941" />
                  </svg>
                </div>
                <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">Organic Traffic</p>
                <p
                  className="text-3xl font-bold"
                  style={{
                    background: 'linear-gradient(135deg, #059669 0%, #34d399 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >+300%</p>
                <p className="text-gray-400 text-sm mt-2">4x monthly visitors</p>
              </div>

              {/* Domain Rating */}
              <div className="group relative bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-100 p-6 hover:shadow-lg hover:shadow-blue-100/50 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-violet-50 border border-violet-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6 text-violet-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
                  </svg>
                </div>
                <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">Domain Rating</p>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-bold text-gray-900">6</span>
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
                  >8</span>
                </div>
                <p className="text-gray-400 text-sm mt-2">+33% authority increase</p>
              </div>

              {/* New Backlinks */}
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
                >+75</p>
                <p className="text-gray-400 text-sm mt-2">High-authority domains</p>
              </div>

              {/* Referring Domains */}
              <div className="group relative bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-100 p-6 hover:shadow-lg hover:shadow-blue-100/50 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-amber-50 border border-amber-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
                  </svg>
                </div>
                <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">Referring Domains</p>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-bold text-gray-900">64</span>
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
                  >139</span>
                </div>
                <p className="text-gray-400 text-sm mt-2">117% domain growth</p>
              </div>

              {/* Bookings */}
              <div className="group relative bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-100 p-6 hover:shadow-lg hover:shadow-blue-100/50 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-rose-50 border border-rose-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6 text-rose-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
                  </svg>
                </div>
                <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">Time to Revenue</p>
                <p
                  className="text-3xl font-bold"
                  style={{
                    background: 'linear-gradient(135deg, #e11d48 0%, #fb7185 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >&lt; 4 Months</p>
                <p className="text-gray-400 text-sm mt-2">Bookings by December 2024</p>
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
                    <p className="text-xs font-semibold uppercase tracking-widest text-blue-600 mb-1">Organic Performance</p>
                    <h3 className="text-xl font-bold text-gray-900">Growth Timeline</h3>
                  </div>
                  <div className="flex items-center gap-6 text-sm">
                    <div className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full bg-blue-500" />
                      <span className="text-gray-500">Referring Domains</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full bg-orange-400" />
                      <span className="text-gray-500">Avg. Organic Traffic</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-6 md:p-8">
                {/* SVG Chart — recreated from the PDF trend data showing Aug 2024 to Jan 2025 */}
                <svg viewBox="0 0 800 280" className="w-full h-auto" role="img" aria-label="Growth chart showing referring domains rising from 64 to 139 and organic traffic increasing by 300% between August 2024 and January 2025">
                  {/* Grid lines */}
                  <line x1="60" y1="30" x2="60" y2="240" stroke="#e5e7eb" strokeWidth="1" />
                  <line x1="60" y1="240" x2="780" y2="240" stroke="#e5e7eb" strokeWidth="1" />
                  <line x1="60" y1="198" x2="780" y2="198" stroke="#f3f4f6" strokeWidth="1" strokeDasharray="4 4" />
                  <line x1="60" y1="156" x2="780" y2="156" stroke="#f3f4f6" strokeWidth="1" strokeDasharray="4 4" />
                  <line x1="60" y1="114" x2="780" y2="114" stroke="#f3f4f6" strokeWidth="1" strokeDasharray="4 4" />
                  <line x1="60" y1="72" x2="780" y2="72" stroke="#f3f4f6" strokeWidth="1" strokeDasharray="4 4" />
                  <line x1="60" y1="30" x2="780" y2="30" stroke="#f3f4f6" strokeWidth="1" strokeDasharray="4 4" />

                  {/* Y-axis left labels — Referring Domains */}
                  <text x="50" y="244" textAnchor="end" className="text-[11px]" fill="#9ca3af">0</text>
                  <text x="50" y="198" textAnchor="end" className="text-[11px]" fill="#9ca3af">10</text>
                  <text x="50" y="156" textAnchor="end" className="text-[11px]" fill="#9ca3af">20</text>
                  <text x="50" y="114" textAnchor="end" className="text-[11px]" fill="#9ca3af">30</text>
                  <text x="50" y="72" textAnchor="end" className="text-[11px]" fill="#9ca3af">40</text>
                  <text x="50" y="34" textAnchor="end" className="text-[11px]" fill="#9ca3af">50</text>

                  {/* Y-axis right labels — Avg. Organic Traffic */}
                  <text x="790" y="244" textAnchor="start" className="text-[11px]" fill="#9ca3af">0</text>
                  <text x="790" y="198" textAnchor="start" className="text-[11px]" fill="#9ca3af">1</text>
                  <text x="790" y="156" textAnchor="start" className="text-[11px]" fill="#9ca3af">2</text>
                  <text x="790" y="114" textAnchor="start" className="text-[11px]" fill="#9ca3af">3</text>
                  <text x="790" y="72" textAnchor="start" className="text-[11px]" fill="#9ca3af">4</text>
                  <text x="790" y="34" textAnchor="start" className="text-[11px]" fill="#9ca3af">5</text>

                  {/* X-axis labels */}
                  <text x="120" y="260" textAnchor="middle" className="text-[11px]" fill="#9ca3af">Aug 2024</text>
                  <text x="260" y="260" textAnchor="middle" className="text-[11px]" fill="#9ca3af">Sep 2024</text>
                  <text x="400" y="260" textAnchor="middle" className="text-[11px]" fill="#9ca3af">Oct 2024</text>
                  <text x="540" y="260" textAnchor="middle" className="text-[11px]" fill="#9ca3af">Nov 2024</text>
                  <text x="680" y="260" textAnchor="middle" className="text-[11px]" fill="#9ca3af">Dec 2024</text>
                  <text x="760" y="260" textAnchor="middle" className="text-[11px]" fill="#9ca3af">Jan 2025</text>

                  {/* Blue referring domains area fill */}
                  <defs>
                    <linearGradient id="refdomGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.25" />
                      <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.02" />
                    </linearGradient>
                    <linearGradient id="trafficGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#fb923c" stopOpacity="0.3" />
                      <stop offset="100%" stopColor="#fb923c" stopOpacity="0.02" />
                    </linearGradient>
                  </defs>

                  {/* Blue referring domains area — starts ~8 (Aug), rises to ~40 (Jan) */}
                  <path
                    d="M120,206 L200,200 L260,192 L330,178 L400,160 L470,140 L540,118 L610,108 L680,96 L760,88 L760,240 L120,240 Z"
                    fill="url(#refdomGrad)"
                  />
                  {/* Blue referring domains line */}
                  <path
                    d="M120,206 L200,200 L260,192 L330,178 L400,160 L470,140 L540,118 L610,108 L680,96 L760,88"
                    fill="none"
                    stroke="#3b82f6"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />

                  {/* Orange organic traffic area — starts ~0.5 (Aug), rises to ~4 (Jan) */}
                  <path
                    d="M120,234 L200,232 L260,228 L330,218 L400,206 L470,185 L540,160 L610,130 L680,95 L760,78 L760,240 L120,240 Z"
                    fill="url(#trafficGrad)"
                  />
                  {/* Orange organic traffic line */}
                  <path
                    d="M120,234 L200,232 L260,228 L330,218 L400,206 L470,185 L540,160 L610,130 L680,95 L760,78"
                    fill="none"
                    stroke="#f97316"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />

                  {/* Endpoint dots */}
                  <circle cx="760" cy="88" r="5" fill="#3b82f6" />
                  <circle cx="760" cy="78" r="5" fill="#f97316" />

                  {/* Label at end */}
                  <rect x="685" y="68" width="52" height="20" rx="4" fill="#3b82f6" />
                  <text x="711" y="82" textAnchor="middle" className="text-[10px]" fill="white" fontWeight="600">139</text>
                  <rect x="685" y="52" width="52" height="20" rx="4" fill="#f97316" />
                  <text x="711" y="66" textAnchor="middle" className="text-[10px]" fill="white" fontWeight="600">+300%</text>

                  {/* Start marker */}
                  <circle cx="120" cy="206" r="4" fill="#3b82f6" opacity="0.5" />
                  <circle cx="120" cy="234" r="4" fill="#f97316" opacity="0.5" />
                </svg>
                <p className="text-center text-gray-400 text-xs mt-4">
                  Referring domains and organic traffic since campaign commencement in August 2024, showing consistent upward trajectory.
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
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 text-lg mb-2">About Flight Providers</h3>
                <p className="text-gray-600 text-base leading-relaxed">
                  Flight Providers is a local skydiving company based in Branson, Missouri, offering a one-of-a-kind adventure tourism experience in one of the most visited tourist destinations in the Midwest. When they came to DiamondLinks in August 2024, they had a great product and a growing customer base, but their website was barely registering in search results — leaving bookings on the table every single day.
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
                Flight Providers&apos; primary goal was straightforward: convert local online traffic into paying customers. But the underlying challenge was more foundational than that. Their online presence was essentially starting from scratch. With only 2 organic keywords ranking in search results and a Domain Rating of just 6, they were invisible to the people actively searching for skydiving experiences in and around Branson.
              </p>

              {/* Before State Card */}
              <div className="bg-white rounded-2xl border border-gray-200 p-6 md:p-8">
                <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-4">Starting Position — August 2024</p>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="flex items-center gap-3 bg-gray-50 rounded-xl p-4">
                    <div className="w-2 h-2 rounded-full bg-gray-400 flex-shrink-0" />
                    <div>
                      <p className="text-gray-900 font-semibold">2 keywords</p>
                      <p className="text-gray-400 text-sm">Organic rankings</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 bg-gray-50 rounded-xl p-4">
                    <div className="w-2 h-2 rounded-full bg-gray-400 flex-shrink-0" />
                    <div>
                      <p className="text-gray-900 font-semibold">DR 6</p>
                      <p className="text-gray-400 text-sm">Domain rating</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 bg-gray-50 rounded-xl p-4">
                    <div className="w-2 h-2 rounded-full bg-gray-400 flex-shrink-0" />
                    <div>
                      <p className="text-gray-900 font-semibold">64 domains</p>
                      <p className="text-gray-400 text-sm">Referring domains</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 bg-gray-50 rounded-xl p-4">
                    <div className="w-2 h-2 rounded-full bg-gray-400 flex-shrink-0" />
                    <div>
                      <p className="text-gray-900 font-semibold">Near zero</p>
                      <p className="text-gray-400 text-sm">Organic traffic</p>
                    </div>
                  </div>
                </div>
              </div>

              <p>
                For an adventure tourism business in a competitive tourist market, that gap between their real-world experience and their online footprint was costing them real revenue. Potential customers searching for terms like &ldquo;skydiving in Branson&rdquo; or &ldquo;Branson adventure activities&rdquo; were finding competitors instead. The website itself had not been optimized for search, the content was thin, and the backlink profile was minimal. Flight Providers needed a comprehensive SEO strategy that could deliver results fast enough to impact their upcoming peak season.
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
              <p className="text-gray-500 mt-3 max-w-2xl mx-auto">We built a four-pillar strategy designed to move the needle quickly without cutting corners. Every action was intended to compound, building a foundation that would continue to deliver results well beyond the initial campaign window.</p>
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
                  Deep dive into the competitive landscape to identify who was ranking for the terms Flight Providers needed to own. We mapped a focused set of high-intent, locally relevant keywords to specific pages and content opportunities — every target chosen because it represented real search demand from people likely to book a skydive.
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
                <h3 className="font-bold text-gray-900 text-lg mb-3">On-Page SEO &amp; Content Development</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Thorough content audit with optimized existing pages for search intent, improved meta titles and descriptions, restructured heading hierarchies, and developed new content to fill identified gaps. Every piece written to serve both search engines and real people — answering the questions potential customers were actually asking.
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
                <h3 className="font-bold text-gray-900 text-lg mb-3">Backlink Building &amp; Domain Authority</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Targeted backlink acquisition campaign focused on high-authority domains relevant to tourism, adventure sports, and the Branson market. The goal was not just volume but quality: links from domains that search engines trust, placed in contexts that made editorial sense — growing referring domains from 64 to 139.
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
                <h3 className="font-bold text-gray-900 text-lg mb-3">Technical SEO &amp; Site Speed</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Addressed the technical foundation to ensure search engines could crawl, index, and rank the content effectively. Site speed optimizations, crawl error fixes, improved mobile responsiveness, and structured data implementation — the unglamorous details that separate sites that rank from sites that do not.
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
                    <span className="text-gray-400">Organic Keywords</span>
                    <span className="text-white font-semibold">2</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-white/5">
                    <span className="text-gray-400">Organic Traffic</span>
                    <span className="text-white font-semibold">Near zero</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-white/5">
                    <span className="text-gray-400">Domain Rating</span>
                    <span className="text-white font-semibold">6</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-white/5">
                    <span className="text-gray-400">Referring Domains</span>
                    <span className="text-white font-semibold">64</span>
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
                    <span className="text-gray-400">Organic Keywords</span>
                    <div className="text-right">
                      <span className="text-white font-semibold">32</span>
                      <span className="ml-2 text-emerald-400 text-sm font-medium">+1,600%</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-white/5">
                    <span className="text-gray-400">Organic Traffic</span>
                    <div className="text-right">
                      <span className="text-white font-semibold">4x monthly</span>
                      <span className="ml-2 text-emerald-400 text-sm font-medium">+300%</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-white/5">
                    <span className="text-gray-400">Domain Rating</span>
                    <div className="text-right">
                      <span className="text-white font-semibold">8</span>
                      <span className="ml-2 text-emerald-400 text-sm font-medium">+33%</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-white/5">
                    <span className="text-gray-400">Referring Domains</span>
                    <div className="text-right">
                      <span className="text-white font-semibold">139</span>
                      <span className="ml-2 text-emerald-400 text-sm font-medium">+117%</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center py-3">
                    <span className="text-gray-400">Backlinks</span>
                    <div className="text-right">
                      <span className="text-white font-semibold">+75</span>
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
                  &ldquo;You do not need to outspend your competitors. You need to out-execute them. Flight Providers went from two organic keywords to thirty-two, from invisible to booked, in under four months.&rdquo;
                </p>
              </div>

              <p>
                Flight Providers is a textbook example of what happens when a strong local business gets the online visibility it deserves. They already had the product. They already had the market. What they were missing was the bridge between people searching for their service and their front door. SEO built that bridge.
              </p>

              <p>
                What makes these numbers especially notable is the timeline. Most SEO campaigns take six to twelve months before meaningful results materialize. Flight Providers saw measurable improvements within weeks and revenue-impacting results in under four months. That pace of progress is a direct result of the focused, compounding strategy we deployed from day one.
              </p>

              <p>
                For small businesses in competitive local markets, the takeaway is clear: a focused SEO strategy that combines keyword intelligence, quality content, authoritative backlinks, and sound technical fundamentals can transform your online presence faster than most business owners expect. At DiamondLinks, we specialize in exactly this kind of transformation.
              </p>
            </div>

            {/* CTA Card */}
            <div className="mt-16 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl p-8 md:p-10 text-center relative overflow-hidden">
              <div className="absolute inset-0 opacity-[0.07]" style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.4) 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
              <div className="relative">
                <h3 className="text-white font-bold text-xl mb-2">
                  Ready to see results like Flight Providers&apos;?
                </h3>
                <p className="text-blue-100 text-sm mb-6 max-w-md mx-auto">
                  Find out how DiamondLinks can build an SEO strategy tailored to your business and start driving real traffic and revenue.
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
