import { styled } from "styled-components"

export const Button = ({ children }) => {
    return (
        <StyledButton>
            {children}
        </StyledButton>
    )
}

const StyledButton = styled.button`
    padding: .7rem;
    border-radius: 50px;
    color: white;
    background-color: #ddb254;
    border: 2px solid #ddb254;
    font-weight: bold;
    font-size: 1rem;
    font-family: "Playfair Display";
    margin: 1rem;
    margin-left: 0rem;
    &:hover {
        box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05), 0 2px 4px rgba(0, 0, 0, 0.05),
        0 4px 8px rgba(0, 0, 0, 0.05), 0 8px 16px rgba(0, 0, 0, 0.05),
        0 16px 32px rgba(0, 0, 0, 0.05), 0 32px 64px rgba(0, 0, 0, 0.05);
        color: #ddb254;
        background-color: white;
    }
`