import styled from "styled-components";
import { ReactComponent as noResultPicture } from "./noResultPicture.svg";

export const Header = styled.header`
    font-weight: 600;
    font-size: 36px;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        text-align: center;
        font-size: 24px;
        margin-top: 36px;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMin}px) {
        font-size: 18px;
    }
`;

export const PictureWrapper = styled.div`
    display: grid;
    justify-items: center;
    justify-content: center;
    align-items: center;
    
    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        margin-top: 8px;
    } 
`;

export const Picture = styled(noResultPicture)`
    width: 668px;
    height: 508px;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        width: 550px;
        height: auto;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMed}px) {
        width: 334px;
        height: auto;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMin}px) {
        width: 250px;
        height: auto;
    }
`;