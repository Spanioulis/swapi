import React, { useEffect, useState } from 'react';
import '../styles/Pilots.css';
import axios from 'axios';
// import { useParams } from 'react-router-dom';

export const Pilots = ({ id }) => {
    const API_URL = `https://swapi.dev/api/people/${id}`;
    const IMG_SRC = `https://starwars-visualguide.com/assets/img/characters/${id}.jpg`;
    const [pilot, setPilot] = useState([]);
    console.log(IMG_SRC);

    useEffect(() => {
        axios(API_URL).then(({ data }) => {
            // console.log(data);
            setPilot(data);
        });
    }, [API_URL, setPilot]);

    console.log(pilot);

    return (
        <div key={pilot.name} className="pilot-card" style={{ backgroundImage: `url(${IMG_SRC})` }}>
            <div class="title-box">
                <h3>{pilot.name}</h3>
            </div>
            <div class="info">
                <p>
                    <b>Height</b>: {pilot.height} cm
                </p>
                <p>
                    <b>Weight</b>: {pilot.mass} kg
                </p>
                <p>
                    <b>Birth Year</b>: {pilot.birth_year}
                </p>
                <p>
                    <b>Gender</b>: {pilot.gender}
                </p>
            </div>
            <div class="color-overlay"></div>
        </div>
    );
};
