import React from 'react'
import { styled } from 'styled-components'

const Section = ({ title, description, image, data, image2, isOpen, isOpen2, isGray }) => {

    const Container = styled.section`
display: flex;
justify-content: center;
align-items: center;
width: 100vw;
@media (max-width: 900px) {
    flex-wrap: wrap;
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
                {data?.map((item) => {
                    return (
                        <div className='section'>
                            <ul className="section-list">
                                <li className='section-item' >{item}</li>
                            </ul>
                        </div>
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
            justify-content: flex-start;
            flex-wrap: wrap;
            width: 100%;
        }
`
const ImageContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
    @media (min-width: 900px) {
        width: 70vw;
    }
`

const Image = styled.img`
    width: 350px;
    height: 500px;
    @media (max-width: 900px) {
        width: 500px;
    }
    border-radius: 10px;
`

const Title = styled.h1`
    

`
const Description = styled.p`
    color: #ddb254;
    font-size: 2rem;
`