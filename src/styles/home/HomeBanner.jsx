import styled from "styled-components";
import image from '../../images/banner1_new.png';


const HomeBanner = () => {
    return (<Header>
        <Container>
            <Title>Welcome to Troth & Co</Title>
            <Slogan>HEALTHIER TOGETHER</Slogan>
            <Description>Are you ready to give your healthcare plan a check up?</Description>
            <Description>Are you ready to give your healthcare plan a check up?</Description>

        </Container>
        <Image src={image} />
    </Header>);
}

export default HomeBanner;

const Header = styled.header`
    height: auto;
    width: 100vw;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    margin: 10px 0;

`
const Container = styled.div`
    height: 550px;
    width: 550px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
`

const Image = styled.img`
    height: 450px;
    width: 450px;
`

const Title = styled.h1`
    font-size: 30px;
`

const Slogan = styled.h2`
    font-size: 50px;

`

const Description = styled.p`
        font-size: 32px;
`