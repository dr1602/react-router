import React, { createContext, ReactNode, useContext, useState } from 'react';
import { useNavigate, Navigate } from 'react-router-dom';

// aqui se define que tipo de dato es children
type AuthProviderProps = {
    children: ReactNode;
}

// aqui se definen los tipos de datos que reciben las funciones y useState de Auth Provider
type AuthContextType = {
    // el tipo de dato es un objeto con un tipo string o un valor nulo
    user: {username: string, specialUser: string | undefined, userTypeName: string | undefined } | null;
    // login recibe una funcion funcion con "credenciales" que son un objeto con un dato tipo string
    login: (credentials: { username: string }) =>  void;
    // logout recibe un valor del tipo funcion
    logout: () => void;
}

// esto de beria de ser trabajo del backend pero vamos a suponer que nos lo da el backend
const specialUsers = [
    {
        userName: 'Irisval',
        userType: 'admin'
    },
    {
        userName: 'dr1602',
        userType: 'admin'
    },
    {
        userName: 'Arti',
        userType: 'reviewer'
    },
]

// aqui dice que createContext puede recibr los tupos definidos en AuthContextType o puede ser indefinido, y por default lo haces indefinido
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// React FC ayuda en typescript a definir un Function Component y permite pasar props prededifinas, en este caso es necesario para definir a "children"
const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
    const navigate = useNavigate();
    const [ user, setUser ] = useState<{ username: string, specialUser: string | undefined, userTypeName: string | undefined } | null>(null);

    const login = (credentials: { username: string }) => {
        const isSpecialUser = specialUsers.find( admin => admin.userName === credentials.username )

        setUser({ username: credentials.username, specialUser: isSpecialUser?.userName, userTypeName: isSpecialUser?.userType })
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

const ProtectedRoute = (props: any) => {
    const auth = useAuth();

    if (!auth?.user) {
        return <Navigate to='/login'/>
    }

    return(props.children)
}

export {
    AuthProvider,
    useAuth,
    ProtectedRoute
}
