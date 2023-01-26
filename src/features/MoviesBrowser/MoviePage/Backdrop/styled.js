import styled from "styled-components"

export const BackdropWrapper = styled.div`
`;

export const BackdropImageContainer = styled.div`
    display: flex;
    justify-content: center;
`;

export const BackdropImage = styled.img`  
    width: 100%;
    height: auto;
    max-width: 1368px;
`;

export const Pleksa = styled.img`
    position: absolute;
`;

export const BackdropInfoContainer = styled.div`
    position: absolute;
    margin: 538px 0 0 276px;
`;

export const LongTitle = styled.header`
    font-weight: 600;
    font-size: 64px;
    line-height: 1.2;
    margin-bottom: 25px;
    color: ${({ theme }) => theme.colors.white};
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