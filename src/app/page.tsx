import type { Metadata } from 'next'
import Image from 'next/image'
import dynamic from 'next/dynamic'

const FaqAccordion = dynamic(() => import('@/components/FaqAccordion'))
const ScrollReveal = dynamic(() => import('@/components/ScrollReveal'))
const AnimatedCounter = dynamic(() => import('@/components/AnimatedCounter'))

export const metadata: Metadata = {
  title: "DiamondLinks | Online Reputation Management & SEO Agency",
  description: "DiamondLinks is a New Orleans-based ORM & SEO agency. We suppress negative content, amplify positive stories, and drive lasting SEO growth — so your brand owns its search results.",
  alternates: { canonical: 'https://diamondlinks.com/' },
  openGraph: {
    title: 'DiamondLinks | Online Reputation Management & SEO Agency',
    description: 'DiamondLinks is a New Orleans-based ORM & SEO agency. We suppress negative content, amplify positive stories, and drive lasting SEO growth — so your brand owns its search results.',
    url: 'https://diamondlinks.com/',
  },
}

const reviewSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://diamondlinks.com/#organization",
  "review": [
    {
      "@type": "Review",
      "author": { "@type": "Organization", "name": "Inspect & Track" },
      "reviewBody": "DiamondLinks transformed our online presence. Their strategic approach to content and backlinks gave us visibility we never thought possible.",
      "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
    },
    {
      "@type": "Review",
      "author": { "@type": "Organization", "name": "Keyfactor" },
      "reviewBody": "The team at DiamondLinks understood our complex B2B landscape and delivered SEO results that directly impacted our pipeline.",
      "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
    },
    {
      "@type": "Review",
      "author": { "@type": "Organization", "name": "Condominium Comeback" },
      "reviewBody": "After a reputation crisis, DiamondLinks rebuilt our online presence from the ground up. The turnaround was remarkable.",
      "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
    },
    {
      "@type": "Review",
      "author": { "@type": "Organization", "name": "Mannington Commercial" },
      "reviewBody": "DiamondLinks delivered a comprehensive SEO strategy that elevated our brand visibility across every major search term in our industry.",
      "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
    },
    {
      "@type": "Review",
      "author": { "@type": "Organization", "name": "Flight Providers" },
      "reviewBody": "Working with DiamondLinks gave us the competitive edge we needed. Their data-driven approach and transparent reporting set them apart.",
      "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
    },
  ],
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How long does online reputation management take?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "ORM timelines vary by situation severity and competition level, but most clients see meaningful movement within 60–120 days. Suppressing deeply entrenched results can take 6–12 months. We set honest expectations upfront and report progress monthly.",
      },
    },
    {
      "@type": "Question",
      "name": "Can you remove negative news articles or Google reviews?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "In most cases, content can't be deleted, but it can be pushed off page one. We create and amplify high-authority positive content that outranks negative results, so the first page reflects your real story. In some cases, legal removal is possible, and we'll advise if it applies.",
      },
    },
    {
      "@type": "Question",
      "name": "What's the difference between ORM and SEO?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "SEO focuses on ranking your website higher in search results for target keywords. ORM focuses on controlling what appears when someone searches your name or brand, suppressing damaging content and amplifying positive assets. We often combine both for maximum impact.",
      },
    },
    {
      "@type": "Question",
      "name": "Do you offer white-label services for agencies?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. We work behind the scenes so your agency can deliver world-class ORM and SEO results under your brand. Our white-label program includes fully branded deliverables, agency-friendly pricing, and a dedicated account manager.",
      },
    },
    {
      "@type": "Question",
      "name": "How do I know if I need ORM?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Search your name or brand name right now. If you see negative news, bad reviews, competitor content, or anything you wouldn't want a client or employer to find, you need ORM. A damaging page-one result can cost more than the investment to fix it.",
      },
    },
    {
      "@type": "Question",
      "name": "What industries do you specialize in?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We serve clients across healthcare, legal, finance, athletes, SaaS, and marketing agencies — any industry where your online reputation directly impacts business. We've worked with solo executives, national brands, and everything in between.",
      },
    },
  ],
}

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    <ScrollReveal>
      {/* Hero */}
      <section className="relative bg-gray-950 text-white min-h-[calc(100vh-4rem)] flex items-center py-16 px-6 overflow-hidden">
        {/* Radial blue glow — shifted left to complement split layout */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse 70% 80% at 30% 40%, rgba(37,99,235,0.25) 0%, transparent 65%)" }}
        />
        {/* Subtle dot-grid pattern */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.18]"
          style={{
            backgroundImage: "radial-gradient(rgba(255,255,255,0.18) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
        {/* Right-side accent glow */}
        <div
          className="absolute right-0 top-0 bottom-0 w-1/2 pointer-events-none"
          style={{ background: "radial-gradient(ellipse 60% 70% at 80% 50%, rgba(99,102,241,0.14) 0%, transparent 70%)" }}
        />
        {/* Bottom diagonal clip mask — creates a sharp angle into the next section */}
        <div
          className="absolute bottom-0 left-0 right-0 h-20 pointer-events-none"
          style={{ background: "linear-gradient(to bottom right, transparent 49.9%, white 50%)" }}
        />

        <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center w-full">
          {/* Left: Copy */}
          <div>
            {/* Eyebrow pill */}
            <div className="hero-eyebrow-glow inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/25 text-blue-400 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 inline-block" />
              SEO &amp; Online Reputation Management
            </div>

            <h1 className="text-5xl md:text-6xl font-bold leading-[1.08] tracking-tight mb-6">
              Powered by People,<br />{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #60a5fa 0%, #818cf8 50%, #a78bfa 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Perfected with AI
              </span>
            </h1>

            <p className="text-gray-300 text-lg md:text-xl mb-10 leading-relaxed max-w-lg">
              Our US-based team builds true recovery, visibility, and reputation through powerful SEO and ORM campaigns — built on proven best practices and elevated by data-driven insights.
            </p>

            <div className="flex flex-wrap gap-4 mb-4">
              <a
                href="/free-orm-scan/"
                className="hero-cta-shimmer inline-flex items-center gap-2.5 bg-blue-600 text-white px-8 py-4 rounded-lg font-bold hover:bg-blue-500 transition-colors shadow-lg shadow-blue-600/35 text-base"
              >
                Get Free Analysis
                <svg className="w-4.5 h-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} style={{ width: 18, height: 18 }}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              </a>
              <a
                href="/solutions/online-reputation-management/"
                className="bg-white/8 border border-white/20 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/15 transition-colors text-base"
              >
                See Our Services
              </a>
            </div>

            {/* Micro trust strip below CTAs */}
            <div className="flex flex-wrap items-center gap-x-5 gap-y-1.5 mb-7 text-gray-500 text-xs">
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse inline-block flex-shrink-0" />
                Response within 24 hours
              </span>
              <span className="flex items-center gap-1.5">
                <svg className="w-3 h-3 text-gray-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
                </svg>
                100% confidential
              </span>
              <span className="flex items-center gap-1.5">
                <svg className="w-3 h-3 text-gray-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
                </svg>
                No commitment required
              </span>
            </div>

            {/* Avatar social proof */}
            <div className="hero-entrance hero-entrance-d6 flex items-center gap-4 mb-10">
              {/* Overlapping avatars — real client initials */}
              <div className="flex -space-x-2.5 flex-shrink-0">
                {[
                  { initials: "NC", ring: "border-blue-500/50", bg: "bg-blue-600/45" },
                  { initials: "RR", ring: "border-indigo-500/50", bg: "bg-indigo-600/45" },
                  { initials: "RT", ring: "border-violet-500/50", bg: "bg-violet-600/45" },
                  { initials: "RG", ring: "border-emerald-500/50", bg: "bg-emerald-600/45" },
                ].map((a) => (
                  <div
                    key={a.initials}
                    className={`w-9 h-9 rounded-full ${a.bg} border-2 ${a.ring} outline outline-2 outline-gray-950 flex items-center justify-center flex-shrink-0 shadow-md`}
                  >
                    <span className="text-white text-[10px] font-bold tracking-wide">{a.initials}</span>
                  </div>
                ))}
                <div className="w-9 h-9 rounded-full bg-white/10 border-2 border-white/20 outline outline-2 outline-gray-950 flex items-center justify-center flex-shrink-0">
                  <span className="text-gray-300 text-[10px] font-semibold">+</span>
                </div>
              </div>

              {/* Rating + label */}
              <div>
                <div className="flex items-center gap-1.5 mb-0.5">
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-3.5 h-3.5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-white text-xs font-bold">5.0</span>
                  <span className="text-gray-600 text-xs">·</span>
                  <span className="text-gray-400 text-xs">Verified clients</span>
                </div>
                <p className="text-gray-500 text-xs">Trusted by executives, attorneys &amp; agencies nationwide</p>
              </div>
            </div>

            {/* Trust stats */}
            <div className="hero-entrance hero-entrance-d7 grid grid-cols-3 gap-4 pt-8 border-t border-white/10">
              <div className="flex flex-col gap-1.5">
                <div className="flex items-center gap-1.5 mb-0.5">
                  <svg className="w-4 h-4 text-blue-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
                  </svg>
                  <AnimatedCounter end={30} suffix="+" className="text-2xl font-bold text-white leading-none" />
                </div>
                <div className="text-xs text-gray-400 uppercase tracking-wide leading-snug">Yrs ORM Expertise</div>
              </div>
              <div className="flex flex-col gap-1.5">
                <div className="flex items-center gap-1.5 mb-0.5">
                  <svg className="w-4 h-4 text-yellow-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <AnimatedCounter end={5} decimals={1} className="text-2xl font-bold text-white leading-none" />
                </div>
                <div className="text-xs text-gray-400 uppercase tracking-wide leading-snug">Verified Rating</div>
              </div>
              <div className="flex flex-col gap-1.5">
                <div className="flex items-center gap-1.5 mb-0.5">
                  <svg className="w-4 h-4 text-emerald-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg>
                  <AnimatedCounter end={48} suffix=" hr" className="text-2xl font-bold text-white leading-none" />
                </div>
                <div className="text-xs text-gray-400 uppercase tracking-wide leading-snug">Analysis Turnaround</div>
              </div>
            </div>
          </div>

          {/* Right: Search results mockup card */}
          <div className="hidden md:flex flex-col gap-4 hero-float hero-entrance-right hero-entrance-d8">
            {/* Card wrapper */}
            <div className="bg-white/[0.04] border border-white/10 rounded-2xl p-6 backdrop-blur-sm shadow-xl shadow-black/40">
              {/* Browser chrome */}
              <div className="flex items-center gap-2 mb-5">
                <div className="flex gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-red-500/60" />
                  <span className="w-3 h-3 rounded-full bg-yellow-500/60" />
                  <span className="w-3 h-3 rounded-full bg-green-500/60" />
                </div>
                <div className="flex-1 bg-white/5 border border-white/10 rounded-md px-3 py-1.5 flex items-center gap-2">
                  <svg className="w-3 h-3 text-gray-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
                  </svg>
                  <span className="text-gray-400 text-xs truncate">google.com/search?q=your+brand+name</span>
                </div>
              </div>

              {/* Label */}
              <div className="flex items-center gap-2 mb-4">
                <span className="text-xs font-semibold text-emerald-400 uppercase tracking-widest">After DiamondLinks</span>
                <div className="flex-1 h-px bg-emerald-400/20" />
              </div>

              {/* Search results */}
              <div className="space-y-3">
                {[
                  { title: "YourBrand.com | Official Website", desc: "Welcome to the official home of YourBrand. Trusted by thousands of clients...", badge: "1" },
                  { title: "YourBrand | About Us & Leadership", desc: "Meet the team behind YourBrand. 20+ years of industry experience and...", badge: "2" },
                  { title: "YourBrand Reviews | 4.9 ★ Rating", desc: "See why clients trust YourBrand. Rated 4.9 out of 5 across 200+ reviews.", badge: "3" },
                  { title: "YourBrand In the News | Press", desc: "YourBrand featured in Forbes, Inc Magazine, and industry publications for...", badge: "4" },
                ].map((r) => (
                  <div key={r.badge} className="flex items-start gap-3 group">
                    <div className="w-5 h-5 rounded-full bg-emerald-500/15 border border-emerald-400/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3 h-3 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-blue-400 text-sm font-medium leading-snug group-hover:text-blue-300 transition-colors">{r.title}</p>
                      <p className="text-gray-500 text-xs mt-0.5 leading-relaxed">{r.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Footer note */}
              <div className="mt-5 pt-4 border-t border-white/5 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse flex-shrink-0" />
                <p className="text-gray-500 text-xs">Negative results suppressed, positive content dominates page 1</p>
              </div>
            </div>

            {/* "Before" mini-card */}
            <div className="bg-red-500/5 border border-red-500/15 rounded-xl px-5 py-4 flex items-start gap-3">
              <svg className="w-4 h-4 text-red-400 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
              </svg>
              <div>
                <p className="text-red-400 text-xs font-semibold uppercase tracking-wide mb-0.5">Before DiamondLinks</p>
                <p className="text-gray-500 text-xs leading-relaxed">Negative news article, bad review site, and competitor content dominated your first page.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Trust Bar */}
      <section className="bg-gradient-to-b from-gray-50/80 to-white border-b border-gray-100 py-10 md:py-12 px-6">
        <div className="max-w-6xl mx-auto">

          {/* Eyebrow label */}
          <p className="text-center text-[10px] text-gray-400 font-semibold uppercase tracking-[0.18em] mb-8">
            Trusted by executives, attorneys &amp; agencies nationwide
          </p>

          {/* 4-card grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 stagger-children-scale">

            {/* Card 1: 5-Star Rating */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-yellow-100 transition-all p-6 flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-xl bg-yellow-50 border border-yellow-100 flex items-center justify-center flex-shrink-0 mb-4">
                <svg fill="currentColor" viewBox="0 0 20 20" className="text-yellow-500" style={{ width: 22, height: 22 }}>
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
              <div className="flex items-center justify-center gap-1.5 mb-1.5">
                <AnimatedCounter end={5} decimals={1} className="text-gray-900 font-bold text-2xl leading-none" />
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-3 h-3 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-500 text-xs leading-snug">5-Star Rated Agency</p>
            </div>

            {/* Card 2: 30+ Years Expertise */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-blue-100 transition-all p-6 flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center flex-shrink-0 mb-4">
                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75} className="text-blue-600" style={{ width: 22, height: 22 }}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
                </svg>
              </div>
              <AnimatedCounter end={30} suffix="+" className="text-gray-900 font-bold text-2xl leading-none mb-1.5 block" />
              <p className="text-gray-500 text-xs leading-snug">Years ORM &amp; SEO Expertise</p>
            </div>

            {/* Card 3: 15+ Years in Business */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-emerald-100 transition-all p-6 flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center flex-shrink-0 mb-4">
                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75} className="text-emerald-600" style={{ width: 22, height: 22 }}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941" />
                </svg>
              </div>
              <AnimatedCounter end={15} suffix="+" className="text-gray-900 font-bold text-2xl leading-none mb-1.5 block" />
              <p className="text-gray-500 text-xs leading-snug">Years in Business</p>
            </div>

            {/* Card 4: Nationwide */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-indigo-100 transition-all p-6 flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center flex-shrink-0 mb-4">
                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75} className="text-indigo-600" style={{ width: 22, height: 22 }}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253M3 12c0-.778.099-1.533.284-2.253" />
                </svg>
              </div>
              <p className="text-gray-900 font-bold text-2xl leading-none mb-1.5">Nationwide</p>
              <p className="text-gray-500 text-xs leading-snug">New Orleans-Based · U.S. Clients</p>
            </div>

          </div>
        </div>
      </section>

      {/* Platform Presence Marquee */}
      <div className="bg-white border-b border-gray-100 py-5 overflow-hidden">
        <p className="text-center text-[10px] text-gray-400 font-semibold uppercase tracking-widest mb-4 px-6">
          Protecting your reputation across every platform that matters
        </p>
        <div className="relative overflow-hidden">
          {/* Left fade */}
          <div className="absolute left-0 top-0 w-28 h-full bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          {/* Right fade */}
          <div className="absolute right-0 top-0 w-28 h-full bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
          {/* Scrolling row — duplicated for seamless loop */}
          <div
            className="flex items-center gap-4 w-max"
            style={{ animation: "marquee-scroll 40s linear infinite" }}
          >
            {[...Array(2)].flatMap((_, si) =>
              [
                { name: "Google", letter: "G", color: "#4285F4", bg: "#EEF3FE" },
                { name: "Yelp", letter: "Y", color: "#d32323", bg: "#FEF2F2" },
                { name: "Facebook", letter: "f", color: "#1877F2", bg: "#EFF5FF" },
                { name: "LinkedIn", letter: "in", color: "#0A66C2", bg: "#EEF5FB" },
                { name: "Glassdoor", letter: "G", color: "#0CAA41", bg: "#ECFDF5" },
                { name: "TrustPilot", letter: "T", color: "#00B67A", bg: "#ECFDF5" },
                { name: "BBB", letter: "B", color: "#003eb1", bg: "#EEF1F9" },
                { name: "Reddit", letter: "r", color: "#FF4500", bg: "#FFF4EE" },
                { name: "Bing", letter: "B", color: "#008373", bg: "#EEFAF9" },
                { name: "Google Maps", letter: "M", color: "#34A853", bg: "#F0FDF4" },
                { name: "Instagram", letter: "IG", color: "#C13584", bg: "#FEF1F5" },
                { name: "X / Twitter", letter: "X", color: "#111827", bg: "#F5F5F5" },
              ].map((p) => (
                <div
                  key={`${si}-${p.name}`}
                  className="flex items-center gap-2.5 flex-shrink-0 bg-white border border-gray-100 rounded-xl px-4 py-2.5 shadow-sm"
                >
                  <div
                    className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 text-[11px] font-bold leading-none"
                    style={{ backgroundColor: p.bg, color: p.color }}
                  >
                    {p.letter}
                  </div>
                  <span className="text-gray-600 text-sm font-medium whitespace-nowrap">{p.name}</span>
                </div>
              ))
            )}
          </div>
        </div>
      </div>

      {/* Reputation Problem */}
      <section className="py-24 px-6 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 bg-red-50 border border-red-100 text-red-500 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
              <svg className="w-3.5 h-3.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
              </svg>
              The Problem
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              One Bad Search Result Is Costing You Business Right Now
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              Before any meeting, any call, any deal, people Google you. What they find in those first few results determines whether they trust you enough to reach out.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10 items-start">
            {/* Left: Damaged SERP mockup */}
            <div className="bg-white rounded-2xl border border-red-100 shadow-sm overflow-hidden">
              {/* Browser chrome */}
              <div className="bg-gray-50 border-b border-gray-100 px-5 py-3 flex items-center gap-2">
                <div className="flex gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-red-400/60" />
                  <span className="w-3 h-3 rounded-full bg-yellow-400/60" />
                  <span className="w-3 h-3 rounded-full bg-green-400/60" />
                </div>
                <div className="flex-1 bg-white border border-gray-200 rounded-md px-3 py-1.5 flex items-center gap-2">
                  <svg className="w-3 h-3 text-gray-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
                  </svg>
                  <span className="text-gray-400 text-xs truncate">google.com/search?q=your+brand+name</span>
                </div>
              </div>

              {/* Label */}
              <div className="px-6 pt-5 pb-2 flex items-center gap-3">
                <span className="text-xs font-semibold text-red-500 uppercase tracking-widest whitespace-nowrap">Without ORM: what prospects see</span>
                <div className="flex-1 h-px bg-red-100" />
              </div>

              {/* Damaged results */}
              <div className="px-6 pb-6 space-y-3.5">
                {[
                  { title: "YourBrand | Scam or Legit? Read Before You Buy", desc: "Users share negative experiences with this company. Multiple complaints regarding..." },
                  { title: "YourBrand Reviews: 2.1 ★ | Proceed With Caution", desc: "We collected dozens of reviews from real customers. Here's what they're saying..." },
                  { title: "Why I Left YourBrand | An Honest Review", desc: "After six months of disappointing results, I felt obligated to warn others..." },
                  { title: "[Competitor] | A Better Alternative to YourBrand?", desc: "Looking for a reliable option? Here's how the top alternatives compare..." },
                ].map((r, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-red-50 border border-red-200 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3 h-3 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-red-700 text-sm font-medium leading-snug">{r.title}</p>
                      <p className="text-gray-400 text-xs mt-0.5 leading-relaxed">{r.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Warning footer */}
              <div className="border-t border-red-50 bg-red-50/60 px-6 py-3.5 flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-red-400 animate-pulse flex-shrink-0" />
                <p className="text-red-400 text-xs font-medium">Your prospects see this before they ever contact you</p>
              </div>
            </div>

            {/* Right: Pain point stats + CTA */}
            <div className="flex flex-col gap-5 stagger-children">
              {[
                {
                  stat: "97%",
                  heading: "of people research you online first",
                  body: "Before agreeing to a meeting, signing a contract, or making a referral, nearly everyone Googles the person or brand they're considering.",
                  icon: "M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z",
                  accent: "text-red-500",
                  bg: "bg-white border-red-100",
                  statColor: "text-red-500",
                },
                {
                  stat: "75%",
                  heading: "of clicks go to the first three results",
                  body: "Most searchers never scroll past the top results. If negative content occupies those spots, your real story never gets a chance to be heard.",
                  icon: "M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z",
                  accent: "text-orange-500",
                  bg: "bg-white border-orange-100",
                  statColor: "text-orange-500",
                },
                {
                  stat: "Silent",
                  heading: "revenue is lost without you knowing",
                  body: "The most damaging part? You never see the deals that walked away. Prospects who found something unflattering simply don't call. You never know what you lost.",
                  icon: "M18.364 18.364A9 9 0 0 0 5.636 5.636m12.728 12.728A9 9 0 0 1 5.636 5.636m12.728 12.728L5.636 5.636",
                  accent: "text-gray-500",
                  bg: "bg-white border-gray-100",
                  statColor: "text-gray-700",
                },
              ].map((item) => (
                <div key={item.stat} className={`flex gap-5 border rounded-2xl p-6 shadow-sm ${item.bg}`}>
                  <div className={`text-3xl font-bold flex-shrink-0 mt-0.5 ${item.statColor} min-w-[4.5rem]`}>{item.stat}</div>
                  <div>
                    <p className="font-bold text-gray-900 mb-1.5 leading-snug">{item.heading}</p>
                    <p className="text-gray-500 text-sm leading-relaxed">{item.body}</p>
                  </div>
                </div>
              ))}

            </div>
          </div>

          {/* Bottom CTA strip */}
          <div className="border-t border-gray-200 mt-14 pt-10">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              {/* Left: copy */}
              <div className="text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start gap-1.5 mb-3">
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-gray-500 text-xs font-medium">5.0 verified rating</span>
                </div>
                <p className="text-gray-900 font-bold text-xl md:text-2xl mb-2">
                  Don&apos;t let bad results speak for you.
                </p>
                <p className="text-gray-500 text-sm max-w-sm">
                  Find out exactly what prospects see when they Google you, and what it&apos;s costing your business. Free, confidential analysis.
                </p>
              </div>

              {/* Vertical divider (desktop) */}
              <div className="hidden md:block w-px h-16 bg-gray-200 flex-shrink-0" />

              {/* Right: CTAs */}
              <div className="flex flex-col sm:flex-row items-center gap-4 flex-shrink-0">
                <a
                  href="/free-orm-scan/"
                  className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-3.5 rounded-lg font-bold hover:bg-blue-500 transition-colors shadow-lg shadow-blue-600/20 text-sm whitespace-nowrap"
                >
                  Get Free Reputation Analysis
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                  </svg>
                </a>
                <a
                  href="tel:504-233-4365"
                  className="inline-flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors text-sm font-semibold"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                  </svg>
                  504.233.4365
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-center">
          {/* Left: Enhanced copy + credential strip */}
          <div>
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-blue-600 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500 inline-block" />
              Who We Are
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-5 leading-tight">
              Human Expertise.{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #2563eb 0%, #4f46e5 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                AI-Powered Results.
              </span>
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed mb-4">
              DiamondLinks blends a US-based team of seasoned SEO and ORM professionals with cutting-edge AI tools to deliver campaigns that actually move the needle — faster and smarter.
            </p>
            <p className="text-gray-500 leading-relaxed mb-8">
              With 17+ years in business and a proven track record across every major industry, we&apos;ve helped executives, brands, and agencies nationwide build true recovery, visibility, and reputation through data-driven strategy.
            </p>

            {/* Key differentiators */}
            <ul className="space-y-3.5 mb-10">
              {[
                { text: "ORM-only specialists, not a generalist agency doing reputation on the side", icon: "M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z", color: "text-blue-600 bg-blue-50 border-blue-100" },
                { text: "Custom strategy per client, no templates, no cookie-cutter playbooks", icon: "M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z", color: "text-indigo-600 bg-indigo-50 border-indigo-100" },
                { text: "Transparent monthly reporting, you always know exactly what's happening", icon: "M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z", color: "text-violet-600 bg-violet-50 border-violet-100" },
                { text: "We work until it's fixed — commitment to results, not just effort", icon: "M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.563.563 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.563.563 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z", color: "text-emerald-600 bg-emerald-50 border-emerald-100" },
              ].map((item) => (
                <li key={item.text} className="flex items-start gap-3 text-sm text-gray-600">
                  <span className={`w-5 h-5 rounded-full border flex items-center justify-center flex-shrink-0 mt-0.5 ${item.color}`}>
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
                    </svg>
                  </span>
                  {item.text}
                </li>
              ))}
            </ul>

            {/* Credential chips row */}
            <div className="flex flex-wrap gap-2.5 mb-8">
              {[
                { label: "Founded 2011", color: "bg-gray-50 border-gray-200 text-gray-600" },
                { label: "New Orleans, LA", color: "bg-blue-50 border-blue-100 text-blue-700" },
                { label: "5.0 ★ Rated", color: "bg-yellow-50 border-yellow-100 text-yellow-700" },
                { label: "Nationwide Clients", color: "bg-indigo-50 border-indigo-100 text-indigo-700" },
                { label: "White-Label Ready", color: "bg-violet-50 border-violet-100 text-violet-700" },
              ].map((chip) => (
                <span
                  key={chip.label}
                  className={`inline-flex items-center text-xs font-semibold px-3.5 py-1.5 rounded-full border ${chip.color}`}
                >
                  {chip.label}
                </span>
              ))}
            </div>

            <a href="/about/" className="inline-flex items-center gap-1.5 text-blue-600 font-semibold hover:gap-2.5 transition-all text-sm">
              Our Story
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </a>
          </div>

          {/* Right: Enhanced brand promise card */}
          <div className="relative bg-gray-950 rounded-3xl p-10 overflow-hidden">
            {/* Background glow orbs */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />
            {/* Subtle dot grid */}
            <div
              className="absolute inset-0 opacity-[0.07]"
              style={{
                backgroundImage: "radial-gradient(rgba(255,255,255,0.3) 1px, transparent 1px)",
                backgroundSize: "24px 24px",
              }}
            />
            {/* Top gradient accent line */}
            <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 via-indigo-500 to-violet-500" />

            {/* Large decorative opening quote mark */}
            <div
              className="absolute -top-6 -left-1 text-[160px] font-serif leading-none select-none pointer-events-none"
              style={{ color: "rgba(255,255,255,0.04)" }}
              aria-hidden="true"
            >
              &ldquo;
            </div>

            <div className="relative">
              <p className="text-blue-400 text-xs font-semibold uppercase tracking-widest mb-6">Our Philosophy</p>

              <blockquote className="text-white text-xl md:text-2xl font-semibold leading-relaxed mb-8">
                &ldquo;Our focus is results. If your results aren&apos;t moving in the search results,{' '}
                <span
                  style={{
                    background: "linear-gradient(135deg, #60a5fa 0%, #818cf8 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  we&apos;re not doing our job.
                </span>&rdquo;
              </blockquote>

              <div className="flex items-center gap-3 mb-10">
                <Image src="/brandon-hopkins.jpg" alt="Brandon Hopkins" width={40} height={40} className="w-10 h-10 rounded-full object-cover border border-blue-500/40 flex-shrink-0" />
                <div>
                  <p className="text-white font-semibold text-sm">Brandon Hopkins</p>
                  <p className="text-gray-500 text-xs">Founder &amp; CEO, DiamondLinks</p>
                </div>
              </div>

              {/* Stats row — upgraded with icons */}
              <div className="border-t border-white/10 pt-8 grid grid-cols-3 gap-4">
                <div className="text-center">
                  <AnimatedCounter end={30} suffix="+" className="text-2xl font-bold text-white mb-0.5 block" />
                  <div className="text-gray-500 text-[10px] uppercase tracking-wide leading-tight">Yrs<br/>Combined</div>
                </div>
                <div className="border-x border-white/10 text-center">
                  <AnimatedCounter end={15} suffix="+" className="text-2xl font-bold text-white mb-0.5 block" />
                  <div className="text-gray-500 text-[10px] uppercase tracking-wide leading-tight">Yrs in<br/>Business</div>
                </div>
                <div className="text-center">
                  <AnimatedCounter end={5} decimals={1} suffix="★" className="text-2xl font-bold text-white mb-0.5 block" />
                  <div className="text-gray-500 text-[10px] uppercase tracking-wide leading-tight">Verified<br/>Rating</div>
                </div>
              </div>

              {/* Bottom CTA */}
              <div className="mt-8 pt-6 border-t border-white/10">
                <a
                  href="/free-orm-scan/"
                  className="flex items-center justify-center gap-2 w-full bg-blue-600 hover:bg-blue-500 text-white text-sm font-bold px-5 py-3 rounded-xl transition-colors shadow-lg shadow-blue-600/25"
                >
                  Get Your Free Analysis →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* By the Numbers */}
      <section className="relative py-24 px-6 overflow-hidden">
        {/* Rich dark gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-blue-950 to-indigo-950" />
        {/* Subtle grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(to right, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        {/* Glow orbs */}
        <div className="absolute top-0 left-1/4 w-80 h-80 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-indigo-600/20 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-blue-400 text-sm font-semibold uppercase tracking-widest mb-2">By the Numbers</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Results you can count on</h2>
            <p className="text-gray-500 mt-4 max-w-xl mx-auto">Specific outcomes and commitments, what every DiamondLinks client can expect from day one.</p>
          </div>

          <div className="md:grid md:grid-cols-[1fr_320px] gap-8 items-stretch">
            {/* Left: 2×2 outcome-focused stat cards */}
            <div className="grid grid-cols-2 gap-5 mb-8 md:mb-0 stagger-children-scale">
              {[
                {
                  stat: "60–120",
                  unit: " days",
                  label: "Time to First Results",
                  sub: "Most clients see meaningful page 1 movement within the first campaign cycle",
                  color: "from-blue-400 to-blue-300",
                  border: "border-blue-500/20",
                  bg: "bg-blue-500/5",
                  iconBg: "bg-blue-500/10 border-blue-500/20",
                  iconColor: "text-blue-400",
                  icon: "M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z",
                },
                {
                  stat: "5.0",
                  unit: " ★",
                  label: "Verified Client Rating",
                  sub: "Rated across Google and industry review platforms by real, verified clients",
                  color: "from-yellow-400 to-amber-300",
                  border: "border-yellow-500/20",
                  bg: "bg-yellow-500/5",
                  iconBg: "bg-yellow-500/10 border-yellow-500/20",
                  iconColor: "text-yellow-400",
                  icon: "M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.563.563 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.563.563 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z",
                },
                {
                  stat: "30+",
                  unit: " yrs",
                  label: "ORM & SEO Expertise",
                  sub: "Combined years of experience, exclusively focused on reputation and search",
                  color: "from-indigo-400 to-indigo-300",
                  border: "border-indigo-500/20",
                  bg: "bg-indigo-500/5",
                  iconBg: "bg-indigo-500/10 border-indigo-500/20",
                  iconColor: "text-indigo-400",
                  icon: "M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z",
                },
                {
                  stat: "48 hrs",
                  unit: "",
                  label: "First Analysis Delivered",
                  sub: "Full page-1 audit completed within 48 hours of onboarding, zero wait",
                  color: "from-emerald-400 to-emerald-300",
                  border: "border-emerald-500/20",
                  bg: "bg-emerald-500/5",
                  iconBg: "bg-emerald-500/10 border-emerald-500/20",
                  iconColor: "text-emerald-400",
                  icon: "m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z",
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className={`relative rounded-2xl p-6 border ${item.border} ${item.bg} group hover:scale-[1.02] transition-transform duration-200`}
                >
                  {/* Icon badge */}
                  <div className={`w-9 h-9 rounded-xl border flex items-center justify-center mb-4 flex-shrink-0 ${item.iconBg}`}>
                    <svg className={`${item.iconColor}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75} style={{ width: 18, height: 18 }}>
                      <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
                    </svg>
                  </div>
                  {/* Stat */}
                  <div
                    className={`text-3xl md:text-4xl font-bold mb-1 bg-gradient-to-br ${item.color} bg-clip-text leading-none`}
                    style={{ WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}
                  >
                    {item.stat}<span className="text-xl font-semibold">{item.unit}</span>
                  </div>
                  <div className="text-white font-semibold text-sm mb-1.5">{item.label}</div>
                  <div className="text-gray-500 text-xs leading-relaxed">{item.sub}</div>
                </div>
              ))}
            </div>

            {/* Right: Campaign Timeline card */}
            <div className="bg-white/[0.04] border border-white/10 rounded-2xl p-7 flex flex-col">
              <div className="mb-7">
                <p className="text-blue-400 text-xs font-semibold uppercase tracking-widest mb-1.5">Your Campaign Timeline</p>
                <p className="text-white font-bold text-lg leading-snug">What to expect after you start</p>
              </div>

              <div className="flex-1">
                {[
                  { phase: "Week 1–2", title: "Free Analysis", desc: "Full audit of your search results, every risk and opportunity mapped", color: "bg-blue-500", textColor: "text-blue-400", last: false },
                  { phase: "Month 1", title: "Strategy Delivered", desc: "Custom ORM & SEO roadmap, content plan, and link targets defined", color: "bg-indigo-500", textColor: "text-indigo-400", last: false },
                  { phase: "Month 2–3", title: "Campaign Launches", desc: "Content goes live, link building begins, positive assets gain authority", color: "bg-violet-500", textColor: "text-violet-400", last: false },
                  { phase: "Month 3–6", title: "Rankings Move", desc: "Positive results climb, negative content loses page 1 ground", color: "bg-emerald-500", textColor: "text-emerald-400", last: false },
                  { phase: "Ongoing", title: "Page 1 Owned", desc: "Monthly reporting, continued maintenance, results protected", color: "bg-emerald-400", textColor: "text-emerald-300", last: true },
                ].map((step) => (
                  <div key={step.phase} className="flex gap-4">
                    <div className="flex flex-col items-center flex-shrink-0">
                      <div className={`w-2.5 h-2.5 rounded-full ${step.color} mt-0.5 flex-shrink-0`} />
                      {!step.last && <div className="w-px flex-1 bg-white/10 my-1.5" />}
                    </div>
                    <div className={`${!step.last ? "pb-5" : ""}`}>
                      <span className={`text-[10px] font-bold uppercase tracking-widest ${step.textColor}`}>{step.phase}</span>
                      <p className="text-white text-sm font-semibold mt-0.5 mb-0.5">{step.title}</p>
                      <p className="text-gray-500 text-xs leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-7 pt-5 border-t border-white/10">
                <a
                  href="/free-orm-scan/"
                  className="flex items-center justify-center gap-2 w-full bg-blue-600 text-white text-sm font-bold px-5 py-3 rounded-xl hover:bg-blue-500 transition-colors shadow-lg shadow-blue-600/25"
                >
                  Start Your Campaign →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-blue-600 text-sm font-semibold uppercase tracking-widest mb-2">Our Services</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Everything you need to win online</h2>
            <p className="text-gray-500 mt-4 max-w-xl mx-auto">From crisis ORM to long-term SEO growth, measurable results that protect and elevate your brand.</p>
          </div>

          {/* Featured ORM card — full width */}
          <div className="relative bg-gradient-to-br from-blue-700 via-blue-600 to-indigo-700 rounded-3xl p-10 md:p-12 overflow-hidden mb-6 shadow-2xl shadow-blue-600/25">
            {/* Grid texture */}
            <div
              className="absolute inset-0 opacity-[0.07]"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(to right, rgba(255,255,255,0.5) 1px, transparent 1px)",
                backgroundSize: "48px 48px",
              }}
            />
            {/* Glow orbs */}
            <div className="absolute -top-24 -right-24 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-indigo-500/25 rounded-full blur-3xl pointer-events-none" />

            <div className="relative md:flex md:items-center md:gap-14">
              {/* Left: copy */}
              <div className="md:flex-1 mb-10 md:mb-0">
                <div className="inline-flex items-center gap-2 bg-white/15 border border-white/20 text-white text-xs font-semibold uppercase tracking-widest px-3.5 py-1.5 rounded-full mb-6">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block" />
                  Core Service
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Online Reputation Management</h3>
                <p className="text-blue-100 text-lg leading-relaxed mb-8 max-w-lg">
                  Stop letting unfair search results define your brand. We suppress damaging content, amplify positive stories, and ensure your first page reflects the real you.
                </p>
                <a
                  href="/solutions/online-reputation-management/"
                  className="inline-flex items-center gap-2 bg-white text-blue-700 px-7 py-3.5 rounded-xl font-bold hover:bg-blue-50 transition-colors text-sm shadow-lg shadow-black/10"
                >
                  Learn About ORM →
                </a>
              </div>

              {/* Right: feature chips grid */}
              <div className="md:w-72 flex-shrink-0 grid grid-cols-2 gap-3">
                {[
                  "Negative content suppression",
                  "Positive asset amplification",
                  "Review management",
                  "Crisis ORM response",
                  "Brand monitoring",
                  "Monthly reporting",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-2 bg-white/10 border border-white/15 rounded-xl px-4 py-3"
                  >
                    <svg className="w-3.5 h-3.5 text-emerald-400 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-blue-100 text-xs font-medium leading-snug">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* SEO + White Label — 2-col grid */}
          <div className="grid md:grid-cols-2 gap-6 stagger-children">
            {/* SEO */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md hover:border-indigo-100 transition-all group overflow-hidden flex flex-col">
              {/* Top accent line */}
              <div className="h-1 w-full bg-gradient-to-r from-indigo-500 to-indigo-400 flex-shrink-0" />
              <div className="p-8 flex flex-col flex-1">
                <div className="w-12 h-12 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center mb-5 group-hover:bg-indigo-100 transition-colors">
                  <svg className="w-6 h-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Search Engine Optimization</h3>
                <p className="text-gray-600 mb-5 leading-relaxed">
                  DiamondLinks delivers better than the gold standard, beautiful, long-lasting,
                  and real results that move the needle on your rankings.
                </p>
                {/* Key outcome chip */}
                <div className="inline-flex items-center gap-1.5 bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-semibold px-3 py-1.5 rounded-lg mb-6 w-fit">
                  <svg className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941" />
                  </svg>
                  Page-1 movement typically in 60–90 days
                </div>
                <ul className="space-y-2.5 mb-7 flex-1">
                  {["Strategic link building", "Content strategy & creation", "Technical SEO audits", "Keyword ranking growth"].map((item) => (
                    <li key={item} className="flex items-center gap-2.5 text-sm text-gray-600">
                      <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <a
                  href="/solutions/seo/"
                  className="inline-flex items-center justify-center gap-2 text-sm font-bold text-indigo-600 border border-indigo-200 bg-indigo-50/60 px-5 py-2.5 rounded-lg hover:bg-indigo-100 hover:border-indigo-300 transition-colors"
                >
                  Learn More About SEO
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                  </svg>
                </a>
              </div>
            </div>

            {/* White Label */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md hover:border-violet-100 transition-all group overflow-hidden flex flex-col">
              {/* Top accent line */}
              <div className="h-1 w-full bg-gradient-to-r from-violet-500 to-violet-400 flex-shrink-0" />
              <div className="p-8 flex flex-col flex-1">
                <div className="w-12 h-12 rounded-xl bg-violet-50 border border-violet-100 flex items-center justify-center mb-5 group-hover:bg-violet-100 transition-colors">
                  <svg className="w-6 h-6 text-violet-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">White Label ORM &amp; SEO</h3>
                <p className="text-gray-600 mb-5 leading-relaxed">
                  We work behind the scenes so your agency can deliver world-class reputation
                  and SEO results, at any scale, under your brand.
                </p>
                {/* Key outcome chip */}
                <div className="inline-flex items-center gap-1.5 bg-violet-50 border border-violet-100 text-violet-700 text-xs font-semibold px-3 py-1.5 rounded-lg mb-6 w-fit">
                  <svg className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg>
                  100% under your brand, invisible to your clients
                </div>
                <ul className="space-y-2.5 mb-7 flex-1">
                  {["Fully white-labeled deliverables", "Agency-friendly pricing", "Dedicated account support", "Scale from one client to hundreds"].map((item) => (
                    <li key={item} className="flex items-center gap-2.5 text-sm text-gray-600">
                      <span className="w-1.5 h-1.5 rounded-full bg-violet-400 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <a
                  href="/solutions/white-label-reputation-management/"
                  className="inline-flex items-center justify-center gap-2 text-sm font-bold text-violet-600 border border-violet-200 bg-violet-50/60 px-5 py-2.5 rounded-lg hover:bg-violet-100 hover:border-violet-300 transition-colors"
                >
                  Explore White Label
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Bottom conversion strip */}
          <div className="mt-14 pt-10 border-t border-gray-200">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              {/* Left: copy */}
              <div className="text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start gap-1.5 mb-3">
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-gray-500 text-xs font-medium">5.0 verified rating</span>
                </div>
                <p className="text-gray-900 font-bold text-xl md:text-2xl mb-2">
                  Not sure which service fits your situation?
                </p>
                <p className="text-gray-500 text-sm max-w-sm">
                  Our free analysis covers ORM, SEO, and white-label needs, and we&apos;ll recommend the right approach for your brand. No commitment required.
                </p>
              </div>

              {/* Vertical divider (desktop) */}
              <div className="hidden md:block w-px h-16 bg-gray-200 flex-shrink-0" />

              {/* Right: CTAs */}
              <div className="flex flex-col sm:flex-row items-center gap-4 flex-shrink-0">
                <a
                  href="/free-orm-scan/"
                  className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-3.5 rounded-lg font-bold hover:bg-blue-500 transition-colors shadow-lg shadow-blue-600/20 text-sm whitespace-nowrap"
                >
                  Get Your Free Analysis
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                  </svg>
                </a>
                <a
                  href="tel:504-233-4365"
                  className="flex items-center gap-2 text-gray-500 font-medium hover:text-gray-800 transition-colors text-sm"
                >
                  <svg className="w-3.5 h-3.5 text-gray-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                  </svg>
                  504.233.4365
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why DiamondLinks */}
      <section className="py-24 px-6 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-blue-600 text-sm font-semibold uppercase tracking-widest mb-2">The Difference</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Leading Brands Choose DiamondLinks</h2>
            <p className="text-gray-500 max-w-xl mx-auto text-lg">Not all reputation management is created equal. Here&apos;s how we compare.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 items-start stagger-children">

            {/* Column 1: DIY */}
            <div className="rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
              <div className="bg-gray-50 border-b border-gray-100 px-6 py-6 text-center">
                <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center mx-auto mb-3">
                  <svg className="w-5 h-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                  </svg>
                </div>
                <h3 className="font-bold text-gray-700 text-base">Doing It Yourself</h3>
                <p className="text-gray-400 text-xs mt-1">No professional help</p>
              </div>
              <div className="p-6 space-y-5">
                {[
                  { label: "Timeline to results", value: "Months to years" },
                  { label: "ORM specialization", value: "None or self-taught" },
                  { label: "Strategy", value: "Trial & error" },
                  { label: "Reporting", value: "Manual / none" },
                  { label: "Results commitment", value: "None" },
                  { label: "White-label option", value: "Not applicable" },
                ].map((row) => (
                  <div key={row.label} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-red-50 border border-red-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3 h-3 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 mb-0.5">{row.label}</p>
                      <p className="text-sm text-gray-500 font-medium">{row.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Column 2: Generic Agency */}
            <div className="rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
              <div className="bg-gray-50 border-b border-gray-100 px-6 py-6 text-center">
                <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center mx-auto mb-3">
                  <svg className="w-5 h-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
                  </svg>
                </div>
                <h3 className="font-bold text-gray-700 text-base">Generic SEO Agency</h3>
                <p className="text-gray-400 text-xs mt-1">Generalist approach</p>
              </div>
              <div className="p-6 space-y-5">
                {[
                  { label: "Timeline to results", value: "Highly variable" },
                  { label: "ORM specialization", value: "Basic or outsourced" },
                  { label: "Strategy", value: "Cookie-cutter playbooks" },
                  { label: "Reporting", value: "Generic monthly PDF" },
                  { label: "Results commitment", value: "Best effort only" },
                  { label: "White-label option", value: "Rarely available" },
                ].map((row) => (
                  <div key={row.label} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-orange-50 border border-orange-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3 h-3 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 mb-0.5">{row.label}</p>
                      <p className="text-sm text-gray-500 font-medium">{row.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Column 3: DiamondLinks — highlighted */}
            <div className="rounded-2xl border-2 border-blue-200 shadow-xl shadow-blue-600/10 overflow-hidden relative">
              {/* Top gradient accent line */}
              <div className="h-1 w-full bg-gradient-to-r from-blue-500 to-indigo-500" />
              <div className="bg-blue-600 border-b border-blue-500 px-6 py-6 text-center relative">
                {/* Recommended badge */}
                <div className="inline-flex items-center gap-1.5 bg-white/15 border border-white/25 text-white text-xs font-bold px-3 py-1.5 rounded-full mb-3">
                  <svg className="w-3 h-3 text-yellow-300 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  Recommended
                </div>
                <div className="w-10 h-10 rounded-full bg-white/20 border border-white/30 flex items-center justify-center mx-auto mb-3">
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="font-bold text-white text-base">DiamondLinks</h3>
                <p className="text-blue-200 text-xs mt-1">30+ years combined expertise</p>
              </div>
              <div className="p-6 space-y-5 bg-white">
                {[
                  { label: "Timeline to results", value: "60–120 days, typically" },
                  { label: "ORM specialization", value: "30+ yrs, ORM-only focus" },
                  { label: "Strategy", value: "Custom playbook per client" },
                  { label: "Reporting", value: "Transparent monthly reports" },
                  { label: "Results commitment", value: "We work until it's fixed" },
                  { label: "White-label option", value: "Full white-label program" },
                ].map((row) => (
                  <div key={row.label} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3 h-3 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 mb-0.5">{row.label}</p>
                      <p className="text-sm text-gray-900 font-semibold">{row.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Bottom conversion strip */}
          <div className="mt-14 pt-10 border-t border-gray-100">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              {/* Left: copy */}
              <div className="text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start gap-1.5 mb-3">
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-gray-500 text-xs font-medium">5.0 verified rating</span>
                </div>
                <p className="text-gray-900 font-bold text-xl md:text-2xl mb-2">
                  See why executives choose DiamondLinks.
                </p>
                <p className="text-gray-500 text-sm max-w-sm">
                  The most trusted ORM specialists in the business, because we only succeed when you do. No commitment required.
                </p>
              </div>

              {/* Vertical divider (desktop) */}
              <div className="hidden md:block w-px h-16 bg-gray-200 flex-shrink-0" />

              {/* Right: CTAs */}
              <div className="flex flex-col sm:flex-row items-center gap-4 flex-shrink-0">
                <a
                  href="/free-orm-scan/"
                  className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-3.5 rounded-lg font-bold hover:bg-blue-500 transition-colors shadow-lg shadow-blue-600/20 text-sm whitespace-nowrap"
                >
                  Get Your Free Analysis
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                  </svg>
                </a>
                <a
                  href="tel:504-233-4365"
                  className="flex items-center gap-2 text-gray-500 font-medium hover:text-gray-800 transition-colors text-sm"
                >
                  <svg className="w-3.5 h-3.5 text-gray-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                  </svg>
                  504.233.4365
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 px-6 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-blue-600 text-sm font-semibold uppercase tracking-widest mb-2">Our Process</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">How We Transform Your Search Results</h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg">A proven, three-step approach that puts you back in control of your online narrative.</p>
          </div>

          {/* Step progress connector — desktop only */}
          <div className="hidden md:flex items-center justify-between mb-10 px-2">
            {/* Node 1 */}
            <div className="flex flex-col items-center gap-2 flex-shrink-0">
              <div className="w-12 h-12 rounded-full bg-blue-600 border-4 border-blue-100 flex items-center justify-center shadow-lg shadow-blue-600/30">
                <span className="text-white text-sm font-black">01</span>
              </div>
              <span className="text-blue-600 text-xs font-bold uppercase tracking-widest whitespace-nowrap">Free Analysis</span>
            </div>

            {/* Connector 1→2 */}
            <div className="flex-1 flex items-center mx-3 mt-[-1.25rem]">
              <div className="flex-1 border-t-2 border-dashed border-blue-200" />
              <div className="w-7 h-7 rounded-full bg-blue-50 border-2 border-blue-200 flex items-center justify-center flex-shrink-0 -mx-0.5">
                <svg className="w-3.5 h-3.5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
              </div>
              <div className="flex-1 border-t-2 border-dashed border-indigo-200" />
            </div>

            {/* Node 2 */}
            <div className="flex flex-col items-center gap-2 flex-shrink-0">
              <div className="w-12 h-12 rounded-full bg-indigo-600 border-4 border-indigo-100 flex items-center justify-center shadow-lg shadow-indigo-600/30">
                <span className="text-white text-sm font-black">02</span>
              </div>
              <span className="text-indigo-600 text-xs font-bold uppercase tracking-widest whitespace-nowrap">Custom Strategy</span>
            </div>

            {/* Connector 2→3 */}
            <div className="flex-1 flex items-center mx-3 mt-[-1.25rem]">
              <div className="flex-1 border-t-2 border-dashed border-indigo-200" />
              <div className="w-7 h-7 rounded-full bg-indigo-50 border-2 border-indigo-200 flex items-center justify-center flex-shrink-0 -mx-0.5">
                <svg className="w-3.5 h-3.5 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
              </div>
              <div className="flex-1 border-t-2 border-dashed border-violet-200" />
            </div>

            {/* Node 3 */}
            <div className="flex flex-col items-center gap-2 flex-shrink-0">
              <div className="w-12 h-12 rounded-full bg-violet-600 border-4 border-violet-100 flex items-center justify-center shadow-lg shadow-violet-600/30">
                <span className="text-white text-sm font-black">03</span>
              </div>
              <span className="text-violet-600 text-xs font-bold uppercase tracking-widest whitespace-nowrap">Lasting Results</span>
            </div>
          </div>

          {/* Step cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-10 stagger-children-left">
            {/* Step 1 */}
            <div className="relative bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-blue-100 transition-all overflow-hidden group">
              {/* Top accent line */}
              <div className="h-1 w-full bg-gradient-to-r from-blue-500 to-blue-400" />
              {/* Large faded number */}
              <div className="absolute -bottom-4 -right-2 text-[8rem] font-black leading-none select-none pointer-events-none text-blue-50">1</div>
              <div className="p-8 relative">
                {/* Step badge */}
                <div className="inline-flex items-center gap-2 mb-6">
                  <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xs font-bold">01</span>
                  </div>
                  <span className="text-blue-600 text-xs font-semibold uppercase tracking-widest">Step One</span>
                </div>
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center mb-5 group-hover:bg-blue-100 transition-colors">
                  <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Free Search Analysis</h3>
                <p className="text-gray-500 leading-relaxed text-sm mb-6">
                  We audit your current search results page by page, identifying damaging content, missed opportunities, and the exact gaps harming your brand.
                </p>
                <div className="flex items-center gap-2 text-xs text-gray-400">
                  <svg className="w-3.5 h-3.5 text-blue-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg>
                  Completed within 48 hours of onboarding
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-indigo-100 transition-all overflow-hidden group">
              <div className="h-1 w-full bg-gradient-to-r from-indigo-500 to-indigo-400" />
              <div className="absolute -bottom-4 -right-2 text-[8rem] font-black leading-none select-none pointer-events-none text-indigo-50">2</div>
              <div className="p-8 relative">
                <div className="inline-flex items-center gap-2 mb-6">
                  <div className="w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xs font-bold">02</span>
                  </div>
                  <span className="text-indigo-600 text-xs font-semibold uppercase tracking-widest">Step Two</span>
                </div>
                <div className="w-12 h-12 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center mb-5 group-hover:bg-indigo-100 transition-colors">
                  <svg className="w-6 h-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Custom Strategy</h3>
                <p className="text-gray-500 leading-relaxed text-sm mb-6">
                  Our team builds a tailored ORM &amp; SEO roadmap specific to your situation, including content creation, strategic link building, and positive asset amplification.
                </p>
                <div className="flex items-center gap-2 text-xs text-gray-400">
                  <svg className="w-3.5 h-3.5 text-indigo-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg>
                  Delivered in a clear, jargon-free roadmap
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-violet-100 transition-all overflow-hidden group">
              <div className="h-1 w-full bg-gradient-to-r from-violet-500 to-violet-400" />
              <div className="absolute -bottom-4 -right-2 text-[8rem] font-black leading-none select-none pointer-events-none text-violet-50">3</div>
              <div className="p-8 relative">
                <div className="inline-flex items-center gap-2 mb-6">
                  <div className="w-8 h-8 rounded-full bg-violet-600 flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xs font-bold">03</span>
                  </div>
                  <span className="text-violet-600 text-xs font-semibold uppercase tracking-widest">Step Three</span>
                </div>
                <div className="w-12 h-12 rounded-xl bg-violet-50 border border-violet-100 flex items-center justify-center mb-5 group-hover:bg-violet-100 transition-colors">
                  <svg className="w-6 h-6 text-violet-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 0 1 3 3h-15a3 3 0 0 1 3-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 0 1-.982-3.172M9.497 14.25a7.454 7.454 0 0 0 .981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 0 0 7.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.25 9.71 2 12 2c2.291 0 4.545.25 6.75.721v1.515M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 0 1 16.27 9.728M18.75 4.236V4.5a6.985 6.985 0 0 1-2.48 5.228m2.48-5.492a46.32 46.32 0 0 1 2.916.52 6.003 6.003 0 0 1-5.395 4.972M18.75 4.236c.982.143 1.954.317 2.916.52" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Lasting Results</h3>
                <p className="text-gray-500 leading-relaxed text-sm mb-6">
                  We execute with precision and transparency, delivering results that stick. You own your first page, and we keep it that way with monthly reporting.
                </p>
                <div className="flex items-center gap-2 text-xs text-gray-400">
                  <svg className="w-3.5 h-3.5 text-violet-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg>
                  Most clients see movement within 60–90 days
                </div>
              </div>
            </div>
          </div>

          {/* Outcome strip */}
          <div className="relative bg-gradient-to-br from-blue-50/70 via-white to-indigo-50/70 rounded-2xl border border-blue-100/60 px-8 py-8 overflow-hidden">
            {/* Subtle glow */}
            <div className="absolute -top-16 -right-16 w-48 h-48 bg-blue-200/20 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-12 -left-12 w-40 h-40 bg-indigo-200/15 rounded-full blur-3xl pointer-events-none" />

            <div className="relative">
              <div className="flex items-center justify-center gap-3 mb-7">
                <div className="flex-1 h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent" />
                <p className="text-center text-xs font-bold text-blue-600 uppercase tracking-widest whitespace-nowrap px-2">
                  What our clients typically experience
                </p>
                <div className="flex-1 h-px bg-gradient-to-r from-transparent via-indigo-200 to-transparent" />
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 stagger-children-scale">
                {[
                  {
                    stat: "Page 1",
                    statColor: "text-emerald-600",
                    icon: "M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z",
                    label: "Negative content suppressed off page 1",
                    color: "bg-emerald-50 border-emerald-100",
                    iconColor: "text-emerald-600",
                  },
                  {
                    stat: "+75%",
                    statColor: "text-blue-600",
                    icon: "M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941",
                    label: "Increase in positive brand visibility",
                    color: "bg-blue-50 border-blue-100",
                    iconColor: "text-blue-600",
                  },
                  {
                    stat: "5.0 ★",
                    statColor: "text-yellow-600",
                    icon: "M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.563.563 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.563.563 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z",
                    label: "Stronger, verified review profiles",
                    color: "bg-yellow-50 border-yellow-100",
                    iconColor: "text-yellow-500",
                  },
                  {
                    stat: "Monthly",
                    statColor: "text-indigo-600",
                    icon: "M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5",
                    label: "Transparent progress reporting",
                    color: "bg-indigo-50 border-indigo-100",
                    iconColor: "text-indigo-600",
                  },
                ].map((item) => (
                  <div key={item.label} className={`relative flex flex-col gap-2.5 rounded-xl border px-5 py-4 bg-white shadow-sm ${item.color}`}>
                    <div className={`text-lg font-black leading-none ${item.statColor}`}>{item.stat}</div>
                    <div className="flex items-start gap-2.5">
                      <svg className={`w-4 h-4 flex-shrink-0 mt-0.5 ${item.iconColor}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
                      </svg>
                      <span className="text-xs font-medium text-gray-600 leading-snug">{item.label}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom conversion strip */}
          <div className="border-t border-gray-100 mt-14 pt-10">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              {/* Left: copy */}
              <div className="text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start gap-1.5 mb-3">
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-gray-500 text-xs font-medium">5.0 verified rating</span>
                </div>
                <p className="text-gray-900 font-bold text-xl md:text-2xl mb-2">
                  Ready to take back your first page?
                </p>
                <p className="text-gray-500 text-sm max-w-sm">
                  Our proven three-step process has helped executives, attorneys &amp; agencies nationwide transform their search results. Start with a free analysis.
                </p>
              </div>

              {/* Vertical divider (desktop) */}
              <div className="hidden md:block w-px h-16 bg-gray-200 flex-shrink-0" />

              {/* Right: CTAs */}
              <div className="flex flex-col sm:flex-row items-center gap-4 flex-shrink-0">
                <a
                  href="/free-orm-scan/"
                  className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-3.5 rounded-lg font-bold hover:bg-blue-500 transition-colors shadow-lg shadow-blue-600/20 text-sm whitespace-nowrap"
                >
                  Get Your Free Analysis
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                  </svg>
                </a>
                <a
                  href="tel:504-233-4365"
                  className="flex items-center gap-2 text-gray-500 font-medium hover:text-gray-800 transition-colors text-sm"
                >
                  <svg className="w-3.5 h-3.5 text-gray-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                  </svg>
                  504.233.4365
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Results */}
      <section className="py-24 px-6 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-100 text-emerald-600 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
              <svg className="w-3.5 h-3.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
              Proven Results
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Real Clients. Real Results.
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto mb-8">
              From crisis ORM to long-term brand building, see what our clients have experienced working with DiamondLinks.
            </p>

            {/* Aggregate rating badge */}
            <div className="inline-flex items-center gap-4 bg-white border border-gray-100 shadow-sm rounded-2xl px-6 py-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900 leading-none mb-1">5.0</div>
                <div className="flex gap-0.5 justify-center">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-3.5 h-3.5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <div className="w-px h-10 bg-gray-100 flex-shrink-0" />
              <div className="text-left">
                <p className="text-gray-900 font-semibold text-sm">5-Star Rated Agency</p>
                <p className="text-gray-400 text-xs mt-0.5">Verified by real clients across Google &amp; industry platforms</p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12 stagger-children">
            {/* Case Study 1 */}
            <div className="relative bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden group hover:shadow-md hover:border-blue-100 transition-all flex flex-col">
              <div className="h-1 w-full bg-gradient-to-r from-blue-500 to-blue-400 flex-shrink-0" />
              <div className="p-7 flex flex-col flex-1">
                {/* Industry + timeline */}
                <div className="flex items-center justify-between mb-5">
                  <span className="inline-flex items-center gap-1.5 bg-blue-50 border border-blue-100 text-blue-600 text-xs font-semibold px-3 py-1 rounded-full">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0" />
                    Finance
                  </span>
                  <span className="text-gray-400 text-xs font-medium">90 days</span>
                </div>

                {/* Challenge */}
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-1.5">The Challenge</p>
                <p className="text-gray-700 text-sm leading-relaxed mb-5">
                  3 negative page-1 results, including a competitor comparison site and a damaging review aggregator, were eroding prospective client trust before the first conversation.
                </p>

                {/* Before → After transformation strip */}
                <div className="flex items-center gap-2 mb-6 bg-gradient-to-r from-red-50 via-gray-50 to-emerald-50 rounded-xl border border-gray-100 p-3">
                  {/* Before */}
                  <div className="flex-1 text-center">
                    <p className="text-red-500 font-bold text-lg leading-none mb-0.5">3</p>
                    <p className="text-red-400 text-[10px] font-semibold uppercase tracking-wide">Negative</p>
                  </div>
                  {/* Arrow connector */}
                  <div className="flex flex-col items-center gap-0.5 flex-shrink-0 px-1">
                    <div className="w-8 h-0.5 bg-gradient-to-r from-red-300 via-gray-300 to-emerald-400 rounded-full" />
                    <svg className="w-4 h-4 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                    </svg>
                    <div className="text-[8px] font-bold text-gray-400 uppercase tracking-widest">90 days</div>
                  </div>
                  {/* After */}
                  <div className="flex-1 text-center">
                    <p className="text-emerald-600 font-bold text-lg leading-none mb-0.5">0</p>
                    <p className="text-emerald-500 text-[10px] font-semibold uppercase tracking-wide">Negative</p>
                  </div>
                </div>

                {/* Quote */}
                <div className="mt-auto border-t border-gray-50 pt-5">
                  <p className="text-gray-500 text-xs leading-relaxed italic mb-4">
                    &ldquo;Finance can be a messy industry, and I feel confident continuing in it by having DiamondLinks manage my online reputation.&rdquo;
                  </p>
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-full bg-blue-600/20 border border-blue-400/30 flex items-center justify-center flex-shrink-0">
                      <span className="text-blue-500 text-[9px] font-bold">RT</span>
                    </div>
                    <div>
                      <p className="text-gray-700 text-xs font-semibold">Rusty T.</p>
                      <p className="text-gray-400 text-xs">CEO, Finance Company</p>
                    </div>
                    <div className="ml-auto flex gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-3 h-3 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Case Study 2 */}
            <div className="relative bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden group hover:shadow-md hover:border-indigo-100 transition-all flex flex-col">
              <div className="h-1 w-full bg-gradient-to-r from-indigo-500 to-indigo-400 flex-shrink-0" />
              <div className="p-7 flex flex-col flex-1">
                <div className="flex items-center justify-between mb-5">
                  <span className="inline-flex items-center gap-1.5 bg-indigo-50 border border-indigo-100 text-indigo-600 text-xs font-semibold px-3 py-1 rounded-full">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 flex-shrink-0" />
                    Corporate / CEO
                  </span>
                  <span className="text-gray-400 text-xs font-medium">120 days</span>
                </div>

                <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-1.5">The Challenge</p>
                <p className="text-gray-700 text-sm leading-relaxed mb-5">
                  A high-profile CEO&apos;s name returned negative press coverage in the top results, directly impacting deal flow, partnership conversations, and investor confidence.
                </p>

                {/* Before → After transformation strip */}
                <div className="flex items-center gap-2 mb-6 bg-gradient-to-r from-red-50 via-gray-50 to-emerald-50 rounded-xl border border-gray-100 p-3">
                  {/* Before */}
                  <div className="flex-1 text-center">
                    <p className="text-red-500 font-bold text-lg leading-none mb-0.5">Pg. 1</p>
                    <p className="text-red-400 text-[10px] font-semibold uppercase tracking-wide">Neg. Press</p>
                  </div>
                  {/* Arrow connector */}
                  <div className="flex flex-col items-center gap-0.5 flex-shrink-0 px-1">
                    <div className="w-8 h-0.5 bg-gradient-to-r from-red-300 via-gray-300 to-emerald-400 rounded-full" />
                    <svg className="w-4 h-4 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                    </svg>
                    <div className="text-[8px] font-bold text-gray-400 uppercase tracking-widest">120 days</div>
                  </div>
                  {/* After */}
                  <div className="flex-1 text-center">
                    <p className="text-emerald-600 font-bold text-lg leading-none mb-0.5">Pg. 1</p>
                    <p className="text-emerald-500 text-[10px] font-semibold uppercase tracking-wide">Owned</p>
                  </div>
                </div>

                <div className="mt-auto border-t border-gray-50 pt-5">
                  <p className="text-gray-500 text-xs leading-relaxed italic mb-4">
                    &ldquo;Having a positive online reputation is vital to any business. Without DiamondLinks, there&apos;s no telling where we would be today.&rdquo;
                  </p>
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-full bg-indigo-600/20 border border-indigo-400/30 flex items-center justify-center flex-shrink-0">
                      <span className="text-indigo-500 text-[9px] font-bold">NC</span>
                    </div>
                    <div>
                      <p className="text-gray-700 text-xs font-semibold">Narin C.</p>
                      <p className="text-gray-400 text-xs">CEO, Capital Alliance</p>
                    </div>
                    <div className="ml-auto flex gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-3 h-3 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Case Study 3 */}
            <div className="relative bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden group hover:shadow-md hover:border-violet-100 transition-all flex flex-col">
              <div className="h-1 w-full bg-gradient-to-r from-violet-500 to-violet-400 flex-shrink-0" />
              <div className="p-7 flex flex-col flex-1">
                <div className="flex items-center justify-between mb-5">
                  <span className="inline-flex items-center gap-1.5 bg-violet-50 border border-violet-100 text-violet-600 text-xs font-semibold px-3 py-1 rounded-full">
                    <span className="w-1.5 h-1.5 rounded-full bg-violet-500 flex-shrink-0" />
                    Marketing Agency
                  </span>
                  <span className="text-gray-400 text-xs font-medium">60 days</span>
                </div>

                <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-1.5">The Challenge</p>
                <p className="text-gray-700 text-sm leading-relaxed mb-5">
                  A growing SEO agency needed both ORM and SEO support across multiple client brands, requiring a reliable white-label partner who could scale without sacrificing quality.
                </p>

                {/* Before → After transformation strip */}
                <div className="flex items-center gap-2 mb-6 bg-gradient-to-r from-red-50 via-gray-50 to-emerald-50 rounded-xl border border-gray-100 p-3">
                  {/* Before */}
                  <div className="flex-1 text-center">
                    <p className="text-red-500 font-bold text-lg leading-none mb-0.5">Stalled</p>
                    <p className="text-red-400 text-[10px] font-semibold uppercase tracking-wide">Rankings</p>
                  </div>
                  {/* Arrow connector */}
                  <div className="flex flex-col items-center gap-0.5 flex-shrink-0 px-1">
                    <div className="w-8 h-0.5 bg-gradient-to-r from-red-300 via-gray-300 to-emerald-400 rounded-full" />
                    <svg className="w-4 h-4 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                    </svg>
                    <div className="text-[8px] font-bold text-gray-400 uppercase tracking-widest">60 days</div>
                  </div>
                  {/* After */}
                  <div className="flex-1 text-center">
                    <p className="text-emerald-600 font-bold text-lg leading-none mb-0.5">Page 1</p>
                    <p className="text-emerald-500 text-[10px] font-semibold uppercase tracking-wide">Achieved</p>
                  </div>
                </div>

                <div className="mt-auto border-t border-gray-50 pt-5">
                  <p className="text-gray-500 text-xs leading-relaxed italic mb-4">
                    &ldquo;Brandon and team definitely know what they are doing. From SEO to reputation management they are a great asset.&rdquo;
                  </p>
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-full bg-violet-600/20 border border-violet-400/30 flex items-center justify-center flex-shrink-0">
                      <span className="text-violet-500 text-[9px] font-bold">RR</span>
                    </div>
                    <div>
                      <p className="text-gray-700 text-xs font-semibold">Richart R.</p>
                      <p className="text-gray-400 text-xs">CEO, SEO Company</p>
                    </div>
                    <div className="ml-auto flex gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-3 h-3 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Additional testimonial */}
          <div className="mt-8 relative bg-white rounded-2xl border border-gray-100 shadow-sm p-8 md:p-10 md:flex md:items-center md:gap-10">
            <div className="md:flex-1 mb-6 md:mb-0">
              <div className="flex gap-0.5 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <blockquote className="text-gray-700 text-lg font-medium leading-relaxed italic">
                &ldquo;Brandon Hopkins, the brain behind our SEO strategy. He&apos;s done a great job for us and has been key in driving our ranking up along with ranking our content.&rdquo;
              </blockquote>
            </div>
            <div className="flex-shrink-0">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-600/15 border border-blue-400/25 flex items-center justify-center">
                  <span className="text-blue-500 text-xs font-bold">RG</span>
                </div>
                <div>
                  <p className="text-gray-900 font-semibold text-sm">Reed G.</p>
                  <p className="text-gray-400 text-xs">CEO, SEO Company</p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom conversion strip */}
          <div className="mt-14 pt-10 border-t border-gray-200">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              {/* Left: copy */}
              <div className="text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start gap-1.5 mb-3">
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-gray-500 text-xs font-medium">5.0 verified rating</span>
                </div>
                <p className="text-gray-900 font-bold text-xl md:text-2xl mb-2">
                  Ready to see results like these?
                </p>
                <p className="text-gray-500 text-sm max-w-md">
                  Join the executives, attorneys &amp; agencies who&apos;ve taken back control of their online presence.
                </p>
              </div>

              {/* Vertical divider (desktop) */}
              <div className="hidden md:block w-px h-16 bg-gray-200 flex-shrink-0" />

              {/* Right: CTAs */}
              <div className="flex flex-col sm:flex-row items-center gap-4 flex-shrink-0">
                <a
                  href="/free-orm-scan/"
                  className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-3.5 rounded-lg font-bold hover:bg-blue-500 transition-colors shadow-lg shadow-blue-600/20 text-sm whitespace-nowrap"
                >
                  Get Your Free Analysis
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                  </svg>
                </a>
                <a
                  href="tel:504-233-4365"
                  className="flex items-center gap-2 text-gray-500 font-medium hover:text-gray-800 transition-colors text-sm"
                >
                  <svg className="w-3.5 h-3.5 text-gray-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                  </svg>
                  504.233.4365
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Commitment */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Main commitment card — premium gradient with generous spacing */}
          <div className="relative bg-gradient-to-br from-blue-50 via-white to-indigo-50/80 rounded-3xl border border-blue-100/80 shadow-lg shadow-blue-100/40 px-8 py-14 md:px-14 md:py-16 overflow-hidden">
            {/* Decorative glow orbs */}
            <div className="absolute -top-32 -right-32 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-indigo-200/15 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-blue-100/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative">
              {/* Top: Shield badge + headline — centered */}
              <div className="text-center mb-12">
                {/* Shield badge with gradient ring */}
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-white border-2 border-blue-200 shadow-lg shadow-blue-200/40 mb-6">
                  <svg className="w-10 h-10 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
                  </svg>
                </div>
                <div className="inline-flex items-center gap-2 bg-blue-100/60 border border-blue-200/60 text-blue-600 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-5">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500 inline-block" />
                  Our Commitment
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-4">
                  We Work Until It&apos;s Fixed.{" "}
                  <span
                    style={{
                      background: "linear-gradient(135deg, #2563eb 0%, #4f46e5 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    Period.
                  </span>
                </h2>
                <p className="text-gray-500 text-lg leading-relaxed max-w-2xl mx-auto">
                  Our commitment doesn&apos;t end when your invoice is paid. If your first page isn&apos;t moving in the right direction, we adjust the strategy and keep going, because we only succeed when you do.
                </p>
              </div>

              {/* 3 commitment pillars — horizontal cards */}
              <div className="grid md:grid-cols-3 gap-5 mb-12 stagger-children-scale">
                {[
                  {
                    icon: "M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5",
                    title: "No Lock-In Contracts",
                    desc: "Month-to-month flexibility. Stay because you see results, not because you're trapped.",
                    color: "text-blue-600",
                    iconBg: "bg-blue-50 border-blue-100",
                    accent: "from-blue-500 to-blue-400",
                  },
                  {
                    icon: "M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z",
                    title: "Transparent Reporting",
                    desc: "Detailed monthly progress reports. You always know exactly what's happening and what's next.",
                    color: "text-indigo-600",
                    iconBg: "bg-indigo-50 border-indigo-100",
                    accent: "from-indigo-500 to-indigo-400",
                  },
                  {
                    icon: "M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z",
                    title: "Results-First Philosophy",
                    desc: "We measure success by your outcomes, not by hours logged. If it's not working, we pivot.",
                    color: "text-emerald-600",
                    iconBg: "bg-emerald-50 border-emerald-100",
                    accent: "from-emerald-500 to-emerald-400",
                  },
                ].map((item) => (
                  <div key={item.title} className="relative bg-white rounded-2xl border border-gray-100 p-6 shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden group">
                    {/* Top accent line */}
                    <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${item.accent} opacity-80`} />
                    <div className={`w-12 h-12 rounded-xl border flex items-center justify-center mb-4 ${item.iconBg}`}>
                      <svg className={`w-6 h-6 ${item.color}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
                        <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
                      </svg>
                    </div>
                    <h3 className="text-gray-900 font-bold text-base mb-2">{item.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>

              {/* CTA row */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="/free-orm-scan/"
                  className="inline-flex items-center gap-2.5 bg-blue-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-blue-500 transition-colors text-sm shadow-lg shadow-blue-600/25"
                >
                  Start for Free. No Commitment
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                  </svg>
                </a>
                <a href="tel:504-233-4365" className="inline-flex items-center gap-2 text-gray-500 hover:text-gray-700 transition-colors text-sm font-medium">
                  <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                  </svg>
                  Or call 504.233.4365
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="relative py-24 px-6 overflow-hidden">
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-800 via-blue-700 to-indigo-800" />
        {/* Grid line overlay */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(to right, rgba(255,255,255,0.4) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
        {/* Blur orb top-right */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-400/25 rounded-full blur-3xl pointer-events-none" />
        {/* Blur orb bottom-left */}
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-indigo-500/25 rounded-full blur-3xl pointer-events-none" />
        {/* Center radial highlight */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(96,165,250,0.12) 0%, transparent 70%)" }}
        />

        <div className="relative max-w-6xl mx-auto">
          <div className="md:grid md:grid-cols-[1fr_380px] gap-14 items-center">
            {/* Left: Copy + deliverables */}
            <div className="mb-10 md:mb-0">
              <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white/80 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block animate-pulse" />
                Free Reputation Analysis
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
                Find out what&apos;s holding<br className="hidden md:block" /> your brand back, free.
              </h2>
              <p className="text-blue-100 text-lg leading-relaxed mb-8 max-w-lg">
                Our ORM specialists will personally audit your search presence and deliver a clear picture of your reputation risks and opportunities.
              </p>

              {/* What's included */}
              <div className="mb-8">
                <p className="text-white/50 text-xs font-semibold uppercase tracking-widest mb-4">Your free analysis includes:</p>
                <div className="space-y-3">
                  {[
                    "Full page-1 audit of your name & brand keywords",
                    "Identification of damaging content, reviews & risks",
                    "Custom ORM strategy with timeline & cost estimate",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-3 h-3 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-blue-50 text-sm leading-snug">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Trust micro-chips */}
              <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-white/55 text-sm">
                <span className="flex items-center gap-1.5">
                  <svg className="w-3.5 h-3.5 text-white/40" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg>
                  Response within 24 hours
                </span>
                <span className="flex items-center gap-1.5">
                  <svg className="w-3.5 h-3.5 text-white/40" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
                  </svg>
                  100% confidential
                </span>
                <span className="flex items-center gap-1.5">
                  <svg className="w-3.5 h-3.5 text-white/40" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
                  </svg>
                  No commitment required
                </span>
              </div>
            </div>

            {/* Right: Premium white conversion card */}
            <div className="bg-white rounded-3xl shadow-2xl shadow-black/30 overflow-hidden flex-shrink-0">
              {/* Card top accent */}
              <div className="h-1.5 w-full bg-gradient-to-r from-blue-500 via-indigo-500 to-violet-500" />

              <div className="p-8">
                {/* Card header */}
                <div className="mb-6">
                  <h3 className="text-gray-900 font-bold text-xl leading-tight mb-1">Get Your Free Analysis</h3>
                  <p className="text-gray-500 text-sm">See exactly what&apos;s affecting your reputation</p>
                </div>

                {/* Primary CTA */}
                <a
                  href="/free-orm-scan/"
                  className="flex items-center justify-center gap-2 w-full bg-blue-600 text-white text-center px-6 py-4 rounded-xl font-bold hover:bg-blue-500 transition-colors shadow-lg shadow-blue-600/30 text-sm"
                >
                  Request Free Analysis
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                  </svg>
                </a>

                {/* Divider */}
                <div className="flex items-center gap-3 my-5">
                  <div className="flex-1 h-px bg-gray-100" />
                  <span className="text-gray-400 text-xs font-medium">or call directly</span>
                  <div className="flex-1 h-px bg-gray-100" />
                </div>

                {/* Phone */}
                <a
                  href="tel:504-233-4365"
                  className="flex items-center justify-center gap-3 w-full border-2 border-gray-200 text-gray-800 px-6 py-3.5 rounded-xl font-bold hover:border-blue-300 hover:text-blue-700 transition-colors group"
                >
                  <div className="w-8 h-8 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-100 transition-colors">
                    <svg className="w-4 h-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                    </svg>
                  </div>
                  <span className="text-lg tracking-wide">504.233.4365</span>
                </a>

                {/* Trust badges */}
                <div className="mt-6 pt-5 border-t border-gray-100">
                  <div className="grid grid-cols-3 gap-2 text-center">
                    {[
                      { icon: "M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z", label: "No contracts", color: "text-blue-600 bg-blue-50" },
                      { icon: "M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z", label: "Confidential", color: "text-indigo-600 bg-indigo-50" },
                      { icon: "M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z", label: "24hr response", color: "text-emerald-600 bg-emerald-50" },
                    ].map(({ icon, label, color }) => (
                      <div key={label} className="flex flex-col items-center gap-1.5">
                        <div className={`w-7 h-7 rounded-lg ${color} flex items-center justify-center`}>
                          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d={icon} />
                          </svg>
                        </div>
                        <span className="text-gray-500 text-[11px] font-medium leading-tight text-center">{label}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Social proof micro-line */}
                <p className="text-center text-gray-400 text-[11px] mt-4 leading-snug">
                  Trusted by executives, attorneys &amp; agencies nationwide
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-6 bg-white border-t border-gray-100">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-blue-600 text-sm font-semibold uppercase tracking-widest mb-2">FAQ</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Common Questions About ORM &amp; SEO</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">Clear answers to the questions every brand asks before taking control of their online presence.</p>
          </div>

          <FaqAccordion />

          {/* Bottom CTA strip */}
          <div className="mt-14 pt-10 border-t border-gray-100">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              {/* Left: copy */}
              <div className="text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start gap-1.5 mb-3">
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-gray-500 text-xs font-medium">5.0 verified rating</span>
                </div>
                <p className="text-gray-900 font-bold text-xl md:text-2xl mb-2">
                  Still have questions? Let&apos;s talk.
                </p>
                <p className="text-gray-500 text-sm max-w-sm">
                  Our ORM specialists are happy to walk through your situation and tell you exactly how we can help. No commitment required.
                </p>
              </div>

              {/* Vertical divider (desktop) */}
              <div className="hidden md:block w-px h-16 bg-gray-200 flex-shrink-0" />

              {/* Right: CTAs */}
              <div className="flex flex-col sm:flex-row items-center gap-4 flex-shrink-0">
                <a
                  href="/free-orm-scan/"
                  className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-3.5 rounded-lg font-bold hover:bg-blue-500 transition-colors shadow-lg shadow-blue-600/20 text-sm whitespace-nowrap"
                >
                  Get Your Free Analysis
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                  </svg>
                </a>
                <a
                  href="tel:504-233-4365"
                  className="flex items-center gap-2 text-gray-500 font-medium hover:text-gray-800 transition-colors text-sm"
                >
                  <svg className="w-3.5 h-3.5 text-gray-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                  </svg>
                  504.233.4365
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-blue-600 text-sm font-semibold uppercase tracking-widest mb-2">Industries</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Who We Serve</h2>
            <p className="text-gray-600 max-w-xl mx-auto">We protect and elevate reputations across the industries where your online presence matters most.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 stagger-children">
            {[
              {
                name: "Healthcare",
                href: "/industries/healthcare/",
                description: "Protect physicians, clinics, and healthcare brands from damaging reviews and misinformation.",
                accent: "from-blue-500 to-blue-400",
                iconBg: "bg-blue-50 border-blue-100",
                iconHoverBg: "group-hover:bg-blue-100",
                hoverBorder: "group-hover:border-blue-200",
                hoverShadow: "group-hover:shadow-blue-100/60",
                linkColor: "text-blue-600",
                icon: (
                  <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25Z" />
                  </svg>
                ),
              },
              {
                name: "Legal",
                href: "/industries/legal/",
                description: "Help attorneys and law firms build credibility and control their narrative online.",
                accent: "from-indigo-500 to-indigo-400",
                iconBg: "bg-indigo-50 border-indigo-100",
                iconHoverBg: "group-hover:bg-indigo-100",
                hoverBorder: "group-hover:border-indigo-200",
                hoverShadow: "group-hover:shadow-indigo-100/60",
                linkColor: "text-indigo-600",
                icon: (
                  <svg className="w-6 h-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0 0 12 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52 2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 0 1-2.031.352 5.988 5.988 0 0 1-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971Zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0 2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 0 1-2.031.352 5.989 5.989 0 0 1-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971Z" />
                  </svg>
                ),
              },
              {
                name: "Athletes",
                href: "/industries/athletes/",
                description: "Guard the personal brands of professional athletes from career-damaging search results.",
                accent: "from-violet-500 to-violet-400",
                iconBg: "bg-violet-50 border-violet-100",
                iconHoverBg: "group-hover:bg-violet-100",
                hoverBorder: "group-hover:border-violet-200",
                hoverShadow: "group-hover:shadow-violet-100/60",
                linkColor: "text-violet-600",
                icon: (
                  <svg className="w-6 h-6 text-violet-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                  </svg>
                ),
              },
              {
                name: "Finance",
                href: "/industries/financial-services/",
                description: "Build trust for financial advisors, firms, and fintech brands in a heavily scrutinized space.",
                accent: "from-emerald-500 to-emerald-400",
                iconBg: "bg-emerald-50 border-emerald-100",
                iconHoverBg: "group-hover:bg-emerald-100",
                hoverBorder: "group-hover:border-emerald-200",
                hoverShadow: "group-hover:shadow-emerald-100/60",
                linkColor: "text-emerald-600",
                icon: (
                  <svg className="w-6 h-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
                  </svg>
                ),
              },
              {
                name: "SaaS",
                href: "/industries/saas/",
                description: "Help software companies dominate branded search and manage negative product reviews.",
                accent: "from-cyan-500 to-cyan-400",
                iconBg: "bg-cyan-50 border-cyan-100",
                iconHoverBg: "group-hover:bg-cyan-100",
                hoverBorder: "group-hover:border-cyan-200",
                hoverShadow: "group-hover:shadow-cyan-100/60",
                linkColor: "text-cyan-600",
                icon: (
                  <svg className="w-6 h-6 text-cyan-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />
                  </svg>
                ),
              },
              {
                name: "Marketing Agencies",
                href: "/industries/marketing-agencies/",
                description: "White-label our ORM and SEO services to add powerful reputation solutions to your client offerings.",
                accent: "from-orange-500 to-orange-400",
                iconBg: "bg-orange-50 border-orange-100",
                iconHoverBg: "group-hover:bg-orange-100",
                hoverBorder: "group-hover:border-orange-200",
                hoverShadow: "group-hover:shadow-orange-100/60",
                linkColor: "text-orange-600",
                icon: (
                  <svg className="w-6 h-6 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                  </svg>
                ),
              },
            ].map((industry) => (
              <a
                key={industry.name}
                href={industry.href}
                className={`group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg ${industry.hoverShadow} ${industry.hoverBorder} transition-all flex flex-col overflow-hidden`}
              >
                {/* Top color accent bar */}
                <div className={`h-1 w-full bg-gradient-to-r ${industry.accent} flex-shrink-0`} />

                <div className="p-7 flex flex-col flex-1">
                  <div className={`w-12 h-12 rounded-xl ${industry.iconBg} ${industry.iconHoverBg} flex items-center justify-center flex-shrink-0 mb-5 transition-colors border`}>
                    {industry.icon}
                  </div>
                  <h3 className="font-bold text-gray-900 text-lg mb-2">{industry.name}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed flex-1">{industry.description}</p>
                  <div className={`mt-5 flex items-center gap-1 text-sm font-semibold ${industry.linkColor} group-hover:gap-2 transition-all`}>
                    Learn more <span aria-hidden="true">→</span>
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* Bottom conversion strip */}
          <div className="mt-14 pt-10 border-t border-gray-200">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              {/* Left: copy */}
              <div className="text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start gap-2 mb-3">
                  <div className="w-8 h-8 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
                    </svg>
                  </div>
                  <span className="text-blue-600 text-xs font-semibold uppercase tracking-widest">Industry specialists</span>
                </div>
                <p className="text-gray-900 font-bold text-xl md:text-2xl mb-2">
                  No matter your industry, your reputation matters.
                </p>
                <p className="text-gray-500 text-sm max-w-md">
                  We&apos;ve built tailored strategies for executives, attorneys, healthcare providers, and agencies nationwide. Tell us your situation, and we&apos;ll tell you exactly how we can help.
                </p>
              </div>

              {/* Vertical divider (desktop) */}
              <div className="hidden md:block w-px h-16 bg-gray-200 flex-shrink-0" />

              {/* Right: CTAs */}
              <div className="flex flex-col sm:flex-row items-center gap-4 flex-shrink-0">
                <a
                  href="/free-orm-scan/"
                  className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-3.5 rounded-lg font-bold hover:bg-blue-500 transition-colors shadow-lg shadow-blue-600/20 text-sm whitespace-nowrap"
                >
                  Get Your Free Analysis
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                  </svg>
                </a>
                <a
                  href="tel:504-233-4365"
                  className="flex items-center gap-2 text-gray-500 font-medium hover:text-gray-800 transition-colors text-sm"
                >
                  <svg className="w-3.5 h-3.5 text-gray-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                  </svg>
                  504.233.4365
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>

      </ScrollReveal>
    </>
  );
}
