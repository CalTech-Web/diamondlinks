import type { Metadata } from 'next'
import ServiceSubPage from '@/components/ServiceSubPage'
import { serviceSubPages } from '@/data/services'

const data = serviceSubPages.find((p) => p.slug === 'dedicated-seo-partnership')!

export const metadata: Metadata = {
  title: `${data.title} | DiamondLinks`,
  description: data.description,
  alternates: { canonical: `https://diamondlinks.com/services/${data.slug}/` },
  openGraph: {
    title: `${data.title} | DiamondLinks`,
    description: data.description,
    url: `https://diamondlinks.com/services/${data.slug}/`,
  },
}

export default function Page() {
  return <ServiceSubPage data={data} />
}
