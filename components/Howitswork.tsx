import Image from 'next/image'
import React from 'react'

const steps = [
    {
        title: 'Free Debt Assessment',
        description: 'We review your loans, income, and financial situation to understand what you can realistically afford.',
    },
    {
        title: 'We Negotiate for You',
        description: 'Our experts deal directly with creditors to reduce your total debt and agree on better terms.',
    },
    {
        title: 'Settle & Move Forward',
        description: 'You make affordable payments, clear your debt, and start rebuilding your financial future.',
    },
]
const Howitswork = () => {
  return (
    <section className="bg-white flex flex-col gap-10">
    <div className="flex flex-col gap-2">
      <div className="flex justify-center">
        <span className="  text-[14px] font-medium tracking-[0.14em] uppercase text-[#031B1D] border border-[#f1eded] px-[16px] py-[6px] rounded-full w-fit">
        Process
        </span>
      </div>

      <h2 className="text-[48px]  font-medium text-[#111]  text-center ">
      How it Work
      </h2>

      <h3 className="text-[16px]   font-medium text-[#6B6969] leading-[25px]  text-center ">
      A simple, stress-free process designed to get you out of debt faster.
      </h3>
    </div>
    <div className='relative w-full h-[420px] rounded-[24px] overflow-hidden'>
        <Image src="/howitsworks.png" alt="how-it-work" fill className='object-cover' />
    </div>
    <div className='flex gap-5 flex-col md:flex-row mt-14'>
        {steps.map((step, index) => (
            <div key={index} className='flex gap-5 '>
                <div className='flex justify-center items-center p-10  border border-[#0F2A47] h-[100px] w-[100px] rounded-full text-[38px] font-bold text-white bg-primary-blue'>{index + 1}</div>
                <div className='flex flex-col gap-2'>
                    <h4 className='text-[20px] font-bold text-[#111]'>{step.title}</h4>
                    <p className='text-[14px] text-[#6B6969]'>{step.description}</p>
                </div>
            </div>
        ))}

    </div>
    </section>
  )
}

export default Howitswork