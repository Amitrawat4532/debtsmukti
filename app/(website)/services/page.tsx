'use client'
import Link from 'next/link'
import { CheckCircle, Briefcase, BarChart3, ArrowRight, Shield, Clock, Zap } from 'lucide-react'
import Testimonials from '@/components/Testimonials'
import Downloadsection from '@/components/Downloadsection'
import Image from 'next/image'


const services = [
  {
    icon: Briefcase,
    title: 'Personal Loan Settlement',
    description:
      'Expert negotiation to settle your personal loans at reduced amounts. We handle the entire process, ensuring you get the best possible terms.',
    benefits: ['Reduce loan amounts by 30-60%', 'Zero processing fees', 'Dedicated account manager', 'Free legal consultation'],
    Image : '/serviceimg3.png'

  },
  {
    icon: Shield,
    title: 'Legal Support & Anti-Harassment',
    description:
      'Complete legal protection against harassment from creditors. Our team ensures your rights are protected throughout the process.',
    benefits: ['24/7 harassment protection', 'Legal representation included', 'RBI complaint filing', 'Documentation support'],
    Image : '/serviceimg1.png'

  },
  {
    icon: BarChart3,
    title: 'Loan Consolidation',
    description:
      'Consolidate multiple loans into one manageable payment. Simplify your finances and reduce your overall debt burden.',
    benefits: ['Single monthly payment', 'Lower interest rates', 'Flexible repayment terms', 'Improved credit score'],
    Image : '/serviceimg4.png'

  },
  {
    icon: Zap,
    title: 'Debt Closure & Settlement',
    description:
      'Complete settlement and closure of your debt accounts. We ensure proper documentation and final verification with all creditors.',
    benefits: ['Final settlement completion', 'Certificate of settlement', 'Credit report cleanup', 'No future liability'],
    Image : '/serviceimg2.png'

  },
]

const processSteps = [
  {
    number: '01',
    title: 'Initial Consultation',
    description: 'Free, no-obligation consultation to understand your complete debt situation and financial goals.',
    icon: Clock,
    img: '/card1.png'
  },
  {
    number: '02',
    title: 'Comprehensive Debt Analysis',
    description: 'We analyze all your loans, interest rates, and creditors to create a personalized strategy.',
    icon: BarChart3,
    img: '/card2.png'


  },
  {
    number: '03',
    title: 'Negotiation & Advocacy',
    description: 'Our experts negotiate directly with creditors on your behalf to secure the best settlement.',
    icon: Briefcase,
    img: '/card3.png'

  },
  {
    number: '04',
    title: 'Settlement & Freedom',
    description: 'Complete settlement process with proper documentation and closure of your debt accounts.',
    icon: CheckCircle,
    img: '/card4.png'


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
            Tailored solutions for every type of debt. Whether it&apos;s personal loans, credit cards, or consolidated debt, we have a proven strategy to help you regain financial control.
          </p>
        </div>
      </section>

      {/* Services Grid - Enhanced */}
      <section className=" mx-auto  py-20 lg:py-28">
        <div className="text-center mb-16">
        <div className="flex justify-center">
              <span className="text-[14px] font-medium tracking-[0.14em] uppercase text-[#031B1D] border border-[#f1eded] px-4 py-1.5 rounded-full w-fit">
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
              <div key={index} className="bg-primary-light-blue rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-1">
                <div className="text-primary mb-6 bg-secondary rounded-lg w-fit  flex gap-4">
                  <Icon size={32} />
                <h3 className="text-2xl font-bold text-primary mb-3">{service.title}</h3>
                </div>
                <p className="text-foreground opacity-80 leading-relaxed mb-6">{service.description}</p>
                
                <div className="space-y-2 mb-6">
                  <p className="text-sm font-semibold text-primary">Key Benefits:</p>
                  <div className=' flex flex-wrap  gap-4 w-full mt-5'>

                  {service.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex gap-2  w-[45%]">
                      <CheckCircle size={18} className="text-primary shrink-0 mt-0.5" />
                      <span className="text-sm text-foreground">{benefit}</span>
                    </div>
                  ))}

                </div>
                  </div>
<div className="relative rounded-[20px] overflow-hidden aspect-[1/1.06] w-full my-10 max-h-7.1">
              
                <Image
                  
                  src={service.Image}
                  alt="Personal Loan Debt Settlement"
                  fill
                  className="object-cover rounded-[20px] transition-opacity duration-500 w-full h-full max-h-7.1 "
                />
            </div>
                
                <Link href="/contact" className="flex w-full justify-center items-center gap-2 text-white hover:gap-4 bg-primary-blue  px-8 py-2 rounded-full font-bold hover:opacity-90 transition-opacity">
                  Learn More <ArrowRight size={18} />
                </Link>
              </div>
            )
          })}
        </div>
      </section>

      {/* Process Section - Enhanced */}
      <section className=" bg-opacity-40 py-20 mb-20 ">
        <div className=" mx-auto">
          <div className="text-center mb-20">
          <div className="flex justify-center">
              <span className="text-[14px] font-medium tracking-[0.14em] uppercase text-[#031B1D] border border-[#f1eded] px-4 py-1.5 rounded-full w-fit">
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
                  <div className={`rounded-3xl p-8 h-full `} 
  style={{ backgroundImage: `url(${step.img})` , backgroundSize: 'cover' , backgroundPosition: 'bottom' }}
> 
                    <div className=" rounded-lg w-fit p-3 mb-6 flex gap-2">
                      {/* <div className="text-white text-2xl font-bold">{step.number}</div> */}
                      <StepIcon size={32} className="text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                    <p className="text-white opacity-80 leading-relaxed text-sm">{step.description}</p>
                  </div>
                  {/* {index < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-8.75 transform -translate-y-1/2">
                      <ArrowRight size={40} className="text-black font-bold" />
                    </div>
                  )} */}
                </div>
              )
            })}
          </div>
        </div>
      </section>

     
      <Testimonials />


    <div className='mt-30'>
      <Downloadsection title="Start Your Debt Freedom Journey Today" description="Schedule a free consultation with our debt experts. No obligation, just honest guidance tailored to your situation." buttonText="Get Free Consultation" buttonLink="/contact" ismaxWidth={false} />
    </div>
    </main>
  )
}
