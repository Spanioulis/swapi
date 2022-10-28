import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/Films.css';

export const Films = ({ id, url }) => {
    const [film, setFilm] = useState([]);
    const IMG_SRC = `https://starwars-visualguide.com/assets/img/films/${id}.jpg`;

    useEffect(() => {
        axios(url).then(({ data }) => {
            setFilm(data);
        });
    }, [url]);

    console.log(film);
    return (
        <>
            <div
                key={film.title}
                className="film-card"
                style={{ backgroundImage: `url(${IMG_SRC})` }}
            >
                <div class="title-box">
                    <h3>{film.title}</h3>
                </div>
                {/* <img src={img} alt={film.name} /> */}
                <div class="info">
                    <p>
                        <b>Episode</b>: {film.episode_id}
                    </p>
                    <p>
                        <b>Director</b>: {film.director}
                    </p>
                    <p>
                        <b>Release date</b>: {film.release_date}
                    </p>
                </div>
                <div class="color-overlay"></div>
            </div>
            <div className="opening-crawl">{film.opening_crawl}</div>
        </>
    );
};
