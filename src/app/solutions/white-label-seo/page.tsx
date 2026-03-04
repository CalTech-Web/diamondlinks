import type { Metadata } from 'next'
import PageHero from '@/components/sections/PageHero'
import SectionHeader from '@/components/sections/SectionHeader'
import FeatureGrid from '@/components/sections/FeatureGrid'
import ProcessSteps from '@/components/sections/ProcessSteps'
import ConversionStrip from '@/components/sections/ConversionStrip'
import CtaBanner from '@/components/sections/CtaBanner'
import FaqAccordion from '@/components/FaqAccordion'
import ScrollReveal from '@/components/ScrollReveal'

export const metadata: Metadata = {
  title: 'White Label SEO | DiamondLinks',
  description:
    'White label SEO services for agencies. DiamondLinks delivers strategic link building, content, and technical SEO under your brand — with agency-friendly pricing.',
  alternates: { canonical: 'https://diamondlinks.com/solutions/white-label-seo/' },
  openGraph: {
    title: 'White Label SEO | DiamondLinks',
    description: 'White label SEO services for agencies. DiamondLinks delivers strategic link building, content, and technical SEO under your brand — with agency-friendly pricing.',
    url: 'https://diamondlinks.com/solutions/white-label-seo/',
  },
}

const features = [
  {
    icon: 'M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m9.553-4.068a4.5 4.5 0 0 0-6.364-6.364L4.5 6.932l1.757 1.757',
    title: 'White Label Link Building',
    description:
      'High-authority, editorially placed backlinks earned under your agency brand. Real publications, real authority — no PBNs, no directories.',
  },
  {
    icon: 'M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z',
    title: 'Branded Content & Reports',
    description:
      'SEO-driven content, strategy docs, and monthly reports — all delivered with your logo, your colors, and your agency name.',
  },
  {
    icon: 'M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z',
    title: 'Dedicated Account Manager',
    description:
      'A single point of contact who learns your clients, your voice, and your standards. Fast responses, proactive updates, zero confusion.',
  },
  {
    icon: 'M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5',
    title: 'Technical SEO Execution',
    description:
      'Site audits, Core Web Vitals fixes, crawlability improvements, and structured data implementation — all handled by our team, delivered under yours.',
  },
  {
    icon: 'M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z',
    title: 'Agency-Friendly Pricing',
    description:
      'Wholesale pricing designed to give your agency healthy margins. Scale up or down month-to-month with no long-term contracts required.',
  },
  {
    icon: 'M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15',
    title: 'Scalable Capacity',
    description:
      'Add clients without adding headcount. Our team expands with your pipeline — consistent quality whether you have 1 client or 50.',
  },
]

const whitelabelSeoProcess = [
  {
    phase: 'Step 1',
    title: 'Partner Setup',
    description:
      'Quick onboarding call to align on brand guidelines, reporting format, and communication flow between your team and ours.',
  },
  {
    phase: 'Step 2',
    title: 'Client Brief & Audit',
    description:
      'You send us the client details. We run a full SEO audit and deliver a branded strategy document ready for your client.',
  },
  {
    phase: 'Step 3',
    title: 'SEO Execution',
    description:
      'On-page optimization, content creation, link outreach, and technical fixes — executed by our team, branded to yours.',
  },
  {
    phase: 'Step 4',
    title: 'Monthly Reporting',
    description:
      'Branded reports showing keyword rankings, traffic growth, links earned, and next-month priorities — ready to send to your client.',
  },
  {
    phase: 'Ongoing',
    title: 'Grow Together',
    description:
      'Add more clients anytime. Your dedicated account manager ensures every campaign meets the same high standard.',
  },
]

const faqs = [
  {
    q: 'Will my clients know DiamondLinks is doing the SEO work?',
    a: 'No. Everything we produce — reports, content, strategy docs — carries your agency branding exclusively. We never contact your clients or reveal our involvement in any way.',
  },
  {
    q: 'What SEO services are included in the white label program?',
    a: 'Our white label program covers the full SEO spectrum: keyword research, on-page optimization, content creation, strategic link building, technical SEO audits and fixes, and monthly reporting. You choose which services to offer per client.',
  },
  {
    q: 'How does white label SEO pricing work?',
    a: 'We offer wholesale pricing based on campaign scope — number of keywords, content volume, and link targets. Pricing is structured so your agency retains healthy margins on every engagement. No hidden fees, no surprises.',
  },
  {
    q: 'Do I need SEO expertise to resell your services?',
    a: 'Not at all. We handle strategy, execution, and reporting end-to-end. We also provide sales enablement materials and can support your team during the pitch process if needed.',
  },
  {
    q: 'How quickly can you start a new client campaign?',
    a: 'New campaigns can be live within 48 hours of receiving the client brief. Our processes are built for fast, agency-friendly turnarounds.',
  },
  {
    q: 'Is there a minimum number of clients required?',
    a: 'No minimums. Many of our agency partners started with a single SEO client and expanded as they saw the results and improved client retention.',
  },
]

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "White Label SEO",
  "name": "White Label SEO",
  "description": "DiamondLinks provides white label SEO services for agencies — strategic link building, content, and technical SEO under your brand with agency-friendly pricing.",
  "provider": { "@id": "https://diamondlinks.com/#organization" },
  "areaServed": { "@type": "Country", "name": "United States" },
  "url": "https://diamondlinks.com/solutions/white-label-seo/",
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
    { "@type": "ListItem", "position": 2, "name": "White Label SEO", "item": "https://diamondlinks.com/solutions/white-label-seo/" },
  ],
}

export default function WhiteLabelSeoPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
    <ScrollReveal>
      <PageHero
        eyebrow="White Label SEO"
        headline="White Label SEO"
        gradientText="Services for Agencies"
        description="Deliver strategic link building, content, and technical SEO to your clients — without building an in-house team. DiamondLinks operates 100% behind the scenes."
        primaryCta={{ label: 'Become a Partner', href: '/request-a-quote/' }}
        secondaryCta={{ label: 'See How It Works', href: '#process' }}
      />

      {/* Value Prop */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <SectionHeader
            eyebrow="Built for Agencies"
            title="Scale Your SEO Offering Without Scaling Your Team"
            subtitle="Your clients expect SEO results. Now you can deliver them without the hiring, training, and management overhead."
          />
          <div className="grid md:grid-cols-2 gap-8 text-gray-600 text-sm leading-relaxed">
            <div>
              <p className="mb-4">
                Great SEO requires specialized talent — link builders with publisher
                relationships, content writers who understand search intent, and technical
                specialists who can fix what Google penalizes. Building that team in-house
                takes years and significant investment.
              </p>
              <p>
                Our white label SEO program gives your agency instant access to a full SEO team
                that operates entirely under your brand. From keyword research to link placement
                to technical audits, we handle it all.
              </p>
            </div>
            <div>
              <p className="mb-4">
                Every deliverable — strategy documents, content, reports — is branded to your
                agency. Your clients interact only with you. We stay completely behind the scenes,
                providing the execution horsepower that lets you scale confidently.
              </p>
              <p>
                With 30+ years of combined SEO expertise and a process refined across hundreds
                of campaigns, you are offering your clients the same quality that our direct
                clients have trusted since 2011.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits Callout */}
      <section className="py-14 px-6 bg-gray-950">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: '100%', label: 'White Label' },
              { value: 'Full-Stack', label: 'SEO Services' },
              { value: 'Dedicated', label: 'Account Manager' },
              { value: '48hr', label: 'Campaign Launch' },
            ].map((item) => (
              <div key={item.label}>
                <p
                  className="text-2xl md:text-3xl font-bold mb-1"
                  style={{
                    background: 'linear-gradient(135deg, #60a5fa 0%, #818cf8 50%, #a78bfa 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  {item.value}
                </p>
                <p className="text-gray-400 text-xs font-medium uppercase tracking-wider">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            eyebrow="What You Get"
            title="Full-Service White Label SEO"
            subtitle="Everything your agency needs to deliver best-in-class SEO — without the overhead."
          />
          <FeatureGrid features={features} columns={3} />
          <ConversionStrip
            headline="Ready to add SEO to your agency's offerings?"
            subtext="Schedule a partner call and see how the program works."
            ctaLabel="Become a Partner"
          />
        </div>
      </section>

      {/* Process */}
      <section id="process" className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            eyebrow="How It Works"
            title="From Onboarding to Results"
            subtitle="A streamlined process designed for agencies that want fast setup and consistent quality."
          />
          <ProcessSteps steps={whitelabelSeoProcess} />
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <SectionHeader
            eyebrow="FAQ"
            title="Frequently Asked Questions"
            subtitle="Common questions about our white label SEO program."
          />
          <FaqAccordion faqs={faqs} />
        </div>
      </section>

      <CtaBanner
        headline="Ready to scale your SEO offering?"
        subtext="Join our white label program and deliver strategic SEO to your clients under your own brand."
        ctaLabel="Become a Partner"
        ctaHref="/request-a-quote/"
      />
    </ScrollReveal>
    </>
  )
}
