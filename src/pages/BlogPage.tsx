import React from 'react'
import { Outlet } from 'react-router-dom'
import { BlogLink } from './components/BlogLink'
import blogdata from './../data/blogdata'

const BlogPage: React.FC =() => {
    return(
        <>
            <section className='BlogPage__contianer'>
                <h1 className='BlogPage__header'> BlogPage </h1>

                <div className='BlogPage__main'>
                    <aside className='BlogPage__aside'>
                    {
                        blogdata.map((post, index) => (
                            <BlogLink 
                                key={index}
                                title={post.title}
                                slug={post.slug}
                            />
                        ))
                    }
                    </aside>

                    <article className='BlogPage__article'>
                        <Outlet />
                    </article>
                </div>

            </section>
        </>
    )
}

export { BlogPage }