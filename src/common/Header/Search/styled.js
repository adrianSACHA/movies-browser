import styled from "styled-components";
import { ReactComponent as Search } from "./Search.svg";

export const Wrapper = styled.div`
  width: 432px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMin}px) {
    height: 44px;
    max-width: 70%;
    position: relative;
    bottom: 0px;
  }
`;

export const MainSearch = styled.div`
  display: flex;
  align-items: center;
  gap: 19px;
  background: ${({ theme }) => theme.colors.white};
  border-radius: 33px;
  border: 1px solid ${({ theme }) => theme.colors.mystic};

`;

export const Loop = styled(Search)`
align-items: center;
justify-content: center;
width: 24px;
height: 24px;
margin: 15px 0 15px 26px;

`;

export const StyledInput = styled.input`
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: ${({ theme }) => theme.colors.waterloo};
  border: none;
  width: 70%;

   @media (max-width: ${({ theme }) => theme.breakpoints.mobileMin}px) {
  }
`;
