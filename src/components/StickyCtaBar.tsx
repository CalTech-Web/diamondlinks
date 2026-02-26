'use client'

import { useEffect, useState } from 'react'

export default function StickyCtaBar() {
  const [show, setShow] = useState(false)
  const [dismissed, setDismissed] = useState(false)

  useEffect(() => {
    const handleScroll = () => setShow(window.scrollY > 600)
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-50 transition-transform duration-300 ease-out ${
        show && !dismissed ? 'translate-y-0' : 'translate-y-full'
      }`}
      inert={!show || dismissed ? true : undefined}
    >
      {/* Gradient top accent line */}
      <div
        className="h-px w-full pointer-events-none"
        style={{
          background:
            'linear-gradient(to right, transparent 0%, rgba(59,130,246,0.7) 30%, rgba(99,102,241,0.7) 70%, transparent 100%)',
        }}
      />

      <div className="bg-gray-950/95 backdrop-blur-md shadow-2xl shadow-black/40">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-3 flex items-center gap-4">

          {/* Left: Shield icon + microcopy */}
          <div className="flex items-center gap-3 flex-1 min-w-0">
            <div className="w-9 h-9 rounded-lg bg-blue-600/20 border border-blue-500/25 flex items-center justify-center flex-shrink-0">
              <svg
                style={{ width: 18, height: 18 }}
                className="text-blue-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"
                />
              </svg>
            </div>
            <div className="min-w-0 hidden sm:block">
              <p className="text-white text-sm font-semibold leading-none mb-0.5">
                Take control of your online reputation
              </p>
              <p className="text-gray-400 text-xs truncate">
                Free analysis · No commitment · Proven results
              </p>
            </div>
          </div>

          {/* Right: Phone + CTA + Dismiss */}
          <div className="flex items-center gap-3 flex-shrink-0">
            <a
              href="tel:504-233-4365"
              className="hidden md:flex items-center gap-2 border border-white/10 text-gray-300 px-4 py-2 rounded-lg text-sm font-medium hover:bg-white/5 hover:text-white transition-colors"
            >
              <svg
                className="w-3.5 h-3.5 text-blue-400 flex-shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                />
              </svg>
              504.233.4365
            </a>

            <a
              href="/free-orm-scan/"
              className="inline-flex items-center gap-1.5 bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-bold hover:bg-blue-500 transition-colors shadow-lg shadow-blue-600/30 whitespace-nowrap"
            >
              ORM Scan
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </a>

            <a
              href="/free-seo-audit/"
              className="hidden sm:inline-flex items-center gap-1.5 bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm font-bold hover:bg-indigo-500 transition-colors shadow-lg shadow-indigo-600/30 whitespace-nowrap"
            >
              SEO Audit
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </a>

            <button
              onClick={() => setDismissed(true)}
              className="w-8 h-8 rounded-full flex items-center justify-center text-gray-500 hover:text-gray-300 hover:bg-white/5 transition-colors flex-shrink-0"
              aria-label="Dismiss"
            >
              <svg
                className="w-3.5 h-3.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

        </div>
      </div>
    </div>
  )
}
