import styled from "styled-components";

export const TileWrapper = styled.div`
    display: flex;
    justify-content: center;
    margin: 64px auto;
`;

export const MovieTileContainer = styled.div`
    max-width: 1368px;
    margin: 16px;
    padding: 40px;
    background: ${({ theme }) => theme.colors.white};
    box-shadow: 0px 4px 12px rgba(186, 199, 213, 0.5);
    display: grid;
    grid-template-columns: auto 1fr;
    grid-gap: 40px;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        grid-template-areas: 
                    "a b"
                    "b b";
        margin: 16px;
        padding: 16px;
    }
`;

export const Image = styled.img`    
    width: 312px;
    height: 464px;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        width: 114px;
        height: 169px;
    }
`;

export const Content = styled.div`
    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        display: flex;
        flex-wrap: wrap;
    }
`;

export const Title = styled.header`
    font-weight: 600;
    font-size: 36px;
    line-height: 1.2;
    color: ${({ theme }) => theme.colors.black};
    margin-bottom: 24px;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        font-size: 16px;
        line-height: 1.3;
        margin-bottom: 4px;
    }
`;

export const SubTitle = styled.div`
    font-weight: 400;
    font-size: 22px;
    line-height: 1.2;
    margin-bottom: 24px;
    color: ${({ theme }) => theme.colors.black};

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        font-size: 13px;
        line-height: 1.3;
        margin-bottom: 8px;
        color: ${({ theme }) => theme.colors.waterloo};
    }
`;

export const MetaContainer = styled.div`
    display: flex;
`;

export const MetaLabel = styled.span`
    font-size: 18px;
    line-height: 1.2;
    margin-right: 10px;
    margin-bottom: 8px;
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
    margin: 8px -8px 24px -8px;
    
    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        margin: 8px -8px 12px -8px;
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
    }
`;

export const Rating = styled.div`
    display: flex;
    align-items: center;
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
    }
`;

export const Description = styled.p`
    font-size: 20px;
    line-height: 1.6;
    margin: 24px 0 0 0;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        font-size: 14px;
        margin: 19px 0 0 0;
    }
`;

export const Wrapper = styled.div``;