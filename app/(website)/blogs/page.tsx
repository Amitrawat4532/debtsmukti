import Link from 'next/link'
import { CheckCircle, Briefcase, BarChart3, ArrowRight, Shield, Clock, Zap } from 'lucide-react'
import Downloadsection from '@/components/Downloadsection'
import BlogsSection from '@/components/BlogsSection'

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




export default function ServicesPage() {
  return (
    <main className="min-h-screen flex flex-col px-5">

      {/* Hero Section */}
      <section className="bg-primary-blue text-white py-20 lg:py-28 rounded-[40px]">
        <div className=" mx-auto px-6 text-center space-y-6">
          <div className="inline-block bg-white text-black bg-opacity-20 px-4 py-2 rounded-full text-sm font-semibold">
           Blogs
          </div>
          <h1 className="text-4xl lg:text-6xl font-bold text-balance">Blogs & Resources</h1>
          <p className="text-lg opacity-90 max-w-3xl mx-auto leading-relaxed">
          Expert insights and tips to help you understand debt management and achieve financial freedom
          </p>
        </div>
      </section>
      <div className='mt-20'>

        <BlogsSection isHidden={true} limit={20}/>
      </div>

     

     


    <div className='mt-30'>
      <Downloadsection title="Start Your Debt Freedom Journey Today" description="Schedule a free consultation with our debt experts. No obligation, just honest guidance tailored to your situation." buttonText="Get Free Consultation" buttonLink="/contact" ismaxWidth={false} />
    </div>
    </main>
  )
}
