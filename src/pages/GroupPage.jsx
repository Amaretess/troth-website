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
            <Header title="Small Business Health Insurance Plans and Group Benefits" subtitle="It’s about you and your needs – We empower you to find the best plan for your business at every stage." image={image}>
                <List>
                    <ListItem>Medical</ListItem>
                    <ListItem>Dental</ListItem>
                    <ListItem>Vision</ListItem>
                    <ListItem>Disability Coverage</ListItem>
                    <ListItem>Life Insurance</ListItem>
                    <ListItem>Complimentary Identity Protection</ListItem>
                </List>
            </Header>
            <SectionContainer>
                <Section title="How does group insurance work?" description="Coverage through a small business or group health insurance plan can be more affordable than buying coverage by yourself. Here’s what you need to know:" image={image1} wideImage={true} isOpen={true}>
                    <ul>
                        <li>Generally, coverage is guaranteed</li>
                        <li>You must have at least one employee to qualify</li>
                        <li>You must contribute toward employee premiums</li>
                        <li>You can shop for coverage or replace an existing plan any time of the year</li>
                    </ul>
                </Section>
                <Section title="Don’t let small business health insurance confuse you! We can help." description="We advocate for you – If you need help dealing with your insurance company for claims or billing, we can help." image={image2} isRight={true} wideImage={true}>
                    <p>It’s about you and your needs – We empower you to find the best plan for your business.</p>
                </Section>
            </SectionContainer >
            <Section title="Ready to get started with a group plan? " description="Hassel Free! Let us shop for you, and get a no-obligation, comparison quote from the top carriers." isOpen={true} image={image3} wideImage={true}>
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

const List = styled.ul`
    list-style: none;
    justify-content: center;
    display:flex;
    flex-wrap: wrap;
    @media (max-width: 880px) {
        width: 80%;
    }
    @media (max-width: 680px) {
        width: 90%;
    }

`
const ListItem = styled.li`
    margin: 1rem;
`