import { client } from "@/sanity/lib/client"
import { notFound } from "next/navigation"
import { PortableText } from "@portabletext/react"

async function getBlog(slug: string) {
  const query = `
    *[_type == "post" && slug.current == $slug][0]{
      title,
      "imageUrl": mainImage.asset->url,
      content,
      publishedAt
    }
  `

  return client.fetch(query, { slug })
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

  return (
    <main className="min-h-screen flex flex-col px-5">

      {/* Hero Section */}
      <section className="bg-primary-blue text-white py-20 lg:py-28 rounded-[40px]">
        <div className=" mx-auto px-6 text-center space-y-6">
          
          <h1 className="text-4xl lg:text-6xl font-bold text-balance">{blog.title}</h1>
          <p className="text-lg opacity-90 max-w-3xl mx-auto leading-relaxed">
            {blog.excerpt ||'No excerpt available'}
          </p>
        </div>
      </section>


      {blog.imageUrl && (
        <img
          src={blog.imageUrl}
          alt={blog.title}
          className="w-full rounded-lg my-6"
        />
      )}

      <div className="prose">
        <PortableText value={blog.content} />
      </div>
    </main>
  )
}