import React from "react";
import { useSelector } from "react-redux";
import {
    selectPersonDetails,
    selectPersonCredits,
} from "../personDetailsSlice";
import PersonTile from "./PersonTile";
import { Title } from "../../../../common/components/Title";
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
                    <Title title={`Movies - cast (${cast.length})`} />
                        <MovieBox movies={cast} />
                </MainWrapper>
            )}
            {crew.length > 0 && (
                <MainWrapper>
                    <Title title={`Movies - crew (${crew.length})`} />
                            <MovieBox movies={crew} />
                </MainWrapper>
            )}
        </>
    );
};

export default PersonPageDetails;