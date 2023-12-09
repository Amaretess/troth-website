import React from 'react'
import Form from './Form'
import styled from 'styled-components';


const GroupForm = () => {

    const handleSubmit = (formData) => {
        console.log('data submitted!', formData);
    }

    return (
        <Container>
            <Title>
                <h1>Get Started with Group Plan</h1>
                <p>Complete the form below and upload the Filled Census Form </p>
            </Title>
            <Form onSubmit={handleSubmit} />
        </Container>

    )
}

export default GroupForm

const Container = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const Title = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`