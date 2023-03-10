import styled from "styled-components";

export const MainWrapper = styled.div`
    max-width: 1368px;
    margin: 52px auto 40px;
    padding: 0 16px;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        padding: 0 12px;
        margin: 0;
    }
`;