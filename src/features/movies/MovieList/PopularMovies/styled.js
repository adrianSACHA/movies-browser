import styled from "styled-components";
import { Link } from "react-router-dom";

export const MoviesListWrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;

  @media (max-width: ${({ theme }) => theme.breakpoints.large}px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMin}px) {
    grid-template-columns: 1fr;
    margin: 12px auto 0;
  }
`;

export const LinkToMoviePage = styled(Link)`
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

export const MovieWrapper = styled.div`
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

export const Image = styled.img`
  width: 100%;
  height: auto;
  border-radius: 5px;
  padding: 16px;
`;
