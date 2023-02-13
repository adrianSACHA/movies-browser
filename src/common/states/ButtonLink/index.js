import styled from "styled-components";

export const ButtonLink = styled.a`
    text-decoration: none;
    padding: 16px 24px;
    font-weight: 700;
    font-size: 14px;
    color: ${({ theme }) => theme.colors.white};
    border-radius: 5px;
    background: ${({ theme }) => theme.colors.blue};
    transition: box-shadow 0.3s;

    &:hover {
        box-shadow: 0 0 0 2px ${({ theme }) => theme.boxShadow};
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        font-size: 18px;
    }
`;