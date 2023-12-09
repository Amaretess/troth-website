import React, { useState } from 'react'
import { FAQ } from '../../data/FAQ'
import QuestionCard from './QuestionCard'
import styled from 'styled-components'

const DisplayQuestions = () => {

    const [activeIndex, setActiveIndex] = useState(1);

    return (
        <Container>
            {FAQ.map((question, index) => {

                const isActive = index === activeIndex;

                const onTitleClick = () => {
                    setActiveIndex(activeIndex === index ? null : index);
                    console.log(activeIndex)
                }

                const contentStyle = isActive ? { display: 'inline-block', backgroundColor: 'white' } : { display: 'none' };

                return (
                    <QuestionCard key={index} title={question.title} description={question.description} contentStyle={contentStyle} onTitleClick={onTitleClick} />)
            })}


        </Container>
    )
}

export default DisplayQuestions

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #f5f5f5;
`