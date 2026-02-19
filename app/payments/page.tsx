import Link from 'next/link'
import { CreditCard, Lock, CheckCircle } from 'lucide-react'

const paymentMethods = [
  {
    icon: CreditCard,
    title: 'Credit/Debit Card',
    description: 'Secure payment via Visa, Mastercard, American Express, and other major cards.',
  },
  {
    icon: CreditCard,
    title: 'Bank Transfer',
    description: 'Direct bank transfer for larger payments with reduced processing fees.',
  },
  {
    icon: CreditCard,
    title: 'Digital Wallets',
    description: 'Fast and convenient payments through Apple Pay, Google Pay, and other digital wallets.',
  },
  {
    icon: CreditCard,
    title: 'EMI Options',
    description: 'Flexible installment plans to distribute your consultation and service fees.',
  },
]

const paymentPlans = [
  {
    name: 'Basic Consultation',
    price: '₹5,000',
    description: 'Initial debt analysis and personalized consultation',
    features: ['Debt Assessment', 'Financial Review', '1-on-1 Consultation', 'Recommendations'],
  },
  {
    name: 'Settlement Package',
    price: '₹25,000',
    description: 'Complete debt settlement negotiation and support',
    features: ['Full Assessment', 'Creditor Negotiation', 'Legal Support', '6-Month Support', 'Settlement Closure'],
    highlight: true,
  },
  {
    name: 'Premium Package',
    price: '₹50,000',
    description: 'Comprehensive debt resolution with ongoing support',
    features: [
      'Complete Assessment',
      'Multi-Creditor Negotiation',
      'Legal Protection',
      '12-Month Support',
      'Anti-Harassment Support',
      'Settlement Verification',
    ],
  },
]

export default function PaymentsPage() {
  return (
    <main className="min-h-screen flex flex-col px-5">

      {/* Hero Section */}
      <section className="bg-primary-blue text-white py-16 lg:py-24 rounded-[40px]">
        <div className="max-w-7xl mx-auto px-6 text-center space-y-4">
          <h1 className="text-4xl lg:text-5xl font-bold text-white">Payment Plans & Pricing</h1>
          <p className="text-lg opacity-90 max-w-2xl mx-auto text-white">
            Flexible payment options to fit your financial situation
          </p>
        </div>
      </section>


      {/* Pricing Plans */}
      {/* <section className="max-w-7xl mx-auto px-6 py-16 lg:py-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary text-balance mb-4">Choose Your Plan</h2>
          <p className="text-lg text-foreground opacity-80 max-w-2xl mx-auto">
            Select the plan that best fits your needs. All plans include professional support and expert guidance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {paymentPlans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-lg p-8 transition-all ${
                plan.highlight
                  ? 'border-2 border-primary shadow-xl bg-secondary bg-opacity-20 relative'
                  : 'border border-border'
              }`}
            >
              {plan.highlight && (
                <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-bold">
                  Most Popular
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-2xl font-bold text-primary mb-2">{plan.name}</h3>
                <p className="text-foreground opacity-80 text-sm">{plan.description}</p>
              </div>

              <div className="mb-6">
                <div className="text-4xl font-bold text-primary">{plan.price}</div>
                <p className="text-muted-foreground text-sm">One-time payment</p>
              </div>

              <button
                className={`w-full py-3 rounded-lg font-bold mb-6 transition-opacity ${
                  plan.highlight
                    ? 'bg-primary text-primary-foreground hover:opacity-90'
                    : 'border border-primary text-primary hover:bg-primary hover:text-primary-foreground'
                }`}
              >
                Choose Plan
              </button>

              <ul className="space-y-3">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <CheckCircle size={20} className="text-primary flex-shrink-0" />
                    <span className="text-foreground text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-muted bg-opacity-50 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary text-balance mb-4">Payment Methods</h2>
            <p className="text-lg text-foreground opacity-80 max-w-2xl mx-auto">
              We accept multiple payment methods for your convenience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {paymentMethods.map((method, index) => {
              const Icon = method.icon
              return (
                <div key={index} className="bg-white rounded-lg p-6 border border-border">
                  <div className="text-primary mb-4">
                    <Icon size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-2">{method.title}</h3>
                  <p className="text-foreground opacity-80">{method.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section> */}

      {/* FAQ Section */}
      <section className="max-w-4xl mx-auto  py-16 lg:py-24">
        <h2 className="text-3xl font-bold text-primary mb-12 text-center">Frequently Asked Questions</h2>

        <div className="space-y-6">
          <div className="border border-border rounded-lg p-6">
            <h3 className="text-lg font-bold text-primary mb-2">Is there a free consultation?</h3>
            <p className="text-foreground opacity-80">
              Yes, we offer a free initial consultation to assess your situation. Any consultation beyond the initial one
              is covered under our Basic Consultation plan.
            </p>
          </div>

          <div className="border border-border rounded-lg p-6">
            <h3 className="text-lg font-bold text-primary mb-2">Can I get a refund if I'm not satisfied?</h3>
            <p className="text-foreground opacity-80">
              We offer a 30-day satisfaction guarantee. If you're not satisfied with our services, contact us for a full
              refund, no questions asked.
            </p>
          </div>

          <div className="border border-border rounded-lg p-6">
            <h3 className="text-lg font-bold text-primary mb-2">Are there additional fees?</h3>
            <p className="text-foreground opacity-80">
              Our packages include all standard services. Any special requests or additional services will be discussed with
              you upfront with transparent pricing.
            </p>
          </div>

          <div className="border border-border rounded-lg p-6">
            <h3 className="text-lg font-bold text-primary mb-2">Can I upgrade my plan later?</h3>
            <p className="text-foreground opacity-80">
              Yes, you can upgrade to a higher plan at any time. We'll credit your existing payment towards the upgraded plan.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary-light-blue text-black py-16 lg:py-24 rounded-[40px]">
        <div className="max-w-7xl mx-auto px-6 text-center space-y-6">
          <h2 className="text-3xl lg:text-4xl font-bold text-balance text-black">Ready to Get Started?</h2>
          <p className="text-lg opacity-90 max-w-2xl mx-auto text-black">
            Choose your plan and take the first step towards financial freedom today.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-primary-blue text-white px-8 py-3 rounded-full font-bold hover:opacity-90 transition-opacity"
          >
            Get Your Consultation Today
          </Link>
        </div>
      </section>

    </main>
  )
}
