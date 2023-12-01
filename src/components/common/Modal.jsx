import React from 'react'
import styled from 'styled-components'

const Modal = ({ isOpen, children }) => {
    return (
        <>
            {isOpen && (
                <Container>
                    {children}
                </Container>
            )}
        </>
    )
}

export default Modal

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`