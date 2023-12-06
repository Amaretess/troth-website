import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
  width: 100vw;
  @media (max-width: 1250px) {
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
  }
`;

export const TextContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  flex-wrap: wrap;
  width: 100vw;
  @media (max-width: 1250px) {
    flex-wrap: wrap;
  }
`;

export const ImageContainer = styled.div`
  height: 20%;
`;

export const Img = styled.img`
  height: 60vh;
  @media (max-width: 900px) {
    height: 40vh;
  }
`;

export const SubHeader = styled.p`
  font-style: italic;
  text-transform: capitalize;
  font-size: 40px;
  @media (max-width: 1190px) {
  }
  margin: 1px;
`;

export const Header = styled.h1`
  text-transform: uppercase;
  font-size: 5rem;
  width: 25vw;
  color: #020066;
  margin: 1px;
  font-weight: bold;
`;

export const SubHeader2 = styled.p`
  text-transform: capitalize;
  font-weight: bold;
  font-size: 2rem;
  width: 30vw;
  @media (max-width: 1190px) {
    display: flex;
    text-align: center;
    width: 80vw;
  }
`;

export const MoreInfo = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  @media (min-width: 1000px) {
    display: flex;
    justify-content: space-evenly;
    flex-direction: row;
  }
`;

export const Sub = styled.p`
  font-size: 1.5rem;
  margin: 1rem;
`;

export const Phone = styled.p`
  color: #ddb254;
`;
