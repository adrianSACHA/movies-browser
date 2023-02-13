import React from "react";
import { useSelector } from "react-redux";
import {
    selectPersonDetails,
    selectPersonCredits,
} from "../personDetailsSlice";
import PersonTile from "./PersonTile";
import {
    HeaderMoviePeople,
} from "../../../../common/Credits/styled";
import { MainWrapper } from "../../../../common/MainWrapper";
import MovieBox from "../../../movies/MovieList/MovieBox";

const PersonPageDetails = () => {
    const person = useSelector(selectPersonDetails);
    const credits = useSelector(selectPersonCredits);
    const cast = credits.cast;
    const crew = credits.crew;

    return (
        <>
                <PersonTile
                    poster_path={person.profile_path}
                    title={person.name}
                    birthday={person.birthday}
                    place={person.place_of_birth}
                    description={person.biography}
                />
            {cast.length > 0 && (
                <MainWrapper>
                    <HeaderMoviePeople>Movies - cast ({cast.length})</HeaderMoviePeople>
                        <MovieBox movies={cast} />
                </MainWrapper>
            )}
            {crew.length > 0 && (
                <MainWrapper>
                    <HeaderMoviePeople>Movies - crew ({crew.length})</HeaderMoviePeople>
                            <MovieBox movies={crew} />
                </MainWrapper>
            )}
        </>
    );
};

export default PersonPageDetails;