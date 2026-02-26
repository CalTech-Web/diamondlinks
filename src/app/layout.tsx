import type { Metadata } from "next";
import { Geist } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StickyCtaBar from "@/components/StickyCtaBar";
import "./globals.css";

const geist = Geist({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://diamondlinks.com'),
  title: "DiamondLinks | Online Reputation Management & SEO",
  description: "DiamondLinks is a New Orleans-based ORM & SEO agency with 30+ years of combined expertise. We suppress negative content, amplify positive stories, and drive lasting SEO growth.",
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://diamondlinks.com',
    siteName: 'DiamondLinks',
    title: 'DiamondLinks | Online Reputation Management & SEO',
    description: 'DiamondLinks is a New Orleans-based ORM & SEO agency with 30+ years of combined expertise. We suppress negative content, amplify positive stories, and drive lasting SEO growth.',
    images: [
      {
        url: '/logo.png',
        alt: 'DiamondLinks — ORM & SEO Agency',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DiamondLinks | Online Reputation Management & SEO',
    description: 'DiamondLinks is a New Orleans-based ORM & SEO agency with 30+ years of combined expertise. We suppress negative content, amplify positive stories, and drive lasting SEO growth.',
    images: ['/logo.png'],
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Organization", "LocalBusiness"],
      "@id": "https://diamondlinks.com/#organization",
      "name": "DiamondLinks",
      "url": "https://diamondlinks.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://diamondlinks.com/icon.png",
      },
      "description": "DiamondLinks is a New Orleans-based SEO & ORM agency founded in 2011. Powered by people and perfected with AI, we build true recovery, visibility, and reputation through proven SEO and ORM campaigns.",
      "foundingDate": "2011",
      "telephone": "+15042334365",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "3436 Magazine St #622",
        "addressLocality": "New Orleans",
        "addressRegion": "LA",
        "postalCode": "70115",
        "addressCountry": "US",
      },
      "priceRange": "$$$$",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "5.0",
        "bestRating": "5",
        "worstRating": "1",
        "reviewCount": "5",
      },
      "serviceArea": {
        "@type": "Country",
        "name": "United States",
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "ORM & SEO Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Online Reputation Management",
              "url": "https://diamondlinks.com/solutions/online-reputation-management/",
            },
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Search Engine Optimization",
              "url": "https://diamondlinks.com/solutions/seo/",
            },
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "White Label Reputation Management",
              "url": "https://diamondlinks.com/solutions/white-label-reputation-management/",
            },
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "White Label SEO",
              "url": "https://diamondlinks.com/solutions/white-label-seo/",
            },
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Content Strategy & Development",
              "url": "https://diamondlinks.com/services/content-strategy/",
            },
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Premium Backlink Outreach",
              "url": "https://diamondlinks.com/services/premium-backlink-outreach/",
            },
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Technical SEO Audits",
              "url": "https://diamondlinks.com/services/technical-seo-audits/",
            },
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Local Search Optimization",
              "url": "https://diamondlinks.com/services/local-search-optimization/",
            },
          },
        ],
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://diamondlinks.com/#website",
      "url": "https://diamondlinks.com",
      "name": "DiamondLinks",
      "publisher": { "@id": "https://diamondlinks.com/#organization" },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geist.className} antialiased bg-background text-foreground min-h-screen`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <StickyCtaBar />
      </body>
    </html>
  );
}
