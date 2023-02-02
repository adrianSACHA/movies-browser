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
`;

export const MovieWrapper = styled.div`
  width: 100%;
  height: 100%;
  background: #ffffff;
  display: grid;
  grid-template-rows: auto 1fr;
  transition: 0.5s;
  box-shadow: 0px 4px 12px rgba(186, 199, 213, 0.5);
  border-radius: 5px;

  &:hover {
    transform: scale(1.03);
    box-shadow: ${({ theme }) => theme.hoverShadow};
  }

  &:active {
    box-shadow: ${({ theme }) => theme.activeShadow};
    transform: scale(1.05);
  }
`;

export const Image = styled.img`
  width: 100%;
  height: auto;
  border-radius: 5px;
  padding: 16px;
`;
export const RatingWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: auto;
  margin-left: 16px;
  margin-bottom: 16px;
`;

export const Star = styled(star)`
  width: 24px;
  height: auto;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMed}) {
    width: 20px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMin}) {
    width: 16px;
  }
`;

export const Rate = styled.span`
  color: ${({ theme }) => theme.colors.woodsmoke};
  margin: 0 12px;
  font-weight: 600;
`;

export const Votes = styled.span`
  color: ${({ theme }) => theme.colors.waterloo};
  font-weight: 400;
`;

export const DescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`;

export const Title = styled.h2`
  font-weight: 500;
  font-size: 22px;
  line-height: 1.3;
  color: #18181b;
  margin: 0 16px 5px;
`;

export const Year = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  margin: 0 0 0 16px;
  color: #7e839a;
`;

export const TagsWraper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  padding: 16px;
`;

export const Tag = styled.div`
  padding: 6px 12px;
  font-size: 14px;
  border-radius: 5px;
  line-height: 1.4;
  font-weight: 400;
  background-color: rgb(228, 230, 240);
  text-align: center;
  color: ${({ theme }) => theme.colors.woodsmoke};
`;

