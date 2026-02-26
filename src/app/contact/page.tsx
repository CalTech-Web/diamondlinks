import type { Metadata } from 'next'
import ScrollReveal from '@/components/ScrollReveal'
import PageHero from '@/components/sections/PageHero'
import CtaBanner from '@/components/sections/CtaBanner'
import { company } from '@/data/company'

export const metadata: Metadata = {
  title: 'Contact DiamondLinks | ORM & SEO Agency | New Orleans',
  description:
    'Get in touch with DiamondLinks. Call 504.233.4365, visit our New Orleans office, or send us a message. We respond within 24 hours.',
  alternates: { canonical: 'https://diamondlinks.com/contact/' },
  openGraph: {
    title: 'Contact DiamondLinks | ORM & SEO Agency | New Orleans',
    description: 'Get in touch with DiamondLinks. Call 504.233.4365, visit our New Orleans office, or send us a message. We respond within 24 hours.',
    url: 'https://diamondlinks.com/contact/',
  },
}

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://diamondlinks.com/" },
    { "@type": "ListItem", "position": 2, "name": "Contact", "item": "https://diamondlinks.com/contact/" },
  ],
}

export default function ContactPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
    <ScrollReveal>
      <PageHero
        eyebrow="Contact Us"
        headline="Ready to See"
        gradientText="the Difference?"
        description="17+ years of proven SEO and ORM expertise. Whether you're dealing with a reputation crisis or want to proactively grow your visibility, we're here to help. Reach out and we'll respond within 24 hours."
        primaryCta={{ label: 'Call Us Now', href: company.phoneTel }}
        secondaryCta={{ label: 'Request a Quote', href: '/request-a-quote/' }}
        dark={false}
      />

      {/* Contact Info Cards */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {/* Phone */}
            <a
              href={company.phoneTel}
              className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-blue-100 transition-all p-7 group text-center"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center mx-auto mb-5">
                <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                </svg>
              </div>
              <h3 className="text-gray-900 font-bold text-base mb-1">Phone</h3>
              <p className="text-blue-600 font-semibold text-sm group-hover:text-blue-500 transition-colors">{company.phone}</p>
              <p className="text-gray-400 text-xs mt-1">Mon-Fri, 9am-5pm CST</p>
            </a>

            {/* Address */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-blue-100 transition-all p-7 text-center">
              <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center mx-auto mb-5">
                <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                </svg>
              </div>
              <h3 className="text-gray-900 font-bold text-base mb-1">Office</h3>
              <p className="text-gray-500 text-sm">{company.address}</p>
              <p className="text-gray-500 text-sm">{company.city}, {company.state} {company.zip}</p>
            </div>

            {/* Email */}
            <a
              href={`mailto:${company.email}`}
              className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-blue-100 transition-all p-7 group text-center"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center mx-auto mb-5">
                <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                </svg>
              </div>
              <h3 className="text-gray-900 font-bold text-base mb-1">Email</h3>
              <p className="text-blue-600 font-semibold text-sm group-hover:text-blue-500 transition-colors">{company.email}</p>
              <p className="text-gray-400 text-xs mt-1">Response within 24 hours</p>
            </a>
          </div>

          {/* Contact Form */}
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 md:p-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Send Us a Message</h2>
              <p className="text-gray-500 text-sm mb-8">
                Have a question or want to discuss your situation? Fill out the form below and we&apos;ll get back to you within 24 hours.
              </p>

              <form action="#" method="POST" className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="contact-name" className="block text-gray-900 text-sm font-semibold mb-1.5">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="contact-name"
                      name="name"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white text-gray-900 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-400 transition-colors"
                      placeholder="John Smith"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-email" className="block text-gray-900 text-sm font-semibold mb-1.5">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="contact-email"
                      name="email"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white text-gray-900 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-400 transition-colors"
                      placeholder="john@company.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-gray-900 text-sm font-semibold mb-1.5">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white text-gray-900 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-400 transition-colors resize-y"
                    placeholder="How can we help you?"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-lg font-bold hover:bg-blue-500 transition-colors shadow-lg shadow-blue-600/20 text-base"
                >
                  Send Message
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                  </svg>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <CtaBanner
        headline="Need immediate help with a reputation crisis?"
        subtext="Call us directly for urgent situations. We offer 24-hour response time for crisis engagements."
      />
    </ScrollReveal>
    </>
  )
}
