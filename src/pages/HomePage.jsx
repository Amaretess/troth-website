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
    const data = ["Medicare advantage", "Medicare Supplements", "Drug Plans", "Vision", "Dental"]

    const data2 = [
        'medical',
        'dental',
        'disablity coverage',
        'life insurance',
        'complimentary identity protection'
    ]

    return (
        <Container>
            <HomeBanner />
            <Section isGray="true" isOpen="true" data={data} p="We can help anyone located in AK, AZ, CA, DC, FL, ID, MT, NC, NJ, OR, PA, TX, and WA" title='Medicare' description='Medicare plans can cover physicians, hospitalization, and prescription drug coverage in one simple plan.' image={image} alt='surfer dude' backgroundColor="gray">
                <ul className="section">
                    <li className="section-item">Medicare advantage plans</li>
                    <li className="section-item">Medicare supplements</li>
                    <li className="section-item">Drug Plans</li>
                    <li className="section-item">Vision</li>
                    <li className="section-item">Dental</li>
                </ul>
            </Section>
            <Section isOpen2="true" data={data2} className="section-2" title='Small Business & Group Health Insurance Plans' description='Group Insurance health plans provide coverage to a group of members, usually comprised of company employees or members of an organization.' image2={image2} alt="couple business"   >

            </Section>
            <Banner />
            <AboutUsSection />
        </Container>
    )
}

export default HomePage;

const Container = styled.div`
    border: 2px solid black;

`

