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
        {/* Article Header */}
        <section className="bg-gray-950 text-white pt-20 pb-16 px-6 relative overflow-hidden">
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: 'radial-gradient(ellipse 70% 80% at 30% 40%, rgba(37,99,235,0.25) 0%, transparent 65%)' }}
          />
          <div
            className="absolute inset-0 pointer-events-none opacity-[0.18]"
            style={{
              backgroundImage: 'radial-gradient(rgba(255,255,255,0.18) 1px, transparent 1px)',
              backgroundSize: '28px 28px',
            }}
          />
          <div
            className="absolute bottom-0 left-0 right-0 h-20 pointer-events-none"
            style={{ background: 'linear-gradient(to bottom right, transparent 49.9%, white 50%)' }}
          />
          <div className="relative max-w-3xl mx-auto">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-sm text-gray-400 mb-8">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <Link href="/case-studies/" className="hover:text-white transition-colors">Case Studies</Link>
              <span>/</span>
              <span className="text-gray-500">Flight Providers</span>
            </nav>

            <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/25 text-blue-400 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 inline-block" />
              Case Study
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.1] tracking-tight mb-6">
              Flight Providers: From Zero Visibility to Booked Flights in Under 4&nbsp;Months
            </h1>

            <div className="flex items-center gap-4 mt-8">
              <div className="w-11 h-11 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                BH
              </div>
              <div>
                <p className="text-white font-semibold text-sm">Brandon Hopkins</p>
                <p className="text-gray-400 text-sm">Founder &amp; CEO &middot; Mar 2026</p>
              </div>
            </div>
          </div>
        </section>

        {/* Article Body */}
        <article className="py-16 px-6 bg-white">
          <div className="max-w-3xl mx-auto">
            <div className="space-y-6 text-gray-600 text-base leading-relaxed">
              <p>
                When Flight Providers came to DiamondLinks in August 2024, they had a problem that is familiar to many local businesses: a great product with virtually no online visibility. As a skydiving company based in Branson, Missouri, they offered a one-of-a-kind adventure tourism experience in one of the most visited tourist destinations in the Midwest. But their website was barely registering in search results, and they were leaving bookings on the table every single day.
              </p>

              <p>
                In less than four months, we helped Flight Providers grow their organic keyword footprint by 1,600%, increase organic traffic by 300%, and start converting that traffic into real bookings. This is how we did it.
              </p>

              {/* Metrics Banner */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-8">
                <div className="bg-gray-50 rounded-xl border border-gray-100 p-5 text-center">
                  <p className="text-2xl md:text-3xl font-bold text-blue-600">1,600%</p>
                  <p className="text-gray-500 text-sm mt-1">Keyword Growth</p>
                </div>
                <div className="bg-gray-50 rounded-xl border border-gray-100 p-5 text-center">
                  <p className="text-2xl md:text-3xl font-bold text-blue-600">300%</p>
                  <p className="text-gray-500 text-sm mt-1">Traffic Increase</p>
                </div>
                <div className="bg-gray-50 rounded-xl border border-gray-100 p-5 text-center">
                  <p className="text-2xl md:text-3xl font-bold text-blue-600">75</p>
                  <p className="text-gray-500 text-sm mt-1">New Backlinks</p>
                </div>
                <div className="bg-gray-50 rounded-xl border border-gray-100 p-5 text-center">
                  <p className="text-2xl md:text-3xl font-bold text-blue-600">139</p>
                  <p className="text-gray-500 text-sm mt-1">Referring Domains</p>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 pt-4">The Challenge</h2>

              <p>
                Flight Providers&apos; primary goal was straightforward: convert local online traffic into paying customers. But the underlying challenge was more foundational than that. Their online presence was essentially starting from scratch. With only 2 organic keywords ranking in search results and a Domain Rating of just 6, they were invisible to the people actively searching for skydiving experiences in and around Branson.
              </p>

              <p>
                For an adventure tourism business in a competitive tourist market, that gap between their real-world experience and their online footprint was costing them real revenue. Potential customers searching for terms like &ldquo;skydiving in Branson&rdquo; or &ldquo;Branson adventure activities&rdquo; were finding competitors instead. The website itself had not been optimized for search, the content was thin, and the backlink profile was minimal. Flight Providers needed a comprehensive SEO strategy that could deliver results fast enough to impact their upcoming peak season.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 pt-4">Our Approach</h2>

              <p>
                We built a four-pillar strategy designed to move the needle quickly without cutting corners. Every action was intended to compound, building a foundation that would continue to deliver results well beyond the initial campaign window.
              </p>

              <h3 className="text-lg font-bold text-gray-900 pt-2">Keyword Optimization &amp; Competitor Analysis</h3>

              <p>
                We started with a deep dive into the competitive landscape. Who was ranking for the terms Flight Providers needed to own? What content gaps existed that we could fill? We identified a focused set of high-intent, locally relevant keywords and mapped them to specific pages and content opportunities. This was not a spray-and-pray keyword strategy. Every target was chosen because it represented real search demand from people likely to book a skydive.
              </p>

              <h3 className="text-lg font-bold text-gray-900 pt-2">On-Page SEO &amp; Content Development</h3>

              <p>
                With our keyword targets in place, we conducted a thorough content audit of the existing site. We optimized existing pages for search intent, improved meta titles and descriptions, restructured heading hierarchies, and developed new content to fill the gaps we had identified. Every piece of content was written to serve both search engines and the real people reading it, answering the questions potential customers were actually asking and making it easy for them to take the next step toward booking.
              </p>

              <h3 className="text-lg font-bold text-gray-900 pt-2">Backlink Building &amp; Domain Authority</h3>

              <p>
                A site with a Domain Rating of 6 does not rank for competitive terms regardless of how good the on-page SEO is. We implemented a targeted backlink acquisition campaign focused on high-authority domains relevant to tourism, adventure sports, and the Branson market. The goal was not just volume but quality: links from domains that search engines trust, placed in contexts that made editorial sense.
              </p>

              <h3 className="text-lg font-bold text-gray-900 pt-2">Technical SEO &amp; Site Speed</h3>

              <p>
                We addressed the technical foundation of the site to ensure that search engines could crawl, index, and rank the content effectively. This included site speed optimizations, fixing crawl errors, improving mobile responsiveness, and implementing structured data. These are the unglamorous details that separate sites that rank from sites that do not.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 pt-4">The Results</h2>

              <p>
                The results came fast. Within less than four months of launching the campaign in August 2024, Flight Providers saw transformative improvements across every key metric.
              </p>

              <div className="bg-gray-50 rounded-2xl border border-gray-100 p-6 md:p-8 space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-900 font-bold">Organic Keywords: 2 to 32</p>
                    <p className="text-gray-500 text-sm">A 1,600% increase in keyword visibility, from near-zero to a meaningful footprint across locally relevant search terms.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-900 font-bold">Domain Rating: 6 to 8</p>
                    <p className="text-gray-500 text-sm">A 33% improvement in domain authority, strengthening the site&apos;s ability to compete for more difficult keywords over time.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m9.86-2.54a4.5 4.5 0 0 0-1.242-7.244l4.5-4.5a4.5 4.5 0 0 1 6.364 6.364l-1.757 1.757" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-900 font-bold">75 New Backlinks, Referring Domains 64 to 139</p>
                    <p className="text-gray-500 text-sm">More than doubling the number of referring domains, with backlinks earned from high-authority, editorially relevant sources.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-900 font-bold">Organic Traffic Increased by 300%</p>
                    <p className="text-gray-500 text-sm">A fourfold increase in the number of people finding Flight Providers through search engines every month.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-900 font-bold">Bookings Increasing by December 2024</p>
                    <p className="text-gray-500 text-sm">The most important metric of all: real customers booking real skydives, driven by organic search traffic.</p>
                  </div>
                </div>
              </div>

              <p>
                What makes these numbers especially notable is the timeline. Most SEO campaigns take six to twelve months before meaningful results materialize. Flight Providers saw measurable improvements within weeks and revenue-impacting results in under four months. That pace of progress is a direct result of the focused, compounding strategy we deployed from day one.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 pt-4">Key Takeaway</h2>

              <p>
                Flight Providers is a textbook example of what happens when a strong local business gets the online visibility it deserves. They already had the product. They already had the market. What they were missing was the bridge between people searching for their service and their front door. SEO built that bridge.
              </p>

              <p>
                For small businesses in competitive local markets, the takeaway is clear: you do not need to outspend your competitors. You need to out-execute them. A focused SEO strategy that combines keyword intelligence, quality content, authoritative backlinks, and sound technical fundamentals can transform your online presence faster than most business owners expect.
              </p>

              <p>
                At DiamondLinks, we specialize in exactly this kind of transformation. We work with businesses that have great products and services but need the digital infrastructure to reach the customers already looking for them. Flight Providers went from two organic keywords to thirty-two, from invisible to booked, in under four months. That is the kind of result we build our campaigns to deliver.
              </p>
            </div>

            {/* CTA Card */}
            <div className="mt-16 bg-gray-50 rounded-2xl border border-gray-100 p-8 md:p-10 text-center">
              <h3 className="text-gray-900 font-bold text-xl mb-2">
                Ready to see results like these?
              </h3>
              <p className="text-gray-500 text-sm mb-6 max-w-md mx-auto">
                Find out how DiamondLinks can build an SEO strategy tailored to your business and start driving real traffic and revenue.
              </p>
              <Link
                href="/solutions/seo/"
                className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-bold text-sm hover:bg-blue-500 transition-colors shadow-sm shadow-blue-600/20"
              >
                Our SEO Services
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </div>
          </div>
        </article>

        <CtaBanner />
      </ScrollReveal>
    </>
  )
}
