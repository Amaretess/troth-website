import { NavLink } from "react-router-dom";
import { Nav, NavItem, Logo, LogoContainer, Button } from "../styles/components/mainNav";
import logo from '../images/Troth-Co_Logo-V_Navy.png';
import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import styled from "styled-components";
import OpenModal from "./common/OpenModal";
import Modal from "./common/Modal";



const MainNavigation = () => {

    const [isOpen, setIsOpen] = useState(false);

    const open = () => setIsOpen(true);
    const close = () => setIsOpen(false);

    return (
        <Container>
            <LogoContainer>
                <NavLink to="/" >
                    <Logo src={logo} />
                </NavLink>
            </LogoContainer>
            <ToggleNav onClick={open}>
                <AiOutlineMenu />
            </ToggleNav>
            <Modal isOpen={isOpen} close={close}>
                <OpenModal close={close} open={open} />
            </Modal>
            <Nav className="navbar">
                <NavItem >
                    <NavLink className="nav-link" to="/" >Home</NavLink>
                </NavItem>
                <NavItem >
                    <NavLink className="nav-link" to="/medicare" >Medicare</NavLink>
                </NavItem>
                <NavItem >
                    <NavLink className="nav-link" to="/group" >Group</NavLink>
                </NavItem>
                <NavItem >
                    <NavLink className="nav-link" to="/faq">Faq</NavLink>
                </NavItem>
                <NavItem >
                    <NavLink className="nav-link" to="/testimonials">Testimonials</NavLink>
                </NavItem>
                <NavItem >
                    <NavLink className="nav-link" to="blog">Blog</NavLink>
                </NavItem>
                <NavItem >
                    <NavLink className="nav-link" to="contact">Contact</NavLink>
                </NavItem>
                <NavItem >
                    <Button >425-777-9999</Button>
                </NavItem>
            </Nav>
        </Container>
    )
}

export default MainNavigation

export const Container = styled.div`
    display: flex;
    top: 0;
    background-color: white;
    justify-content: space-between;
    flex-wrap: wrap;
    align-items: center;
    border-bottom: 1px solid #f2f2f2;
    @media (max-width: 500px) {
        justify-content: center;
    }
`;

const ToggleNav = styled.button`
    display: flex;
    padding: .5rem;
    margin-right: 2rem;
    @media (min-width: 1253px) {
    display: none;
    }


`