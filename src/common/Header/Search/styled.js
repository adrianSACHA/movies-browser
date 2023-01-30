import styled from "styled-components";

export const Wrapper = styled.div`
  width: 432px;
  height: 48px;
  display: flex;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMin}px) {
    height: 44px;
    max-width: 70%;
    position: relative;
    bottom: 0px;
  }
`;

export const StyledInput = styled.input`
  background: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.mystic};
  border-radius: 33px;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  align-items: center;
  color: ${({ theme }) => theme.colors.waterloo};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMin}px) {
  }
`;
