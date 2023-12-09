
import React from 'react';
import { Button } from '../common/Button';
import styled from 'styled-components';

const Banner = () => {
    return (
        <Container>
            <Title>What People are Saying About Troth & Co</Title>
            <Subtitle>Our clients love working with us. Check out our reviews.</Subtitle>
            <Button>Know More</Button>
        </Container>
    )
}

export default Banner;


const Container = styled.div`
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    align-items: center;
    background-color: #f5f5f5;
    line-height: 15px;
    padding: 1rem;
    @media (max-width: 725px) {
        flex-wrap: wrap;
        line-height: 40px;
        text-align: center;
    }
    
    
`

const Title = styled.h1`
    font-size: 2.5rem;
    flex-wrap: wrap;
    @media (max-width: 500px) {
        flex-wrap: wrap;
        width: 250px;
    }

`
const Subtitle = styled.p`
    font-size: 1.5rem;
    @media (max-width: 650px) {
        display: none;
    }

`