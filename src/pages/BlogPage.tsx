import React from "react"
import { BlogLink } from './components/BlogLink'
import blogdata from './../data/blogdata'

const BlogPage: React.FC =() => {
    return(
        <>
            <h1> BlogPage </h1>
            {
                blogdata.map((post, index) => (
                    <BlogLink 
                        key={index}
                        title={post.title}
                        slug={post.slug}
                    />
                ))
            }
        </>
    )
}

export { BlogPage }