import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Resources — Case Studies, Research & Guides | DiamondLinks',
  description:
    'Case studies, original research, and actionable guides on online reputation management and SEO from DiamondLinks.',
}

export default function ResourcesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
