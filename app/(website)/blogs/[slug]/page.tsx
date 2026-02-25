import { client } from "@/sanity/lib/client"
import { notFound } from "next/navigation"
import { PortableText } from "@portabletext/react"
import { Calendar, Clock } from "lucide-react"
import Image from "next/image"
import type { Metadata } from "next";

export async function generateMetadata(
  { params }: { params: { slug: string } }
): Promise<Metadata> {

  const blog = await getBlog(params.slug);

  if (!blog) {
    return {
      title: "Blog Not Found",
    };
  }

  return {
    title: blog.title,
    description: blog.excerpt || blog.description,
    openGraph: {
      title: blog.title,
      description: blog.excerpt || blog.description,
      images: blog.imageUrl ? [blog.imageUrl] : [],
      type: "article",
      publishedTime: blog.publishedAt,
    },
    twitter: {
      card: "summary_large_image",
      title: blog.title,
      description: blog.excerpt || blog.description,
      images: blog.imageUrl ? [blog.imageUrl] : [],
    },
  };
}



async function getBlog(slug: string) {
  const query = `
    *[_type == "post" && slug.current == $slug][0]{
      title,
      "imageUrl": mainImage.asset->url,
      content,
      publishedAt,
      author,
      description,
      _updatedAt,
      excerpt
    }
  `

  return client.fetch(query, { slug })
}

function formatDate(date: string) {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

function estimateReadTime(content:unknown) {
  if (!content) return 0
  const textLength = JSON.stringify(content).length
  const wordsPerMinute = 200
  return Math.ceil(textLength / 5 / wordsPerMinute)
}

export default async function BlogDetails({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params

  const blog = await getBlog(slug)
  console.log(blog,"single blog data")

  if (!blog) {
    return notFound()
  }

  
  const readTime = estimateReadTime(blog.content)
  const publishedDate = formatDate(blog.publishedAt)
  

  return (
    <main className="min-h-screen bg-background px-5">
      <section className="bg-primary-blue text-white py-20 lg:py-28 rounded-[40px] mb-10">
        <div className=" mx-auto px-6 text-center space-y-6">
          
          <h1 className="text-4xl lg:text-6xl font-bold text-balance">{blog.title}</h1>
          <p className="text-lg opacity-90 max-w-3xl mx-auto leading-relaxed">
            {blog.excerpt ||'No excerpt available'}
          </p>
           <span>
                Last updated: {formatDate(blog._updatedAt || blog.publishedAt)}
              </span>
        </div>
      </section>
      {/* Hero Section with Image */}
      {blog.imageUrl && (
        <div className="relative w-full h-100 md:h-125 overflow-hidden rounded-[40px]">
          <Image
            src={blog.imageUrl}
            alt={blog.title}
            className="w-full h-full object-cover"
            fill
          />
          <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-background" />
        </div>
      )}

      {/* Content Container */}
      <article className="relative -mt-32 z-10">
        <div className="max-w-3xl mx-auto px-4 md:px-6 lg:px-8">
          {/* Article Header */}
          <div className="bg-card border border-border rounded-lg p-8 md:p-12 shadow-sm mb-12">
            <div className="space-y-4">
              {/* Metadata */}
              <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground justify-between">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>{publishedDate}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>{readTime} min read</span>
                </div>
              </div>

              {/* Title */}
              {/* <h1 className="text-4xl md:text-5xl font-bold text-foreground leading-tight text-balance">
                {blog.title}
              </h1> */}

              {/* Description */}
              {blog.description && (
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                  {blog.description}
                </p>
              )}

              {/* Author Info */}
              {blog.author && (
                <div className="pt-4 border-t border-border">
                  <p className="text-sm text-muted-foreground">
                    By <span className="font-semibold text-foreground">{blog.author}</span>
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Blog Content */}
          <div className="prose prose-lg dark:prose-invert max-w-none mb-16">
            <style>{`
              .prose {
                --tw-prose-body: var(--color-foreground);
                --tw-prose-headings: var(--color-foreground);
                --tw-prose-links: var(--color-primary);
                --tw-prose-hr: var(--color-border);
                --tw-prose-code: var(--color-foreground);
                --tw-prose-pre-code: var(--color-primary-foreground);
                --tw-prose-pre-bg: var(--color-primary);
              }
              .prose h2 {
                margin-top: 2rem;
                margin-bottom: 1rem;
                font-size: 1.875rem;
                font-weight: 700;
              }
              .prose h3 {
                margin-top: 1.5rem;
                margin-bottom: 0.75rem;
                font-size: 1.5rem;
                font-weight: 700;
              }
              .prose p {
                line-height: 1.75;
                margin-bottom: 1.25rem;
              }
              .prose li {
                margin-bottom: 0.5rem;
              }
              .prose a {
                text-decoration: underline;
                font-weight: 500;
              }
              .prose img {
                border-radius: 0.5rem;
                margin-top: 1.5rem;
                margin-bottom: 1.5rem;
              }
              .prose blockquote {
                border-left: 4px solid var(--color-primary);
                padding-left: 1rem;
                font-style: italic;
                color: var(--color-muted-foreground);
              }
              .prose code {
                background-color: var(--color-muted);
                padding: 0.125rem 0.375rem;
                border-radius: 0.25rem;
                font-size: 0.9em;
              }
              .prose pre {
                background-color: var(--color-muted);
                padding: 1rem;
                border-radius: 0.5rem;
                overflow-x: auto;
              }
              .prose pre code {
                background-color: transparent;
                padding: 0;
                color: var(--color-foreground);
              }
            `}</style>
            <PortableText value={blog.content} />
          </div>

          {/* Footer Divider */}
          <div className="border-t border-border pt-8 mb-8">
            <div className="flex items-center justify-end text-sm text-muted-foreground">
              <span>
                Last updated: {formatDate(blog._updatedAt || blog.publishedAt)}
              </span>
            </div>
          </div>
        </div>
      </article>
    </main>
  )
}



 