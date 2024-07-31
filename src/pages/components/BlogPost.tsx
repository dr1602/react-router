import React from "react"
import { useNavigate, useParams } from 'react-router-dom'
import blogdata from './../../data/blogdata'

const BlogPost: React.FC =() => {
    const navigate = useNavigate();
    const { slug } = useParams();

    const blogpost = blogdata.find( post => post.slug === slug );

    const returnBLog = () => {
        navigate(-5)
        // esta puede ser ua ruta dinamica
        // con numeros puede ser el historial
        // gracias a este react hook se puede meter logica de negocio para volver
    }

    return(
        <>
            <div>
                <h2> {blogpost?.title} </h2>
                <h3> {blogpost?.author} </h3>
                <p> {blogpost?.content} </p>
            </div>

            <button
                onClick={returnBLog}
            >
                Volver
            </button>
        </>
    )
}

export { BlogPost }