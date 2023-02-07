import styled from "styled-components";

export const Wrapper = styled.div`
  background: ${({ theme }) => theme.colors.black};
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  /* justify-content: center; */
  min-height: 94px;
  justify-content: space-evenly;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMed}px) {
    min-height: 142px;
  }
`;
