import React from 'react';
import { Link } from 'react-router-dom';
import icon from '../assets/images/starships-icon.png';
import '../styles/Home.css';

export const Home = () => {
    return (
        <>
            <div className="home-container">
                <Link to="/starships" className="btn-home">
                    <img src={icon} alt="" srcset="" />
                    <i> Starships</i>
                </Link>
            </div>
        </>
    );
};
