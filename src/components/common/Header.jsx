import styled from 'styled-components';


const Header = ({ title, subtitle, tagline, image, children }) => {
    return (
        <Container>
            <HeaderBanner>
                <TitleContainer>
                    <Tagline>{tagline}</Tagline>
                    <Title>{title}</Title>
                </TitleContainer>
                <ImageContainer>
                    <Image src={image} />
                </ImageContainer>
            </HeaderBanner>
            <TextContainer>
                <h2>{subtitle}</h2>
                {children}
            </TextContainer>
        </Container>
    )
}

export default Header

const Container = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    width: 100vw;

`
const TitleContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-self: flex-start;
    
    
`
const Title = styled.div`
    font-size: 2rem;

`

const Image = styled.img`
    width: 100%;
`

const ImageContainer = styled.div`
    width: 400px;
`

const HeaderBanner = styled.div`
    display: flex;
    justify-content: space-between;
    @media (max-width: 1100px) {
        flex-wrap: wrap;
    }
    @media (min-width: 500px) {
        justify-content: space-between;
    }
`

const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Tagline = styled.h2`
    color: #ddb254;
    font-size: 2.5rem;
`