import React from 'react'
import '../App.css';
import HomeBanner from '../styles/home/HomeBanner';
import Section from '../components/common/Section';
import Banner from '../components/home/Banner';
import AboutUsSection from '../components/home/AboutUsSection';
import image from '../images/Medicare4-1.jpg';
import image2 from '../images/groupben.jpeg';
import styled from 'styled-components';

const HomePage = () => {

    return (
        <Container>
            <HomeBanner />
            <Section isGray={1} isOpen={true} p="We can help anyone located in AK, AZ, CA, DC, FL, ID, MT, NC, NJ, OR, PA, TX, and WA" title='Medicare' description='Medicare plans can cover physicians, hospitalization, and prescription drug coverage in one simple plan.' image={image} alt='surfer dude' >
                <List className="section">
                    <li className="section-item">Medicare advantage plans</li>
                    <li className="section-item">Medicare supplements</li>
                    <li className="section-item">Drug Plans</li>
                    <li className="section-item">Vision</li>
                    <li className="section-item">Dental</li>
                </List>
            </Section>
            <Section isRight={true} className="section-2" title='Small Business & Group Health Insurance Plans' description='Group Insurance health plans provide coverage to a group of members, usually comprised of company employees or members of an organization.' image={image2} alt="couple business"   >
                <ul>
                    <li>medical</li>
                    <li>dental</li>
                    <li>disability coverage</li>
                    <li>life insurance</li>
                    <li>complimentary identity protection</li>
                </ul>
            </Section>
            <Banner />
            <AboutUsSection />
        </Container>
    )
}

export default HomePage;

const Container = styled.div`

`

const List = styled.ul`
`

