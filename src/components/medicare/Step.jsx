import React from 'react'
import { Button } from '../common/Button'
import styled from 'styled-components'
import '../../App.css';

const Step = ({ image, title, description, moreinfo, button }) => {
    return (
        <Container>
            <ImageContainer>
                <Image src={image} />
            </ImageContainer>
            <div>
                <h1>{title}</h1>
                <p>{description}</p>
                <i>{moreinfo}</i>
            </div>
            <ButtonContainer >
                <Button>{button}</Button>
            </ButtonContainer>
        </Container>
    )
}

export default Step

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    width: 90vw;
    margin: 1rem;
    margin-top: 0;
    
`
const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    font-size: 2rem;
    @media (min-width: 900px) {
        display: none;
    }
`

const ImageContainer = styled.div`
    width: 100%;
    height: 40%;
`

const Image = styled.img`
    width: 100%;
    max-height: 75%;
`