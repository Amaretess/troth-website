import React from 'react'
import image from '../images/groupimage3.jpeg';
import Section from '../components/common/Section';
import DisplayCards from '../components/testimonials/DisplayCards';

const TestimonialsPage = () => {
    return (
        <>
            <Section image={image} title='Testimonials' />
            <DisplayCards />
        </>
    )
}

export default TestimonialsPage
