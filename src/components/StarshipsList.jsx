import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../styles/StarshipList.css';
import { computeHeadingLevel } from '@testing-library/react';

export const StarshipsList = () => {
    const API_URL = 'https://swapi.dev/api/starships/';
    const [starships, setStarships] = useState([]);
    let id = 17;

    useEffect(() => {
        // Llamar a la API
        axios(API_URL)
            // Obtener datos
            .then(({ data }) => {
                // console.log(data.results);
                setStarships(data.results);
            });
    }, []);

    return (
        <div className="starships-container">
            {starships.map((starship) => {
                const id = starship.url.substring(32, starship.url.length);

                return (
                    <Link
                        to={{
                            pathname: `/starships/${id}`
                        }}
                        key={starship.model}
                        className="starship"
                        id={starship.url}
                    >
                        <h3>{starship.name.toUpperCase()}</h3>
                        <p>{starship.model}</p>
                        {/* {children} */}
                    </Link>
                );
            })}
        </div>
    );
};
