import React from 'react'
import { Button } from '../common/Button'
import styled from 'styled-components'

const DisplayButtons = () => {
    return (
        <Container>
            <Button>Scope of Appointment Form</Button>
            <Button>Schedule an Appointment</Button>
            <Button>Create Your Account</Button>
        </Container>
    )
}

export default DisplayButtons

const Container = styled.div`
    display: flex;
    justify-content: space-evenly;
    @media (max-width: 900px) {
        display: none;
    }
`