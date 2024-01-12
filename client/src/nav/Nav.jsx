import React from 'react'
import './Nav.scss'
import { NavLink } from 'react-router-dom'
import logo from '../svg/logo.svg'

function Nav() {
    return (
        <div className='main'>
            <div className="logo">
                <img src={logo} alt="" />
            </div>
            <div className="links">
                <ul>
                    <li>
                        <NavLink to='/'>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to='/add'>Add</NavLink>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Nav