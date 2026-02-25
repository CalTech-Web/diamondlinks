'use client'

import { useState } from 'react'

const solutions = [
  {
    href: '/solutions/online-reputation-management/',
    shortName: 'ORM',
    fullName: 'Online Reputation Management',
    desc: 'Suppress negative content and own your first page.',
    iconPath: 'M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z',
    iconColor: 'text-blue-600',
    iconBg: 'bg-blue-50 border-blue-100',
    cta: 'Learn about ORM',
  },
  {
    href: '/solutions/seo/',
    shortName: 'SEO',
    fullName: 'Search Engine Optimization',
    desc: 'Strategic link building and lasting keyword rankings.',
    iconPath: 'M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941',
    iconColor: 'text-indigo-600',
    iconBg: 'bg-indigo-50 border-indigo-100',
    cta: 'Learn about SEO',
  },
  {
    href: '/solutions/white-label-reputation-management/',
    shortName: 'White Label',
    fullName: 'White Label ORM & SEO',
    desc: 'Full-service partner for agencies, under your brand.',
    iconPath: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z',
    iconColor: 'text-violet-600',
    iconBg: 'bg-violet-50 border-violet-100',
    cta: 'Get started',
  },
]

const secondaryLinks = [
  { href: '/who-we-serve/', label: 'Who We Serve' },
  { href: '/resources/', label: 'Resources' },
  { href: '/about/', label: 'About' },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="bg-white/95 backdrop-blur-md border-b border-gray-200/80 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">

        {/* Logo */}
        <a href="/" className="flex items-center flex-shrink-0">
          <img src="/logo.png" alt="DiamondLinks" className="h-8 w-auto" />
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-0.5 text-sm font-medium text-gray-700">
          <a href="/" className="px-3 py-2 rounded-lg hover:text-blue-600 hover:bg-blue-50/50 transition-colors">
            Home
          </a>

          {/* Solutions dropdown */}
          <div className="group relative">
            <button
              aria-haspopup="true"
              className="flex items-center gap-1 px-3 py-2 rounded-lg transition-colors hover:text-blue-600 hover:bg-blue-50/50 group-hover:text-blue-600 group-hover:bg-blue-50/50"
            >
              Solutions
              <svg
                className="w-3.5 h-3.5 transition-transform duration-200 text-gray-400 group-hover:rotate-180 group-hover:text-blue-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
              </svg>
            </button>

            {/* Dropdown panel */}
            <div
              className="absolute left-1/2 -translate-x-1/2 top-full pt-2 z-50 w-[540px] transition-all duration-150 origin-top
                opacity-0 scale-[0.98] -translate-y-1 pointer-events-none
                group-hover:opacity-100 group-hover:scale-100 group-hover:translate-y-0 group-hover:pointer-events-auto"
            >
              <div className="bg-white rounded-2xl border border-gray-100 shadow-2xl shadow-gray-900/10 overflow-hidden">
                {/* Gradient top accent */}
                <div className="h-0.5 w-full bg-gradient-to-r from-blue-500 via-indigo-500 to-violet-500" />

                <div className="p-5">
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-3">Our Services</p>
                  <div className="grid grid-cols-3 gap-2.5">
                    {solutions.map((s) => (
                      <a
                        key={s.href}
                        href={s.href}
                        className="group flex flex-col gap-3 p-4 rounded-xl border border-transparent hover:border-gray-100 hover:bg-gray-50 transition-all"
                      >
                        {/* Icon */}
                        <div
                          className={`w-9 h-9 rounded-xl border flex items-center justify-center flex-shrink-0 ${s.iconBg}`}
                        >
                          <svg
                            className={s.iconColor}
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={1.75}
                            style={{ width: 18, height: 18 }}
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" d={s.iconPath} />
                          </svg>
                        </div>

                        {/* Name + desc */}
                        <div>
                          <p className="text-gray-900 font-semibold text-sm mb-1.5 leading-tight">{s.fullName}</p>
                          <p className="text-gray-500 text-xs leading-relaxed">{s.desc}</p>
                        </div>

                        {/* CTA */}
                        <div className={`flex items-center gap-1 text-xs font-semibold mt-auto ${s.iconColor}`}>
                          {s.cta}
                          <svg
                            className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-150"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2.5}
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                          </svg>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>

                {/* Footer strip */}
                <div className="border-t border-gray-100 bg-gray-50/80 px-5 py-3 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-gray-400">
                    <svg
                      className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                    <span className="text-xs">Free analysis tools — no signup required</span>
                  </div>
                  <div className="flex items-center gap-2 flex-shrink-0">
                    <a
                      href="/request-a-quote/"
                      className="inline-flex items-center gap-1.5 bg-blue-600 text-white text-xs font-bold px-3.5 py-2 rounded-lg hover:bg-blue-500 transition-colors shadow-sm shadow-blue-600/25"
                    >
                      ORM Scan →
                    </a>
                    <a
                      href="/seo-analysis/"
                      className="inline-flex items-center gap-1.5 bg-indigo-600 text-white text-xs font-bold px-3.5 py-2 rounded-lg hover:bg-indigo-500 transition-colors shadow-sm shadow-indigo-600/25"
                    >
                      SEO Audit →
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {secondaryLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-3 py-2 rounded-lg hover:text-blue-600 hover:bg-blue-50/50 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTAs */}
        <div className="hidden md:flex items-center gap-2 flex-shrink-0">
          <a
            href="tel:504-233-4365"
            className="text-gray-600 text-sm font-medium hover:text-blue-600 transition-colors flex items-center gap-1.5"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} strokeLinecap="round">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012.18 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 8.15a16 16 0 006 6l1.52-1.52a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
            </svg>
            504.233.4365
          </a>
          <a
            href="/request-a-quote/"
            className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-blue-500 transition-colors shadow-sm shadow-blue-600/20"
          >
            ORM Scan
          </a>
          <a
            href="/seo-analysis/"
            className="bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-indigo-500 transition-colors shadow-sm shadow-indigo-600/20"
          >
            SEO Audit
          </a>
        </div>

        {/* Mobile: phone + hamburger */}
        <div className="flex md:hidden items-center gap-3">
          <a href="tel:504-233-4365" className="text-blue-600 text-sm font-semibold">
            504.233.4365
          </a>
          <button
            onClick={() => setMobileOpen((o) => !o)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
            className="w-9 h-9 flex items-center justify-center rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50 transition-colors"
          >
            {mobileOpen ? (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            ) : (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round">
                <path d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white shadow-lg">
          <nav className="px-6 pt-4 pb-2">
            <a
              href="/"
              onClick={() => setMobileOpen(false)}
              className="flex py-3 text-gray-700 font-medium hover:text-blue-600 border-b border-gray-50 transition-colors"
            >
              Home
            </a>

            {/* Mobile Solutions group */}
            <div className="py-2 border-b border-gray-50">
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2.5 mt-1">Solutions</p>
              <div className="space-y-0.5">
                {solutions.map((s) => (
                  <a
                    key={s.href}
                    href={s.href}
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center gap-3 py-2.5 text-gray-700 font-medium hover:text-blue-600 transition-colors rounded-lg"
                  >
                    <div className={`w-7 h-7 rounded-lg border flex items-center justify-center flex-shrink-0 ${s.iconBg}`}>
                      <svg
                        className={s.iconColor}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={1.75}
                        style={{ width: 15, height: 15 }}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d={s.iconPath} />
                      </svg>
                    </div>
                    <span>{s.shortName}</span>
                  </a>
                ))}
              </div>
            </div>

            {secondaryLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="flex py-3 text-gray-700 font-medium hover:text-blue-600 border-b border-gray-50 last:border-0 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="px-6 py-4 border-t border-gray-100">
            <a
              href="tel:504-233-4365"
              className="flex items-center justify-center gap-2 w-full bg-blue-600 text-white px-6 py-3.5 rounded-xl font-bold hover:bg-blue-700 transition-colors text-sm"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012.18 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 8.15a16 16 0 006 6l1.52-1.52a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
              </svg>
              Call 504.233.4365
            </a>
            <div className="mt-3 grid grid-cols-2 gap-2">
              <a
                href="/request-a-quote/"
                className="flex items-center justify-center border-2 border-blue-600 text-blue-600 px-4 py-3 rounded-xl font-semibold hover:bg-blue-50 transition-colors text-sm"
              >
                ORM Scan
              </a>
              <a
                href="/seo-analysis/"
                className="flex items-center justify-center border-2 border-indigo-600 text-indigo-600 px-4 py-3 rounded-xl font-semibold hover:bg-indigo-50 transition-colors text-sm"
              >
                SEO Audit
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
