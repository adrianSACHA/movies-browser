import React from "react";
import {
    MovieCastWrapper,
    HeaderMoviePeople,
    ContainerMoviePeople,
    PersonTile,
    PersonName,
    PersonInfo,
    PersonImage,
} from "./styled";
import photo from "./images/Picture.png";

const MovieCast = () => (
    <MovieCastWrapper>
        <HeaderMoviePeople>Cast</HeaderMoviePeople>
        <ContainerMoviePeople>
            <PersonTile>
                <PersonImage src={photo} alt="" />
                <PersonName>Liu</PersonName>
                <PersonInfo>Mulan</PersonInfo>
            </PersonTile>
        </ContainerMoviePeople>
        <HeaderMoviePeople>Crew</HeaderMoviePeople>
        <ContainerMoviePeople>
            <PersonTile>
                <PersonImage src={photo} alt="" />
                <PersonName>Liu</PersonName>
                <PersonInfo>Mulan</PersonInfo>
            </PersonTile>
        </ContainerMoviePeople>
    </MovieCastWrapper>
);

export default MovieCast;