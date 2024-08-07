import React from "react"
import { useNavigate, useParams } from 'react-router-dom'
import { useAuth } from './../hooks/auth'
import blogdata from './../../data/blogdata'

const BlogPost: React.FC =() => {
    const navigate = useNavigate();
    const { slug } = useParams();
    const auth = useAuth() 

    const blogpost = blogdata.find( post => post.slug === slug );

    const shouldDelete = auth?.user?.userTypeName !== 'reviewer' && auth?.user?.specialUser || blogpost?.author === auth?.user?.username ;
    const shouldEdit = blogpost?.author === auth?.user?.username || auth?.user?.userTypeName === 'reviewer';

    const returnBLog = () => {
        navigate(-2)
    }

    return(
        <>
            <div>
                <h2> {blogpost?.title} </h2>
                <h3> {blogpost?.author} </h3>
                <p> {blogpost?.content} </p>
            </div>

            {
                shouldDelete && (
                    <button> Eliminar Post </button>
                )
            }
            {
                shouldEdit && (
                    <button> Editar Post </button>
                )

            }
            <button
                onClick={returnBLog}
            >
                Volver
            </button>
        </>
    )
}

export { BlogPost }