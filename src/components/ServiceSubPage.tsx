import { SubPageData, ormSubPages, seoSubPages, serviceSubPages } from '@/data/services'
import PageHero from '@/components/sections/PageHero'
import SectionHeader from '@/components/sections/SectionHeader'
import FeatureGrid from '@/components/sections/FeatureGrid'
import CtaBanner from '@/components/sections/CtaBanner'
import ConversionStrip from '@/components/sections/ConversionStrip'
import FaqAccordion from '@/components/FaqAccordion'

export default function ServiceSubPage({ data }: { data: SubPageData }) {
  const allSiblings = data.category === 'orm' ? ormSubPages : data.category === 'seo' ? seoSubPages : serviceSubPages
  const relatedPages = allSiblings.filter((p) => p.slug !== data.slug).slice(0, 3)
  const parentLabel = data.category === 'orm' ? 'Online Reputation Management' : data.category === 'seo' ? 'SEO Services' : 'Our Services'
  const parentHref = data.category === 'orm'
    ? '/solutions/online-reputation-management/'
    : data.category === 'seo'
      ? '/solutions/seo/'
      : '/services/'

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": data.faqs.map(({ q, a }) => ({
      "@type": "Question",
      "name": q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": a,
      },
    })),
  }

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": data.title,
    "description": data.description,
    "provider": { "@id": "https://diamondlinks.com/#organization" },
    "areaServed": { "@type": "Country", "name": "United States" },
    "url": data.category === 'services' ? `https://diamondlinks.com/services/${data.slug}/` : `https://diamondlinks.com/${data.slug}/`,
  }

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://diamondlinks.com/" },
      { "@type": "ListItem", "position": 2, "name": parentLabel, "item": `https://diamondlinks.com${parentHref}` },
      { "@type": "ListItem", "position": 3, "name": data.title, "item": data.category === 'services' ? `https://diamondlinks.com/services/${data.slug}/` : `https://diamondlinks.com/${data.slug}/` },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {/* Hero */}
      <PageHero
        eyebrow={data.title}
        headline={data.headline}
        gradientText={data.gradientText}
        description={data.description}
        primaryCta={data.category === 'orm' ? { label: 'Get Free Analysis', href: '/free-orm-scan/' } : { label: 'Get Free Audit', href: '/free-seo-audit/' }}
        secondaryCta={{ label: 'Call 504.233.4365', href: 'tel:504-233-4365' }}
        dark
      />

      {/* What It Is */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <SectionHeader
            eyebrow="Overview"
            title={data.whatItIs.title}
          />
          <p className="text-gray-600 text-lg leading-relaxed max-w-3xl mx-auto text-center">
            {data.whatItIs.body}
          </p>

          <ConversionStrip
            headline="Get a free reputation analysis today."
            subtext="See exactly what people find when they search for you."
          />
        </div>
      </section>

      {/* Why It Matters (with stats) */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <SectionHeader
            eyebrow="Why It Matters"
            title={data.whyItMatters.title}
            subtitle={data.whyItMatters.body}
          />
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {data.whyItMatters.stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 text-center"
              >
                <p
                  className="text-4xl md:text-5xl font-bold mb-3"
                  style={{
                    background: 'linear-gradient(135deg, #3b82f6 0%, #6366f1 50%, #8b5cf6 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  {stat.value}
                </p>
                <p className="text-gray-500 text-sm leading-relaxed">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Do It */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <SectionHeader
            eyebrow="Our Process"
            title="How We Do It"
            subtitle="A proven, methodical approach that delivers measurable results."
          />
          <FeatureGrid features={data.howWeDoIt} columns={data.howWeDoIt.length === 4 ? 4 : 3} />
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <SectionHeader
            eyebrow="FAQ"
            title="Frequently Asked Questions"
          />
          <FaqAccordion faqs={data.faqs} />
        </div>
      </section>

      {/* Related Services */}
      {relatedPages.length > 0 && (
        <section className="py-20 px-6 bg-gray-50">
          <div className="max-w-5xl mx-auto">
            <SectionHeader
              eyebrow="Related Services"
              title={`More ${data.category === 'orm' ? 'ORM' : 'SEO'} Services`}
            />
            <div className="grid md:grid-cols-3 gap-6 mt-10">
              {relatedPages.map((page) => (
                <a
                  key={page.slug}
                  href={data.category === 'services' ? `/services/${page.slug}/` : `/${page.slug}/`}
                  className="group bg-white rounded-2xl border border-gray-100 p-6 hover:border-blue-200 hover:bg-blue-50/30 transition-all"
                >
                  <h3 className="text-gray-900 font-semibold mb-2 group-hover:text-blue-600 transition-colors">
                    {page.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{page.description}</p>
                  <span className="inline-flex items-center gap-1 text-blue-600 text-sm font-medium mt-4">
                    Learn more →
                  </span>
                </a>
              ))}
            </div>
            <div className="text-center mt-8">
              <a
                href={parentHref}
                className="text-blue-600 text-sm font-medium hover:underline"
              >
                ← Back to {parentLabel}
              </a>
            </div>
          </div>
        </section>
      )}

      {/* Conversion Strip */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <ConversionStrip
            headline="Ready to get started?"
            subtext="Free analysis. No obligation. Real results."
          />
        </div>
      </section>

      {/* CTA Banner */}
      <CtaBanner />
    </>
  )
}
