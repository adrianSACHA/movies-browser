import React from "react";
import {
    HeaderMoviePeople,
    ContainerMoviePeople,
    PersonTile,
    PersonName,
    PersonInfo,
    PersonImage,
} from "./styled";
import { MainWrapper } from "../../../../../common/MainWrapper"
import photo from "./images/Picture.png";

const MovieCast = () => (
    <MainWrapper>
        <HeaderMoviePeople>Cast</HeaderMoviePeople>
        <ContainerMoviePeople>
            <PersonTile>
                <PersonImage src={photo} alt="" />
                <PersonName>Liu</PersonName>
                <PersonInfo>Mulan</PersonInfo>
            </PersonTile>
        </ContainerMoviePeople>

    </MainWrapper>
);

export default MovieCast;