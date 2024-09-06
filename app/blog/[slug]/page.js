async function getBlog(slug) {
    const response = await fetch(`https://66db30e2f47a05d55be757b7.mockapi.io/blogs/${slug}`)

    if (!response.ok) {
        throw new Error("cannot fetch response")
    }

    return response.json()
}

export default async function Blog({ params }) {
    const blog = await getBlog(params.slug)

    return (
        <div>
            ID: {params.slug}
            <div>
                Blog Name: {blog.name}
            </div>
            <div>
                Blog Description: {blog.description}
            </div>
        </div>
    )
}