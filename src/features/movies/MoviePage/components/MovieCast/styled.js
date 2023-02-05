import styled from "styled-components";
<<<<<<< HEAD:src/features/movies/MoviePage/Movie/components/MovieCast/styled.js
import { Link } from "react-router-dom";
=======
>>>>>>> a29e0d680df9aea5c970bac7db7146ff6ad7911e:src/features/movies/MoviePage/components/MovieCast/styled.js

export const HeaderMoviePeople = styled.h2`
    font-weight: 600;
    font-size: 36px;
    line-height: 1.2;
    margin: 64px 0 32px 0;
    color: ${({ theme }) => theme.colors.black};

    @media (max-width: ${({ theme }) => theme.breakpoints.tabletHorizontalMax}px) {
        margin: 21px 16px;
    }
`;

export const ContainerMoviePeople = styled.ul`
    max-width: 1368px;
    margin: auto;
    padding: 0;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(208px, 1fr));
    grid-gap: 24px;

    @media (max-width: ${({ theme }) => theme.breakpoints.tabletHorizontalMax}px) {
        margin: 0 16px;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        grid-template-columns: repeat(auto-fill, minmax(136px, 1fr));
        grid-gap: 16px;
    }
`;

<<<<<<< HEAD:src/features/movies/MoviePage/Movie/components/MovieCast/styled.js
export const PersonLink = styled(Link)`
=======
export const PersonTile = styled.li`
>>>>>>> a29e0d680df9aea5c970bac7db7146ff6ad7911e:src/features/movies/MoviePage/components/MovieCast/styled.js
    width: 100%;
    height: auto;
    background: white;
    padding: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 0px 4px 12px rgba(186, 199, 213, 0.5);

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        padding: 8px;
        border-radius: 5px;
    }
`;

export const PersonImage = styled.img`    
    width: 100%;
    height: auto;
`;

export const PersonName = styled.p`
    font-weight: 500;
    font-size: 22px;
    line-height: 1.3;
    margin: 12px 0 8px 0;
    color: #18181B;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        font-size: 14px;
    }
`;

export const PersonInfo = styled.span`
    font-weight: 400;
    font-size: 18px;
    line-height: 1.5;
    color: #7E839A;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        font-size: 13px;
    }
`;
