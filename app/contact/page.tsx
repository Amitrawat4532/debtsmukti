'use client'


import { siteData } from '@/data'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'
import { FormEvent, useState } from 'react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
    setTimeout(() => setSubmitted(false), 5000)
  }

  return (
    <main className="min-h-screen flex flex-col px-5">
      {/* Hero Section */}
      <section className="bg-primary-blue text-white py-16 lg:py-24 rounded-[40px]">
        <div className=" mx-auto px-6 text-center space-y-4">
          <h1 className="text-4xl lg:text-5xl font-bold text-balance">Get in Touch</h1>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            We're here to help. Contact us for a free consultation or any questions you may have.
          </p>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className=" mx-auto  py-16 lg:py-24 grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Contact Info */}
        <div className="lg:col-span-1 space-y-8 bg-primary-light-blue bg-opacity-30 rounded-[40px] p-8">
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
          <div className="bg-primary-blue bg-opacity-30 rounded-[40px] p-8">
            <h3 className="text-2xl font-bold text-white mb-6">Send us a Message</h3>

            {submitted && (
              <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
                <p className="text-green-800">Thank you! Your message has been sent successfully. We'll get back to you soon.</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-white  mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-white rounded-lg focus:outline-none focus:ring-2 focus:ring-white text-white"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-white  mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-white rounded-lg focus:outline-none focus:ring-2 focus:ring-white text-white"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-white  mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-white rounded-lg focus:outline-none focus:ring-2 focus:ring-white text-white"
                    placeholder="(123) 456-7890"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-white  mb-2">
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-white rounded-lg focus:outline-none focus:ring-2 focus:ring-white text-white"
                  >
                    <option className="text-black" value="">Select a subject</option>
                    <option className="text-black" value="general">General Inquiry</option>
                    <option className="text-black" value="consultation">Free Consultation</option>
                    <option className="text-black" value="loan-settlement">Loan Settlement</option>
                    <option className="text-black" value="debt-consolidation">Debt Consolidation</option>
                    <option className="text-black" value="other">Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-white  mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-2 border border-white rounded-lg focus:outline-none focus:ring-2 focus:ring-white text-white resize-none"
                  placeholder="Tell us more about your situation..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-primary-light-blue text-black  py-3 rounded-lg font-bold hover:opacity-90 transition-opacity"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

    </main>
  )
}
