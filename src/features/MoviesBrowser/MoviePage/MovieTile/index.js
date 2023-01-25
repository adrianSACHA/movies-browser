import React from "react";
import { Container, Image, Content, Title, Year, Tags, Tag } from "./styled";
import poster from "./images/poster.png"

const MovieTile = () => (
    <Container>
        <Image src={poster} alt=""/>
        <Content>
            <Title>Mulan</Title>
            <Year>2020</Year>
            <Tags>
                <Tag>Action</Tag>
                <Tag>Adventure</Tag>
                <Tag>Drama</Tag>
            </Tags>
        </Content>
    </Container>
);

export default MovieTile;