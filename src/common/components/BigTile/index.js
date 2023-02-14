import React from "react";
import { Fragment } from "react";
import { imgBaseUrl } from "../../catchApi/apiValue";
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
} from "./styled";
import poster from "../../images/noPoster.svg";
import profile from "../../images/noProfile.svg"

const BigTile = ({ profile_path, poster_path, title, release, birthday, place, production, genres, rate, votes, description }) => (

    <TileWrapper>
        <MovieTileContainer>
            {poster_path !== undefined && (
                <Image src={poster_path ? `${imgBaseUrl}/original/${poster_path}` : poster} />
            )}
            {profile_path !== undefined && (
                <Image src={profile_path ? `${imgBaseUrl}/w500/${profile_path}` : profile} />
            )}
            <Content>
                <Title>{title}</Title>
                {release && <SubTitle>{(release).slice(0, 4)}</SubTitle>}
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
                    {birthday && (
                        <MetaContainer>
                            <MetaLabel>Date of birth:</MetaLabel>
                            <MetaInfo>
                                {birthday}
                            </MetaInfo>
                        </MetaContainer>
                    )}
                    {place && (
                        <MetaContainer>
                            <MetaLabel>Place of birth:</MetaLabel>
                            <MetaInfo>{place}</MetaInfo>
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

export default BigTile;