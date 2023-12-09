import React from 'react'
import { styled } from 'styled-components'

const Section = ({ title, description, image, wideImage = false, children, isOpen, isOpen2, isGray, isRight, }) => {

    const Container = styled.section`
    display: flex;
    flex-direction: row;
    padding: 2rem;
    flex-wrap: wrap;
    justify-content: center;
    ${isGray && {
            backgroundColor: "#f4f4f4",
        }}
`
    const Image = styled.img`
    width: 400px;
    height: 450px;
    border-radius: 10px;
    @media (max-width: 1600px) {
        width: 375px;
        ${wideImage && {
            width: "600px",
            height: "400px",
            borderRadius: "10px"

        }}
        
    }
    @media (max-width: 900px) {
        width: 300px;
        height: 350px;
        ${wideImage && {
            width: "300px",
            height: "200px",
            borderRadius: "10px"

        }}
    }
    @media (max-width: 500px) {
        width: 200px;
        height: 250px;
        ${wideImage && {
            width: "300px",
            height: "200px",
            borderRadius: "10px"

        }}
    }
    
`
    const Image2 = styled.img`
    width: 600px;
    height: 400px;
    border-radius: 10px;
    @media (max-width: 900px) {
        width: 475px;
        ${wideImage && {
            width: "600px",
            height: "40px",
            borderRadius: "10px"

        }}
    }
    @media (max-width: 500px) {
        width: 400px;
        height: 250px;
        ${wideImage && {
            width: "600px",
            height: "40px",
            borderRadius: "10px"

        }}
    }
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
                {children}
            </TextContainer>


            {isOpen2 && (
                <ImageContainer2>
                    <Image2 src={image} />
                </ImageContainer2>
            )}

            {isRight && (
                <ImageContainer2>
                    <Image src={image} />
                </ImageContainer2>
            )}

        </Container>
    )
}

export default Section


const TextContainer = styled.div`
    flex-wrap: wrap;
    display: flex;
    width: 700px;
    @media(max-width: 900px) {
        width: 250px;
    }

    `
const ImageContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-right: 1rem;
    @media(max-width: 900px) {
        justify-content: center;
    }
    `
const ImageContainer2 = styled.div`
    display: flex;
    flex-wrap: wrap;
    @media(max-width: 900px) {
        justify-content: center;
    }
    `


const Title = styled.h1`


        `
const Description = styled.p`
    color: #ddb254;
    font-size: 1.5rem;
    `