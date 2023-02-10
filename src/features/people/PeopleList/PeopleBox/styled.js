import styled from "styled-components";
import { Link } from "react-router-dom";
import noImage from "./images/profile.svg";

export const PeopleListWrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 24px;

  @media (max-width: ${({ theme }) => theme.breakpoints.large}px) {
    grid-template-columns: repeat(5, 1fr);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMin}px) {
    grid-template-columns: 1fr;
    margin: 12px auto 0;
  }
`;

export const LinkToPersonPage = styled(Link)`
  text-decoration: none;
  margin: 0;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    width: 100%;
  }
    &:hover {
        transform: scale(1.03);
        transition: 0.5s;
    }
    &:active {
        transform: scale(1.05);
        transition: 0.5s;
    }
`;
export const PersonWrapper = styled.div`
  width: 100%;
  height: 100%;
  background: #ffffff;
  display: grid;
  grid-template-rows: auto 1fr;
  
  box-shadow: 0px 4px 12px rgba(186, 199, 213, 0.5);
  border-radius: 5px;

  &:hover {
    box-shadow: ${({ theme }) => theme.hoverShadow};
  }

  &:active {
    box-shadow: ${({ theme }) => theme.activeShadow};
  }

`;

export const ImageBackground= styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  border-radius: 5px;
  flex-basis: auto;
  background-image: url(${noImage});
  background-repeat: no-repeat;
  background-position: center;
  background-size: 30%;
  background-color: ${({ theme }) => theme.colors.silver};
  color: ${({ theme }) => theme.colors.white};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMin}px) {
    height: fit-content;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: auto;
  border-radius: 5px;
  padding: 16px;
  aspect-ratio: 2/3;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
`;

export const Name = styled.p`
  margin: 0;
  font-weight: 400;
  font-size: 18px;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.waterloo};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMed}) {
    font-size: 13px;
  }
`;