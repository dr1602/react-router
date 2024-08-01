import React, { useState } from 'react'
import { useAuth } from './hooks/auth'

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

    return(
        <>
            <h1> LoginPage </h1>

            <form onSubmit={login}>
                <label> Nombre/ Usuario </label>
                <input 
                    type='text'
                    value={userName}
                    onChange={ e => setUserName(e.target.value)}
                />

                <button type='submit'> Ir </button>
            </form>
        </>
    )
}

export { LoginPage }