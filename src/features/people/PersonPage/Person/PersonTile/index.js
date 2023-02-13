import React from "react";
import { imgBaseUrl } from "../../../../../common/catchApi/apiValue";
import {
    TileWrapper,
    MovieTileContainer,
    Image,
    Content,
    Title,
    Description,
    MetaContainer,
    MetaLabel,
    MetaInfo,
    MetaWrapper,
} from "../../../../../common/components/BigTile/styled";
import poster from "./picture.svg";

const MovieTile = ({ poster_path, title, birthday, place, description }) => (

    <TileWrapper>
        <MovieTileContainer>
            {poster_path ? (
                <Image src={`${imgBaseUrl}/w500/${poster_path}`} />
            ) : (
                <Image src={poster} />
            )}
            <Content>
                <Title>{title}</Title>
                <MetaWrapper>
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
            </Content>
            {description && (
                <Description>{description}</Description>
            )}
        </MovieTileContainer>
    </TileWrapper>
);

export default MovieTile;