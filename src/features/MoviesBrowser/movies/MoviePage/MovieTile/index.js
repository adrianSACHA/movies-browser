import React from "react";
import {
    MovieTileContainer,
    Image,
    Content,
    Title,
    SubTitle,
    Tags,
    Tag,
    Description,
    Rating,
    RateBig,
    RateSmall,
    Votes,
    MetaContainer,
    MetaLabel,
    MetaInfo
} from "./styled";
import poster from "./images/poster.png"
import { ReactComponent as Star } from "./icons/Star.svg"

const MovieTile = () => (
    <MovieTileContainer>
        <Image src={poster} alt="" />
        <Content>
            <Title>Mulan</Title>
            <SubTitle>2020</SubTitle>
            <MetaContainer>
                <MetaLabel>Production:</MetaLabel>
                <MetaInfo>China, United States of America</MetaInfo>
            </MetaContainer>
            <MetaContainer>
                <MetaLabel>Release date:</MetaLabel>
                <MetaInfo>24.10.2020</MetaInfo>
            </MetaContainer>
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
    </MovieTileContainer>
);

export default MovieTile;