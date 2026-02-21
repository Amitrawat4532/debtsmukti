'use client'

import React, { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: 'Is there a free consultation?',
      answer: 'Yes, we offer a free initial consultation to assess your situation. Any consultation beyond the initial one is covered under our Basic Consultation plan.'
    },
    {
      question: 'Can I get a refund if I\'m not satisfied?',
      answer: 'We offer a 30-day satisfaction guarantee. If you\'re not satisfied with our services, contact us for a full refund, no questions asked.'
    },
    {
      question: 'Are there additional fees?',
      answer: 'Our packages include all standard services. Any special requests or additional services will be discussed with you upfront with transparent pricing.'
    },
    {
      question: 'Can I upgrade my plan later?',
      answer: 'Yes, you can upgrade to a higher plan at any time. We\'ll credit your existing payment towards the upgraded plan.'
    }
  ]

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-16 lg:py-24">
      <h2 className="text-3xl font-bold text-primary mb-12 text-center">Frequently Asked Questions</h2>

      <div className="space-y-6">
        {faqs.map((faq, index) => (
          <div key={index} className="border border-border rounded-[24px] p-6">
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex items-center justify-between gap-4 text-left hover:opacity-80 transition-opacity"
            >
              <h3 className="text-lg font-bold" style={{ color: '#0F2A47' }}>
                {faq.question}
              </h3>
              <ChevronDown
                size={24}
                className="flex-shrink-0 transition-transform duration-300"
                style={{
                  color: '#0F2A47',
                  transform: openIndex === index ? 'rotate(180deg)' : 'rotate(0deg)'
                }}
              />
            </button>
            
            {openIndex === index && (
              <p className="text-foreground opacity-80 mt-4">
                {faq.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}

export default FAQs
