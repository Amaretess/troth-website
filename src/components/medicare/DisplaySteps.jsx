import React from 'react'
import image1 from '../../images/image1medicare.jpeg';
import image2 from '../../images/image2medicare.jpeg';
import image3 from '../../images/image3medicare.jpeg';
import Step from './Step';
import styled from 'styled-components';

const DisplaySteps = () => {
    return (
        <Container>
            <Step image={image1} title="Step 1: Get Started" description="There is never a cost associated with working with a Medicare specialist. Let us help you find the right fit and the perfect coverage. Compete the Scope of Appointment form before scheduling time with a Troth & Co specialist." moreinfo="*Scope of Appointment form required prior to all discussion concerning Medicare coverage. Check all boxes for any item you wish to discuss." button="Scope of Appointment Form" />
            <Step image={image2} title="Step 2: Schedule an appointment" description="Let us guide you through your options. Schedule an appointment to talk with us today." moreinfo="*For your safety and convenience, all appointments are held online through Zoom or via phone." button="Schedule Appointment" />
            <Step image={image3} title="Step 3: Tell Us About You" description="Have an upcoming appointment with a Troth & Co specialist? Create an account on My Guided Medicare. This allows you to provide a list of your current providers and any medications, while keeping your personal health information safe, and allowing us to provide you with the best possible options" button="Create Your Account" />
        </Container>
    )
}

export default DisplaySteps;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 1rem;
    @media (min-width: 900px) {
        flex-direction: row;
        justify-content: center;
        align-items: flex-start;
    }
`