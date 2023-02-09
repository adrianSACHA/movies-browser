import styled from "styled-components";
import { ReactComponent as Search } from "./Search.svg";

export const Wrapper = styled.div`
  max-width: 500px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    flex-grow: 2;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileTiny}px) {
    width: fit-content;
  }
`;

export const MainSearch = styled.div`
  display: flex;
  align-items: center;
  gap: 19px;
  background: ${({ theme }) => theme.colors.white};
  border-radius: 33px;
  border: 1px solid ${({ theme }) => theme.colors.mystic};
  height: 48px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    height: 44px;
    width: 80%;
    gap: 8px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileTiny}px) {
    width: fit-content;
  }
`;

export const Loop = styled(Search)`
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  margin: 15px 0 15px 26px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    width: 12px;
    margin: 15px 0 15px 18px;
  }
`;

export const StyledInput = styled.input`
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: ${({ theme }) => theme.colors.waterloo};
  border: none;
  outline: 0;
  width: 70%;
  background-color: transparent;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    max-height: 44px;
    width: 100%;
    font-size: 13px;
  }
`;
