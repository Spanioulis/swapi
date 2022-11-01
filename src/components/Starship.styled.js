import styled from 'styled-components';

const StarshipContainer = styled.div`
    display: flex;
    justify-content: center;
`;

const Card = styled.div`
    margin-top: 0.8rem;
    width: 700px;

    @media (max-width: 992px) {
        margin-top: -1rem;
        width: 600px;
    }
    @media (max-width: 576px) {
        width: 470px;
    }
`;

const Img = styled.img`
    border-bottom: 3px brown solid;
    border-radius: 3px;
    box-shadow: 0px -5px 30px -7px rgba(76, 52, 173, 0.78);
    height: auto;
    margin-bottom: 1.1rem;
    width: 100%;

    @media (max-width: 992px) {
        margin: 2rem 0 0.8rem 0;
    }
    @media (max-width: 576px) {
        margin: 2rem 0 0.7rem 0;
    }
`;

const Title = styled.h1`
    color: #a6a6a6;
    margin-bottom: 1.1rem;
    padding-left: 0.7rem;

    @media (max-width: 576px) {
        font-size: 1.4rem;
    }
`;
const Section = styled.div`
    border-radius: 2px;
    color: #a6a6a6;
    margin-bottom: 1.1rem;
    padding-left: 0.7rem;

    @media (max-width: 576px) {
        font-size: 0.9rem;
    }
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

    @media (max-width: 576px) {
        font-size: 0.7rem;
    }
`;

const TitlePilots = styled.h1`
    color: ${(props) => props.color};
    text-align: center;
    box-shadow: 0px 10px 20px -15px ${(props) => props.color};

    @media (max-width: 576px) {
        font-size: 1.5rem;
    }
`;

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 2rem;
    padding: 1.5rem;
`;

const PilotP = styled.p`
    color: goldenrod;
    margin-top: 0.4rem;
    padding-left: 1.5rem;

    @media (max-width: 576px) {
        font-size: 0.8rem;
    }
`;

export {
    StarshipContainer,
    Card,
    Img,
    Title,
    Section,
    Info,
    InfoP,
    TitlePilots,
    PilotP,
    Container
};
