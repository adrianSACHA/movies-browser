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

const MovieCrew = () => (
    <MainWrapper>
        <HeaderMoviePeople>Crew</HeaderMoviePeople>
        <ContainerMoviePeople>
            <PersonTile>
                <PersonImage src={photo} alt="" />
                <PersonName>Liu</PersonName>
                <PersonInfo>Mulan</PersonInfo>
            </PersonTile>
        </ContainerMoviePeople>
    </MainWrapper>
);

export default MovieCrew;