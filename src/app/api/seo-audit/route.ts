import { NextRequest, NextResponse } from 'next/server'

/* ===================================================================
   SEO Audit API — POST /api/seo-audit/
   Accepts { url: string }, fetches the page HTML, and returns a
   comprehensive SEO audit report with scores, grades, and actions.
   =================================================================== */

// --------------- Types ---------------

interface SeoCheck {
  label: string
  status: 'pass' | 'warning' | 'fail'
  detail: string
}

interface SeoCategory {
  name: string
  score: number
  checks: SeoCheck[]
}

interface SeoAction {
  title: string
  description: string
  urgency: 'Immediate' | 'This Month' | 'Ongoing'
  impact: 'High' | 'Medium' | 'Low'
}

interface SeoKeyMetric {
  label: string
  value: string
  trend: 'up' | 'down' | 'flat'
}

interface SeoReport {
  url: string
  domain: string
  overallScore: number
  grade: string
  categories: SeoCategory[]
  topIssues: string[]
  strengths: string[]
  actions: SeoAction[]
  keyMetrics: SeoKeyMetric[]
}

// --------------- Helpers ---------------

function normalizeUrl(input: string): string {
  let url = input.trim()
  if (!/^https?:\/\//i.test(url)) {
    url = 'https://' + url
  }
  return url
}

function extractDomain(url: string): string {
  try {
    return new URL(url).hostname.replace(/^www\./, '')
  } catch {
    return url
  }
}

function stripTags(html: string): string {
  return html.replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '')
    .replace(/<style[^>]*>[\s\S]*?<\/style>/gi, '')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&nbsp;/gi, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#x27;/g, "'")
    .replace(/&#39;/g, "'")
    .replace(/\s+/g, ' ')
    .trim()
}

function countWords(text: string): number {
  const cleaned = text.replace(/[^\w\s]/g, ' ').replace(/\s+/g, ' ').trim()
  if (!cleaned) return 0
  return cleaned.split(' ').filter(w => w.length > 1).length
}

function matchAll(html: string, pattern: RegExp): string[] {
  const results: string[] = []
  let match: RegExpExecArray | null
  const regex = new RegExp(pattern.source, pattern.flags.includes('g') ? pattern.flags : pattern.flags + 'g')
  while ((match = regex.exec(html)) !== null) {
    results.push(match[0])
  }
  return results
}

function getAttr(tag: string, attr: string): string | null {
  // Handle both single and double quotes, and unquoted values
  const patterns = [
    new RegExp(`${attr}\\s*=\\s*"([^"]*)"`, 'i'),
    new RegExp(`${attr}\\s*=\\s*'([^']*)'`, 'i'),
    new RegExp(`${attr}\\s*=\\s*([^\\s>]+)`, 'i'),
  ]
  for (const p of patterns) {
    const m = tag.match(p)
    if (m) return m[1]
  }
  return null
}

function getMetaContent(html: string, nameOrProperty: string): string | null {
  // Try name= and property= variants
  const patterns = [
    new RegExp(`<meta[^>]*(?:name|property)\\s*=\\s*["']${nameOrProperty}["'][^>]*content\\s*=\\s*["']([^"']*)["'][^>]*>`, 'i'),
    new RegExp(`<meta[^>]*content\\s*=\\s*["']([^"']*)["'][^>]*(?:name|property)\\s*=\\s*["']${nameOrProperty}["'][^>]*>`, 'i'),
  ]
  for (const p of patterns) {
    const m = html.match(p)
    if (m) return m[1]
  }
  return null
}

function computeGrade(score: number): string {
  if (score >= 90) return 'A+'
  if (score >= 85) return 'A'
  if (score >= 80) return 'A-'
  if (score >= 75) return 'B+'
  if (score >= 70) return 'B'
  if (score >= 65) return 'B-'
  if (score >= 60) return 'C+'
  if (score >= 55) return 'C'
  if (score >= 50) return 'C-'
  if (score >= 45) return 'D+'
  if (score >= 40) return 'D'
  if (score >= 35) return 'D-'
  return 'F'
}

function categoryScore(checks: SeoCheck[]): number {
  if (checks.length === 0) return 0
  const total = checks.reduce((sum, c) => {
    if (c.status === 'pass') return sum + 100
    if (c.status === 'warning') return sum + 50
    return sum
  }, 0)
  return Math.round(total / checks.length)
}

// --------------- Analysis Functions ---------------

function analyzeOnPageSeo(html: string, url: string): SeoCheck[] {
  const checks: SeoCheck[] = []

  // Title tag
  const titleMatch = html.match(/<title[^>]*>([\s\S]*?)<\/title>/i)
  const title = titleMatch ? titleMatch[1].trim() : ''
  if (!title) {
    checks.push({ label: 'Title Tag', status: 'fail', detail: 'No title tag found. Every page needs a unique, descriptive title.' })
  } else if (title.length < 30) {
    checks.push({ label: 'Title Tag', status: 'warning', detail: `Title is too short (${title.length} chars). Aim for 30-60 characters for optimal display.` })
  } else if (title.length > 60) {
    checks.push({ label: 'Title Tag', status: 'warning', detail: `Title is too long (${title.length} chars). Google truncates titles over 60 characters.` })
  } else {
    checks.push({ label: 'Title Tag', status: 'pass', detail: `Title tag is well-optimized at ${title.length} characters: "${title.substring(0, 50)}${title.length > 50 ? '...' : ''}"` })
  }

  // Meta description
  const metaDesc = getMetaContent(html, 'description')
  if (!metaDesc) {
    checks.push({ label: 'Meta Description', status: 'fail', detail: 'No meta description found. This is critical for click-through rates from search results.' })
  } else if (metaDesc.length < 120) {
    checks.push({ label: 'Meta Description', status: 'warning', detail: `Meta description is short (${metaDesc.length} chars). Aim for 120-160 characters to maximize SERP real estate.` })
  } else if (metaDesc.length > 160) {
    checks.push({ label: 'Meta Description', status: 'warning', detail: `Meta description is too long (${metaDesc.length} chars). Google truncates descriptions over 160 characters.` })
  } else {
    checks.push({ label: 'Meta Description', status: 'pass', detail: `Meta description is well-optimized at ${metaDesc.length} characters.` })
  }

  // H1 tag
  const h1Tags = matchAll(html, /<h1[^>]*>[\s\S]*?<\/h1>/gi)
  if (h1Tags.length === 0) {
    checks.push({ label: 'H1 Tag', status: 'fail', detail: 'No H1 tag found. Every page should have exactly one H1 that describes the main topic.' })
  } else if (h1Tags.length > 1) {
    checks.push({ label: 'H1 Tag', status: 'warning', detail: `Found ${h1Tags.length} H1 tags. Best practice is to have exactly one H1 per page.` })
  } else {
    const h1Text = stripTags(h1Tags[0]).trim()
    checks.push({ label: 'H1 Tag', status: 'pass', detail: `Single H1 found: "${h1Text.substring(0, 60)}${h1Text.length > 60 ? '...' : ''}"` })
  }

  // Heading hierarchy
  const h2Count = matchAll(html, /<h2[^>]*>/gi).length
  const h3Count = matchAll(html, /<h3[^>]*>/gi).length
  const h4Count = matchAll(html, /<h4[^>]*>/gi).length
  const h5Count = matchAll(html, /<h5[^>]*>/gi).length
  const h6Count = matchAll(html, /<h6[^>]*>/gi).length
  const totalSubHeadings = h2Count + h3Count + h4Count + h5Count + h6Count

  if (h2Count === 0 && totalSubHeadings === 0) {
    checks.push({ label: 'Heading Hierarchy', status: 'fail', detail: 'No subheadings (H2-H6) found. Use headings to structure content for readers and search engines.' })
  } else if (h3Count > 0 && h2Count === 0) {
    checks.push({ label: 'Heading Hierarchy', status: 'warning', detail: 'H3 tags found without H2 tags. Headings should follow a logical hierarchy (H1 > H2 > H3).' })
  } else {
    checks.push({ label: 'Heading Hierarchy', status: 'pass', detail: `Good heading structure: ${h2Count} H2, ${h3Count} H3, ${h4Count + h5Count + h6Count} H4-H6.` })
  }

  // Image alt tags
  const imgTags = matchAll(html, /<img[^>]*>/gi)
  const imgsWithAlt = imgTags.filter(tag => {
    const alt = getAttr(tag, 'alt')
    return alt !== null && alt.trim().length > 0
  })
  const imgCount = imgTags.length

  if (imgCount === 0) {
    checks.push({ label: 'Image Alt Tags', status: 'pass', detail: 'No images found on this page (could be fine for text-heavy content).' })
  } else {
    const altPercent = Math.round((imgsWithAlt.length / imgCount) * 100)
    if (altPercent === 100) {
      checks.push({ label: 'Image Alt Tags', status: 'pass', detail: `All ${imgCount} images have alt text. Great for accessibility and SEO.` })
    } else if (altPercent >= 70) {
      checks.push({ label: 'Image Alt Tags', status: 'warning', detail: `${imgsWithAlt.length} of ${imgCount} images (${altPercent}%) have alt text. Add alt attributes to the remaining images.` })
    } else {
      checks.push({ label: 'Image Alt Tags', status: 'fail', detail: `Only ${imgsWithAlt.length} of ${imgCount} images (${altPercent}%) have alt text. Most images are missing alt attributes.` })
    }
  }

  // URL structure
  try {
    const parsedUrl = new URL(url)
    const path = parsedUrl.pathname
    const hasQueryParams = parsedUrl.search.length > 1
    const hasCleanPath = /^[a-z0-9\-\/\.]+$/i.test(path)
    const pathLength = path.length

    if (hasQueryParams && pathLength > 100) {
      checks.push({ label: 'URL Structure', status: 'fail', detail: `URL has query parameters and is very long (${pathLength} chars). Use clean, descriptive URLs.` })
    } else if (hasQueryParams || !hasCleanPath) {
      checks.push({ label: 'URL Structure', status: 'warning', detail: `URL ${hasQueryParams ? 'contains query parameters' : 'has special characters'}. Clean URLs perform better in search.` })
    } else if (pathLength > 75) {
      checks.push({ label: 'URL Structure', status: 'warning', detail: `URL path is quite long (${pathLength} chars). Shorter URLs are easier to share and remember.` })
    } else {
      checks.push({ label: 'URL Structure', status: 'pass', detail: 'URL is clean, descriptive, and a reasonable length.' })
    }
  } catch {
    checks.push({ label: 'URL Structure', status: 'warning', detail: 'Could not fully parse the URL for structure analysis.' })
  }

  return checks
}

function analyzeTechnicalSeo(html: string, url: string): SeoCheck[] {
  const checks: SeoCheck[] = []

  // HTTPS
  const isHttps = url.startsWith('https://')
  checks.push({
    label: 'HTTPS / SSL',
    status: isHttps ? 'pass' : 'fail',
    detail: isHttps
      ? 'Site is served over HTTPS. Secure connection confirmed.'
      : 'Site is not using HTTPS. Google flags non-HTTPS sites as "Not Secure" and it is a ranking factor.',
  })

  // Canonical tag
  const canonicalMatch = html.match(/<link[^>]*rel\s*=\s*["']canonical["'][^>]*>/i)
  const canonicalHref = canonicalMatch ? getAttr(canonicalMatch[0], 'href') : null
  if (canonicalHref) {
    checks.push({ label: 'Canonical Tag', status: 'pass', detail: `Canonical tag present pointing to: ${canonicalHref.substring(0, 80)}${canonicalHref.length > 80 ? '...' : ''}` })
  } else {
    checks.push({ label: 'Canonical Tag', status: 'warning', detail: 'No canonical tag found. Add one to prevent duplicate content issues.' })
  }

  // Robots meta
  const robotsMeta = getMetaContent(html, 'robots')
  if (robotsMeta && /noindex/i.test(robotsMeta)) {
    checks.push({ label: 'Robots Meta', status: 'fail', detail: `Robots meta is set to "${robotsMeta}". This page is blocked from search engine indexing.` })
  } else if (robotsMeta && /nofollow/i.test(robotsMeta)) {
    checks.push({ label: 'Robots Meta', status: 'warning', detail: `Robots meta includes "nofollow". Search engines won't follow links on this page.` })
  } else {
    checks.push({ label: 'Robots Meta', status: 'pass', detail: robotsMeta ? `Robots meta is set to "${robotsMeta}". Page is indexable.` : 'No restrictive robots meta tag. Page is indexable by default.' })
  }

  // Viewport meta
  const viewportMeta = getMetaContent(html, 'viewport')
  if (viewportMeta) {
    checks.push({ label: 'Viewport Meta', status: 'pass', detail: 'Viewport meta tag is present. Page is configured for mobile devices.' })
  } else {
    checks.push({ label: 'Viewport Meta', status: 'fail', detail: 'No viewport meta tag found. The page may not display correctly on mobile devices, which hurts rankings.' })
  }

  // Language / hreflang
  const htmlLangMatch = html.match(/<html[^>]*lang\s*=\s*["']([^"']*)["'][^>]*>/i)
  const hreflangMatch = html.match(/<link[^>]*hreflang\s*=\s*["'][^"']*["'][^>]*>/i)
  if (htmlLangMatch) {
    checks.push({ label: 'Language Attribute', status: 'pass', detail: `HTML lang attribute is set to "${htmlLangMatch[1]}". Helps search engines understand the page language.` })
  } else if (hreflangMatch) {
    checks.push({ label: 'Language Attribute', status: 'pass', detail: 'Hreflang tags found for internationalization.' })
  } else {
    checks.push({ label: 'Language Attribute', status: 'warning', detail: 'No HTML lang attribute or hreflang tags found. Adding a lang attribute helps search engines serve the right language version.' })
  }

  // Structured data / schema
  const jsonLdMatches = matchAll(html, /<script[^>]*type\s*=\s*["']application\/ld\+json["'][^>]*>[\s\S]*?<\/script>/gi)
  const hasMicrodata = /itemscope|itemtype/i.test(html)
  const hasRdfa = /typeof\s*=\s*["']schema\./i.test(html)

  if (jsonLdMatches.length > 0) {
    checks.push({ label: 'Structured Data', status: 'pass', detail: `Found ${jsonLdMatches.length} JSON-LD structured data block${jsonLdMatches.length > 1 ? 's' : ''}. This enables rich results in Google.` })
  } else if (hasMicrodata) {
    checks.push({ label: 'Structured Data', status: 'pass', detail: 'Microdata structured data found on the page.' })
  } else if (hasRdfa) {
    checks.push({ label: 'Structured Data', status: 'pass', detail: 'RDFa structured data found on the page.' })
  } else {
    checks.push({ label: 'Structured Data', status: 'warning', detail: 'No structured data (JSON-LD, Microdata, or RDFa) found. Adding schema markup can enable rich snippets in search results.' })
  }

  return checks
}

function analyzeContentQuality(html: string): SeoCheck[] {
  const checks: SeoCheck[] = []

  // Word count
  const bodyMatch = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i)
  const bodyHtml = bodyMatch ? bodyMatch[1] : html
  const textContent = stripTags(bodyHtml)
  const wordCount = countWords(textContent)

  if (wordCount >= 1000) {
    checks.push({ label: 'Word Count', status: 'pass', detail: `Page contains approximately ${wordCount.toLocaleString()} words. Comprehensive content tends to rank well.` })
  } else if (wordCount >= 300) {
    checks.push({ label: 'Word Count', status: 'pass', detail: `Page contains approximately ${wordCount.toLocaleString()} words. Adequate content for most page types.` })
  } else if (wordCount >= 100) {
    checks.push({ label: 'Word Count', status: 'warning', detail: `Page contains only about ${wordCount.toLocaleString()} words. Consider adding more substantive content (aim for 300+ words).` })
  } else {
    checks.push({ label: 'Word Count', status: 'fail', detail: `Page has very little text content (approximately ${wordCount} words). Search engines need text to understand and rank your page.` })
  }

  // Heading structure (logical hierarchy)
  const headingPattern = /<(h[1-6])[^>]*>/gi
  const headingLevels: number[] = []
  let hMatch: RegExpExecArray | null
  const headingRegex = new RegExp(headingPattern.source, headingPattern.flags)
  while ((hMatch = headingRegex.exec(html)) !== null) {
    headingLevels.push(parseInt(hMatch[1][1]))
  }

  if (headingLevels.length === 0) {
    checks.push({ label: 'Heading Structure', status: 'fail', detail: 'No headings found at all. Content should be organized with a clear heading hierarchy.' })
  } else {
    let hasSkip = false
    for (let i = 1; i < headingLevels.length; i++) {
      if (headingLevels[i] > headingLevels[i - 1] + 1) {
        hasSkip = true
        break
      }
    }
    if (hasSkip) {
      checks.push({ label: 'Heading Structure', status: 'warning', detail: `Found ${headingLevels.length} headings but the hierarchy skips levels (e.g., H1 to H3). Keep heading levels sequential.` })
    } else {
      checks.push({ label: 'Heading Structure', status: 'pass', detail: `Found ${headingLevels.length} headings with proper sequential hierarchy.` })
    }
  }

  // Internal links
  const linkTags = matchAll(html, /<a[^>]*href\s*=\s*["'][^"']*["'][^>]*>/gi)
  let internalCount = 0
  let externalCount = 0

  for (const tag of linkTags) {
    const href = getAttr(tag, 'href')
    if (!href) continue
    if (href.startsWith('#') || href.startsWith('javascript:') || href.startsWith('mailto:') || href.startsWith('tel:')) continue
    if (href.startsWith('/') || href.startsWith('./') || href.startsWith('../')) {
      internalCount++
    } else if (/^https?:\/\//i.test(href)) {
      externalCount++
    }
  }

  if (internalCount >= 3) {
    checks.push({ label: 'Internal Links', status: 'pass', detail: `Found ${internalCount} internal links. Good internal linking helps search engines discover and understand your site structure.` })
  } else if (internalCount >= 1) {
    checks.push({ label: 'Internal Links', status: 'warning', detail: `Only ${internalCount} internal link${internalCount > 1 ? 's' : ''} found. Aim for at least 3 internal links to improve crawlability.` })
  } else {
    checks.push({ label: 'Internal Links', status: 'fail', detail: 'No internal links found. Internal linking is essential for SEO and user navigation.' })
  }

  // External links
  if (externalCount >= 1) {
    checks.push({ label: 'External Links', status: 'pass', detail: `Found ${externalCount} external link${externalCount > 1 ? 's' : ''}. Linking to authoritative sources adds credibility.` })
  } else {
    checks.push({ label: 'External Links', status: 'warning', detail: 'No external links found. Linking to relevant authoritative sources can enhance credibility and user experience.' })
  }

  // Content-to-HTML ratio
  const htmlSize = html.length
  const textSize = textContent.length
  const ratio = htmlSize > 0 ? Math.round((textSize / htmlSize) * 100) : 0

  if (ratio >= 25) {
    checks.push({ label: 'Content-to-HTML Ratio', status: 'pass', detail: `Content-to-HTML ratio is ${ratio}%. Good balance between content and code.` })
  } else if (ratio >= 10) {
    checks.push({ label: 'Content-to-HTML Ratio', status: 'warning', detail: `Content-to-HTML ratio is ${ratio}%. Consider adding more visible text content relative to the underlying code.` })
  } else {
    checks.push({ label: 'Content-to-HTML Ratio', status: 'fail', detail: `Content-to-HTML ratio is very low at ${ratio}%. The page is mostly code with little readable content.` })
  }

  return checks
}

function analyzePerformance(html: string): SeoCheck[] {
  const checks: SeoCheck[] = []

  // Page size
  const pageSizeKB = Math.round(html.length / 1024)
  if (pageSizeKB <= 100) {
    checks.push({ label: 'Page Size', status: 'pass', detail: `HTML document is ${pageSizeKB}KB. Lightweight and fast to load.` })
  } else if (pageSizeKB <= 200) {
    checks.push({ label: 'Page Size', status: 'warning', detail: `HTML document is ${pageSizeKB}KB. Consider reducing inline assets and unnecessary code.` })
  } else {
    checks.push({ label: 'Page Size', status: 'fail', detail: `HTML document is ${pageSizeKB}KB. This is quite large and will slow down page loading. Aim for under 200KB.` })
  }

  // Image count and lazy loading
  const imgTags = matchAll(html, /<img[^>]*>/gi)
  const imgCount = imgTags.length
  const lazyLoadedImgs = imgTags.filter(tag =>
    /loading\s*=\s*["']lazy["']/i.test(tag) || /data-src/i.test(tag)
  ).length

  if (imgCount <= 20) {
    checks.push({ label: 'Image Count', status: 'pass', detail: `Found ${imgCount} image${imgCount !== 1 ? 's' : ''}. Reasonable count for page performance.` })
  } else if (lazyLoadedImgs >= imgCount * 0.5) {
    checks.push({ label: 'Image Count', status: 'warning', detail: `Found ${imgCount} images, but ${lazyLoadedImgs} use lazy loading. Consider lazy-loading all below-the-fold images.` })
  } else {
    checks.push({ label: 'Image Count', status: 'fail', detail: `Found ${imgCount} images with only ${lazyLoadedImgs} using lazy loading. This many eagerly-loaded images will significantly slow the page.` })
  }

  // Inline CSS
  const styleBlocks = matchAll(html, /<style[^>]*>[\s\S]*?<\/style>/gi)
  const inlineCssSize = styleBlocks.reduce((sum, block) => sum + block.length, 0)
  const inlineCssKB = Math.round(inlineCssSize / 1024)

  if (inlineCssKB <= 10) {
    checks.push({ label: 'Inline CSS', status: 'pass', detail: `Inline CSS is ${inlineCssKB}KB. Minimal inline styles — good for caching.` })
  } else if (inlineCssKB <= 50) {
    checks.push({ label: 'Inline CSS', status: 'warning', detail: `Inline CSS is ${inlineCssKB}KB. Consider moving styles to external stylesheets for better caching.` })
  } else {
    checks.push({ label: 'Inline CSS', status: 'fail', detail: `Inline CSS is ${inlineCssKB}KB. Excessive inline styles bloat the HTML and prevent browser caching. Move to external stylesheets.` })
  }

  // Script tags
  const scriptTags = matchAll(html, /<script[^>]*>/gi)
  const scriptCount = scriptTags.length
  const asyncDefer = scriptTags.filter(tag =>
    /\basync\b/i.test(tag) || /\bdefer\b/i.test(tag)
  ).length

  if (scriptCount <= 10) {
    checks.push({ label: 'Script Tags', status: 'pass', detail: `Found ${scriptCount} script tag${scriptCount !== 1 ? 's' : ''}. Reasonable count for page performance.` })
  } else if (scriptCount <= 15) {
    checks.push({ label: 'Script Tags', status: 'warning', detail: `Found ${scriptCount} script tags (${asyncDefer} with async/defer). Consider combining scripts to reduce HTTP requests.` })
  } else {
    checks.push({ label: 'Script Tags', status: 'fail', detail: `Found ${scriptCount} script tags. This is excessive and will delay page rendering. Only ${asyncDefer} use async/defer.` })
  }

  return checks
}

function analyzeSocialSharing(html: string): SeoCheck[] {
  const checks: SeoCheck[] = []

  // Open Graph title
  const ogTitle = getMetaContent(html, 'og:title')
  checks.push({
    label: 'Open Graph Title',
    status: ogTitle ? 'pass' : 'fail',
    detail: ogTitle
      ? `OG title set: "${ogTitle.substring(0, 60)}${ogTitle.length > 60 ? '...' : ''}"`
      : 'No og:title meta tag found. Social media shares will lack a proper title.',
  })

  // Open Graph description
  const ogDesc = getMetaContent(html, 'og:description')
  checks.push({
    label: 'Open Graph Description',
    status: ogDesc ? 'pass' : 'fail',
    detail: ogDesc
      ? `OG description set (${ogDesc.length} chars).`
      : 'No og:description meta tag found. Social media shares will lack a description.',
  })

  // OG image
  const ogImage = getMetaContent(html, 'og:image')
  checks.push({
    label: 'Open Graph Image',
    status: ogImage ? 'pass' : 'fail',
    detail: ogImage
      ? `OG image set: ${ogImage.substring(0, 80)}${ogImage.length > 80 ? '...' : ''}`
      : 'No og:image meta tag found. Social media shares will display without an image preview.',
  })

  // Twitter card
  const twitterCard = getMetaContent(html, 'twitter:card')
  const twitterTitle = getMetaContent(html, 'twitter:title')
  if (twitterCard) {
    checks.push({ label: 'Twitter Card', status: 'pass', detail: `Twitter card type: "${twitterCard}". Shares on X/Twitter will display a rich card.` })
  } else if (twitterTitle) {
    checks.push({ label: 'Twitter Card', status: 'warning', detail: 'Twitter title is set but twitter:card meta is missing. Add it for proper card rendering on X.' })
  } else {
    checks.push({ label: 'Twitter Card', status: 'fail', detail: 'No Twitter card meta tags found. Shares on X/Twitter will display as plain links.' })
  }

  // Favicon
  const faviconLink = html.match(/<link[^>]*rel\s*=\s*["'](?:icon|shortcut icon|apple-touch-icon)["'][^>]*>/i)
  const faviconEmoji = html.match(/<link[^>]*href\s*=\s*["']data:image\/svg\+xml[^"']*["'][^>]*>/i)
  checks.push({
    label: 'Favicon',
    status: (faviconLink || faviconEmoji) ? 'pass' : 'warning',
    detail: (faviconLink || faviconEmoji)
      ? 'Favicon is configured. Your site will show a recognizable icon in browser tabs and bookmarks.'
      : 'No favicon link tag detected. Browsers will show a default icon. Add a favicon for brand recognition.',
  })

  return checks
}

// --------------- Report Generation ---------------

function generateTopIssues(categories: SeoCategory[]): string[] {
  const issues: string[] = []
  for (const cat of categories) {
    for (const check of cat.checks) {
      if (check.status === 'fail') {
        issues.push(`${check.label}: ${check.detail.split('.')[0]}.`)
      }
    }
  }
  return issues.slice(0, 5)
}

function generateStrengths(categories: SeoCategory[]): string[] {
  const strengths: string[] = []
  for (const cat of categories) {
    for (const check of cat.checks) {
      if (check.status === 'pass') {
        strengths.push(`${check.label}: ${check.detail.split('.')[0]}.`)
      }
    }
  }
  return strengths.slice(0, 5)
}

function generateActions(categories: SeoCategory[]): SeoAction[] {
  const failChecks: { label: string; category: string; detail: string }[] = []
  const warnChecks: { label: string; category: string; detail: string }[] = []

  for (const cat of categories) {
    for (const check of cat.checks) {
      if (check.status === 'fail') {
        failChecks.push({ label: check.label, category: cat.name, detail: check.detail })
      } else if (check.status === 'warning') {
        warnChecks.push({ label: check.label, category: cat.name, detail: check.detail })
      }
    }
  }

  const actions: SeoAction[] = []

  // First action: most critical fail
  if (failChecks.length > 0) {
    const critical = failChecks[0]
    actions.push({
      title: `Fix: ${critical.label}`,
      description: critical.detail.split('.')[0] + '. This is a critical issue that should be addressed immediately for better search visibility.',
      urgency: 'Immediate',
      impact: 'High',
    })
  }

  // Second action: next fail or top warning
  const nextIssue = failChecks[1] || warnChecks[0]
  if (nextIssue) {
    actions.push({
      title: `Improve: ${nextIssue.label}`,
      description: nextIssue.detail.split('.')[0] + '. Addressing this will improve your overall SEO score.',
      urgency: failChecks[1] ? 'Immediate' : 'This Month',
      impact: failChecks[1] ? 'High' : 'Medium',
    })
  }

  // Third action: ongoing recommendation
  const hasContentIssues = [...failChecks, ...warnChecks].some(c => c.category === 'Content Quality')
  const hasTechIssues = [...failChecks, ...warnChecks].some(c => c.category === 'Technical SEO')

  if (hasContentIssues) {
    actions.push({
      title: 'Strengthen Content Strategy',
      description: 'Regularly audit and improve your content. Ensure pages have adequate word count, proper heading structure, and meaningful internal linking.',
      urgency: 'Ongoing',
      impact: 'High',
    })
  } else if (hasTechIssues) {
    actions.push({
      title: 'Technical SEO Maintenance',
      description: 'Regularly audit your technical SEO foundations including structured data, canonical tags, and mobile optimization.',
      urgency: 'Ongoing',
      impact: 'Medium',
    })
  } else {
    actions.push({
      title: 'Monitor and Maintain',
      description: 'Your SEO fundamentals are solid. Continue monitoring rankings, updating content, and building quality backlinks.',
      urgency: 'Ongoing',
      impact: 'Low',
    })
  }

  return actions.slice(0, 3)
}

function generateKeyMetrics(html: string): SeoKeyMetric[] {
  const bodyMatch = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i)
  const bodyHtml = bodyMatch ? bodyMatch[1] : html
  const textContent = stripTags(bodyHtml)
  const wordCount = countWords(textContent)
  const pageSizeKB = Math.round(html.length / 1024)
  const imgCount = matchAll(html, /<img[^>]*>/gi).length

  // Count all meaningful links
  const linkTags = matchAll(html, /<a[^>]*href\s*=\s*["'][^"']*["'][^>]*>/gi)
  let linkCount = 0
  for (const tag of linkTags) {
    const href = getAttr(tag, 'href')
    if (!href) continue
    if (href.startsWith('#') || href.startsWith('javascript:') || href.startsWith('mailto:') || href.startsWith('tel:')) continue
    linkCount++
  }

  // Count all headings
  const headingCount = matchAll(html, /<h[1-6][^>]*>/gi).length

  return [
    {
      label: 'Word Count',
      value: wordCount.toLocaleString(),
      trend: wordCount >= 300 ? 'up' : wordCount >= 100 ? 'flat' : 'down',
    },
    {
      label: 'Page Size',
      value: `${pageSizeKB}KB`,
      trend: pageSizeKB <= 100 ? 'up' : pageSizeKB <= 200 ? 'flat' : 'down',
    },
    {
      label: 'Images',
      value: String(imgCount),
      trend: imgCount > 0 && imgCount <= 20 ? 'up' : imgCount === 0 ? 'flat' : 'down',
    },
    {
      label: 'Links',
      value: String(linkCount),
      trend: linkCount >= 3 ? 'up' : linkCount >= 1 ? 'flat' : 'down',
    },
    {
      label: 'Headings',
      value: String(headingCount),
      trend: headingCount >= 3 ? 'up' : headingCount >= 1 ? 'flat' : 'down',
    },
  ]
}

// --------------- Mock Fallback ---------------

function generateMockReport(url: string, domain: string, errorMessage: string): SeoReport {
  return {
    url,
    domain,
    overallScore: 0,
    grade: 'N/A',
    categories: [
      {
        name: 'On-Page SEO',
        score: 0,
        checks: [{ label: 'Page Fetch', status: 'fail', detail: `Could not fetch the page: ${errorMessage}. Verify the URL is correct and publicly accessible.` }],
      },
      {
        name: 'Technical SEO',
        score: 0,
        checks: [{ label: 'HTTPS / SSL', status: url.startsWith('https://') ? 'pass' : 'fail', detail: url.startsWith('https://') ? 'URL uses HTTPS protocol.' : 'URL does not use HTTPS.' }],
      },
      {
        name: 'Content Quality',
        score: 0,
        checks: [{ label: 'Content', status: 'fail', detail: 'Could not analyze content because the page could not be fetched.' }],
      },
      {
        name: 'Performance Indicators',
        score: 0,
        checks: [{ label: 'Page Load', status: 'fail', detail: 'Page did not respond within the timeout period or returned an error.' }],
      },
      {
        name: 'Social & Sharing',
        score: 0,
        checks: [{ label: 'Social Tags', status: 'fail', detail: 'Could not analyze social tags because the page could not be fetched.' }],
      },
    ],
    topIssues: [
      `Unable to fetch the page at ${url}. ${errorMessage}`,
      'Ensure the URL is spelled correctly and the site is publicly accessible.',
      'If the site requires authentication or blocks automated requests, the audit cannot be completed.',
    ],
    strengths: url.startsWith('https://') ? ['URL uses HTTPS protocol.'] : [],
    actions: [
      {
        title: 'Verify the URL',
        description: `The audit could not fetch ${url}. Double-check the URL is correct, the site is live, and it does not block automated requests.`,
        urgency: 'Immediate',
        impact: 'High',
      },
      {
        title: 'Check Server Configuration',
        description: 'If the site is live but the audit fails, the server may be blocking requests by User-Agent or IP. Ensure the site is accessible to search engine crawlers.',
        urgency: 'Immediate',
        impact: 'High',
      },
      {
        title: 'Try Again',
        description: 'If this was a temporary issue (timeout, DNS propagation), wait a few minutes and try the audit again.',
        urgency: 'This Month',
        impact: 'Medium',
      },
    ],
    keyMetrics: [
      { label: 'Word Count', value: 'N/A', trend: 'flat' },
      { label: 'Page Size', value: 'N/A', trend: 'flat' },
      { label: 'Images', value: 'N/A', trend: 'flat' },
      { label: 'Links', value: 'N/A', trend: 'flat' },
      { label: 'Headings', value: 'N/A', trend: 'flat' },
    ],
  }
}

// --------------- Off-Page SEO (via Brave Search) ---------------

interface BraveSearchResponse {
  web?: { results?: { url: string; title: string; description: string }[] }
  query?: { total_count?: number }
}

async function analyzeOffPageSeo(domain: string, html: string): Promise<{ checks: SeoCheck[]; indexedPages: number; backlinks: number; referringDomains: number }> {
  const checks: SeoCheck[] = []
  let indexedPages = 0
  let estimatedBacklinks = 0
  let referringDomains = 0

  const braveKey = process.env.BRAVE_SEARCH_API_KEY

  // Check indexed pages via Brave Search (site: query)
  if (braveKey) {
    try {
      const siteQuery = `site:${domain}`
      const searchUrl = `https://api.search.brave.com/res/v1/web/search?q=${encodeURIComponent(siteQuery)}&count=20`
      const response = await fetch(searchUrl, {
        headers: { 'X-Subscription-Token': braveKey, 'Accept': 'application/json' },
      })
      if (response.ok) {
        const data: BraveSearchResponse = await response.json()
        indexedPages = data.web?.results?.length ?? 0
      }
    } catch { /* Brave unavailable — skip */ }

    // Check brand search presence
    try {
      const brandQuery = domain.replace(/\.\w+$/, '') // "example" from "example.com"
      const searchUrl = `https://api.search.brave.com/res/v1/web/search?q=${encodeURIComponent(brandQuery)}&count=10`
      const response = await fetch(searchUrl, {
        headers: { 'X-Subscription-Token': braveKey, 'Accept': 'application/json' },
      })
      if (response.ok) {
        const data: BraveSearchResponse = await response.json()
        const results = data.web?.results ?? []
        const brandResults = results.filter(r => r.url.includes(domain))

        checks.push({
          label: 'Brand Search Presence',
          status: brandResults.length >= 3 ? 'pass' : brandResults.length >= 1 ? 'warning' : 'fail',
          detail: brandResults.length >= 3
            ? `${brandResults.length} of top 10 results for "${brandQuery}" are from your domain. Strong brand presence.`
            : brandResults.length >= 1
              ? `Only ${brandResults.length} of top 10 results for "${brandQuery}" are from your domain. Room to improve brand SERP ownership.`
              : `Your domain does not appear in top 10 results for "${brandQuery}". Critical brand visibility issue.`,
        })

        // Estimate backlinks from the breadth of results
        estimatedBacklinks = Math.max(indexedPages * 3, brandResults.length * 50)
        referringDomains = Math.max(Math.floor(estimatedBacklinks * 0.35), brandResults.length * 10)
      }
    } catch { /* skip */ }
  }

  // Indexed pages check
  checks.push({
    label: 'Indexed Pages',
    status: indexedPages >= 10 ? 'pass' : indexedPages >= 3 ? 'warning' : 'fail',
    detail: indexedPages > 0
      ? `Found ${indexedPages}+ pages indexed in search results. ${indexedPages >= 10 ? 'Good crawl coverage.' : 'Consider improving internal linking and submitting an XML sitemap.'}`
      : braveKey ? 'Very few pages appear to be indexed. Submit an XML sitemap and check robots.txt.' : 'Unable to check indexed pages (search API not configured).',
  })

  // Social signals — check for social meta and links in the HTML
  const hasSocialLinks = /facebook\.com|twitter\.com|x\.com|linkedin\.com|instagram\.com|youtube\.com/i.test(html)
  checks.push({
    label: 'Social Signals',
    status: hasSocialLinks ? 'pass' : 'warning',
    detail: hasSocialLinks
      ? 'Social media links detected on the site. Active social presence supports SEO through brand signals.'
      : 'No social media links found. Social profiles can drive referral traffic and strengthen brand signals.',
  })

  // Local SEO signals — check for NAP (name, address, phone) patterns
  const hasAddress = /<address/i.test(html) || /\d{5}(-\d{4})?/.test(html) // ZIP code pattern
  const hasPhone = /\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}/.test(html)
  const hasLocalSchema = /LocalBusiness|Organization|PostalAddress/i.test(html)
  const localScore = (hasAddress ? 1 : 0) + (hasPhone ? 1 : 0) + (hasLocalSchema ? 1 : 0)

  checks.push({
    label: 'Local SEO Signals',
    status: localScore >= 2 ? 'pass' : localScore >= 1 ? 'warning' : 'fail',
    detail: localScore >= 2
      ? 'Business contact information and local schema markup detected. Good local SEO foundation.'
      : localScore >= 1
        ? 'Some local signals found but missing structured data or complete NAP (name, address, phone). Add LocalBusiness schema.'
        : 'No local SEO signals detected. If this is a local business, add address, phone, and LocalBusiness schema markup.',
  })

  // Google Business Profile hint — check for maps embed or GBP link
  const hasGBP = /google\.com\/maps|goo\.gl\/maps|maps\.app\.goo\.gl/i.test(html)
  checks.push({
    label: 'Google Business Profile',
    status: hasGBP ? 'pass' : 'warning',
    detail: hasGBP
      ? 'Google Maps link or embed detected. Your Google Business Profile appears to be connected.'
      : 'No Google Maps integration found. Claim and optimize your Google Business Profile for local visibility.',
  })

  return { checks, indexedPages, backlinks: estimatedBacklinks, referringDomains }
}

// --------------- Main Handler ---------------

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { url: rawUrl } = body

    if (!rawUrl || typeof rawUrl !== 'string' || !rawUrl.trim()) {
      return NextResponse.json(
        { error: 'A URL is required. Please provide the website address to audit.' },
        { status: 400 }
      )
    }

    const url = normalizeUrl(rawUrl)
    const domain = extractDomain(url)

    // Validate that it looks like a real URL
    try {
      new URL(url)
    } catch {
      return NextResponse.json(
        { error: `"${rawUrl}" does not appear to be a valid URL. Please provide a full website address like example.com` },
        { status: 400 }
      )
    }

    // Fetch the page HTML
    let html: string

    try {
      const controller = new AbortController()
      const timeout = setTimeout(() => controller.abort(), 10000)

      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
          'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
          'Accept-Language': 'en-US,en;q=0.9',
          'Accept-Encoding': 'identity',
          'Cache-Control': 'no-cache',
        },
        signal: controller.signal,
        redirect: 'follow',
      })

      clearTimeout(timeout)

      if (!response.ok) {
        const mockReport = generateMockReport(url, domain, `Server returned HTTP ${response.status} (${response.statusText})`)
        return NextResponse.json(mockReport)
      }

      html = await response.text()
    } catch (fetchError: unknown) {
      const message = fetchError instanceof Error
        ? (fetchError.name === 'AbortError'
          ? 'Request timed out after 10 seconds'
          : fetchError.message)
        : 'Unknown fetch error'

      const mockReport = generateMockReport(url, domain, message)
      return NextResponse.json(mockReport)
    }

    // Run all category analyses (on-page + off-page in parallel)
    const onPageChecks = analyzeOnPageSeo(html, url)
    const technicalChecks = analyzeTechnicalSeo(html, url)
    const contentChecks = analyzeContentQuality(html)
    const performanceChecks = analyzePerformance(html)
    const socialChecks = analyzeSocialSharing(html)
    const offPage = await analyzeOffPageSeo(domain, html)

    const categories: SeoCategory[] = [
      { name: 'Technical SEO', score: categoryScore(technicalChecks), checks: technicalChecks },
      { name: 'On-Page SEO', score: categoryScore(onPageChecks), checks: onPageChecks },
      { name: 'Off-Page SEO', score: categoryScore(offPage.checks), checks: offPage.checks },
      { name: 'Content', score: categoryScore(contentChecks), checks: contentChecks },
      { name: 'Performance', score: categoryScore(performanceChecks), checks: performanceChecks },
    ]

    // Weighted: Technical 25%, On-Page 20%, Off-Page 20%, Content 20%, Performance 15%
    const overallScore = Math.round(
      categories[0].score * 0.25 +
      categories[1].score * 0.20 +
      categories[2].score * 0.20 +
      categories[3].score * 0.20 +
      categories[4].score * 0.15
    )

    const grade = computeGrade(overallScore)
    const topIssues = generateTopIssues(categories)
    const strengths = generateStrengths(categories)
    const actions = generateActions(categories)
    const baseMetrics = generateKeyMetrics(html)

    // Add off-page metrics
    const keyMetrics: SeoKeyMetric[] = [
      { label: 'Indexed Pages', value: offPage.indexedPages > 0 ? String(offPage.indexedPages) + '+' : 'N/A', trend: offPage.indexedPages >= 10 ? 'up' : offPage.indexedPages >= 3 ? 'flat' : 'down' },
      { label: 'Est. Backlinks', value: offPage.backlinks > 0 ? offPage.backlinks.toLocaleString() : 'N/A', trend: offPage.backlinks >= 100 ? 'up' : 'flat' },
      { label: 'Referring Domains', value: offPage.referringDomains > 0 ? offPage.referringDomains.toLocaleString() : 'N/A', trend: offPage.referringDomains >= 30 ? 'up' : 'flat' },
      ...baseMetrics.slice(0, 3), // Word Count, Page Size, Images
    ]

    const report: SeoReport = {
      url,
      domain,
      overallScore,
      grade,
      categories,
      topIssues,
      strengths,
      actions,
      keyMetrics,
    }

    return NextResponse.json(report)
  } catch (error) {
    console.error('SEO audit error:', error)
    return NextResponse.json(
      { error: 'An unexpected error occurred during the SEO audit. Please try again.' },
      { status: 500 }
    )
  }
}
