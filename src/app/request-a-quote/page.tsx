import type { Metadata } from 'next'
import ScrollReveal from '@/components/ScrollReveal'
import PageHero from '@/components/sections/PageHero'
import CtaBanner from '@/components/sections/CtaBanner'
import QuoteForm from '@/components/QuoteForm'

export const metadata: Metadata = {
  title: 'Request a Quote | DiamondLinks',
  description:
    'Start your growth strategy with DiamondLinks. Tell us about your goals and receive a custom SEO or ORM quote within 24 hours.',
  alternates: { canonical: 'https://diamondlinks.com/request-a-quote/' },
  openGraph: {
    title: 'Request a Quote | DiamondLinks',
    description:
      'Start your growth strategy with DiamondLinks. Tell us about your goals and receive a custom SEO or ORM quote within 24 hours.',
    url: 'https://diamondlinks.com/request-a-quote/',
  },
}

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://diamondlinks.com/" },
    { "@type": "ListItem", "position": 2, "name": "Request a Quote", "item": "https://diamondlinks.com/request-a-quote/" },
  ],
}

export default function RequestAQuotePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
    <ScrollReveal>
      <PageHero
        eyebrow="Get Started"
        headline="Start Your Growth"
        gradientText="Strategy"
        description="15+ years of proven SEO and ORM expertise. Tell us about your situation and we&apos;ll put together a custom strategy."
        dark={false}
      />

      {/* Quote Form + Side Info */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-10">
            {/* Form */}
            <div className="lg:col-span-2">
              <QuoteForm />
            </div>

            {/* Side Info Card */}
            <div className="lg:col-span-1">
              <div className="bg-gray-50 rounded-2xl border border-gray-100 p-8 sticky top-28">
                <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center mb-5">
                  <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-4">What happens next?</h3>
                <ol className="space-y-4">
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-7 h-7 rounded-full bg-blue-600 text-white text-xs font-bold flex items-center justify-center">1</span>
                    <p className="text-gray-600 text-sm leading-relaxed">We review your submission within 24 hours</p>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-7 h-7 rounded-full bg-blue-600 text-white text-xs font-bold flex items-center justify-center">2</span>
                    <p className="text-gray-600 text-sm leading-relaxed">A strategist reaches out to discuss your goals</p>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-7 h-7 rounded-full bg-blue-600 text-white text-xs font-bold flex items-center justify-center">3</span>
                    <p className="text-gray-600 text-sm leading-relaxed">You receive a custom strategy and quote</p>
                  </li>
                </ol>

                <div className="mt-8 pt-6 border-t border-gray-200">
                  <p className="text-gray-500 text-xs mb-1">Prefer to talk now?</p>
                  <a href="tel:504-233-4365" className="text-blue-600 font-semibold text-sm hover:text-blue-500 transition-colors">
                    504.233.4365
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaBanner
        headline="Not sure what you need?"
        subtext="Run a free analysis first. Our ORM scan and SEO audit tools give you a clear picture before committing."
        ctaLabel="Free ORM Scan"
        ctaHref="/free-orm-scan/"
      />
    </ScrollReveal>
    </>
  )
}
