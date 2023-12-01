import React from 'react'
import { TESTIMONIALS } from '../../data/TESTIMONIALS'
import styled from 'styled-components'
import TestimonialCard from './TestimonialCard'

const DisplayCards = () => {
    return (
        <Container>
            {TESTIMONIALS.map((testimonial, index) => <TestimonialCard title={testimonial.title} description={testimonial.description} author={testimonial.author} affiliation={testimonial.affiliation} />)}
        </Container>
    )
}

export default DisplayCards

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    background-color: #f5f5f5;
`