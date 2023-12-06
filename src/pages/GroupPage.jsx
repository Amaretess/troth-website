import React from 'react'
import Header from '../components/common/Header';
import image from '../images/groupheader.jpeg';
import Section from '../components/common/Section';
import image1 from '../images/groupimage1.jpeg';
import image2 from '../images/groupimage2.jpeg';
import image3 from '../images/groupimage3.jpeg';
import styled from 'styled-components';
import { Button } from '../components/common/Button';
import GroupForm from '../components/group/GroupForm';


const GroupPage = () => {
    return (
        <Container>
            <Header title="Small Business Health Insurance Plans and Group Benefits" subtitle="It’s about you and your needs – We empower you to find the best plan for your business at every stage." image={image} >
                <ul>
                    <li>Medical</li>
                    <li>Dental</li>
                    <li>Vision</li>
                    <li>Disability Coverage</li>
                    <li>Life Insurance</li>
                    <li>Complimentary Identity Protection</li>
                </ul>
            </Header>
            <SectionContainer>
                <Section title="How does group insurance work?" description="Coverage through a small business or group health insurance plan can be more affordable than buying coverage by yourself. Here’s what you need to know:" isOpen="true" image={image1}>
                    <ul>
                        <li>Generally, coverage is guaranteed</li>
                        <li>You must have at least one employee to qualify</li>
                        <li>You must contribute toward employee premiums</li>
                        <li>You can shop for coverage or replace an existing plan any time of the year</li>
                    </ul>
                </Section>
                <Section title="Don’t let small business health insurance confuse you! We can help." description="We advocate for you – If you need help dealing with your insurance company for claims or billing, we can help." isOpen2="true" image={image2} >
                    <p>It’s about you and your needs – We empower you to find the best plan for your business.</p>
                </Section>
            </SectionContainer >

            <Section title="Ready to get started with a group plan? " description="Hassel Free! Let us shop for you, and get a no-obligation, comparison quote from the top carriers." image={image3} isOpen="true">
                <Steps>
                    <Step><strong>Step 1:</strong> Download the Group Consensus Form, complete and save to your computer.</Step>
                    <Button>Census Form</Button>
                    <Step><strong>Step 2:</strong> Provide your contact information in the form below</Step>
                    <Step><strong>Step 3:</strong> Attach the Group Consensus Form to your inquiry before selecting “Send Message”</Step>
                    <Step><strong>Step 4:</strong> A Troth & Co. specialist will be in contact to set up time for a complimentary review of your benefit options.</Step>
                </Steps>
            </Section>

            <GroupForm />
        </Container >
    )
}

export default GroupPage

const Container = styled.div`
    border: 2px solid black;
`

const SectionContainer = styled.div`
    background-color: #f4f4f4;
`

const Steps = styled.ul`
    
`

const Step = styled.li`
`
