import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const OpenModal = ({ close, open }) => {
    return (
        <Container onClick={open}>
            <CloseModal onClick={close}>x</CloseModal>
            <Nav>
                <NavItem >
                    <NavLink onClick={close} to="/" >Home</NavLink>
                </NavItem>
                <NavItem >
                    <NavLink className="modal-nav-item" onClick={close} to="/medicare" >Medicare</NavLink>
                </NavItem>
                <NavItem >
                    <NavLink className="modal-nav-item" onClick={close} to="/group" >Group Benefits</NavLink>
                </NavItem>
                <NavItem >
                    <NavLink className="modal-nav-item" onClick={close} to="/faq" >FAQ</NavLink>
                </NavItem>
                <NavItem >
                    <NavLink className="modal-nav-item" onClick={close} to="/testimonials" >Testimonials</NavLink>
                </NavItem>
                <NavItem >
                    <NavLink className="modal-nav-item" onClick={close} to="/blog" >Blog</NavLink>
                </NavItem>
                <NavItem >
                    <NavLink className="modal-nav-item" onClick={close} to="/contact" >Contact</NavLink>
                </NavItem>
            </Nav>
        </Container>
    )
}

export default OpenModal


const Container = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap;

`
const CloseModal = styled.button`
    align-self: flex-start;
    margin-top: 1rem;
`

const Nav = styled.ul`
    list-style: none;
    width: 80%;
`

const NavItem = styled.li`
    margin: 1.3rem;
    border-bottom: 1px solid #f7f7f7;
    font-weight: bold;
    
`