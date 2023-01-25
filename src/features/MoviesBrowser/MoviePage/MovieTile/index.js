import React from "react";
import { Container, Image, Content, Title, SubTitle, Tags, Tag, Description, Rating, RateBig, RateSmall, Votes } from "./styled";
import poster from "./images/poster.png"
import { ReactComponent as Star } from "./icons/Star.svg"

const MovieTile = () => (
    <Container>
        <Image src={poster} alt="" />
        <Content>
            <Title>Mulan</Title>
            <SubTitle>2020</SubTitle>
            <Tags>
                <Tag>Action</Tag>
                <Tag>Adventure</Tag>
                <Tag>Drama</Tag>
            </Tags>
            <Rating>
                <Star />
                <RateBig>7,8</RateBig>
                <RateSmall>/ 10</RateSmall>
                <Votes>335 votes</Votes>
            </Rating>
            <Description>
                A young Chinese maiden disguises herself as a male warrior in order to save her father.
                Disguises herself as a male warrior in order to save her father.  A young Chinese maiden disguises herself as a male warrior in order to save her father.
            </Description>
        </Content>
    </Container>
);

export default MovieTile;