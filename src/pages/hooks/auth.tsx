import React, { createContext, ReactNode, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

// aqui se define que tipo de dato es children
type AuthProviderProps = {
    children: ReactNode;
}

// aqui se definen los tipos de datos que reciben las funciones y useState de Auth Provider
type AuthContextType = {
    // el tipo de dato es un objeto con un tipo string o un valor nulo
    user: {username: string} | null;
    // login recibe una funcion funcion con "credenciales" que son un objeto con un dato tipo string
    login: (credentials: { username: string }) =>  void;
    // logout recibe un valor del tipo funcion
    logout: () => void;
}

// aqui dice que createContext puede recibr los tupos definidos en AuthContextType o puede ser indefinido, y por default lo haces indefinido
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// React FC ayuda en typescript a definir un Function Component y permite pasar props prededifinas, en este caso es necesario para definir a "children"
const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
    const navigate = useNavigate();
    const [ user, setUser ] = useState<{username: string} | null>(null);

    const login = (credentials: { username: string }) => {
        setUser({ username: credentials.username })
        navigate('/profile');
    }

    const logout = () => {
        setUser(null)
        navigate('/');
    }

    const auth = { user, login, logout }

    return(
        <AuthContext.Provider value={auth}>
            {children}
        </AuthContext.Provider>
    )
}

const useAuth = () => {
   const auth = useContext(AuthContext);
   return auth;
}

export {
    AuthProvider,
    useAuth
}
