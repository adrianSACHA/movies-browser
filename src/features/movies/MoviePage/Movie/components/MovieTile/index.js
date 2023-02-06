import React from "react";
import { Fragment } from "react";
import {
    TileWrapper,
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
    MetaInfo,
    Wrapper,
} from "./styled";
import { ReactComponent as Star } from "./icons/Star.svg"

const MovieTile = ({ poster_path, title, release, production, genres, rate, votes, description }) => (
    
    <TileWrapper>
        <MovieTileContainer>
            <Image src={`https://image.tmdb.org/t/p/original/${poster_path}`} />
            <Content>
                <Wrapper>
                    <Title>{title}</Title>
                    <SubTitle>{release.slice(0, 4)}</SubTitle>
                    {production && (
                        <MetaContainer>
                            <MetaLabel>Production:</MetaLabel>
                            {production.map((country, index, countries) =>
                                <Fragment key={index}>
                                    <MetaInfo key={country.name}>
                                        {country.name}
                                        
                                    </MetaInfo>
                                </Fragment>
                            )}
                        </MetaContainer>
                    )}
                    {release && (
                        <MetaContainer>
                            <MetaLabel>Release date:</MetaLabel>
                            <MetaInfo>{release}</MetaInfo>
                        </MetaContainer>
                    )}
                    {genres && (
                        <Tags>
                            {genres.map((genre) => (
                                <Tag key={genre.id}>
                                    {genre.name}
                                </Tag>
                            ))}
                        </Tags>
                    )}
                    {rate > 0 && votes && (
                        <Rating>
                            <Star />
                            <RateBig>{rate.toFixed(1)}</RateBig>
                            <RateSmall>/ 10</RateSmall>
                            <Votes>{votes} votes</Votes>
                        </Rating>
                    )}
                </Wrapper>
                <Description>{description}</Description>
            </Content>
        </MovieTileContainer>
    </TileWrapper>
);

export default MovieTile;