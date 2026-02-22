'use client'
import { urlFor } from "@/sanity/lib/image";
import { client } from '@/sanity/lib/client';
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import formatDateWithOrdinal from "@/sanity/lib/formatedate";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import Link from "next/link";

type Post = {
  _id: string;
  title: string;
  excerpt: string;
  slug: {
    current: string;
  };
  mainImage?: {
    asset: {
      url: string;
      _ref: string;
    }
  };
  publishedAt?: string;
};

const BlogsSection = ({isHidden, limit = 2}: {isHidden: boolean, limit?: number}) => {
    const [blogs, setBlogs] = useState<Post[]>([]);
    useEffect(() => {
        const fetchBlogs = async () => {
            const blogs = await client.fetch<Post[]>(`*[_type == "post"]`);
            setBlogs(blogs);
        }
        fetchBlogs();
    }, []);
    console.log(blogs);
  return (
    <div className="w-full shrink-0">
        {!isHidden && (<>
            <div className="flex justify-center">
              <span className="text-[14px] font-medium tracking-[0.14em] uppercase text-[#031B1D] border border-[#f1eded] px-4 py-1.5 rounded-full w-fit">
              Our Blogs
              </span>
            </div>
            <h2 className="text-[48px] mt-5 mb-10 text-center font-medium text-[#111] leading-[1.1]">
            Debt Insights & Tips
            </h2>
            <p className="text-lg opacity-90 text-center mx-auto leading-relaxed text-[#111]">
            Expert advice to help you manage, reduce, and conquer debt.
          </p>
          </>
)}
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-10'>
                {blogs.slice(0, limit).map((blog) => ( 
                    <div className='flex flex-col' key={blog._id}>
                        <div className='relative w-full h-50 rounded-t-3xl overflow-hidden'>

                        <Image fill src={urlFor(blog?.mainImage?.asset?._ref as SanityImageSource).width(1200).quality(90).url() || ''} alt={blog.title}  className='w-full h-full object-cover object-center' />
                        </div>
                        <div className='bg-white rounded-3xl md:p-10 p-5 -mt-5 z-10 relative border border-[#f1eded]  shadow-lg flex flex-col justify-between gap-4'>
                        <Link href={`/blogs/${blog.slug.current}`}>
                        <h3 className='md:text-[28px] text-[20px] font-semibold text-[#111]'>{blog.title}</h3>
                        </Link>
                        <p className='md:text-lg text-[16px] opacity-90 text-[#2e2e2e]'>{blog.excerpt}</p>
                    <p className='text-sm opacity-90 text-[#252525] text-right'>{formatDateWithOrdinal(blog.publishedAt || '')}</p>
                        </div>
                    </div>
                ))}
                </div>
                
            </div>
  )
}

export default BlogsSection