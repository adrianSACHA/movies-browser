import styled, { css } from "styled-components";
import { ReactComponent as arrowPrev } from "./images/prevArrow.svg";
import { ReactComponent as arrowNext } from "./images/nextArrow.svg";

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
    padding: 8px 12px;
  }
`;
