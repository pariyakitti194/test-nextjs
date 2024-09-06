import Link from "next/link"

async function getBlogs() {
  const response = await fetch("https://66db30e2f47a05d55be757b7.mockapi.io/blogs")

  if (!response.ok) {
    throw new Error("cannot fetch blogs")
  }

  return response.json()
}

export default async function Home() {
  const blogs = await getBlogs()

  return (
    <div>Blog List: 
      {blogs.map((blog, index) => <div key={index}>{blog.id} {blog.name} <Link href={`/blog/${blog.id}`} className="px-4 bg-blue-400">Go to read blog...</Link></div>)}</div>
  );
}
