import React from 'react';
// import { Link, NavLink } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import { useAuth } from '../hooks/auth'

const Header: React.FC = () => {

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
            to: '/profile',
            text: 'Profile',
            private: true,
        },
        {
            to: '/logout',
            text: 'Logout',
            private: true,
        },
    )

    return(
        <>
            <nav className='menu__Nav'>
                <ul className='flex menu__List list-none'>

                    {routes.map((route, index) => {

                        if (route.privateOnly && auth.user) return null;
                        if (route.private && !auth.user) return null;

                        return(
                            <NavLink
                                key={index}
                                // className={({ isActive }) => ''}
                                style={({ isActive }) => ({ 
                                    color: isActive ? '#FFF' : '#F5B441',
                                    textShadow: isActive ? '' : '2px 2px 6px #EE720F',
                                })}
                                className='menu__List--item'
                                to={route.to}
                            > {route.text} </NavLink>
                        )
                    })}
                </ul>
            </nav>
        </>
    )
}

export { Header }