import styled from 'styled-components';

const StarshipContainer = styled.div`
    display: flex;
    justify-content: center;
`;

const Card = styled.div`
    margin-top: 0.8rem;
    width: 800px;
`;

const Img = styled.img`
    height: auto;
    width: 100%;
    border-bottom: 3px brown solid;
    border-radius: 3px;
    margin-bottom: 1.1rem;
    box-shadow: 1px 0px 50px -7px rgba(76, 52, 173, 0.78);
`;

const Title = styled.h1`
    color: #a6a6a6;
    margin-bottom: 1.1rem;
    padding-left: 0.7rem;
`;
const Section = styled.div`
    border-radius: 2px;
    color: #a6a6a6;
    margin-bottom: 1.1rem;
    padding-left: 0.7rem;
`;
const Info = styled.div`
    border-radius: 2px;
    color: #a6a6a6;
    padding-left: 0.7rem;
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 2rem;
`;

const InfoP = styled.p`
    width: 50%;
    margin-top: 1.1rem;
`;

export { StarshipContainer, Card, Img, Title, Section, Info, InfoP };
