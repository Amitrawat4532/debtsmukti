import Link from 'next/link'
import { CheckCircle, Briefcase, BarChart3, ArrowRight, Shield, Clock, Zap } from 'lucide-react'

const services = [
  {
    icon: Briefcase,
    title: 'Personal Loan Settlement',
    description:
      'Expert negotiation to settle your personal loans at reduced amounts. We handle the entire process, ensuring you get the best possible terms.',
    benefits: ['Reduce loan amounts by 30-60%', 'Zero processing fees', 'Dedicated account manager', 'Free legal consultation'],
  },
  {
    icon: Shield,
    title: 'Legal Support & Anti-Harassment',
    description:
      'Complete legal protection against harassment from creditors. Our team ensures your rights are protected throughout the process.',
    benefits: ['24/7 harassment protection', 'Legal representation included', 'RBI complaint filing', 'Documentation support'],
  },
  {
    icon: BarChart3,
    title: 'Loan Consolidation',
    description:
      'Consolidate multiple loans into one manageable payment. Simplify your finances and reduce your overall debt burden.',
    benefits: ['Single monthly payment', 'Lower interest rates', 'Flexible repayment terms', 'Improved credit score'],
  },
  {
    icon: Zap,
    title: 'Debt Closure & Settlement',
    description:
      'Complete settlement and closure of your debt accounts. We ensure proper documentation and final verification with all creditors.',
    benefits: ['Final settlement completion', 'Certificate of settlement', 'Credit report cleanup', 'No future liability'],
  },
]

const processSteps = [
  {
    number: '01',
    title: 'Initial Consultation',
    description: 'Free, no-obligation consultation to understand your complete debt situation and financial goals.',
    icon: Clock,
  },
  {
    number: '02',
    title: 'Comprehensive Debt Analysis',
    description: 'We analyze all your loans, interest rates, and creditors to create a personalized strategy.',
    icon: BarChart3,
  },
  {
    number: '03',
    title: 'Negotiation & Advocacy',
    description: 'Our experts negotiate directly with creditors on your behalf to secure the best settlement.',
    icon: Briefcase,
  },
  {
    number: '04',
    title: 'Settlement & Freedom',
    description: 'Complete settlement process with proper documentation and closure of your debt accounts.',
    icon: CheckCircle,
  },
]

const testimonials = [
  {
    name: 'Raj Kumar',
    role: 'Business Owner',
    quote: 'Debt Mukti helped me settle ₹15 lakhs in just 8 months. The entire process was seamless and stress-free.',
    savings: '₹7+ Lakhs Saved',
  },
  {
    name: 'Priya Sharma',
    role: 'Corporate Professional',
    quote: 'After struggling with multiple loans, Debt Mukti consolidated everything into one manageable payment.',
    savings: '₹4.5 Lakhs Saved',
  },
  {
    name: 'Amit Patel',
    role: 'Entrepreneur',
    quote: 'The legal support team protected me from harassment. Now I can focus on my business without stress.',
    savings: '₹6 Lakhs Saved',
  },
]

export default function ServicesPage() {
  return (
    <main className="min-h-screen flex flex-col px-5">

      {/* Hero Section */}
      <section className="bg-primary-blue text-white py-20 lg:py-28 rounded-[40px]">
        <div className=" mx-auto px-6 text-center space-y-6">
          <div className="inline-block bg-white text-black bg-opacity-20 px-4 py-2 rounded-full text-sm font-semibold">
            Comprehensive Debt Solutions
          </div>
          <h1 className="text-4xl lg:text-6xl font-bold text-balance">Complete Freedom from Debt</h1>
          <p className="text-lg opacity-90 max-w-3xl mx-auto leading-relaxed">
            Tailored solutions for every type of debt. Whether it's personal loans, credit cards, or consolidated debt, we have a proven strategy to help you regain financial control.
          </p>
        </div>
      </section>

      {/* Services Grid - Enhanced */}
      <section className=" mx-auto  py-20 lg:py-28">
        <div className="text-center mb-16">
        <div className="flex justify-center">
              <span className="text-[14px] font-medium tracking-[0.14em] uppercase text-[#031B1D] border border-[#f1eded] px-[16px] py-[6px] rounded-full w-fit">
                Services
              </span>
            </div>
          <h2 className="text-3xl lg:text-5xl font-bold text-primary text-balance mb-4">Our Core Services</h2>
          <p className="text-lg text-foreground opacity-80 max-w-2xl mx-auto">
            Each service is designed to address specific debt challenges with expert guidance and proven results
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div key={index} className="bg-primary-light-blue rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-1">
                <div className="text-primary mb-6 bg-secondary rounded-lg w-fit p-4">
                  <Icon size={32} />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-3">{service.title}</h3>
                <p className="text-foreground opacity-80 leading-relaxed mb-6">{service.description}</p>
                
                <div className="space-y-2 mb-6">
                  <p className="text-sm font-semibold text-primary">Key Benefits:</p>
                  {service.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <CheckCircle size={18} className="text-primary shrink-0 mt-0.5" />
                      <span className="text-sm text-foreground">{benefit}</span>
                    </div>
                  ))}
                </div>
                
                <Link href="/contact" className="inline-flex items-center gap-2 text-white hover:gap-4 bg-primary-blue  px-8 py-2 rounded-full font-bold hover:opacity-90 transition-opacity">
                  Learn More <ArrowRight size={18} />
                </Link>
              </div>
            )
          })}
        </div>
      </section>

      {/* Process Section - Enhanced */}
      <section className=" bg-opacity-40 py-20 ">
        <div className=" mx-auto px-6">
          <div className="text-center mb-20">
          <div className="flex justify-center">
              <span className="text-[14px] font-medium tracking-[0.14em] uppercase text-[#031B1D] border border-[#f1eded] px-[16px] py-[6px] rounded-full w-fit">
                Work
              </span>
            </div>
            <h2 className="text-3xl lg:text-5xl font-bold text-primary text-balance mb-4">How We Work</h2>
            <p className="text-lg text-foreground opacity-80 max-w-2xl mx-auto">
              Our proven 4-step process simplifies complex debt situations and gets you results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => {
              const StepIcon = step.icon
              return (
                <div key={index} className="relative">
                  <div className="bg-primary-blue rounded-xl p-8 h-full">
                    <div className=" rounded-lg w-fit p-3 mb-6 flex gap-2">
                      <div className="text-white text-2xl font-bold">{step.number}</div>
                      <StepIcon size={32} className="text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                    <p className="text-white opacity-80 leading-relaxed text-sm">{step.description}</p>
                  </div>
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-[35px] transform -translate-y-1/2">
                      <ArrowRight size={40} className="text-black font-bold" />
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className=" mx-auto py-20 lg:py-28">
        <div className="text-center mb-16">
        <div className="flex justify-center">
              <span className="text-[14px] font-medium tracking-[0.14em] uppercase text-[#031B1D] border border-[#f1eded] px-[16px] py-[6px] rounded-full w-fit">
                Testimonials
              </span>
            </div>
          <h2 className="text-3xl lg:text-5xl font-bold text-primary text-balance mb-4">What Our Clients Say</h2>
          <p className="text-lg text-foreground opacity-80 max-w-2xl mx-auto">
            Real stories from people who've regained their financial freedom
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-xl p-8 shadow-lg border-l-4 border-primary-blue">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-primary-blue flex items-center justify-center font-bold text-white">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <p className="font-bold text-primary">{testimonial.name}</p>
                  <p className="text-sm text-foreground opacity-70">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-foreground leading-relaxed italic mb-4">"{testimonial.quote}"</p>
              <div className="bg-secondary rounded-lg p-3 text-center">
                <p className="text-sm font-semibold text-primary">{testimonial.savings}</p>
              </div>
            </div>
          ))}
        </div>
      </section>


      {/* CTA Section */}
      <section className="bg-primary-light-blue bg-opacity-40 py-16 lg:py-24 rounded-[40px]">
        <div className=" mx-auto px-6 text-center space-y-6 ">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary text-balance">Start Your Debt Freedom Journey Today</h2>
          <p className="text-lg text-foreground opacity-80">
            Schedule a free consultation with our debt experts. No obligation, just honest guidance tailored to your situation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className=" bg-primary-blue text-white text-center px-8 py-2 rounded-full font-bold hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
            >
              Get Free Consultation<ArrowRight size={18} />
            </Link>
            
          </div>
        </div>
      </section>

    </main>
  )
}
