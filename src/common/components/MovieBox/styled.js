import styled from "styled-components";
import { Link } from "react-router-dom";
import { ReactComponent as star } from "../../icons/star.svg";
import noImage from "../../images/noPoster.svg";

export const MoviesListWrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;

  @media (max-width: ${({ theme }) => theme.breakpoints.large}px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
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
`;

export const MovieWrapper = styled.div`
  width: 100%;
  height: 100%;
  background: #ffffff;
  display: grid;
  grid-template-rows: auto 1fr;
  transition: 0.5s;
  box-shadow: 0px 4px 12px rgba(186, 199, 213, 1);
  border-radius: 5px;
  padding: 16px;

  &:hover {
    transform: scale(1.03);
    box-shadow: ${({ theme }) => theme.hoverShadow};
  }

  &:active {
    box-shadow: ${({ theme }) => theme.activeShadow};
    transform: scale(1.05);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMin}px) {
    grid-template-columns: auto 1fr;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileTiny}px) {
    padding: 12px;
  }
`;

export const ImageWrapper = styled.div`
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
  aspect-ratio: 2/3;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMin}px) {
    display: grid;
    grid-template-columns: auto 1fr;
    padding-right: 0px;
    width: 140px;
    height: fit-content;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileTiny}px) {
    display: grid;
    grid-template-columns: auto 1fr;
    padding-right: 0px;
    width: 130px;
    height: fit-content;
  }
`;

export const RatingWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 8px;
`;

export const Star = styled(star)`
  width: 24px;
  height: auto;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMed}px) {
    width: 20px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMin}px) {
    width: 16px;
  }
`;

export const Rate = styled.span`
  color: ${({ theme }) => theme.colors.woodsmoke};
  margin: 0 12px;
  font-weight: 600;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMin}px) {
    font-size: 13px;
    margin: 0 12px 0 10px;
  }
`;

export const Votes = styled.span`
  color: ${({ theme }) => theme.colors.waterloo};
  font-weight: 400;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMin}px) {
    font-size: 13px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileTiny}px) {
    font-size: 12px;
  }
`;

export const DescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  gap: 8px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMin}px) {
    margin: 0 0 0 8px;
    gap: 4px;
  }
`;

export const Title = styled.h2`
  font-weight: 500;
  font-size: 22px;
  line-height: 1.3;
  color: #18181b;
  margin: 16px 0 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMin}px) {
    margin: 0 0 0 8px;
    font-size: 18px;
    line-height: 1.1;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileTiny}px) {
    font-size: 16px;
  }
`;

export const GreySubtitle = styled.p`
  font-weight: 400;
  font-size: 18px;
  line-height: 150%;
  margin: 0;
  color: #7e839a;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMin}px) {
    margin: 0 0 0 8px;
    font-size: 14px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileTiny}px) {
    font-size: 12px;
  }
`;

export const TagsWraper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
`;

export const Tag = styled.div`
  padding: 4px 8px;
  font-size: 12px;
  border-radius: 5px;
  line-height: 1.4;
  font-weight: 400;
  background-color: rgb(228, 230, 240);
  text-align: center;
  color: ${({ theme }) => theme.colors.woodsmoke};
`;
