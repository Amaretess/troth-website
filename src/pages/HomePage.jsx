import React from 'react'
import '../App.css';
import Jumbotron from '../components/home/Jumbotron';
import Section from '../components/common/Section';
import Banner from '../components/home/Banner';
import AboutUsSection from '../components/home/AboutUsSection';
import image from '../images/Medicare4-1.jpg';
import image2 from '../images/groupben.jpeg';

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
        <>
            <Jumbotron />
            <Section isGray="true" isOpen="true" data={data} p="We can help anyone located in AK, AZ, CA, DC, FL, ID, MT, NC, NJ, OR, PA, TX, and WA" title='Medicare' description='Medicare plans can cover physicians, hospitalization, and prescription drug coverage in one simple plan.' image={image} alt='surfer dude' backgroundColor="gray">
            </Section>
            <Section isOpen2="true" data={data2} className="section-2" title='Small Business & Group Health Insurance Plans' description='Group Insurance health plans provide coverage to a group of members, usually comprised of company employees or members of an organization.' image2={image2} alt="couple business" p="test"   >

            </Section>
            <Banner />
            <AboutUsSection />
        </>
    )
}

export default HomePage;

