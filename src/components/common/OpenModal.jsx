import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const OpenModal = ({ close, open }) => {
    return (
        <Container onClick={open}>
            <button onClick={close}>x</button>
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
    padding: 1rem;
    flex-wrap: wrap;
    width: 80vw;

`
const Nav = styled.ul`
    list-style: none;
`

const NavItem = styled.li`
    margin: 1rem;
    
`