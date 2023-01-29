import styled from "styled-components";
import { ReactComponent as star } from "./icons/Star.svg";

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
