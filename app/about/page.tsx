import { Heart, Shield, Lightbulb, TrendingUp } from 'lucide-react'
import Downloadsection from '@/components/Downloadsection'

const values = [
  {
    icon: Heart,
    title: 'Client-Focused',
    description:
      'We jjjj prioritize your financial wellbeing and work tirelessly to achieve the best outcomes for every client.',
  },
  {
    icon: Shield,
    title: 'Transparent & Ethical',
    description:
      'Complete transparency in all dealings. No hidden fees, no surprises—just honest, straightforward service.',
  },
  {
    icon: TrendingUp,
    title: 'Proven Expertise',
    description:
      'Decades of combined experience in debt negotiation. Our team brings proven strategies and real results.',
  },
  {
    icon: Lightbulb,
    title: 'Innovation',
    description:
      'We use cutting-edge technology and innovative strategies to solve complex debt situations effectively.',
  },
]

const teamRoles = [
  { role: 'Certified Debt Counselors', count: '50+', description: 'Expert negotiators with industry certifications' },
  { role: 'Legal Professionals', count: '30+', description: 'Specialized in financial law and creditor negotiations' },
  { role: 'Financial Analysts', count: '40+', description: 'Data-driven experts in debt restructuring' },
  { role: 'Client Support Specialists', count: '60+', description: '24/7 multilingual support team' },
]

export default function AboutPage() {
  return (
    <main className="min-h-screen flex flex-col max-w-[1280px] mx-auto px-5">

      {/* Hero Section */}
      <section className="bg-primary-blue py-20 lg:py-28  mx-auto w-full rounded-[40px]">
        <div className="w-full flex flex-col items-center justify-center px-6 text-center space-y-6">
          <div className="inline-block bg-primary-light-blue bg-opacity-20 px-4 py-2 rounded-full text-sm font-semibold">
            Our Story
          </div>
          <h1 className="text-4xl lg:text-6xl font-bold text-balance text-white">Transforming Financial Lives</h1>
          <p className="text-lg opacity-90 max-w-3xl mx-auto leading-relaxed text-white">
            For over 15 years, Debt Mukti has been a beacon of hope for thousands who felt trapped by debt. We're not just a service—we're a movement toward financial freedom and peace of mind.
          </p>
        </div>
      </section>


      <section className="w-full mx-auto  py-20 lg:py-28">
        <div className="text-center mb-16">
        <div className="flex justify-center">
              <span className="text-[14px] font-medium tracking-[0.14em] uppercase text-[#031B1D] border border-[#f1eded] px-[16px] py-[6px] rounded-full w-fit">
                Values
              </span>
            </div>
          <h2 className="text-3xl lg:text-5xl font-bold text-primary text-balance mb-4">Our Core Values</h2>
          <p className="text-lg text-foreground opacity-80 max-w-2xl mx-auto">
            The principles that guide every decision and action we take
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => {
            const Icon = value.icon
            return (
              <div key={index} className="bg-primary-light-blue rounded-[24px] p-8 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
                <div className="text-primary mb-6 bg-secondary rounded-lg w-fit p-4">
                  <Icon size={32} />
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">{value.title}</h3>
                <p className="text-foreground opacity-80 leading-relaxed text-sm">{value.description}</p>
              </div>
            )
          })}
        </div>
      </section>

      {/* Mission Statement */}
      <section className="">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          <div className="text-center space-y-4 bg-primary-blue rounded-[24px] p-10">
            <div className="text-4xl font-bold text-white">Our Mission</div>
            <p className=" opacity-80 text-white leading-relaxed">
              To empower individuals to break free from debt through expert guidance, transparent processes, and compassionate support.
            </p>
          </div>
          <div className="text-center space-y-4 bg-primary-blue rounded-[24px] p-10">
            <div className="text-4xl font-bold text-white">Our Vision</div>
            <p className=" opacity-80 text-white leading-relaxed">
              A world where financial stress doesn't dictate life choices and everyone has access to affordable debt resolution services.
            </p>
          </div>
        </div>

      </section>

     

     

      {/* Team Section - Enhanced */}
      <section className="bg-opacity-20 py-20 ">
        <div className="">
          <div className="text-center mb-16">
          <div className="flex justify-center">
              <span className="text-[14px] font-medium tracking-[0.14em] uppercase text-[#031B1D] border border-[#f1eded] px-[16px] py-[6px] rounded-full w-fit">
                Team
              </span>
            </div>
            <h2 className="text-3xl lg:text-5xl font-bold text-primary text-balance mb-4">Our Expert Team</h2>
            <p className="text-lg text-foreground opacity-80 max-w-2xl mx-auto">
              180+ certified professionals dedicated to your financial freedom
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamRoles.map((team, index) => (
              <div key={index} className="bg-primary-light-blue rounded-[24px] p-8 text-center shadow-lg">
                <div className="text-4xl font-bold text-primary mb-2">{team.count}</div>
                <h3 className="text-lg font-bold text-primary mb-2">{team.role}</h3>
                <p className="text-sm text-foreground opacity-80">{team.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

 

      

      <Downloadsection title="Ready to Start Your Journey?" description="Join thousands of Indians who've reclaimed their financial freedom with Debt Mukti. Schedule your free consultation today." buttonText="Get Free Consultation" buttonLink="/contact" ismaxWidth={false} />
    </main>
  )
}
