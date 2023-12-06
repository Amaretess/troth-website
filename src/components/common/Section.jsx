import React from 'react'
import { styled } from 'styled-components'

const Section = ({ title, description, image, data, image2, isOpen, isOpen2, isGray }) => {

    const Container = styled.section`
    display: flex;
    border: 2px solid black;
    @media (max-width: 900px) {
        flex-wrap: wrap;
    }
    @media (min-width: 900px) {
        
    }
    ${isGray && {
            backgroundColor: "#f4f4f4",
        }}
`

    return (
        <Container>

            {isOpen && (
                <ImageContainer>
                    <Image src={image} />
                </ImageContainer>
            )}

            <TextContainer>
                <Title>{title} </Title>
                <Description>{description}</Description>
                {data?.map(item => {
                    return (
                        <ul>
                            <li>{item}</li>
                        </ul>
                    )
                })}
            </TextContainer>


            {isOpen2 && (
                <ImageContainer>
                    <Image src={image2} />
                </ImageContainer>
            )}
        </Container>
    )
}

export default Section


const TextContainer = styled.div`
        flex-wrap: wrap;
        display: flex;
        @media (min-width: 900px) {
        }
`
const ImageContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    margin: 1rem;
    @media (max-width: 900px) {
        justify-content: center;
    }
`

const Image = styled.img`
    width: 400px;
    height: 450px;
    @media (max-width: 900px) {
        width: 375px;
    }
    border-radius: 10px;
`

const Title = styled.h1`
    

`
const Description = styled.p`
    color: #ddb254;
    font-size: 1.5rem;
`