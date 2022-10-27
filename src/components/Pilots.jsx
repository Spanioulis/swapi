import React, { useEffect, useState } from 'react';
import '../styles/Pilots.css';
import axios from 'axios';
// import { useParams } from 'react-router-dom';

export const Pilots = ({ id }) => {
    const API_URL = `https://swapi.dev/api/people/${id}`;
    const img = `https://starwars-visualguide.com/assets/img/characters/${id}.jpg`;

    const [pilot, setPilot] = useState([]);

    useEffect(() => {
        axios(API_URL).then(({ data }) => {
            console.log(data);
            setPilot(data);
        });
    }, [API_URL, setPilot]);

    return (
        <div key={pilot.name} className="pilot-card">
            <div className="img-container">
                <img src={img} alt={pilot.name} className="pilot-img" />
            </div>
            <div className="info-container">
                <h3>{pilot.name}</h3>
                <p>{pilot.height} cm</p>
                <p>{pilot.mass} kg</p>
                <p>{pilot.gender}</p>
            </div>
        </div>
    );
};
