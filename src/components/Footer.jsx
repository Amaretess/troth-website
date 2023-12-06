import logo from '../images/troth_logo_yellow.png';
import styled from 'styled-components'

const Footer = () => {
    return (
        <Container>
            <Logo src={logo} alt='troth-logo' />
            <div>

            </div>

        </Container>
    )
}

export default Footer

const Container = styled.div`
    height: 30vh;
    border: 2px solid blue;
    background-color: #020066;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    bottom: 0;
    left: 0;
    right: 0;
    position: relative;

`

const Logo = styled.img`
    height: 50%;

`