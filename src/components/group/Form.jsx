import { useState } from 'react'
import styled from 'styled-components'

const Form = ({ onSubmit }) => {

    const [formData, setFormData] = useState({
        firstName: '',
        company: '',
        email: '',
        phoneNumber: '',
        message: ''
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData)
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value })
    }

    return (
        <FormContainer>
            <TheForm onSubmit={handleSubmit}>
                <label htmlFor="firstName" >First Name </label>
                <Input type="text" name="firstName" value={formData.firstName} onChange={handleChange} placeholder="e.g John" />

                <label htmlFor="company" >Company</label>
                <Input type="text" name="company" value={formData.company} onChange={handleChange} placeholder="e.g John n Co" />

                <label htmlFor="emailAddress" >Email Address</label>
                <Input type="text" name="email" value={formData.email} onChange={handleChange} placeholder="e.g john@icloud.com" />

                <label htmlFor="phoneNumber" >Phone Number</label>
                <Input type="text" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} placeholder="e.g (425)-123-4567" />

                <label htmlFor="message" >Message</label>
                <MessageBox type="text" name="message" value={formData.message} onChange={handleChange} placeholder="What would you like us to know?" />
                <SubmitContainer>
                    <Submit type="submit" />
                </SubmitContainer>

            </TheForm>

        </FormContainer>
    )
}

export default Form

const FormContainer = styled.div`
    display: flex;
    justify-content: center;
    width: 100vw;
    
`

const TheForm = styled.form`
    display: flex;
    flex-direction: column;
    width: 600px;
    @media (max-width: 900px) {
        width: 300px;
    }
`

const Input = styled.input`
    padding: 1rem;
    margin: 1rem;
`

const MessageBox = styled.textarea`
    padding: 1rem;
    margin: 1rem;

`
const Submit = styled.input`
    padding: 1.5rem;
`
const SubmitContainer = styled.div`
    display: flex;
    justify-content: center;
`