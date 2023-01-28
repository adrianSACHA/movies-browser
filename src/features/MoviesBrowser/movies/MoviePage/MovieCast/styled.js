import styled from "styled-components";

export const MovieCastWrapper = styled.div`
    max-width: 1368px;
    margin: auto;
`;

export const HeaderMoviePeople = styled.h2`
    font-weight: 600;
    font-size: 36px;
    line-height: 1.2;
    margin: 64px 0 32px 0;
    color: ${({ theme }) => theme.colors.black};
`;

export const ContainerMoviePeople = styled.ul`
    max-width: 1368px;
    margin: auto;
    display: grid;
    list-style: none;
    grid-gap: 24px;
`;

export const PersonTile = styled.article`
    width: 208px;
    height: 339px;
    background: white;
    padding: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const PersonImage = styled.img`    
    width: 176px;
    height: 231px;
`;

export const PersonName = styled.p`
    font-weight: 500;
    font-size: 22px;
    line-height: 1.3;
    margin: 12px 0 8px 0;
    color: #18181B;
`;

export const PersonInfo = styled.span`
    font-weight: 400;
    font-size: 18px;
    line-height: 1.5;
    color: #7E839A;
`;
