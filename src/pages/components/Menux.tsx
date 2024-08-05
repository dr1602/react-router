import React from 'react';
// import { Link, NavLink } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import { useAuth } from './../hooks/auth'

const Menu: React.FC = () => {

    const auth:any = useAuth();

    const routes = []

    routes.push(
        {
            to: '/',
            text: 'Home',
            private: false,
        },
        {
            to: '/blog',
            text: 'Blog',
            private: false,
        },
        {
            to: '/login',
            text: 'Login',
            private: false,
            privateOnly: true,
        },
        {
            to: '/logout',
            text: 'Logout',
            private: true,
        },
        {
            to: '/profile',
            text: 'Profile',
            private: true,
        }
    )

    return(
        <>
            <nav className='menu__Nav'>
                <ul className='flex menu__List'>

                    {routes.map((route, index) => {

                        if (route.privateOnly && auth.user) return null;
                        if (route.private && !auth.user) return null;

                        return(
                            <li key={index} >
                                <NavLink
                                    // className={({ isActive }) => ''}
                                    style={({ isActive }) => ({ 
                                        color: isActive ? 'blue' : 'purple'
                                    })}
                                    to={route.to}
                                > {route.text} </NavLink>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        </>
    )
}

export { Menu }