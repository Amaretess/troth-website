import styled from 'styled-components'


//reusable header
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
    margin-left: 5rem;
    flex-wrap: wrap;
    @media (max-width: 1100px) {
        margin: 3rem;
        margin-top: 1rem;
    }
`
const TitleContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    
    
`
const Title = styled.div`
    font-size: 4rem;

`

const Image = styled.img`
    height: 100%;
    margin: auto;
    max-width: 70vw;
    position: relative;
    object-fit: contain;
    @media (max-width: 1100px) {
        min-width: 90vw;
        max-height: 50vh;
        margin-right: 1rem;
    }
`

const ImageContainer = styled.div`
    max-height: 45vh;
    margin-bottom: 1rem;
    @media (max-width: 1100px) {
        display: flex;
        justify-content: center;
    }
`

const HeaderBanner = styled.div`
    display: flex;
    position: relative;
    justify-content: space-between;
    height: 40vh;
    @media (max-width: 1100px) {
        flex-wrap: wrap;
        height: 80vh;
    }
`

const TextContainer = styled.div`
    margin: 3rem;
`

const Tagline = styled.h2`
    color: #ddb254;
    font-size: 2.5rem;
`