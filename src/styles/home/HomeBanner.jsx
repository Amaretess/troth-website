import styled from "styled-components";
import { Sub, Phone } from './jumbotron';

import image from '../../images/banner1_new.png';
import { BsPhone } from "react-icons/bs";
import { RiCustomerServiceLine } from "react-icons/ri";

const HomeBanner = () => {
    return <Container>
        <Header>
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
        </Header>
        <ImageContainer>
            <Image src={image} />
        </ImageContainer>

    </Container>;
}

export default HomeBanner;

const Container = styled.div`
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-wrap: wrap;
    justify-content: space-around;
    @media (min-width: 10px) {
        flex-direction: row;
    }

`
const Header = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
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
    @media (max-width: 600px) {
        height: 350px;
        width: 425px;
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