import styled from "styled-components";
import { ReactComponent as Star } from "../../icons/star.svg";

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
    border-radius: 5px;

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
    border-radius: 5px;
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

export const SubTitle = styled.div`
    font-weight: 400;
    font-size: 22px;
    line-height: 1.2;
    color: ${({ theme }) => theme.colors.black};

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        font-size: 13px;
        line-height: 1.3;
        color: ${({ theme }) => theme.colors.waterloo};
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

export const Tags = styled.ul`
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    padding-left: 0;
    margin: 8px -8px 0 -8px;
    
    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        margin: 0 -8px 0 -8px;
    }
`;

export const Tag = styled.li`
    background: ${({ theme }) => theme.colors.mystic};
    padding: 8px 16px;
    font-size: 14px;
    margin: 8px;
    border-radius: 5px;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        font-size: 10px;
        padding: 4px 8px;
        margin: 4px;
    }
`;

export const Rating = styled.div`
    display: flex;
    align-items: center;
`;

export const StyledStar = styled(Star)`
    width: clamp(16px, 2vw, 24px);
    height: auto;
`;

export const RateBig = styled.span`
    font-weight: 500;
    font-size: 22px;
    line-height: 1.3;
    margin:0 8px;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        font-size: 13px;
    }
`;

export const RateSmall = styled.span`
    font-weight: 400;
    font-size: 14px;
    line-height: 1.2;
    margin-right: 12px;
    padding-bottom: 3px;
    align-self: flex-end;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        display: none;
    }
`;

export const Votes = styled.span`
    font-weight: 400;
    font-size: 14px;
    line-height: 120%;
    padding-bottom: 3px;
    align-self: flex-end;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        font-size: 13px;
        padding: 0;
    }
`;

export const Description = styled.p`
    font-size: 20px;
    line-height: 1.6;
    margin: 40px 0 0 0;

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