import React from 'react'
import styled from 'styled-components'
import logo from '../../images/aboutusdoggo.png';

const AboutUsSection = () => {
    return (
        <Container>
            <LogoContainer >
                <Logo src={logo} alt="logo" />
            </LogoContainer >
            <Wrapper>
                <h1>About Us</h1>
                <Section>
                    <h2>It's About You</h2>
                    <h3>At Troth and Co, we’re committed to helping you find ways to control your medical costs and to find plans that will ensure access to quality care.</h3>
                    <p>We provide comprehensive, tailored services to customers that include innovative programs focused on wellness and prevention, disease management, and patient safety. We deliver these programs through health, life, vision, dental, stop-loss, disability, workforce wellness, and other Insurance related products and services. Our plans offer networks with thousands of doctors, healthcare providers, and hospitals.</p>
                </Section>

                <Section>
                    <h2>Our Values</h2>
                    <p>The word Troth means commitment and loyalty. As insurance brokers, we allow you to work with the best carriers in the market specifically for your needs without hidden agendas. As your needs change your plans will change again and we are prepared to support all those future changes with reliable strategies.</p>
                </Section>
                <Section>
                    <h2>Our Mission</h2>
                    <p>Our mission is simple: to connect consumers and business owners with the right coverage to meet their needs at each and every phase of their lives and businesses.</p>
                </Section>
            </Wrapper>


        </Container>
    )
}

export default AboutUsSection

const Container = styled.div`
    display: flex;
    margin: 1rem;
    justify-content: space-around;
    flex-wrap: wrap;
    
`
const LogoContainer = styled.div`
    width: 250px;
    height: 250px;


`

const Logo = styled.img`
    width: 100%;
    height: 100%;
`

const Section = styled.div`
    
`
const Wrapper = styled.div`
    width: 50vw;
`
