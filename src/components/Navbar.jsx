import React from 'react';
import logo from '../assets/images/star-wars-2.png';
import '../App.css';
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
                <p className="link-home">HOME</p>
                <NavLink to="/starships" className="link-starships">
                    STARSHIPS
                </NavLink>
            </div>
        </>
    );
};
