"use client"

import { useState, FormEvent } from "react"

const FORM_ENDPOINT = "https://forms.caltechweb.com/api/submit"

export default function QuoteForm() {
  const [fields, setFields] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    website: "",
    industry: "",
    keywords: "",
    details: "",
  })
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle")

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setFields((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setStatus("sending")

    const messageParts = [
      fields.phone && `Phone: ${fields.phone}`,
      fields.company && `Company: ${fields.company}`,
      fields.industry && `Industry: ${fields.industry}`,
      fields.keywords && `Target Keywords:\n${fields.keywords}`,
      fields.details && `Project Details:\n${fields.details}`,
    ].filter(Boolean)

    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          site: "diamondlinks.com",
          name: fields.name,
          email: fields.email,
          website: fields.website,
          message: messageParts.join("\n\n"),
          source: "free-quote",
        }),
      })

      if (res.ok) {
        setStatus("success")
        return
      }
    } catch {
      // fall through to mailto
    }

    const subject = encodeURIComponent(`Quote request from ${fields.name}`)
    const body = encodeURIComponent(messageParts.join("\n\n"))
    window.location.href = `mailto:brandon@diamondlinks.com?subject=${subject}&body=${body}`
    setStatus("success")
  }

  if (status === "success") {
    return (
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 md:p-10 text-center">
        <div className="w-14 h-14 bg-green-50 border border-green-200 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-7 h-7 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">Request Received!</h3>
        <p className="text-gray-500 text-sm">A strategist will review your submission and reach out within 24 hours.</p>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 md:p-10">
      <h2 className="text-2xl font-bold text-gray-900 mb-2">Tell Us About Your Project</h2>
      <p className="text-gray-500 text-sm mb-8">
        Fill out the details below and we&apos;ll prepare a custom strategy tailored to your goals.
      </p>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid sm:grid-cols-2 gap-5">
          <div>
            <label htmlFor="quote-name" className="block text-gray-900 text-sm font-semibold mb-1.5">
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="quote-name"
              name="name"
              required
              value={fields.name}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white text-gray-900 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-400 transition-colors"
              placeholder="John Smith"
            />
          </div>
          <div>
            <label htmlFor="quote-email" className="block text-gray-900 text-sm font-semibold mb-1.5">
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="quote-email"
              name="email"
              required
              value={fields.email}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white text-gray-900 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-400 transition-colors"
              placeholder="john@company.com"
            />
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          <div>
            <label htmlFor="quote-phone" className="block text-gray-900 text-sm font-semibold mb-1.5">
              Phone
            </label>
            <input
              type="tel"
              id="quote-phone"
              name="phone"
              value={fields.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white text-gray-900 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-400 transition-colors"
              placeholder="(555) 123-4567"
            />
          </div>
          <div>
            <label htmlFor="quote-company" className="block text-gray-900 text-sm font-semibold mb-1.5">
              Company Name
            </label>
            <input
              type="text"
              id="quote-company"
              name="company"
              value={fields.company}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white text-gray-900 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-400 transition-colors"
              placeholder="Acme Inc."
            />
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          <div>
            <label htmlFor="quote-website" className="block text-gray-900 text-sm font-semibold mb-1.5">
              Website URL
            </label>
            <input
              type="url"
              id="quote-website"
              name="website"
              value={fields.website}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white text-gray-900 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-400 transition-colors"
              placeholder="https://example.com"
            />
          </div>
          <div>
            <label htmlFor="quote-industry" className="block text-gray-900 text-sm font-semibold mb-1.5">
              Industry / Niche
            </label>
            <input
              type="text"
              id="quote-industry"
              name="industry"
              value={fields.industry}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white text-gray-900 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-400 transition-colors"
              placeholder="Healthcare, Legal, SaaS, etc."
            />
          </div>
        </div>

        <div>
          <label htmlFor="quote-keywords" className="block text-gray-900 text-sm font-semibold mb-1.5">
            Target Keywords
          </label>
          <textarea
            id="quote-keywords"
            name="keywords"
            rows={3}
            value={fields.keywords}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white text-gray-900 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-400 transition-colors resize-y"
            placeholder="List 3-5 keywords you'd like to rank for"
          />
        </div>

        <div>
          <label htmlFor="quote-details" className="block text-gray-900 text-sm font-semibold mb-1.5">
            Project Details
          </label>
          <textarea
            id="quote-details"
            name="details"
            rows={5}
            value={fields.details}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white text-gray-900 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-400 transition-colors resize-y"
            placeholder="Tell us about your goals, challenges, and timeline"
          />
        </div>

        <button
          type="submit"
          disabled={status === "sending"}
          className="w-full inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-lg font-bold hover:bg-blue-500 transition-colors shadow-lg shadow-blue-600/20 text-base disabled:opacity-50"
        >
          {status === "sending" ? "Sending..." : "Request Your Custom Quote"}
          {status !== "sending" && (
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          )}
        </button>
      </form>
    </div>
  )
}
