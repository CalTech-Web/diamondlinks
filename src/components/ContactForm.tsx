"use client"

import { useState, FormEvent } from "react"

const FORM_ENDPOINT = "https://forms.caltechweb.com/api/submit"

export default function ContactForm() {
  const [fields, setFields] = useState({ name: "", email: "", message: "" })
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle")

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setFields((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setStatus("sending")

    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          site: "diamondlinks.com",
          name: fields.name,
          email: fields.email,
          message: fields.message,
          source: "contact-page",
        }),
      })

      if (res.ok) {
        setStatus("success")
        return
      }
    } catch {
      // fall through to mailto
    }

    const subject = encodeURIComponent(`Website inquiry from ${fields.name}`)
    const body = encodeURIComponent(
      `Name: ${fields.name}\nEmail: ${fields.email}\n\nMessage:\n${fields.message}`
    )
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
        <h3 className="text-xl font-bold text-gray-900 mb-2">Message Sent!</h3>
        <p className="text-gray-500 text-sm">Thanks for reaching out. We&apos;ll get back to you within 24 hours.</p>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 md:p-10">
      <h2 className="text-2xl font-bold text-gray-900 mb-2">Send Us a Message</h2>
      <p className="text-gray-500 text-sm mb-8">
        Have a question or want to discuss your situation? Fill out the form below and we&apos;ll get back to you within 24 hours.
      </p>

      <form onSubmit={handleSubmit} className="space-y-5">
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
              value={fields.name}
              onChange={handleChange}
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
              value={fields.email}
              onChange={handleChange}
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
            value={fields.message}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white text-gray-900 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-400 transition-colors resize-y"
            placeholder="How can we help you?"
          />
        </div>

        <button
          type="submit"
          disabled={status === "sending"}
          className="w-full inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-lg font-bold hover:bg-blue-500 transition-colors shadow-lg shadow-blue-600/20 text-base disabled:opacity-50"
        >
          {status === "sending" ? "Sending..." : "Send Message"}
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
