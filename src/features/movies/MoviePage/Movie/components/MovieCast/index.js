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
console.log("moviecast");

const MovieCast = ({ path, name, role }) => (
    <MainWrapper>
        <HeaderMoviePeople>Cast</HeaderMoviePeople>
        <ContainerMoviePeople>
            <PersonLink
                key={name}
            >
                <PersonImage src={`https://image.tmdb.org/t/p.w500/${path}`} alt="" />
                <PersonName>{name}</PersonName>
                <PersonInfo>{role}</PersonInfo>
            </PersonLink>
        </ContainerMoviePeople>

    </MainWrapper>
);

export default MovieCast;