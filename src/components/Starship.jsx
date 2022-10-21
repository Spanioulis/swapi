import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import {
    Card,
    Img,
    Info,
    InfoP,
    Section,
    StarshipContainer,
    Title
} from '../styles/Starship.styled';
import notFound from '../assets/images/404NotFound.png';

export const Starship = () => {
    let { id } = useParams();
    // console.log('Props params: ', idStarship);
    // console.log('Props params: ', param);
    // const API_URL = `https://swapi.dev/api/starships/17/`;
    const API_URL = `https://swapi.dev/api/starships/${id}/`;
    const img = `https://starwars-visualguide.com/assets/img/starships/${id}.jpg`;
    // console.log(img);
    const [starship, setStarship] = useState([]);
    // console.log('🚀 ~ starship', starship);

    useEffect(() => {
        // Llamar a la API
        axios(API_URL)
            // Obtener datos
            .then(({ data }) => {
                // console.log(data);
                setStarship(data);
            });
    }, [API_URL]);

    return (
        <StarshipContainer className="container">
            <Card className="card">
                <Img
                    src={img}
                    alt={starship.name}
                    onError={(data) => {
                        data.target.onerror = null;
                        data.target.src = notFound;
                        // data.target.src =
                        // 'https://starwars-visualguide.com/assets/img/starships/9.jpg';
                    }}
                />
                <Title>{starship.name}</Title>
                <Section>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum atque iure
                    delectus neque. Debitis corrupti autem voluptate dolorem rerum aperiam velit
                    distinctio libero illum quos fugit placeat vel, tempora recusandae dignissimos
                    quam eius tenetur! Incidunt reprehenderit voluptatem hic accusamus fuga?
                </Section>
                <Info>
                    <InfoP>Model: {starship.model}</InfoP>
                    <InfoP>Manufacturer: {starship.manufacturer}</InfoP>
                    <InfoP>Cost in credits: {starship.cost_in_credits}</InfoP>
                    <InfoP>Length: {starship.length}m</InfoP>
                    <InfoP>Atmospheric Speed: {starship.max_atmosphering_speed}mph</InfoP>
                    <InfoP>Crew: {starship.crew}</InfoP>
                </Info>
                <Info></Info>
            </Card>
        </StarshipContainer>
    );
};
