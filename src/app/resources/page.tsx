'use client'

import { useState } from 'react'
import ScrollReveal from '@/components/ScrollReveal'
import PageHero from '@/components/sections/PageHero'
import CtaBanner from '@/components/sections/CtaBanner'

type ContentType = 'all' | 'case-study' | 'research' | 'guide'

interface ResourceItem {
  type: 'case-study' | 'research' | 'guide'
  title: string
  description: string
  industry?: string
  comingSoon: boolean
}

const typeLabels: Record<ContentType, string> = {
  all: 'All',
  'case-study': 'Case Studies',
  research: 'Research',
  guide: 'Guides',
}

const typeBadgeStyles: Record<string, string> = {
  'case-study': 'bg-emerald-50 text-emerald-700 border-emerald-100',
  research: 'bg-violet-50 text-violet-700 border-violet-100',
  guide: 'bg-amber-50 text-amber-700 border-amber-100',
}

const typeIcons: Record<string, string> = {
  'case-study':
    'M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z',
  research:
    'M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z',
  guide:
    'M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25',
}

const resources: ResourceItem[] = [
  {
    type: 'case-study',
    title: 'Healthcare Practice Reputation Recovery',
    description:
      'How a multi-location practice rebuilt patient trust and reclaimed page one after a viral negative review.',
    industry: 'Healthcare',
    comingSoon: true,
  },
  {
    type: 'case-study',
    title: 'SaaS Company Crisis Response',
    description:
      'Rapid reputation recovery for a B2B software company following a product outage that generated national press coverage.',
    industry: 'SaaS',
    comingSoon: true,
  },
  {
    type: 'research',
    title: '2026 State of Online Reputation Management',
    description:
      'Annual industry report covering ORM trends, consumer behavior shifts, and benchmarks across eight major verticals.',
    comingSoon: true,
  },
  {
    type: 'research',
    title: 'The ROI of Reputation Management',
    description:
      'Data-driven analysis of how online reputation directly impacts revenue, customer acquisition costs, and brand equity.',
    comingSoon: true,
  },
  {
    type: 'guide',
    title: "The Executive's Guide to Google Reviews",
    description:
      'A comprehensive framework for monitoring, responding to, and leveraging Google reviews to drive business growth.',
    comingSoon: true,
  },
  {
    type: 'guide',
    title: 'ORM for Regulated Industries',
    description:
      'Navigating reputation management under HIPAA, FINRA, and legal ethics rules without compliance risk.',
    industry: 'Finance & Healthcare',
    comingSoon: true,
  },
]

const filterTypes: ContentType[] = ['all', 'case-study', 'research', 'guide']

export default function ResourcesPage() {
  const [activeFilter, setActiveFilter] = useState<ContentType>('all')

  const filtered =
    activeFilter === 'all'
      ? resources
      : resources.filter((r) => r.type === activeFilter)

  return (
    <ScrollReveal>
      <PageHero
        eyebrow="Resources"
        headline="Expertise You Can"
        gradientText="Verify"
        description="Case studies, original research, and actionable guides from the team that's managed reputations across every major industry."
        primaryCta={{ label: 'Get Free Analysis', href: '/request-a-quote/' }}
        secondaryCta={{ label: 'Ask DiamondLinks', href: '/ask/' }}
        dark={true}
      />

      {/* Filter + Grid */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          {/* Filter pills */}
          <div className="flex flex-wrap gap-2 mb-12 justify-center">
            {filterTypes.map((type) => (
              <button
                key={type}
                onClick={() => setActiveFilter(type)}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 border ${
                  activeFilter === type
                    ? 'bg-gray-900 text-white border-gray-900 shadow-sm'
                    : 'bg-white text-gray-600 border-gray-200 hover:border-gray-300 hover:text-gray-900'
                }`}
              >
                {typeLabels[type]}
                <span
                  className={`inline-flex items-center justify-center min-w-[20px] ml-2 px-1.5 py-0.5 text-xs rounded-full ${
                    activeFilter === type
                      ? 'bg-white/20 text-gray-300'
                      : 'bg-gray-100 text-gray-400'
                  }`}
                >
                  {type === 'all'
                    ? resources.length
                    : resources.filter((r) => r.type === type).length}
                </span>
              </button>
            ))}
          </div>

          {/* Cards grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((item) => (
              <div
                key={item.title}
                className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-gray-200 transition-all p-7 flex flex-col"
              >
                {/* Type badge + industry */}
                <div className="flex items-center gap-2 mb-5">
                  <span
                    className={`inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full border ${typeBadgeStyles[item.type]}`}
                  >
                    <svg
                      className="w-3 h-3"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d={typeIcons[item.type]}
                      />
                    </svg>
                    {typeLabels[item.type as ContentType]}
                  </span>
                  {item.industry && (
                    <span className="text-xs text-gray-400 font-medium">
                      {item.industry}
                    </span>
                  )}
                </div>

                {/* Title */}
                <h3 className="text-gray-900 font-bold text-base mb-2 leading-snug">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-1">
                  {item.description}
                </p>

                {/* Coming soon indicator */}
                <div className="flex items-center gap-2 text-gray-400 text-sm font-medium">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500" />
                  </span>
                  Coming Soon
                </div>
              </div>
            ))}
          </div>

          {/* Notify strip */}
          <div className="mt-16 bg-gray-50 rounded-2xl border border-gray-100 p-8 md:p-10 text-center">
            <h3 className="text-gray-900 font-bold text-xl mb-2">
              Be the first to know
            </h3>
            <p className="text-gray-500 text-sm mb-6 max-w-md mx-auto">
              We&apos;re publishing our first round of case studies and research
              reports soon. Request a free analysis to get on our list.
            </p>
            <a
              href="/request-a-quote/"
              className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-bold text-sm hover:bg-blue-500 transition-colors shadow-sm shadow-blue-600/20"
            >
              Get Free Analysis
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            <a
              href="/ask/"
              className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-blue-100 transition-all p-7"
            >
              <div className="w-11 h-11 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center mb-5 group-hover:bg-blue-100 transition-colors">
                <svg
                  className="w-5 h-5 text-blue-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.75}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z"
                  />
                </svg>
              </div>
              <h3 className="text-gray-900 font-bold text-base mb-2 group-hover:text-blue-600 transition-colors">
                Ask DiamondLinks
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Get expert answers to your reputation and SEO questions.
              </p>
            </a>

            <a
              href="/cost-of-orm/"
              className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-blue-100 transition-all p-7"
            >
              <div className="w-11 h-11 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center mb-5 group-hover:bg-blue-100 transition-colors">
                <svg
                  className="w-5 h-5 text-blue-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.75}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
              </div>
              <h3 className="text-gray-900 font-bold text-base mb-2 group-hover:text-blue-600 transition-colors">
                Cost of ORM
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Understand what reputation management costs and what drives
                pricing.
              </p>
            </a>

            <a
              href="/request-a-quote/"
              className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-blue-100 transition-all p-7"
            >
              <div className="w-11 h-11 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center mb-5 group-hover:bg-blue-100 transition-colors">
                <svg
                  className="w-5 h-5 text-blue-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.75}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
                  />
                </svg>
              </div>
              <h3 className="text-gray-900 font-bold text-base mb-2 group-hover:text-blue-600 transition-colors">
                Free Analysis
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Get a confidential reputation analysis with actionable
                recommendations.
              </p>
            </a>
          </div>
        </div>
      </section>

      <CtaBanner />
    </ScrollReveal>
  )
}
