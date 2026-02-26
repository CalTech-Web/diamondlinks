import type { Metadata } from 'next'
import Image from 'next/image'
import ScrollReveal from '@/components/ScrollReveal'
import PageHero from '@/components/sections/PageHero'
import SectionHeader from '@/components/sections/SectionHeader'
import FeatureGrid from '@/components/sections/FeatureGrid'
import ProcessSteps from '@/components/sections/ProcessSteps'
import ConversionStrip from '@/components/sections/ConversionStrip'
import CtaBanner from '@/components/sections/CtaBanner'
import AnimatedCounter from '@/components/AnimatedCounter'
import { company, testimonials } from '@/data/company'

export const metadata: Metadata = {
  title: 'About DiamondLinks | ORM & SEO Agency Since 2011',
  description:
    'DiamondLinks is an ORM & SEO agency founded in California in 2011 by Brandon Hopkins, now headquartered in New Orleans. With 30+ years of combined expertise, we specialize exclusively in online reputation management.',
  alternates: { canonical: 'https://diamondlinks.com/about/' },
  openGraph: {
    title: 'About DiamondLinks | ORM & SEO Agency Since 2011',
    description: 'DiamondLinks is an ORM & SEO agency founded in California in 2011 by Brandon Hopkins, now headquartered in New Orleans. With 30+ years of combined expertise, we specialize exclusively in online reputation management.',
    url: 'https://diamondlinks.com/about/',
  },
}

const differentiatorFeatures = [
  {
    icon: 'M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z',
    title: 'ORM-Only Specialists',
    description: 'We focus exclusively on online reputation management and SEO. No generalist distractions, no side projects — this is all we do.',
  },
  {
    icon: 'M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z',
    title: 'Custom Strategy Per Client',
    description: 'No templates, no cookie-cutter playbooks. Every campaign is built from scratch around your specific situation and goals.',
  },
  {
    icon: 'M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z',
    title: 'Transparent Reporting',
    description: 'Monthly progress reports showing exactly what we did, what changed, and what comes next. No black boxes.',
  },
  {
    icon: 'M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941',
    title: 'Results-First Philosophy',
    description: "We don't stop until the work is done. Our focus is measurable movement in your search results, not activity reports.",
  },
  {
    icon: 'M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z',
    title: 'No Lock-In Contracts',
    description: 'We earn your business every month. No long-term commitments required — stay because the results speak for themselves.',
  },
  {
    icon: 'M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.563.563 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.563.563 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z',
    title: '5-Star Rated',
    description: 'All reviews verified. Every client engagement is backed by our commitment to delivering exceptional results.',
  },
]

const timeline = [
  {
    phase: '2011',
    title: 'Founded in California',
    description: 'Brandon Hopkins launches DiamondLinks in California with a singular focus on online reputation management.',
  },
  {
    phase: '2012–2013',
    title: 'First Major Clients',
    description: 'Secured reputation management engagements across healthcare, finance, and legal industries.',
  },
  {
    phase: '2014–2016',
    title: 'Expanded to SEO',
    description: 'Added search engine optimization services to complement ORM, driving organic growth for clients nationwide.',
  },
  {
    phase: '2017–2020',
    title: 'White Label Program',
    description: 'Launched a white-label ORM and SEO program, enabling marketing agencies to offer reputation services under their own brand.',
  },
  {
    phase: '2021',
    title: 'Headquartered in New Orleans',
    description: 'Relocated headquarters to New Orleans, Louisiana, establishing a home base while continuing to serve clients nationwide.',
  },
  {
    phase: '2022–Present',
    title: 'Nationwide Client Base',
    description: 'Serving clients across every major industry, from solo professionals to national brands, with a 5.0 verified rating.',
  },
]

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": "https://diamondlinks.com/#brandon-hopkins",
  "name": "Brandon Hopkins",
  "jobTitle": "Founder & CEO",
  "worksFor": { "@id": "https://diamondlinks.com/#organization" },
  "url": "https://diamondlinks.com/about/",
  "description": "Brandon Hopkins is the Founder & CEO of DiamondLinks, an ORM & SEO agency he founded in California in 2011, now headquartered in New Orleans. With two successful business exits and 17+ years in online reputation management, he specializes in suppressing negative search results and building authoritative digital presences for executives, brands, and organizations nationwide.",
  "knowsAbout": [
    "Online Reputation Management",
    "Search Engine Optimization",
    "White Label SEO",
    "Link Building",
    "Content Strategy",
    "Personal Brand Management",
    "Crisis PR",
  ],
}

const hilarySchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": "https://diamondlinks.com/#hilary-spross",
  "name": "Hilary Spross",
  "jobTitle": "President",
  "worksFor": { "@id": "https://diamondlinks.com/#organization" },
  "url": "https://diamondlinks.com/about/",
  "description": "Hilary Spross is the President of DiamondLinks, bringing 24 years of digital marketing expertise to lead strategy and innovation. Her background spans SEO, content marketing, and reputation management across industries.",
  "knowsAbout": [
    "Digital Marketing Strategy",
    "Search Engine Optimization",
    "Content Marketing",
    "Online Reputation Management",
    "Team Leadership",
    "Client Strategy",
  ],
}

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://diamondlinks.com/" },
    { "@type": "ListItem", "position": 2, "name": "About", "item": "https://diamondlinks.com/about/" },
  ],
}

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(hilarySchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    <ScrollReveal>
      <PageHero
        eyebrow="About DiamondLinks"
        headline="Powered by People,"
        gradientText="Perfected with AI."
        description="Our US-based team of experts builds true recovery, visibility, and reputation through powerful SEO and ORM campaigns — built on proven best practices and elevated by data-driven insights."
        primaryCta={{ label: 'Get Free Analysis', href: '/free-orm-scan/' }}
        secondaryCta={{ label: 'See Our Services', href: '/services/' }}
        dark={true}
      />

      {/* Leadership Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <p className="text-blue-600 text-sm font-semibold uppercase tracking-widest mb-2 text-center">Leadership</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
            Meet Our Leadership
          </h2>
          <p className="text-gray-500 leading-relaxed max-w-2xl mx-auto text-center mb-12">
            Our leadership team brings decades of combined experience across digital marketing, SEO, and online reputation management — blending human insight with data-driven strategy.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Brandon */}
            <div className="bg-gray-50 rounded-2xl border border-gray-100 p-8">
              <div className="flex items-center gap-4 mb-6">
                <Image
                  src="/brandon-hopkins.jpg"
                  alt="Brandon Hopkins, Founder & CEO of DiamondLinks"
                  width={56}
                  height={56}
                  className="w-14 h-14 rounded-full object-cover flex-shrink-0"
                />
                <div>
                  <p className="text-gray-900 font-bold text-lg">{company.founderName}</p>
                  <p className="text-gray-500 text-sm">{company.founderTitle}</p>
                </div>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Brandon founded DiamondLinks in California in {company.founded} with a clear mission: help businesses and individuals take control of what people find when they search their name. Now headquartered in New Orleans, the company serves clients nationwide. With two successful exits and 17+ years in the reputation management industry, he brings operational discipline and deep ORM expertise to every engagement.
              </p>
              <blockquote className="text-gray-600 italic leading-relaxed border-l-2 border-blue-200 pl-5 text-sm">
                &ldquo;Your online reputation is the first impression you never get to make in person. We exist to make sure the story people find is the real one.&rdquo;
              </blockquote>
              <div className="mt-6 flex flex-wrap gap-4">
                <div className="bg-white rounded-xl border border-gray-100 px-4 py-3 text-center">
                  <p className="text-gray-900 font-bold text-lg">2011</p>
                  <p className="text-gray-500 text-xs">Founded</p>
                </div>
                <div className="bg-white rounded-xl border border-gray-100 px-4 py-3 text-center">
                  <p className="text-gray-900 font-bold text-lg">2</p>
                  <p className="text-gray-500 text-xs">Successful Exits</p>
                </div>
                <div className="bg-white rounded-xl border border-gray-100 px-4 py-3 text-center">
                  <p className="text-gray-900 font-bold text-lg">17+ yrs</p>
                  <p className="text-gray-500 text-xs">In ORM Industry</p>
                </div>
              </div>
            </div>

            {/* Hilary */}
            <div className="bg-gray-50 rounded-2xl border border-gray-100 p-8">
              <div className="flex items-center gap-4 mb-6">
                <Image
                  src="/hilary-spross.jpg"
                  alt="Hilary Spross, President of DiamondLinks"
                  width={56}
                  height={56}
                  className="w-14 h-14 rounded-full object-cover flex-shrink-0"
                />
                <div>
                  <p className="text-gray-900 font-bold text-lg">{company.presidentName}</p>
                  <p className="text-gray-500 text-sm">{company.presidentTitle}</p>
                </div>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Hilary brings 24 years of digital marketing expertise to DiamondLinks, leading strategy and innovation across all client engagements. Her background spans SEO, content marketing, and reputation management across industries — with a talent for translating complex data into clear, actionable growth plans.
              </p>
              <blockquote className="text-gray-600 italic leading-relaxed border-l-2 border-indigo-200 pl-5 text-sm">
                &ldquo;The best results come from combining human strategic insight with the precision of AI and data. That&apos;s the DiamondLinks difference.&rdquo;
              </blockquote>
              <div className="mt-6 flex flex-wrap gap-4">
                <div className="bg-white rounded-xl border border-gray-100 px-4 py-3 text-center">
                  <p className="text-gray-900 font-bold text-lg">24 yrs</p>
                  <p className="text-gray-500 text-xs">Digital Marketing</p>
                </div>
                <div className="bg-white rounded-xl border border-gray-100 px-4 py-3 text-center">
                  <p className="text-gray-900 font-bold text-lg">Strategy</p>
                  <p className="text-gray-500 text-xs">& Innovation Lead</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="max-w-6xl mx-auto">
          <p className="text-blue-400 text-sm font-semibold uppercase tracking-widest mb-2 text-center">Our Team</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center">
            The People Behind Your Results
          </h2>
          <p className="text-gray-400 leading-relaxed max-w-2xl mx-auto text-center mb-12">
            DiamondLinks is powered by a full-time, US-based team of specialists — not freelancers, not offshore contractors. Every campaign is backed by dedicated professionals who live and breathe ORM and SEO.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              {
                icon: 'M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z',
                stat: '10+',
                label: 'Full-Time Specialists',
              },
              {
                icon: 'M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418',
                stat: '100%',
                label: 'US-Based Team',
              },
              {
                icon: 'M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5',
                stat: '100+',
                label: 'Years Combined Experience',
              },
              {
                icon: 'M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 0 0-2.455 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z',
                stat: '6',
                label: 'Specialized Departments',
              },
            ].map((item) => (
              <div
                key={item.label}
                className="bg-gray-800/50 border border-gray-700 rounded-2xl p-6 text-center hover:border-blue-500/30 transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-600/10 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
                  </svg>
                </div>
                <p className="text-3xl font-bold text-white mb-1">{item.stat}</p>
                <p className="text-gray-400 text-sm">{item.label}</p>
              </div>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { dept: 'Content & Strategy', desc: 'Writers, editors, and strategists crafting high-authority content tailored to each client.' },
              { dept: 'SEO & Link Building', desc: 'Technical SEO specialists and outreach experts building authoritative backlink profiles.' },
              { dept: 'Reputation Management', desc: 'Dedicated ORM analysts monitoring, suppressing, and shaping search results around the clock.' },
              { dept: 'Client Success', desc: 'Account managers ensuring clear communication, transparent reporting, and measurable results.' },
              { dept: 'Data & Analytics', desc: 'Analysts tracking performance metrics and turning raw data into actionable insights.' },
              { dept: 'Development & AI', desc: 'Engineers building proprietary tools and AI-powered workflows that give our clients an edge.' },
            ].map((dept) => (
              <div
                key={dept.dept}
                className="bg-gray-800/30 border border-gray-700/50 rounded-xl p-5 hover:border-gray-600 transition-all"
              >
                <p className="text-white font-semibold mb-1">{dept.dept}</p>
                <p className="text-gray-500 text-sm leading-relaxed">{dept.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Differentiators Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            eyebrow="Why DiamondLinks"
            title="What Sets Us Apart"
            subtitle="We blend human expertise with AI to deliver SEO and ORM that actually work — not a generalist agency doing reputation on the side."
          />
          <FeatureGrid features={differentiatorFeatures} columns={3} />
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            eyebrow="By the Numbers"
            title="Proven Track Record"
            subtitle="Results that speak for themselves, backed by verified client reviews."
          />
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { end: 30, suffix: '+', label: 'Years Combined Expertise', sublabel: 'in ORM & SEO' },
              { end: 15, suffix: '+', label: 'Years in Business', sublabel: 'since 2011' },
              { end: 5.0, suffix: '', label: 'Client Rating', sublabel: 'verified reviews', decimals: 1 },
              { end: 48, suffix: 'hr', label: 'Launch Turnaround', sublabel: 'from signed to started' },
            ].map((stat) => (
              <div
                key={stat.label}
                className="bg-gray-50 rounded-2xl border border-gray-100 p-7 text-center hover:shadow-md hover:border-blue-100 transition-all"
              >
                <AnimatedCounter
                  end={stat.end}
                  suffix={stat.suffix}
                  decimals={stat.decimals ?? 0}
                  className="text-4xl md:text-5xl font-bold text-gray-900"
                />
                <p className="text-gray-900 font-semibold text-sm mt-3">{stat.label}</p>
                <p className="text-gray-400 text-xs mt-0.5">{stat.sublabel}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Testimonial */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-3xl mx-auto text-center">
          <SectionHeader
            eyebrow="Client Stories"
            title="What Our Clients Say"
          />
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 md:p-10">
            <div className="flex justify-center gap-1 mb-5">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <blockquote className="text-gray-700 text-lg leading-relaxed italic mb-6">
              &ldquo;{testimonials[0].quote}&rdquo;
            </blockquote>
            <p className="text-gray-900 font-bold">{testimonials[0].name}</p>
            <p className="text-gray-500 text-sm">{testimonials[0].title}</p>
            <p className="text-blue-600 text-xs font-semibold mt-1">{testimonials[0].result}</p>
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            eyebrow="Our Story"
            title="The DiamondLinks Timeline"
            subtitle="From a one-person consultancy to a nationwide ORM & SEO agency."
          />
          <ProcessSteps steps={timeline} />
        </div>
      </section>

      {/* Conversion Strip */}
      <section className="py-4 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <ConversionStrip
            headline="Ready to work with a team powered by people and perfected with AI?"
            subtext="Get a free, confidential analysis of your search results."
          />
        </div>
      </section>

      <CtaBanner />
    </ScrollReveal>
    </>
  )
}
