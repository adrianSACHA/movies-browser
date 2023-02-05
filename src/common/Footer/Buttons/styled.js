import styled, { css } from "styled-components";
import { ReactComponent as arrowPrev } from "../images/prevArrow.svg";
import { ReactComponent as arrowNext } from "../images/nextArrow.svg";

export const StyledButton = styled.button`
  background-color: ${({ theme }) => theme.colors.pattensBlue};
  cursor: pointer;
  padding: 8px 16px;
  margin: 0 6px;
  border-radius: 5px;
  border: none;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;

  &:disabled {
    background-color: ${({ theme }) => theme.colors.mystic};
    color: ${({ theme }) => theme.colors.woodsmoke};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    padding: 8px 10px;
    gap: 6px;
  }
`;

export const IconArrowPrevious = styled(arrowPrev)`
  color: ${({ theme }) => theme.colors.blue};
  ${StyledButton}:disabled & {
    color: ${({ theme }) => theme.colors.darkGrey};
  }

  ${({ mobile }) =>
    mobile &&
    css`
      display: none;

      @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        display: flex;
      }
    `};

  ${({ hide }) =>
    hide &&
    css`
      display: none;
    `};
`;

export const IconArrowNext = styled(arrowNext)`
  color: ${({ theme }) => theme.colors.blue};
  ${StyledButton}:disabled & {
    color: ${({ theme }) => theme.colors.darkGrey};
  }

  ${({ mobile }) =>
    mobile &&
    css`
      display: none;

      @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        display: flex;
      }
    `};

  ${({ hide }) =>
    hide &&
    css`
      display: none;
    `};
`;

export const Title = styled.span`
  font-weight: 400;
  font-size: 14px;
  line-height: 140%;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    display: none;
  }
`;
