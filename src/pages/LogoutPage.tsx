import React from 'react'
import { useAuth } from './hooks/auth'

// React FC ayuda en typescript a definir un Function Component y permite pasar props prededifinas, en este caso no es necesario usar React.FC
const LogoutPage: React.FC = () => {
    const auth = useAuth();

    const logout = (e:any) => {
        // en este caso defini que e o event puede tener cualquier tipo de valor o any
        e.preventDefault();
        // aqui auth? puede tener un valor o puede ser null y te permite renderizar el componente reciba o no informacion ya que es un comportamiento esperado por TS
        auth?.logout();
    }

    return(
        <>
            <h1> LogoutPAge </h1>

            <form onSubmit={logout}>
                <label> Da click para salir </label>

                <button type='submit'> Salir </button>
            </form>
        </>
      )
}

export { LogoutPage }