import styled, { keyframes } from "styled-components";
import { ReactComponent as Spinner } from "./spinner.svg";

const rotate = keyframes`
    to {
        transform: rotate(360deg);
    }
`;

export const Wrapper = styled.div`
  margin: 14px 0px;
  padding-left: 16px;
  color: ${({ theme }) => theme.colors.textPrimary};
  display: grid;
  max-width: 1336px;
  align-items: center;
  height: fit-content;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    margin: 0;
    padding: 0 12px;
    max-width: 100%;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMed}px) {
    margin: 0;
    padding: 0 12px;
    max-width: 100%;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMin}px) {
    margin: 0;
    padding: 0 12px;
    max-width: 100%;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileTiny}px) {
    margin: 0;
    padding: 0 12px;
    max-width: 100%;
  }
`;

export const TitleWrapper = styled.div`
  max-width: 1224px;
  margin-top: 14px;
  display: flex;
  align-items: center;
  justify-content: left;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    margin: 0;
    padding: 0;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMed}px) {
    margin: 0;
    padding: 0;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMin}px) {
    margin: 0;
    padding: 0;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileTiny}px) {
    margin: 0;
    padding: 0;
  }
`;

export const WrappedSpinner = styled.div`
  display: flex;
  justify-content: center;
`;

export const StyledSpinner = styled(Spinner)`
  margin-top: 48px;
  animation: ${rotate} 1s linear infinite;
  color: ${({ theme }) => theme.colors.primary};
  height: auto;
  text-align: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    margin-top: 32px;
    width: 60px;
  }
`;
