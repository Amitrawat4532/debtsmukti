import React from 'react'
import Image from 'next/image'
import Link from 'next/link'



const Downloadsection = ({title, description, buttonText, buttonLink,ismaxWidth}: {title: string, description: string, buttonText: string, buttonLink: string,ismaxWidth: boolean}) => {
  return (
    <section className='relative bg-primary-blue px-5 py-12.5 md:py-25 flex flex-col gap-7 rounded-[40px] overflow-hidden min-h-146.25 md:min-h-100 justify-center items-center'>
        {/* Top-left decorative SVG */}
        <div className='absolute top-0 left-0 w-45 h-45 pointer-events-none'>
            <Image 
              src="/ctasvg1.png" 
              alt="" 
              width={180} 
              height={180} 
              className='w-full h-full object-contain opacity-50 md:opacity-100'
            />
        </div>

        {/* Content */}
        <h2 className={`text-[38px] font-semibold text-[#ffffff] text-center leading-11.5 relative z-10 ${ismaxWidth ? 'max-w-none md:max-w-125' : ''}`}>
          {title}
        </h2>
        <p className={`text-[18px] text-[#e4e4e4] text-center leading-7 relative z-10 ${ismaxWidth ? 'max-w-none md:max-w-125' : ''}`}>
          {description}
        </p>
        <div className='flex justify-center items-center relative z-10'>
            <Link href={buttonLink} className='bg-primary-light-blue text-[#111] px-6 py-3.5 rounded-[10px] text-[18px] font-semibold hover:bg-opacity-90 transition-all'>
              {buttonText}
            </Link>
        </div>

        {/* Bottom-right decorative SVG */}
        <div className='absolute -bottom-10 right-0 w-75 h-50 pointer-events-none'>
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