import React from 'react'
import { Outlet } from 'react-router-dom'
import { BlogLink } from './components/BlogLink'
import blogdata from './../data/blogdata'

const BlogPage: React.FC =() => {
    return(
        <>
            <h1> BlogPage </h1>

            <Outlet />

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