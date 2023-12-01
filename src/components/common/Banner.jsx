import React from 'react'
import styled from 'styled-components'

const Banner = ({ image, title, description }) => {
    return (
        <Container>
            <ImageContainer>
                <Image src={image} />
            </ImageContainer>
            <TextContainer>
                <Title>{title}</Title>
                <Description>{description}</Description>
            </TextContainer>
        </Container>
    )
}

export default Banner

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f5f5f5;
    padding: 3rem;
    @media (max-width: 1100px) {
        flex-wrap: wrap;
    }
`
const ImageContainer = styled.div`
    
`
const Image = styled.img`
    max-width: 100%;
    position: relative;
`

const TextContainer = styled.div`
    margin: 1rem;
`
const Title = styled.h1`
    font-size: 3rem;
`
const Description = styled.p`
    font-size: 1.5rem;
`