'use client'

import { siteData } from '@/data'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'
import { FormEvent, useState } from 'react'

const GOOGLE_FORM_ACTION =
  'https://docs.google.com/forms/d/e/1FAIpQLSezRHTfvRhqgj-AYrSPc0mMa_sQq2mLce57ocgBVYhJoyjSGg/formResponse'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    whatsapp: '',
    employmentStatus: '',
    loanTypes: [] as string[],
    loanTypeOther: '',
    loanAmount: '',
    preferredCallTimes: [] as string[],
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleMultiToggle = (field: 'loanTypes' | 'preferredCallTimes', value: string) => {
    setFormData((prev) => {
      const current = prev[field]
      return {
        ...prev,
        [field]: current.includes(value)
          ? current.filter((v) => v !== value)
          : [...current, value],
      }
    })
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitting(true)

    // Build URLSearchParams — multi-select fields need repeated keys
    const params = new URLSearchParams()
    params.append('entry.285746423', formData.name)
    params.append('entry.2131795865', formData.phone)
    params.append('entry.310050192', formData.whatsapp || formData.phone)
    params.append('entry.968962036', formData.email)
    params.append('entry.1899505391', formData.employmentStatus)
    const loanTypesValue = formData.loanTypes
      .map((v) => (v === 'Other' && formData.loanTypeOther ? formData.loanTypeOther : v))
      .join(', ')
    params.append('entry.249670458', loanTypesValue)
    params.append('entry.1490974765', formData.loanAmount)
    params.append('entry.480574499', formData.preferredCallTimes.join(', '))
    params.append('entry.184021044', formData.message)

    const body = params

    try {
      // Use no-cors mode — Google Forms doesn't allow CORS, but the submission still goes through
      await fetch(GOOGLE_FORM_ACTION, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: body.toString(),
      })
    } catch (_) {
      // no-cors fetch throws on network errors; success returns opaque response
    }

    setSubmitted(true)
    setSubmitting(false)
    setFormData({
      name: '',
      email: '',
      phone: '',
      whatsapp: '',
      employmentStatus: '',
      loanTypes: [],
      loanTypeOther: '',
      loanAmount: '',
      preferredCallTimes: [],
      message: '',
    })
    setTimeout(() => setSubmitted(false), 6000)
  }

  const inputClass =
    'w-full px-4 py-2 border border-white bg-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-white text-white placeholder-white/50'
  const labelClass = 'block text-sm font-medium text-white mb-2'

  return (
    <main className="min-h-screen flex flex-col px-5">
      {/* Hero Section */}
      <section className="bg-primary-blue text-white py-16 lg:py-24 rounded-[40px]">
        <div className="mx-auto px-6 text-center space-y-4">
          <h1 className="text-4xl lg:text-5xl font-bold text-balance">Get in Touch</h1>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            We&apos;re here to help. Contact us for a free consultation or any questions you may have.
          </p>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="mx-auto py-16 lg:py-24 grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Contact Info */}
        <div className="lg:col-span-1 space-y-8 bg-primary-light-blue bg-opacity-30 rounded-[24px] p-8">
          <div>
            <h3 className="text-2xl font-bold text-primary mb-8">Contact Information</h3>
            <div className="space-y-6">
              <div className="flex gap-4">
                <Phone className="text-primary shrink-0 mt-1" size={24} />
                <div>
                  <h4 className="font-bold text-primary mb-1">Phone</h4>
                  <a href={`tel:${siteData.phone}`} className="text-foreground opacity-80 hover:opacity-100">
                    {siteData.phone}
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <Mail className="text-primary shrink-0 mt-1" size={24} />
                <div>
                  <h4 className="font-bold text-primary mb-1">Email</h4>
                  <a href={`mailto:${siteData.email}`} className="text-foreground opacity-80 hover:opacity-100">
                    {siteData.email}
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <MapPin className="text-primary shrink-0 mt-1" size={24} />
                <div>
                  <h4 className="font-bold text-primary mb-1">Address</h4>
                  <p className="text-foreground opacity-80">
                    {siteData.address}
                    <br />
                    {siteData.city}, {siteData.state} {siteData.zip}
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Clock className="text-primary shrink-0 mt-1" size={24} />
                <div>
                  <h4 className="font-bold text-primary mb-1">Business Hours</h4>
                  <p className="text-foreground opacity-80">
                    Monday - Friday: 9:00 AM - 6:00 PM
                    <br />
                    Saturday: 10:00 AM - 4:00 PM
                    <br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="lg:col-span-2">
          <div className="bg-primary-blue bg-opacity-30 rounded-[24px] p-8">
            <h3 className="text-2xl font-bold text-white mb-6">Send us a Message</h3>

            {submitted && (
              <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
                <p className="text-green-800">
                  Thank you! Your message has been sent successfully. We&apos;ll get back to you soon.
                </p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Row 1: Name + Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className={labelClass}>Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className={inputClass}
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className={labelClass}>Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={inputClass}
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              {/* Row 2: Phone + WhatsApp */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className={labelClass}>Phone Number *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className={inputClass}
                    placeholder="(123) 456-7890"
                  />
                </div>

                <div>
                  <label htmlFor="whatsapp" className={labelClass}>WhatsApp Number *</label>
                  <input
                    type="tel"
                    id="whatsapp"
                    name="whatsapp"
                    value={formData.whatsapp}
                    onChange={handleChange}
                    className={inputClass}
                    required
                    placeholder="(123) 456-7890"
                  />
                </div>
              </div>

              {/* Row 3: Employment Status */}
              <div>
                <label htmlFor="employmentStatus" className={labelClass}>Employment Status *</label>
                <select
                  id="employmentStatus"
                  name="employmentStatus"
                  value={formData.employmentStatus}
                  onChange={handleChange}
                  required
                  className={inputClass}
                >
                  <option className="text-black" value="">Select status</option>
                  <option className="text-black" value="Employed">Employed</option>
                  <option className="text-black" value="Self-Employed">Self-Employed</option>
                  <option className="text-black" value="Business Owner">Business Owner</option>
                  <option className="text-black" value="Unemployed">Unemployed</option>
                </select>
              </div>

              {/* Loan Type — multi-select checkboxes */}
              <div>
                <p className={labelClass}>Loan Type * <span className="opacity-60 font-normal">(select all that apply)</span></p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {[
                    'Personal Loan',
                    'Business Loan',
                    'Credit Card Loan',
                    'Other',
                  ].map((loan) => {
                    const checked = formData.loanTypes.includes(loan)
                    return (
                      <button
                        key={loan}
                        type="button"
                        onClick={() => handleMultiToggle('loanTypes', loan)}
                        className={`px-3 py-2 rounded-lg border text-sm font-medium transition-colors text-left ${
                          checked
                            ? 'bg-white text-primary-blue border-white'
                            : 'border-white/50 text-white/80 hover:border-white hover:text-white'
                        }`}
                      >
                        {checked && <span className="mr-1">✓</span>}
                        {loan}
                      </button>
                    )
                  })}
                </div>
                {/* Hidden required validation */}
                <input
                  type="text"
                  required
                  value={formData.loanTypes.join(',')}
                  onChange={() => {}}
                  className="sr-only"
                  aria-hidden="true"
                  tabIndex={-1}
                />
                {/* Other input */}
                {formData.loanTypes.includes('Other') && (
                  <input
                    type="text"
                    name="loanTypeOther"
                    value={formData.loanTypeOther}
                    onChange={handleChange}
                    required
                    className={`${inputClass} mt-3`}
                    placeholder="Please specify your loan type..."
                    autoFocus
                  />
                )}
              </div>

              {/* Loan Amount — range dropdown */}
              <div>
                <label htmlFor="loanAmount" className={labelClass}>Total Loan Amount *</label>
                <select
                  id="loanAmount"
                  name="loanAmount"
                  value={formData.loanAmount}
                  onChange={handleChange}
                  required
                  className={inputClass}
                >
                  <option className="text-black" value="">Select range</option>
                  <option className="text-black" value="Below 2 Lakh">Below 2 Lakh</option>
                  <option className="text-black" value="2 Lakh - 5 Lakh">2 Lakh – 5 Lakh</option>
                  <option className="text-black" value="5 Lakh - 10 Lakh">5 Lakh – 10 Lakh</option>
                  <option className="text-black" value="10 Lakh - 20 Lakh">10 Lakh – 20 Lakh</option>
                  <option className="text-black" value="More than 20 Lakh">More than 20 Lakh</option>
                </select>
              </div>

              {/* Preferred Call Time — multi-select */}
              <div>
                <p className={labelClass}>Preferred Call Time * <span className="opacity-60 font-normal">(select all that apply)</span></p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {[
                    { label: 'Morning : 9 AM - 12 PM', value: 'Morning : 9 AM - 12 PM' },
                    { label: 'Afternoon : 12 PM - 3 PM', value: 'Afternoon : 12 PM - 3 PM' },
                    { label: 'Evening : 3PM - 7PM', value: 'Evening : 3PM - 7PM' },
                  ].map(({ label, value }) => {
                    const checked = formData.preferredCallTimes.includes(value)
                    return (
                      <button
                        key={value}
                        type="button"
                        onClick={() => handleMultiToggle('preferredCallTimes', value)}
                        className={`px-3 py-2 rounded-lg border text-sm font-medium transition-colors text-left ${
                          checked
                            ? 'bg-white text-primary-blue border-white'
                            : 'border-white/50 text-white/80 hover:border-white hover:text-white'
                        }`}
                      >
                        {checked && <span className="mr-1">✓</span>}
                        {label}
                      </button>
                    )
                  })}
                </div>
                <input
                  type="text"
                  required
                  value={formData.preferredCallTimes.join(',')}
                  onChange={() => {}}
                  className="sr-only"
                  aria-hidden="true"
                  tabIndex={-1}
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className={labelClass}>Describe Your Situation *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className={`${inputClass} resize-none`}
                  placeholder="Tell us more about your loan situation, how long you've been unable to pay, etc..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="w-full bg-primary-light-blue text-black py-3 rounded-[24px] font-bold hover:opacity-90 transition-opacity disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {submitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  )
}