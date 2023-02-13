import styled from "styled-components";

export const StyledTitle = styled.h1`
    font-weight: 600;
    font-size: 36px;
    line-height: 1.2;
    color: ${({ theme }) => theme.colors.woodsmoke};

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        font-size: 30px;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMed}px) {
        font-size: 24px;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMin}px) {
        font-size: 20px;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileTiny}px) {
        font-size: 16px;
    }
`;
