import React from 'react'
import styled from 'styled-components'
import { BsPhone } from 'react-icons/bs'
import { RiCustomerServiceLine } from 'react-icons/ri'

const ContactForm = () => {
    return (
        <Container>
            <Form>
                <input type="text" placeholder="Name" name="firstName" />
                <input type="email" placeholder="Email Address" name="email" />
                <textarea placeholder="message" />
            </Form>
            <Contact>
                <RiCustomerServiceLine className='icon2' />
                <strong>We'll call you</strong>
                <p>Request a call with one of our representatives.</p>
            </Contact>
            <Contact>
                <BsPhone className='icon2' />
                <strong>Contact us Today</strong>
                <p></p>
            </Contact>

        </Container>
    )
}

export default ContactForm

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
`
const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 60%;
`

const Contact = styled.div`
    
`