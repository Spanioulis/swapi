import React from 'react';
import logo from '../assets/images/star-wars-2.png';
import '../styles/Navbar.css';
import { NavLink } from 'react-router-dom';

export const Navbar = () => {
    return (
        <>
            <div className="logo">
                <img src={logo} alt="Logo Star Wars" />
                <div className="sign">
                    <p>LOGIN</p>
                    <p>SIGN IN</p>
                </div>
            </div>
            <div className="nav-link">
                {/* Idea: ¿className .active-home?? */}
                <NavLink to="/" className={({ isActive }) => (isActive ? 'inactive' : '')}>
                    HOME
                </NavLink>
                <NavLink
                    className={({ isActive }) => (isActive === true ? 'active' : 'inactive')}
                    to="/starships"
                    end
                >
                    STARSHIPS
                </NavLink>
            </div>
        </>
    );
};
