import styled from "styled-components";
import { ReactComponent as Star } from "./images/Star.svg";

export const BackdropWrapper = styled.div`
    background-color: ${({ theme }) => theme.colors.black};
`;

export const BackdropContainer = styled.div`
    position: relative;
    max-width: 1368px;
    margin: 0 auto;
    display: flex;
    align-items: flex-end;

    @media (max-width: ${({ theme }) => theme.breakpoints.widest}) {
        margin: 0 6vw;
    }
`;

export const Pleksa = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    box-shadow: inset 0 0 4vw 3.7vw ${({ theme }) => theme.colors.black};

    @media (max-width: ${({ theme }) => theme.breakpoints.desktop}px) {
        box-shadow: inset 0 0 6vw 5.5vw ${({ theme }) => theme.colors.black};
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        box-shadow: inset 0 0 7vw 6.5vw ${({ theme }) => theme.colors.black};
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMin}px) {
        box-shadow: inset 0 0 7vw 2.5vw ${({ theme }) => theme.colors.black};
    }
`;

export const BackdropImage = styled.img`
    width: 100%;
    object-fit: cover;
`;

export const BackdropInfoContainer = styled.div`
    padding-left: 25px;
    margin-bottom: clamp(10px, 3vw, 56px);
    display: flex;
    flex-direction: column;
    position: absolute;
    color: ${({ theme }) => theme.colors.white};
    text-shadow: 1px 1px 2px ${({ theme }) => theme.colors.mineShaft};
    
    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
            padding-left: 16px;
        }
`;

export const LongTitle = styled.header`
    font-weight: 600;
    font-size: clamp(24px, 5vw, 64px);
    margin-bottom: clamp(8px, 2vw, 25px);
    margin-top: 0;
`;

export const Rating = styled.div`
    margin-bottom: 18px;
    display: grid;
    grid-template-columns: repeat(4, max-content);
    grid-gap: 17px 8px;
    align-items: end;

        @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
            display: flex;
            align-items: center;
            margin: 0 8px 0 0;
        }
`;

export const StarIcon = styled(Star)`
    width: clamp(16px, 3vw, 40px);
    height: clamp(16px, 3vw, 40px);
`;

export const RateBig = styled.span`
    font-weight: 500;
    font-size: clamp(14px, 3vw, 30px);
    line-height: 1;
    margin: 3px;
`;

export const RateSmall = styled.span`
    font-size: clamp(10px, 2vw, 16px);
`;

export const Votes = styled.span`
    margin-left: 0;
    grid-row: 2;
    grid-column: 1 / 5;
    font-size: clamp(10px, 2vw, 16px);
`;