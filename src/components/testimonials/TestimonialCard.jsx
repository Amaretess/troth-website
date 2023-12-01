import React from 'react'
import styled from 'styled-components'

const TestimonialCard = ({ title, author, description, affiliation }) => {
    return (
        <Container>
            <Title>{title}</Title>
            <p>{description}</p>
            <br />
            <p>
                <strong>{author}</strong>
            </p>
            <i>{affiliation}</i>
        </Container>
    )
}

export default TestimonialCard

const Container = styled.div`
    height: 100%;
    flex-wrap: wrap;
    width: 20%;
    display: flex;
    background-color: white;
    padding: 2rem;
    margin: 1rem;
    flex-direction: column;
    align-items: flex-start;
    @media (max-width: 900px) {
        width: 80%;
    }

`

const Title = styled.h1`
    margin-top: .5rem;
`