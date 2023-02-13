import styled from "styled-components";

export const StyledTitle = styled.h1`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 36px;
  line-height: 120%;
  color: ${({ theme }) => theme.colors.woodsmoke};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 30px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMin}px) {
    font-size: 24px;
  }


  @media (max-width: ${({ theme }) => theme.breakpoints.mobileTiny}px) {
    font-size: 18px;
  }
`;
