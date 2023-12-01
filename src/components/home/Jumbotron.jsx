import { Container, Header, ImageContainer, MoreInfo, SubHeader, SubHeader2, TextContainer, Img, Sub, Phone } from '../../styles/home/jumbotron';
import jumboimage from '../../images/banner1_new.png';
import { BsPhone } from "react-icons/bs";
import { RiCustomerServiceLine } from 'react-icons/ri';


const Jumbotron = () => {
    return (
        <Container >
            <TextContainer>
                <SubHeader>welcome to troth & co</SubHeader>
                <Header>healthier together</Header>
                <SubHeader2>Are you ready to give your healthcare plan a check up?</SubHeader2>
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
            </TextContainer>
            <ImageContainer>
                <Img src={jumboimage} alt="jumbotron" />
            </ImageContainer>

        </Container>
    )
}

export default Jumbotron;

