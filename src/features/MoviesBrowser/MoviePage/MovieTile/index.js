import React from "react";
import { Container, Image, Content, Title, Year } from "./styled";
import poster from "./images/poster.png"

const MovieTile = () => (
    <Container>
        <Image src={poster} alt=""/>
        <Content>
            <Title>Mulan</Title>
            <Year>2020</Year>
        </Content>
    </Container>
);

export default MovieTile;