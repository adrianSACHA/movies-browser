import React from "react";
import { Container, Image, Content } from "./styled";
import poster from "./images/poster.png"

const MovieTile = () => (
    <Container>
        <Image src={poster} alt=""/>
        <Content />
    </Container>
);

export default MovieTile;