interface ConversionStripProps {
  headline: string
  subtext?: string
  ctaLabel?: string
  ctaHref?: string
}

export default function ConversionStrip({
  headline,
  subtext,
  ctaLabel = 'Get Your Free Analysis',
  ctaHref = '/free-seo-audit/',
}: ConversionStripProps) {
  return (
    <div className="border-t border-gray-200 mt-14 pt-10">
      <div className="flex flex-col md:flex-row items-center justify-between gap-8">
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
          <p className="text-gray-900 font-bold text-xl md:text-2xl mb-2">{headline}</p>
          {subtext && <p className="text-gray-500 text-sm max-w-sm">{subtext}</p>}
        </div>

        <div className="hidden md:block w-px h-16 bg-gray-200 flex-shrink-0" />

        <div className="flex flex-col sm:flex-row items-center gap-4 flex-shrink-0">
          <a
            href={ctaHref}
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-3.5 rounded-lg font-bold hover:bg-blue-500 transition-colors shadow-lg shadow-blue-600/20 text-sm whitespace-nowrap"
          >
            {ctaLabel}
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
  )
}
