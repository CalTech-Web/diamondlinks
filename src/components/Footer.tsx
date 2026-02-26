import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-400 relative overflow-hidden">
      {/* Subtle dot-grid texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.035]"
        style={{
          backgroundImage: "radial-gradient(rgba(255,255,255,0.4) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />
      {/* Blue top-border glow */}
      <div
        className="absolute top-0 left-0 right-0 h-px pointer-events-none"
        style={{ background: "linear-gradient(to right, transparent 0%, rgba(59,130,246,0.6) 40%, rgba(99,102,241,0.6) 60%, transparent 100%)" }}
      />

      {/* Mini CTA strip */}
      <div className="relative border-b border-white/[0.06] py-10 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-white font-bold text-lg mb-1">Ready to own your search results?</p>
            <p className="text-gray-500 text-sm">Get a free analysis. No commitment required.</p>
          </div>
          <div className="flex gap-3 flex-wrap flex-shrink-0">
            <a
              href="tel:504-233-4365"
              className="flex items-center gap-2 border border-white/15 text-white px-6 py-2.5 rounded-lg font-semibold text-sm hover:bg-white/5 transition-colors"
            >
              <svg className="w-4 h-4 text-blue-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
              504.233.4365
            </a>
            <a
              href="/free-orm-scan/"
              className="bg-blue-600 text-white px-6 py-2.5 rounded-lg font-bold text-sm hover:bg-blue-500 transition-colors shadow-lg shadow-blue-600/20"
            >
              Free ORM Scan →
            </a>
            <a
              href="/free-seo-audit/"
              className="bg-indigo-600 text-white px-6 py-2.5 rounded-lg font-bold text-sm hover:bg-indigo-500 transition-colors shadow-lg shadow-indigo-600/20"
            >
              Free SEO Audit →
            </a>
          </div>
        </div>
      </div>

      {/* Main footer links */}
      <div className="relative py-16 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-5 gap-10">
          {/* Brand column — spans 2 */}
          <div className="md:col-span-2">
            <a href="/" className="inline-block mb-3">
              <Image src="/logo.png" alt="DiamondLinks" width={227} height={56} sizes="120px" className="h-7 w-auto brightness-0 invert" />
            </a>
            <p className="text-sm text-gray-500 mb-7 leading-relaxed max-w-xs">
              DiamondLinks blends human expertise with AI to deliver SEO and ORM that actually work. Powered by people, perfected with AI.
            </p>
            {/* Contact details */}
            <div className="space-y-2 text-sm">
              <div className="flex items-start gap-2.5">
                <svg className="w-4 h-4 text-gray-600 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-gray-500 leading-relaxed">3436 Magazine Street #622<br />New Orleans, LA 70115</span>
              </div>
              <div className="flex items-center gap-2.5">
                <svg className="w-4 h-4 text-gray-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                <a href="tel:504-233-4365" className="text-gray-400 hover:text-white transition-colors">504.233.4365</a>
              </div>
              <div className="flex items-center gap-2.5">
                <svg className="w-4 h-4 text-gray-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
                <a href="mailto:sales@diamondlinks.com" className="text-gray-400 hover:text-white transition-colors">sales@diamondlinks.com</a>
              </div>
            </div>
          </div>

          {/* Solutions */}
          <div>
            <p className="text-white text-xs font-semibold uppercase tracking-widest mb-5">Solutions</p>
            <ul className="space-y-3 text-sm">
              <li><a href="/solutions/online-reputation-management/" className="text-gray-500 hover:text-white transition-colors">Online Reputation Management</a></li>
              <li><a href="/solutions/seo/" className="text-gray-500 hover:text-white transition-colors">Search Engine Optimization</a></li>
              <li><a href="/solutions/white-label-reputation-management/" className="text-gray-500 hover:text-white transition-colors">White Label ORM</a></li>
              <li><a href="/solutions/white-label-seo/" className="text-gray-500 hover:text-white transition-colors">White Label SEO</a></li>
              <li><a href="/services/" className="text-gray-500 hover:text-white transition-colors">All Services</a></li>
            </ul>
          </div>

          {/* Industries */}
          <div>
            <p className="text-white text-xs font-semibold uppercase tracking-widest mb-5">Industries</p>
            <ul className="space-y-3 text-sm">
              <li><a href="/industries/healthcare/" className="text-gray-500 hover:text-white transition-colors">Healthcare</a></li>
              <li><a href="/industries/legal/" className="text-gray-500 hover:text-white transition-colors">Legal</a></li>
              <li><a href="/industries/athletes/" className="text-gray-500 hover:text-white transition-colors">Athletes</a></li>
              <li><a href="/industries/financial-services/" className="text-gray-500 hover:text-white transition-colors">Finance</a></li>
              <li><a href="/industries/saas/" className="text-gray-500 hover:text-white transition-colors">SaaS</a></li>
              <li><a href="/industries/marketing-agencies/" className="text-gray-500 hover:text-white transition-colors">Marketing Agencies</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <p className="text-white text-xs font-semibold uppercase tracking-widest mb-5">Company</p>
            <ul className="space-y-3 text-sm">
              <li><a href="/about/" className="text-gray-500 hover:text-white transition-colors">About Us</a></li>
              <li><a href="/case-studies/" className="text-gray-500 hover:text-white transition-colors">Case Studies</a></li>
              <li><a href="/resources/" className="text-gray-500 hover:text-white transition-colors">Resources</a></li>
              <li><a href="/ask/" className="text-gray-500 hover:text-white transition-colors">Ask DiamondLinks</a></li>
              <li><a href="/free-orm-scan/" className="text-gray-500 hover:text-white transition-colors">Free ORM Scan</a></li>
              <li><a href="/free-seo-audit/" className="text-gray-500 hover:text-white transition-colors">Free SEO Audit</a></li>
              <li><a href="/request-a-quote/" className="text-gray-500 hover:text-white transition-colors">Request a Quote</a></li>
              <li><a href="/contact/" className="text-gray-500 hover:text-white transition-colors">Contact Us</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="relative border-t border-white/[0.06] py-6 px-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-600">
          <p>© 2011–2026 <a href="https://DiamondLinks.com" className="hover:text-gray-400 transition-colors">DiamondLinks.com</a>. All Rights Reserved.</p>
          <div className="flex gap-6">
            <a href="/privacy-policy/" className="hover:text-gray-400 transition-colors">Privacy Policy</a>
            <a href="/terms-of-service/" className="hover:text-gray-400 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
