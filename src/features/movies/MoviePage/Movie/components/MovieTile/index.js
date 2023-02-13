import React from "react";
import { Fragment } from "react";
import { imgBaseUrl } from "../../../../../../common/catchApi/apiValue";
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
    StyledStar,
    MetaWrapper,
} from "../../../../../../common/components/BigTile/styled";
import poster from "../../../../../../common/images/noPoster.svg";

const MovieTile = ({ poster_path, title, release, production, genres, rate, votes, description }) => (

    <TileWrapper>
        <MovieTileContainer>
            {poster_path ? (
                <Image src={`${imgBaseUrl}/original/${poster_path}`} />
                ) : (
                    <Image src={poster} />
                )}
            <Content>
                <Title>{title}</Title>
                <SubTitle>{release.slice(0, 4)}</SubTitle>
                <MetaWrapper>
                    {production && (
                        <MetaContainer>
                            <MetaLabel>Production:</MetaLabel>
                            {production.map((country, index) =>
                                <Fragment key={index}>
                                    <MetaInfo key={country.name}>
                                        {country.name}
                                        {production.length > 0 ? (
                                            index < production.length - 1 ? (
                                                <span>,&nbsp;</span>
                                            ) : (
                                                ""
                                            )
                                        ) : (
                                            ""
                                        )}
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
                </MetaWrapper>
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
                        <StyledStar />
                        <RateBig>{rate.toFixed(1)}</RateBig>
                        <RateSmall>/ 10</RateSmall>
                        <Votes>{votes} votes</Votes>
                    </Rating>
                )}
            </Content>
            <Description>{description}</Description>
        </MovieTileContainer>
    </TileWrapper>
);

export default MovieTile;