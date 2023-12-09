import React from 'react';
import styled, { keyframes } from 'styled-components';

const Modal = ({ isOpen, children, close }) => {
    const slideDown = keyframes`
    from {
        transform: translateY(-50%);
    }
    to {
        transform: translateX(-50%);
    }
`;


    const Container = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 100px;
    left: 50%;
    transform: translateX(-50%);
    width: 700px;
    height: 350px;
    margin-left: 1rem;
    background-color: white;
    border: 1px solid black;
    animation: ${slideDown} 0.3s ease-out; /* Adjust the duration and easing as needed */
    z-index: 1;
    @media (max-width: 500px) {
        width: 350px;
        height: 400px;
    }

`;

    return (
        <>
            {isOpen && (
                <Background onClick={close}>
                    <Container>
                        {children}
                    </Container>
                </Background>
            )}
        </>
    )
}

export default Modal;

const Background = styled.div`
    height: 100vh;
    width: 100vw;
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    @media(min-width: 1253px) {
        display: none;
    }
`

