import React from "react";
import { useSelector } from "react-redux";
import {
    selectPersonDetails,
    selectPersonCredits,
} from "../movieDetailsSlice";
import MovieTile from "./components/MovieTile";
import {
    HeaderMoviePeople,
    ContainerMoviePeople,
    PersonLink,
    PersonName,
    PersonInfo,
    PersonImage,
} from "../../../../common/Credits/styled";
import { MainWrapper } from "../../../../common/MainWrapper";
import picture from "../../../../common/Credits/Picture.svg";

const PersonPageDetails = () => {
    const person = useSelector(selectPersonDetails);
    const credits = useSelector(selectPersonCredits);
    const cast = credits.cast;
    const crew = credits.crew;

    return (
        <>
            {person.profile_path && (
                <MovieTile
                    poster_path={person.profile_path}
                    title={person.name}
                    birthday={person.birthday}
                    place={person.place_of_birth}
                    biography={person.biography}
                />
            )}
            {cast.length > 0 && (
                <MainWrapper>
                    <HeaderMoviePeople>Cast</HeaderMoviePeople>
                    <ContainerMoviePeople>
                        {cast.map((actor) =>
                            <PersonLink key={actor.id}
                            >
                                {actor.profile_path ? (
                                    <PersonImage src={`https://image.tmdb.org/t/p/w500/${actor.profile_path}`} alt="" />
                                ): <PersonImage src={picture} alt="" />}
                                {actor.name && (
                                    <PersonName>{actor.name}</PersonName>
                                )}
                                {actor.character && (
                                    <PersonInfo>{actor.character}</PersonInfo>
                                )}
                            </PersonLink>
                        )}
                    </ContainerMoviePeople>
                </MainWrapper>
            )}
            {crew.length > 0 && (
                <MainWrapper>
                    <HeaderMoviePeople>Crew - </HeaderMoviePeople>
                    <ContainerMoviePeople>
                        {crew.map((member) =>
                            <PersonLink key={member.id}
                            >
                                {member.profile_path ? (
                                    <PersonImage src={`https://image.tmdb.org/t/p/w500/${member.profile_path}`} alt="" />
                                ): <PersonImage src={picture} alt="" />}
                                {member.name && (
                                    <PersonName>{member.name}</PersonName>
                                )}
                                {member.department && (
                                    <PersonInfo>{member.department}</PersonInfo>
                                )}
                            </PersonLink>
                        )}
                    </ContainerMoviePeople>
                </MainWrapper>
            )}
        </>
    );
};

export default MoviePageDetails;