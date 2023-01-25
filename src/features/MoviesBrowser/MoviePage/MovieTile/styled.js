import styled from "styled-components"

export const Container = styled.div`
    max-width: 1368px;
    margin: auto;
    padding: 40px;
    margin-top: 64px;
    background: ${({theme}) => theme.colors.white};
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