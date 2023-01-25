import styled from "styled-components"

export const Container = styled.div`
    max-width: 1368px;
    margin: auto;
    padding: 40px;
    margin-top: 64px;
    background: ${({ theme }) => theme.colors.white};
    box-shadow: 0px 4px 12px rgba(186, 199, 213, 0.5);
    display: grid;
    grid-template-columns: auto 1fr;
    grid-gap: 40px;
`;

export const Image = styled.img`    
    width: 312px;
    height: 464px;
`;

export const Content = styled.div`
`;

export const Title = styled.header`
    font-weight: 600;
    font-size: 36px;
    line-height: 1.2;
    color: ${({ theme }) => theme.colors.black};
    margin-bottom: 24px;
`;

export const SubTitle = styled.div`
    font-weight: 400;
    font-size: 22px;
    line-height: 1.2;
    color: ${({ theme }) => theme.colors.black};
`;

export const Tags = styled.ul`
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    padding-left: 0;
    margin: 16px -8px;
`;

export const Tag = styled.li`
    background: ${({ theme }) => theme.colors.mystic};
    padding: 8px 16px;
    font-size: 14px;
    margin: 8px;
    border-radius: 5px;
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
`;

export const RateSmall = styled.span`
    font-weight: 400;
    font-size: 14px;
    line-height: 1.2;
    margin-right: 12px;
    padding-bottom: 3px;
    align-self: flex-end;
`;

export const Votes = styled.span`
    font-weight: 400;
    font-size: 14px;
    line-height: 120%;
    padding-bottom: 3px;
    align-self: flex-end;
`;

export const Description = styled.p`
    font-size: 20px;
    line-height: 1.6;
    margin: 24px 0 0 0;
`;