import styled from "styled-components";
import { Sub, Phone } from './jumbotron';

import image from '../../images/banner1_new.png';
import { BsPhone } from "react-icons/bs";
import { RiCustomerServiceLine } from "react-icons/ri";

const HomeBanner = () => {
    return <Header>
        <Container>
            <Title>Welcome to Troth & Co</Title>
            <Slogan>HEALTHIER TOGETHER</Slogan>
            <Description>Are you ready to give your healthcare plan a check up?</Description>
            <MoreInfo>
                <Sub>
                    <BsPhone className='icon' />
                    <strong>Contact us today</strong>
                    <Phone>425-777-9999</Phone>
                </Sub>
                <Sub>
                    <RiCustomerServiceLine className='icon' />
                    <strong>We'll call you</strong>
                    <p>Request a call with one of our representatives.</p>
                </Sub>
            </MoreInfo>
        </Container>
        <ImageContainer>
            <Image src={image} />
        </ImageContainer>

    </Header>;
}

export default HomeBanner;

const Header = styled.header`
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    justify-content: center;
    @media (min-width: 10px) {
        flex-direction: row;
    }
    @media (min-width: 1400px) {
        justify-content: space-around;
    }

`
const Container = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    margin: 1rem;
    @media (max-width: 600px) {
        width: 300px;
    }
`
const MoreInfo = styled.div`
    display: flex;
    flex-direction: column;
    padding: 1rem;
    @media (min-width: 1000px) {
        display: flex;
        justify-content: center;
        flex-direction: row;
    }
`;

const ImageContainer = styled.div`
    height: 450px;
    width: 525px;
    @media (max-width: 900px) {
        height: 250px;
        width: 325px;
    }
    @media (min-width: 800px) {
        height: 500px;
        width: 600px;
    }
    @media (min-width: 1000px) {
        height: 600px;
        width: 700px;
    }
    
`

const Image = styled.img`
    width: 90%;
`

const Title = styled.h1`
    font-size: 30px;
    @media (max-width: 500px) {
        font-size: 20px
    }
`

const Slogan = styled.h2`
    font-size: 50px;
    @media (max-width: 500px) {
        font-size: 40px
    }

`

const Description = styled.p`
    font-size: 32px;
    @media (max-width: 500px) {
        font-size: 22px
    }
`