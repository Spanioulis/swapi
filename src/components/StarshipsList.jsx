import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const StarshipsList = () => {
    const API_URL = 'https://swapi.dev/api/starships/';
    const [starships, setStarships] = useState([]);
    console.log(starships);

    useEffect(() => {
        // Llamar a la API
        axios(API_URL)
            // Obtener datos
            .then(({ data }) => {
                console.log(data.results);
                setStarships(data.results);
            });
    }, []);

    return (
        <div className="starships-container">
            {starships.map((starship) => {
                return (
                    <div key={starship.model} className="starship">
                        <h3>{starship.name.toUpperCase()}</h3>
                        <p>{starship.model}</p>
                        <p>{starship.url}</p>
                    </div>
                );
            })}
        </div>
    );
};
