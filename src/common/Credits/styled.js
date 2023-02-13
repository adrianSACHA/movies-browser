import { Link } from "react-router-dom";
import styled from "styled-components";
import picture from "../Credits/Picture.svg";

export const HeaderMoviePeople = styled.h2`
  font-weight: 600;
  font-size: 36px;
  line-height: 1.2;
  margin: 64px 0 32px 0;
  color: ${({ theme }) => theme.colors.black};

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletHorizontalMax}px) {
    margin: 21px 16px;
  }
`;

export const ContainerMoviePeople = styled.ul`
  max-width: 1368px;
  margin: auto;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(208px, 1fr));
  grid-gap: 24px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletHorizontalMax}px) {
    margin: 0 16px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    grid-template-columns: repeat(auto-fill, minmax(136px, 1fr));
    grid-gap: 16px;
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
  background: ${({ theme }) => theme.colors.white};
  display: grid;
  justify-items: center;
  grid-template-rows: auto 1fr;
  transition: 0.5s;
  box-shadow: 0px 4px 12px rgba(186, 199, 213, 1);
  border-radius: 5px;
  padding: 16px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    padding: 8px;
    height: 100%;
  }
`;

export const PersonBackground = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  border-radius: 5px;
  flex-basis: auto;
  background-image: url(${picture});
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100%;
  background-color: ${({ theme }) => theme.colors.silver};
  color: ${({ theme }) => theme.colors.white};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMin}px) {
    height: fit-content;
  }
`;

export const PersonImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 5px;
  aspect-ratio: 2/3;
`;

export const Description = styled.div`
  text-align: center;
`;

export const PersonName = styled.p`
  font-weight: 500;
  font-size: 22px;
  line-height: 1.3;
  margin: 12px 0 8px 0;
  color: ${({ theme }) => theme.colors.woodsmoke};
  text-align: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 14px;
  }
`;

export const PersonInfo = styled.span`
  font-weight: 400;
  font-size: 18px;
  line-height: 1.5;
  text-align: center;
  color: ${({ theme }) => theme.colors.waterloo};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 13px;
  }
`;
