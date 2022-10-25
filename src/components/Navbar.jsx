import React from 'react';
import logo from '../assets/images/star-wars-2.png';
import '../styles/Navbar.css';
import { NavLink, Link } from 'react-router-dom';

export const Navbar = ({ validate, setValidate }) => {
    return (
        <div className="navbar">
            <div className="logo">
                <img src={logo} alt="Logo Star Wars" />
                <div className="sign">
                    {validate === false ? (
                        <Link to="/login" className="btn-login">
                            LOG IN
                        </Link>
                    ) : (
                        <Link
                            to="/"
                            className="btn-logout"
                            onClick={() => {
                                // localStorage.setItem('Logged', JSON.stringify(null));
                                setValidate(false);
                            }}
                        >
                            LOG OUT
                        </Link>
                    )}
                    <Link to="/signup" className="btn-signin">
                        SIGN UP
                    </Link>
                </div>
            </div>
            <div className="nav-link">
                {/* Idea: ¿className .active-home?? */}
                <Link to="/" className="inactive-link">
                    HOME
                </Link>
                <NavLink
                    className={({ isActive }) => (isActive === true ? 'active' : 'inactive')}
                    // activeClassName={({ isActive }) => (isActive === true ? 'active' : 'inactive')}
                    to="/starships"
                    end
                >
                    STARSHIPS
                </NavLink>
            </div>
        </div>
    );
};
