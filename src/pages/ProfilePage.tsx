import React from 'react'
import { useAuth } from './hooks/auth'

const ProfilePage: React.FC = () => {
    const auth = useAuth();

    return(
        <>
            <h1> Welcome to ProfilePage {auth?.user?.username} </h1>
            {/* aqui dices que auth? y user? puede ser undefined y por eso puedes renderizar el componente aunque no reciba valores de useAuth */}
        </>
    )
}

export { ProfilePage }