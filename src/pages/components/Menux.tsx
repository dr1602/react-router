import React from 'react';
// import { Link, NavLink } from 'react-router-dom'
import { NavLink } from 'react-router-dom'

const Menu: React.FC = () => {

    const routes = []

    routes.push(
        {
            to: '/',
            text: 'Home',
        },
        {
            to: '/blog',
            text: 'Blog',
        },
        {
            to: '/profile',
            text: 'Profile',
        }
    )

    return(
        <>
            <nav className='menu__Nav'>
                <ul className='flex menu__List'>

                    {routes.map((route, index) => (
                        <li key={index} >
                            <NavLink
                                // className={({ isActive }) => ''}
                                style={({ isActive }) => ({ 
                                    color: isActive ? 'blue' : 'purple'
                                })}
                                to={route.to}
                            > {route.text} </NavLink>
                        </li>
                    ))}
                </ul>
            </nav>
        </>
    )
}

export { Menu }