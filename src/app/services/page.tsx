import type { Metadata } from 'next'
import Link from 'next/link'
import ScrollReveal from '@/components/ScrollReveal'
import PageHero from '@/components/sections/PageHero'
import SectionHeader from '@/components/sections/SectionHeader'
import CtaBanner from '@/components/sections/CtaBanner'
import { serviceSubPages } from '@/data/services'

export const metadata: Metadata = {
  title: 'SEO & ORM Services | DiamondLinks',
  description:
    'Comprehensive SEO and online reputation management services designed to grow your organic visibility, protect your brand, and drive measurable results. Powered by human expertise and AI.',
  alternates: { canonical: 'https://diamondlinks.com/services/' },
  openGraph: {
    title: 'SEO & ORM Services | DiamondLinks',
    description:
      'Comprehensive SEO and online reputation management services designed to grow your organic visibility, protect your brand, and drive measurable results.',
    url: 'https://diamondlinks.com/services/',
  },
}

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://diamondlinks.com/" },
    { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://diamondlinks.com/services/" },
  ],
}

const serviceIcons: Record<string, string> = {
  'content-strategy':
    'M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5',
  'seo-and-content-audits':
    'M21 21l-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z',
  'premium-backlink-outreach':
    'M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m9.86-2.556a4.5 4.5 0 0 0-1.242-7.244l4.5-4.5a4.5 4.5 0 0 1 6.364 6.364l-1.757 1.757',
  'local-search-optimization':
    'M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z',
  'technical-seo-audits':
    'M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z',
  'site-speed-optimizations':
    'M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z',
  'content-distribution-and-syndication':
    'M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z',
  'dedicated-seo-partnership':
    'M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z',
}

const seoStats = [
  {
    value: '93%',
    label: 'of online experiences begin with a search engine',
    icon: 'M21 21l-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z',
  },
  {
    value: '75%',
    label: 'of users never scroll past page 1',
    icon: 'M3 4.5h14.25M3 9h9.75M3 13.5h5.25m5.25-.75L17.25 9m0 0L21 12.75M17.25 9v12',
  },
  {
    value: '14.6%',
    label: 'close rate for SEO leads vs 1.7% for outbound',
    icon: 'M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941',
  },
]

const discoveryQuestions = [
  {
    question: 'Are negative search results affecting your business?',
    detail: 'Unfavorable content on page 1 silently drives away prospects. We suppress it and replace it with content that builds trust.',
  },
  {
    question: 'Is your website generating the organic traffic you need?',
    detail: 'If your site isn\'t ranking for the keywords that matter, you\'re leaving revenue on the table every day.',
  },
  {
    question: 'Do you have a content strategy aligned with search intent?',
    detail: 'Publishing without a data-driven plan wastes resources. We build strategies that compound organic visibility over time.',
  },
  {
    question: 'Are your local listings optimized and consistent?',
    detail: 'Inconsistent NAP data, missing categories, and stale profiles hurt your Local Pack rankings and erode customer trust.',
  },
  {
    question: 'Is your site technically healthy for search engines?',
    detail: 'Crawl errors, slow load times, and indexation issues silently prevent your content from reaching its full ranking potential.',
  },
]

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    <ScrollReveal>
      <PageHero
        eyebrow="Our Services"
        headline="The Complete SEO"
        gradientText="Solution"
        description="Comprehensive SEO and reputation management services powered by human expertise and refined with AI. From technical audits to content strategy, we cover every dimension of organic growth."
        primaryCta={{ label: 'Get Free Analysis', href: '/free-seo-audit/' }}
        secondaryCta={{ label: 'Talk to an Expert', href: '/contact/' }}
        dark={true}
      />

      {/* Service Categories Grid */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            eyebrow="What We Do"
            title="Our Service Categories"
            subtitle="Each service is designed to work independently or as part of an integrated SEO strategy. Click any card to learn more."
          />

          <div className="grid md:grid-cols-2 gap-6">
            {serviceSubPages.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}/`}
                className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-blue-100 transition-all p-7"
              >
                <div className="w-11 h-11 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center flex-shrink-0 mb-5">
                  <svg
                    className="text-blue-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.75}
                    style={{ width: 20, height: 20 }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d={serviceIcons[service.slug] || serviceIcons['content-strategy']}
                    />
                  </svg>
                </div>
                <h3 className="text-gray-900 font-bold text-lg mb-2 group-hover:text-blue-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">
                  {service.description}
                </p>
                <span className="inline-flex items-center gap-1.5 text-blue-600 text-sm font-semibold group-hover:gap-2.5 transition-all">
                  Learn more
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Invest in SEO */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            eyebrow="The Case for SEO"
            title="Why Invest in SEO"
            subtitle="Search is where buyers go before making decisions. These numbers show why organic visibility is the highest-ROI marketing channel."
          />

          <div className="grid md:grid-cols-3 gap-6">
            {seoStats.map((stat) => (
              <div
                key={stat.value}
                className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 text-center hover:shadow-md hover:border-blue-100 transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center mx-auto mb-5">
                  <svg
                    className="text-blue-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.75}
                    style={{ width: 22, height: 22 }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d={stat.icon} />
                  </svg>
                </div>
                <p className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">{stat.value}</p>
                <p className="text-gray-500 text-sm leading-relaxed">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Discovery Questions */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            eyebrow="Discovery Questions"
            title="Not Sure Where to Start?"
            subtitle="If any of these questions resonate, we can help. Each one points to a specific service designed to solve that challenge."
          />

          <div className="max-w-3xl mx-auto space-y-5">
            {discoveryQuestions.map((item, i) => (
              <div
                key={i}
                className="bg-gray-50 rounded-2xl border border-gray-100 p-6 hover:border-blue-100 hover:shadow-sm transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg
                      className="text-blue-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                      style={{ width: 16, height: 16 }}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-gray-900 font-bold text-base mb-1">{item.question}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{item.detail}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </ScrollReveal>
    </>
  )
}
