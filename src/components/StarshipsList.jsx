import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../styles/StarshipList.css';

export const StarshipsList = () => {
    let API_URL = 'https://swapi.dev/api/starships/';
    // const API_URL = 'https://swapi.dev/api/starships/?page=2';

    const [starships, setStarships] = useState([]);
    const [url, setURL] = useState(API_URL);
    const [page, setPage] = useState(1);

    const handleNext = (event) => {
        event.preventDefault();
        setPage(page + 1);
        setURL(`https://swapi.dev/api/starships/?page=${page + 1}`);
    };
    const handlePrev = (event) => {
        event.preventDefault();
        setPage(page - 1);
        setURL(`https://swapi.dev/api/starships/?page=${page - 1}`);
    };

    useEffect(() => {
        // Llamar a la API
        axios(url)
            // Obtener datos
            .then(({ data }) => {
                // console.log(data.results);
                setStarships(data.results);
            });
    }, [url]);

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

            <div className="btn-container">
                {/* DISSABLED */}
                {page > 1 ? (
                    <button className="btn" onClick={handlePrev}>
                        Prev
                    </button>
                ) : (
                    <button className="btn" disabled>
                        Prev
                    </button>
                )}
                {page < 4 ? (
                    <button className="btn" onClick={handleNext}>
                        Next
                    </button>
                ) : (
                    <button className="btn" disabled>
                        Next
                    </button>
                )}
            </div>
        </div>
    );
};
