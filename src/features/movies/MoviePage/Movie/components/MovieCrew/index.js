import React from "react";
import {
    HeaderMoviePeople,
    ContainerMoviePeople,
    PersonLink,
    PersonName,
    PersonInfo,
    PersonImage,
} from "./styled";
import { MainWrapper } from "../../../../../../common/MainWrapper";

const MovieCrew = ({ path, name, role }) => (
    <MainWrapper>
        <HeaderMoviePeople>Crew</HeaderMoviePeople>
        <ContainerMoviePeople>
            <PersonLink
                key={name}
            >
                <PersonImage src={`https://image.tmdb.org/t/p.w500/${path}`} alt="" />
                <PersonName>Liu</PersonName>
                <PersonInfo>Mulan</PersonInfo>
            </PersonLink>
        </ContainerMoviePeople>
    </MainWrapper>
);

export default MovieCrew;