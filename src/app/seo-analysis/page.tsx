import type { Metadata } from 'next'
import ScrollReveal from '@/components/ScrollReveal'
import PageHero from '@/components/sections/PageHero'
import ConversionStrip from '@/components/sections/ConversionStrip'
import SeoAnalyzer from '@/components/SeoAnalyzer'

export const metadata: Metadata = {
  title: 'Free SEO Audit | DiamondLinks',
  description:
    'Get an instant, free SEO audit from DiamondLinks. Analyze your website\'s technical health, on-page optimization, backlinks, content, and performance — with a custom action plan.',
}

export default function SeoAnalysisPage() {
  return (
    <ScrollReveal>
      <PageHero
        eyebrow="Free SEO Audit"
        headline="How Does Your Website"
        gradientText="Rank?"
        description="Enter your website below to get an instant SEO health check. See your technical issues, content gaps, and exactly what's holding your rankings back."
        primaryCta={{ label: 'Try It Free Below', href: '#analyzer' }}
        dark={true}
      />

      {/* Analyzer Section */}
      <section id="analyzer" className="pt-16 pb-8 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <SeoAnalyzer />
        </div>
      </section>

      {/* Conversion Strip */}
      <section className="py-4 pb-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <ConversionStrip
            headline="Want a full competitive SEO analysis?"
            subtext="Our team builds custom SEO roadmaps with keyword research, competitor analysis, and content strategy — delivered within 48 hours."
            ctaLabel="Talk to an SEO Expert"
            ctaHref="tel:504-233-4365"
          />
        </div>
      </section>
    </ScrollReveal>
  )
}
