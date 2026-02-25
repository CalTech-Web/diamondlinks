import type { Metadata } from 'next'
import ScrollReveal from '@/components/ScrollReveal'
import PageHero from '@/components/sections/PageHero'
import ConversionStrip from '@/components/sections/ConversionStrip'
import ReputationAnalyzer from '@/components/ReputationAnalyzer'

export const metadata: Metadata = {
  title: 'Free Reputation Analysis | DiamondLinks',
  description:
    'Get an instant, free reputation analysis from DiamondLinks. See what Google shows when people search your name or business — and get a custom ORM strategy.',
}

export default function RequestAQuotePage() {
  return (
    <ScrollReveal>
      <PageHero
        eyebrow="Free Analysis"
        headline="See What Google Says"
        gradientText="About You"
        description="Enter your name or brand below to get an instant reputation snapshot. See what your prospects, partners, and competitors already know."
        primaryCta={{ label: 'Try It Free Below', href: '#analyzer' }}
        dark={true}
      />

      {/* Analyzer Section */}
      <section id="analyzer" className="pt-16 pb-8 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <ReputationAnalyzer />
        </div>
      </section>

      {/* Conversion Strip */}
      <section className="py-4 pb-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <ConversionStrip
            headline="Want the full deep-dive analysis?"
            subtext="Our team manually audits every result and delivers a custom strategy within 24 hours."
            ctaLabel="Talk to an Expert"
            ctaHref="tel:504-233-4365"
          />
        </div>
      </section>
    </ScrollReveal>
  )
}
