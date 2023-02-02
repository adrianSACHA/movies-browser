import styled from "styled-components";
import posterBig from "./images/poster-big.png";

export const BackdropWrapper = styled.div`
    background-color: ${({ theme }) => theme.colors.black};
`;

export const BackdropImageContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    margin: 0 auto;
    padding: 0 16px;
    max-width: 1368px;
    height: 796px;
    background-image: url("${posterBig}");
    background-size: cover;
    background-position: center;
    box-shadow: 
        inset 0 0 40px rgb(0 0 0), 
        inset 0 0 238px rgb(0 0 0), 
        inset 0 -100px 219px 52px rgb(0 0 0);

    @media (max-width: ${({ theme }) => theme.breakpoints.tabletHorizontalMax}px) {
        max-width: 800px;
        height: 449px;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        max-width: 262px;
        height: 148px;
        box-shadow: 
            inset 0 0 16px 8px rgb(0 0 0)
            inset 0 -32px 88px 20px rgb(0 0 0);
    }
`;

export const BackdropInfoContainer = styled.div`
    margin-bottom: 40px;
    max-height: 200px;
    color: ${({ theme }) => theme.colors.white};

    @media (max-width: ${({ theme }) => theme.breakpoints.tabletHorizontalMax}px) {
        margin-bottom: 24px;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        margin-bottom: 4px;
    }
`;

export const LongTitle = styled.header`
    font-weight: 600;
    font-size: 64px;
    line-height: 1.2;
    color: ${({ theme }) => theme.colors.white};

    @media (max-width: ${({ theme }) => theme.breakpoints.tabletHorizontalMax}px) {
        font-size: 40px;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        font-size: 24px;
    }
`;

export const Rating = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 17px;
`;

export const RateBig = styled.span`
    font-weight: 500;
    font-size: 30px;
    line-height: 1.3;
    margin:0 8px;
    color: ${({ theme }) => theme.colors.white};
`;

export const RateSmall = styled.span`
    font-weight: 400;
    font-size: 16px;
    line-height: 1.2;
    margin-right: 12px;
    padding-bottom: 3px;
    color: ${({ theme }) => theme.colors.white};
`;

export const Votes = styled.span`
    font-weight: 400;
    font-size: 16px;
    line-height: 1.2;
    color: ${({ theme }) => theme.colors.white};
`;