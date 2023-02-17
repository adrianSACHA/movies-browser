import styled from "styled-components";
import { Link } from "react-router-dom";
import noImage from "../../images/noProfile.svg";

export const PeopleListWrapper = styled.section`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 24px;

    @media (max-width: ${({ theme }) => theme.breakpoints.large}px) {
        grid-template-columns: repeat(4, 1fr);
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        grid-template-columns: repeat(3, 1fr);
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMin}px) {
        grid-template-columns: repeat(2, 1fr);
        margin: 12px auto 0;
    }
`;

export const LinkToPersonPage = styled(Link)`
    text-decoration: none;
    margin: 0;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        width: 100%;
    }
    &:hover {
        transform: scale(1.03);
        transition: 0.5s;
    }
    &:active {
        transform: scale(1.05);
        transition: 0.5s;
    }
`;

export const PersonWrapper = styled.div`
    width: 100%;
    height: 100%;
    background: #ffffff;
    display: grid;
    grid-template-rows: auto 1fr;
    transition: 0.5s;
    box-shadow: 0px 4px 12px rgba(186, 199, 213, 1);
    border-radius: 5px;
    padding: 16px;

    &:hover {
        transform: scale(1.03);
        box-shadow: ${({ theme }) => theme.hoverShadow};
    }

    &:active {
        box-shadow: ${({ theme }) => theme.activeShadow};
        transform: scale(1.05);
    }
`;

export const ImageBackground = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    border-radius: 5px;
    flex-basis: auto;
    background-image: url(${noImage});
    background-repeat: no-repeat;
    background-position: center;
    background-size: 30%;
    background-color: ${({ theme }) => theme.colors.silver};
    color: ${({ theme }) => theme.colors.white};

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMin}px) {
        height: fit-content;
    }
`;

export const Image = styled.img`
    width: 100%;
    height: auto;
    border-radius: 5px;
    aspect-ratio: 2/3;
`;

export const Description = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
`;

export const Name = styled.p`
    margin: 16px 0 0 0;
    font-weight: 400;
    font-size: 22px;
    line-height: 1.3;
    color: ${({ theme }) => theme.colors.woodsmoke};

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMed}px) {
        font-size: 18px;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMin}px) {
        margin: 12px 0 0 0;
        font-size: 16px;
    }
`;

export const Function = styled.p`
    font-size: 18px;
    font-weight: 400;
    line-height: 1.5;
    color: ${({ theme }) => theme.colors.waterloo};
    margin: 16px 0 0 0;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMed}px) {
        font-size: 15px;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMin}px) {
        margin: 12px 0 0 0;
        font-size: 14px;
    }
`
