import React from 'react'
import Image from 'next/image'
import Link from 'next/link'



const Downloadsection = ({title, description, buttonText, buttonLink,ismaxWidth}: {title: string, description: string, buttonText: string, buttonLink: string,ismaxWidth: boolean}) => {
  return (
    <section className='relative bg-primary-blue px-5 py-[50px] md:py-[100px] flex flex-col gap-7 rounded-[40px] overflow-hidden min-h-[500px] md:min-h-[400px] justify-center items-center'>
        {/* Top-left decorative SVG */}
        <div className='absolute top-0 left-0 w-[180px] h-[180px] pointer-events-none'>
            <Image 
              src="/ctasvg1.png" 
              alt="" 
              width={180} 
              height={180} 
              className='w-full h-full object-contain opacity-50 md:opacity-100'
            />
        </div>

        {/* Content */}
        <h2 className={`text-[38px] font-semibold text-[#ffffff] text-center leading-[46px] relative z-10 ${ismaxWidth ? 'max-w-none md:max-w-[500px]' : ''}`}>
          {title}
        </h2>
        <p className={`text-[18px] text-[#e4e4e4] text-center leading-[28px] relative z-10 ${ismaxWidth ? 'max-w-none md:max-w-[500px]' : ''}`}>
          {description}
        </p>
        <div className='flex justify-center items-center relative z-10'>
            <Link href={buttonLink} className='bg-primary-light-blue text-[#111] px-6 py-[14px] rounded-[10px] text-[18px] font-semibold hover:bg-opacity-90 transition-all'>
              {buttonText}
            </Link>
        </div>

        {/* Bottom-right decorative SVG */}
        <div className='absolute bottom-[-40px] right-0 w-[300px] h-[200px] pointer-events-none'>
            <Image 
              src="/ctasvg2.png" 
              alt="" 
              width={180} 
              height={180} 
              className='w-full h-full object-contain opacity-50 md:opacity-100'
            />
        </div>
    </section>
  )
}

export default Downloadsection