import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import {
    Card,
    Img,
    Info,
    InfoP,
    PilotContainer,
    PilotP,
    Section,
    StarshipContainer,
    Title,
    TitlePilots
} from '../styles/Starship.styled';
import notFound from '../assets/images/404NotFound.png';
import { Pilots } from './Pilots';

export const Starship = () => {
    let { id } = useParams();
    const API_URL = `https://swapi.dev/api/starships/${id}/`;
    const img = `https://starwars-visualguide.com/assets/img/starships/${id}.jpg`;
    // TODO: crear JSON con la información de cada nave...
    const [starship, setStarship] = useState([]);
    const [pilots, setPilots] = useState([]);

    useEffect(() => {
        axios(API_URL).then(({ data }) => {
            setStarship(data);
            setPilots(data.pilots);
        });
        window.scrollTo(0, 0);
    }, [API_URL]);

    return (
        <StarshipContainer>
            <Card>
                <Img
                    src={img}
                    alt={starship.name}
                    onError={(data) => {
                        data.target.onerror = null;
                        data.target.src = notFound;
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
                    <InfoP>Class: {starship.starship_class}</InfoP>
                    <InfoP>Passengers: {starship.passengers}</InfoP>
                    <InfoP>Cost in credits: {starship.cost_in_credits} credits</InfoP>
                    <InfoP>Atmospheric Speed: {starship.max_atmosphering_speed}km/h</InfoP>
                    <InfoP>MGLT: {starship.MGLT}</InfoP>
                    <InfoP>Length: {starship.length}m</InfoP>
                    <InfoP>Cargo Capacity: {starship.cargo_capacity} metric tons</InfoP>
                    <InfoP>Minimum crew: {starship.crew}</InfoP>
                </Info>
                <TitlePilots>Pilots</TitlePilots>
                {/* CAMBIAR A TEXT-ALIGN CENTER si length = 1 */}
                <PilotContainer length={pilots.length}>
                    {pilots.length > 0 ? (
                        pilots.map((url) => {
                            const id = url.substring(29, url.length - 1);
                            return <Pilots id={id} />;
                        })
                    ) : (
                        <PilotP>This ship has no pilots, it is drifting...</PilotP>
                    )}
                </PilotContainer>
            </Card>
        </StarshipContainer>
    );
};
