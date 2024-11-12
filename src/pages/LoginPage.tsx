import React, { useState } from 'react'
import { useAuth } from './hooks/auth'
import { Navigate } from 'react-router-dom';

// React FC ayuda en typescript a definir un Function Component y permite pasar props prededifinas, en este caso no es necesario usar React.FC
const LoginPage: React.FC = () => {
    const auth = useAuth();
    const [userName, setUserName] = useState<string>('')

    const login = ( e:any ) => {
        // en este caso defini que e o event puede tener cualquier tipo de valor o any
        e.preventDefault();
        // aqui auth? puede tener un valor o puede ser null y te permite renderizar el componente reciba o no informacion ya que es un comportamiento esperado por TS
        auth?.login({ username: userName })
    }

    if(auth?.user) {
        return <Navigate to='/profile'/>
    }

    return(
        <>
            <section className='LoginPage__container'>
                <h1 className='LoginPage__header'> LoginPage </h1>

                <form onSubmit={login}>
                    <label className='LoginPage__label'> Nombre/ Usuario </label>
                    <input 
                        type='text'
                        value={userName}
                        onChange={ e => setUserName(e.target.value)}
                    />

                    <button type='submit'> Ir </button>
                </form>
            </section>
        </>
    )
}

export { LoginPage }