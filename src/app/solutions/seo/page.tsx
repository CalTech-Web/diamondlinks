import type { Metadata } from 'next'
import PageHero from '@/components/sections/PageHero'
import SectionHeader from '@/components/sections/SectionHeader'
import FeatureGrid from '@/components/sections/FeatureGrid'
import ProcessSteps from '@/components/sections/ProcessSteps'
import ConversionStrip from '@/components/sections/ConversionStrip'
import CtaBanner from '@/components/sections/CtaBanner'
import FaqAccordion from '@/components/FaqAccordion'
import ScrollReveal from '@/components/ScrollReveal'
import { process, stats } from '@/data/company'
import { seoSubPages } from '@/data/services'

export const metadata: Metadata = {
  title: 'Search Engine Optimization (SEO) | DiamondLinks',
  description:
    'Strategic SEO services that drive real organic growth. DiamondLinks delivers link building, keyword research, on-page optimization, and content strategy — results in 60–120 days.',
  alternates: { canonical: 'https://diamondlinks.com/solutions/seo/' },
  openGraph: {
    title: 'Search Engine Optimization (SEO) | DiamondLinks',
    description: 'Strategic SEO services that drive real organic growth. DiamondLinks delivers link building, keyword research, on-page optimization, and content strategy — results in 60–120 days.',
    url: 'https://diamondlinks.com/solutions/seo/',
  },
}

const features = [
  {
    icon: 'M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m9.553-4.068a4.5 4.5 0 0 0-6.364-6.364L4.5 6.932l1.757 1.757',
    title: 'Strategic Link Building',
    description:
      'High-authority, editorially placed backlinks from relevant publications that move rankings and build lasting domain authority — no PBNs, no spam.',
  },
  {
    icon: 'M21 21l-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z',
    title: 'Keyword Research',
    description:
      'Data-driven keyword strategy that targets terms with real commercial intent — not vanity metrics. We find the queries your ideal customers are actually searching.',
  },
  {
    icon: 'M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128Zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.763m3.42 3.42a6.776 6.776 0 0 0-3.42-3.42',
    title: 'On-Page Optimization',
    description:
      'Title tags, meta descriptions, heading structure, internal linking, and content optimization aligned to your target keywords and search intent.',
  },
  {
    icon: 'M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z',
    title: 'Content Strategy',
    description:
      'SEO-driven content that ranks, earns links, and converts visitors into leads. Blog posts, landing pages, and pillar content built around your keyword map.',
  },
  {
    icon: 'M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5',
    title: 'Technical SEO',
    description:
      'Site speed, crawlability, indexation, structured data, Core Web Vitals, and mobile optimization — the foundation that makes everything else work.',
  },
  {
    icon: 'M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5m.75-9 3-3 2.148 2.148A12.061 12.061 0 0 1 16.5 7.605',
    title: 'Monthly Reporting',
    description:
      'Clear, actionable reports every month showing keyword rankings, traffic growth, link acquisition, and the ROI of every dollar spent.',
  },
]

const seoProcess = [
  {
    phase: 'Week 1–2',
    title: 'SEO Audit & Discovery',
    description:
      'Full technical audit, competitor analysis, and keyword research — every opportunity and gap identified.',
  },
  {
    phase: 'Month 1',
    title: 'Strategy & Roadmap',
    description:
      'Custom SEO roadmap with keyword targets, content calendar, link building plan, and technical fixes prioritized.',
  },
  {
    phase: 'Month 2–3',
    title: 'Execution Begins',
    description:
      'On-page optimization deployed, content published, link outreach launched, and technical issues resolved.',
  },
  {
    phase: 'Month 3–6',
    title: 'Rankings Climb',
    description:
      'Target keywords move up, organic traffic grows, and your domain authority strengthens with each new backlink.',
  },
  {
    phase: 'Ongoing',
    title: 'Scale & Defend',
    description:
      'Continued content, link building, and optimization to expand rankings and protect gains from competitors.',
  },
]

const faqs = [
  {
    q: 'How long does SEO take to show results?',
    a: 'Most clients see meaningful ranking improvements within 60–120 days, depending on competition and the current state of their site. SEO is a long-term investment — the results compound over time and continue to grow.',
  },
  {
    q: 'What makes DiamondLinks SEO different from other agencies?',
    a: 'We are not a generalist agency. Our team has 30+ years of combined expertise specifically in search — we build real links from real publications, create content that ranks, and focus on ROI rather than vanity metrics.',
  },
  {
    q: 'Do you guarantee first-page rankings?',
    a: "No ethical SEO provider can guarantee specific rankings because Google's algorithm is outside anyone's control. What we guarantee is a proven process, transparent reporting, and the same methodology that has delivered results for every client we've taken on.",
  },
  {
    q: 'What types of businesses do you work with?',
    a: 'We serve clients across healthcare, legal, finance, SaaS, and marketing agencies — any business where organic search is a meaningful growth channel. We work with both direct clients and agencies via our white-label program.',
  },
  {
    q: 'Do you handle content creation or just optimization?',
    a: 'Both. We have an in-house content team that produces SEO-driven blog posts, landing pages, and pillar content. We also optimize your existing content to improve its ranking potential.',
  },
  {
    q: 'How is SEO different from ORM?',
    a: 'SEO focuses on ranking your website higher for target keywords to drive traffic and leads. ORM focuses on controlling what appears when someone searches your brand name — suppressing negatives and amplifying positives. We often combine both for maximum impact.',
  },
]

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Search Engine Optimization",
  "name": "Search Engine Optimization",
  "description": "DiamondLinks delivers strategic link building, keyword-driven content, and technical SEO that compounds month over month — real organic growth for your business.",
  "provider": { "@id": "https://diamondlinks.com/#organization" },
  "areaServed": { "@type": "Country", "name": "United States" },
  "url": "https://diamondlinks.com/solutions/seo/",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(({ q, a }) => ({
    "@type": "Question",
    "name": q,
    "acceptedAnswer": { "@type": "Answer", "text": a },
  })),
}

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://diamondlinks.com/" },
    { "@type": "ListItem", "position": 2, "name": "Search Engine Optimization", "item": "https://diamondlinks.com/solutions/seo/" },
  ],
}

export default function SeoPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
    <ScrollReveal>
      <PageHero
        eyebrow="SEO Services"
        headline="Search Engine Optimization"
        gradientText="That Drives Real Growth"
        description="Organic search is the highest-ROI channel in digital marketing. DiamondLinks delivers strategic link building, keyword-driven content, and technical SEO that compounds month over month."
        primaryCta={{ label: 'Get Free Analysis', href: '/free-seo-audit/' }}
        secondaryCta={{ label: 'See Our Process', href: '#process' }}
      />

      {/* Intro Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <SectionHeader
            eyebrow="Why SEO Matters"
            title="Organic Search Is Your Strongest Growth Channel"
            subtitle="The businesses that dominate page one capture the majority of clicks, leads, and revenue. SEO puts you there — and keeps you there."
          />
          <div className="grid md:grid-cols-2 gap-8 text-gray-600 text-sm leading-relaxed">
            <div>
              <p className="mb-4">
                Search Engine Optimization is the practice of improving your website's visibility
                in organic search results. When done right, SEO delivers a compounding stream
                of qualified traffic without the ongoing cost of paid ads.
              </p>
              <p>
                At DiamondLinks, we approach SEO as a strategic investment — not a checklist.
                Every campaign starts with deep keyword research, competitive analysis, and a
                roadmap built around your specific business goals.
              </p>
            </div>
            <div>
              <p className="mb-4">
                Our link building is what sets us apart. We earn high-authority, editorially placed
                backlinks from relevant publications — no PBNs, no directories, no spam. These
                are the links that actually move rankings.
              </p>
              <p>
                Combined with on-page optimization, technical SEO, and content strategy, the
                result is sustainable organic growth that compounds over time and becomes one
                of your most valuable business assets.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            eyebrow="What We Do"
            title="Full-Service SEO"
            subtitle="Every element of search performance, covered by specialists."
          />
          <FeatureGrid features={features} columns={3} />
          <ConversionStrip
            headline="Find out how much organic traffic you are leaving on the table."
            subtext="Our free SEO audit reveals your biggest ranking opportunities."
          />
        </div>
      </section>

      {/* SEO Sub-Services */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            eyebrow="Our Services"
            title="Explore Our SEO Solutions"
            subtitle="Specialized SEO services that work together to drive compounding organic growth."
          />
          <div className="grid md:grid-cols-2 gap-6 mt-12">
            {seoSubPages.map((page) => (
              <a
                key={page.slug}
                href={`/${page.slug}/`}
                className="group bg-gray-50 rounded-2xl border border-gray-100 p-6 hover:border-blue-200 hover:bg-blue-50/30 transition-all"
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
        </div>
      </section>

      {/* Process */}
      <section id="process" className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            eyebrow="Our Process"
            title="How We Grow Your Rankings"
            subtitle="A structured, repeatable process that delivers results — not excuses."
          />
          <ProcessSteps steps={seoProcess} />
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <SectionHeader
            eyebrow="By the Numbers"
            title="Proven SEO Performance"
          />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: stats.timeToResults, label: 'Time to Results' },
              { value: stats.trafficLift, label: 'Avg. Traffic Lift' },
              { value: `${stats.combinedExpertise} Years`, label: 'Combined Expertise' },
              { value: stats.rating, label: 'Client Rating' },
            ].map((stat) => (
              <div
                key={stat.label}
                className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 text-center"
              >
                <p
                  className="text-3xl md:text-4xl font-bold mb-1"
                  style={{
                    background: 'linear-gradient(135deg, #3b82f6 0%, #6366f1 50%, #8b5cf6 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  {stat.value}
                </p>
                <p className="text-gray-500 text-xs font-medium uppercase tracking-wider">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <SectionHeader
            eyebrow="FAQ"
            title="Frequently Asked Questions"
            subtitle="Common questions about our SEO services."
          />
          <FaqAccordion faqs={faqs} />
        </div>
      </section>

      <CtaBanner
        headline="Ready to grow your organic traffic?"
        subtext="Get a free SEO audit and discover your biggest ranking opportunities. No commitment required."
        ctaLabel="Get Free SEO Audit"
        ctaHref="/free-seo-audit/"
      />
    </ScrollReveal>
    </>
  )
}
