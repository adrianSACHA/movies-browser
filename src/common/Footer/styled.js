import styled from "styled-components";
import { ReactComponent as arrowPrev } from "./images/prevArrow.svg";
import { ReactComponent as arrowNext } from "./images/nextArrow.svg";

export const Wrapper = styled.div`
  background: ${({ theme }) => theme.colors.mercury};
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 40px auto 88px;
`;

export const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.pattensBlue};
  cursor: pointer;
  padding: 8px 16px;
  margin: 0 6px;
  border-radius: 5px;
  border: none;
  font-size: 14px;
  font-weight: 400;
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const IconArrowPrev = styled(arrowPrev)`
  background-color: ${({ theme }) => theme.colors.blue};
  ${Button}:disabled & {
    color: ${({ theme }) => theme.colors.mineShaft}
  }
`;