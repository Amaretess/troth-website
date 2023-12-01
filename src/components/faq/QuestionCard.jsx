import React from 'react'
import styled from 'styled-components'
import { CiCirclePlus } from "react-icons/ci";


const QuestionCard = ({ title, description, onTitleClick, contentStyle, index }) => {
    return (
        <Container key={index}>
            <TitleContainer onClick={() => onTitleClick(index)} >
                <Title>
                    <strong>{title}</strong>
                </Title>
                <Plus>
                    <CiCirclePlus />
                </Plus>
            </TitleContainer>
            <Description style={contentStyle} >
                <p>{description}</p>
            </Description>
        </Container>
    )
}

export default QuestionCard

const Container = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 75vw;
    min-width: 80vw;
    font-size: 1.5rem;
    padding: 1rem;
    color: #666666;
    border: 1px solid #e7e7e7;
    justify-content: space-between;
    margin: 1rem;
    background-color: ${props => props.contentStyle ? 'white' : '#f5f5f5'}

`

const Title = styled.div`
    display: flex;
    max-width: 80%;
`
const TitleContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`

const Description = styled.div`
    background-color: white;
    
`

const Plus = styled.div`
    
`