import { styled } from "styled-components";

export const LogoContainer = styled.div`
  margin: 1rem;
`;

export const Logo = styled.img`
  margin-left: 5rem;
  height: 70px;
  @media (max-width: 1253px) {
    height: 60px;
  }
`;
export const Nav = styled.ul`
  display: flex;
  margin-right: 8rem;
  align-items: center;
  @media (max-width: 1253px) {
    display: none;
  }
`;
export const NavItem = styled.li`
  margin: 1rem;
  list-style: none;
  font-size: 18px;
  font-weight: bold;
  @media (max-width: 1173px) {
    font-size: 20px;
    margin: 0.5rem;
  }
`;

export const Button = styled.button`
  padding: 0.5rem;
  border-radius: 50px;
  color: #ddb254;
  background-color: white;
  border: 2px solid #ddb254;
  font-weight: bold;
  font-size: 1rem;
  width: 150px;
  font-family: "Playfair Display";
  &:hover {
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05), 0 2px 4px rgba(0, 0, 0, 0.05),
      0 4px 8px rgba(0, 0, 0, 0.05), 0 8px 16px rgba(0, 0, 0, 0.05),
      0 16px 32px rgba(0, 0, 0, 0.05), 0 32px 64px rgba(0, 0, 0, 0.05);
  }
`;
