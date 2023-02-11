import styled from "styled-components";
import { ReactComponent as Star } from "./icons/Star.svg";

export const TileWrapper = styled.div`
    display: flex;
    justify-content: center;
    margin: 64px auto;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        margin-top: 16px;
        margin-bottom: 21px;
    }
`;

export const MovieTileContainer = styled.div`
    max-width: 1368px;
    margin: 16px;
    padding: 40px;
    background: ${({ theme }) => theme.colors.white};
    box-shadow: 0px 4px 12px rgba(186, 199, 213, 0.5);
    display: grid;
    grid-template-columns: 1fr 2fr;
    grid-gap: 0 40px;

    @media (max-width: ${({ theme }) => theme.breakpoints.large}px) {
        grid-template-columns: 1fr 3fr;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.medium}px) {
        grid-template-columns: 1fr 2fr;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        grid-template-columns: 1fr 2fr;
        grid-gap: 0 16px;
        margin: 16px;
        padding: 16px;
    }
`;

export const Image = styled.img`    
    width: 100%;
    height: auto;
    grid-row: span 2;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        width: 114px;
        height: auto;
    }
`;

export const Content = styled.div`
    height: fit-content;
    display: flex;
    flex-direction: column;
    gap: 24px;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        gap: 8px;
    }
`;

export const Title = styled.header`
    font-weight: 600;
    font-size: 36px;
    line-height: 1.2;
    color: ${({ theme }) => theme.colors.black};

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        font-size: 16px;
        line-height: 1.3;
    }
`;

export const MetaWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        gap: 4px;
    }
`;

export const MetaContainer = styled.div`
`;

export const MetaLabel = styled.span`
    font-size: 18px;
    line-height: 1.2;
    margin-right: 10px;
    color: ${({ theme }) => theme.colors.stormGray};

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        display: none;
    }
`;

export const MetaInfo = styled.span`
    font-size: 18px;
    line-height: 1.2;
    color: ${({ theme }) => theme.colors.black};

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        font-size: 12px;
        line-height: 1.3;
        margin-bottom: 8px;
        padding: 0;
    }
`;

export const Description = styled.p`
    font-size: 20px;
    line-height: 1.6;
    margin: 0;
    ;

    @media (max-width: ${({ theme }) => theme.breakpoints.large}px) {
        grid-column: span 2;
        margin-top: 30px;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.medium}px) {
        grid-column: span 2;
        margin-top: 24px;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        font-size: 14px;
        margin: 19px 0 0 0;
        grid-column: span 2;
    }
`;