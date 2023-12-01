import React from 'react'
import Section from '../components/common/Section';
import image from '../images/groupimage2.jpeg';
import ContactForm from '../components/contact/ContactForm';

const Contact = () => {
    return (
        <div>
            <Section title="Contact Us" image={image} />
            <ContactForm />
        </div>
    )
}

export default Contact
