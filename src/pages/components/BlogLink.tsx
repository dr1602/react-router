import React from 'react'
import { Link } from 'react-router-dom'

interface BlogLinkProps {
    title?: string,
    slug?: string,
    content?: string,
}

const BlogLink: React.FC<BlogLinkProps> = ({ title, slug }) => {
    return(
        <>
            <li className='BlogLink__container'>
                <Link 
                    to={`/blog/${slug}`}
                > 
                    {title} 
                </Link>
            </li>
        </>
    )
}

export { BlogLink }