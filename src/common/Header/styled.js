import styled from "styled-components";

export const Wrapper = styled.div`
  background: ${({ theme }) => theme.colors.black};
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  min-height: 94px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    min-height: 142px;
  }
`;
