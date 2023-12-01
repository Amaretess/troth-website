import React from 'react'
import Section from '../components/common/Section'
import image from '../images/image2medicare.jpeg'
import DisplayQuestions from '../components/faq/DisplayQuestions';

const FAQPage = () => {
    return (
        <>
            <Section title="Frequently Asked Questions" image={image} description="Ask us Anything" />
            <DisplayQuestions />
        </>
    )
}

export default FAQPage
