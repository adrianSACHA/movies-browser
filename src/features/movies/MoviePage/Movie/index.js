import React from "react";
import { useSelector } from "react-redux";
import {
    selectMovieDetails,
    selectMovieCredits,
} from "../movieDetailsSlice";
import MovieTile from "./components/MovieTile";
import Backdrop from "./components/Backdrop";
import {
    HeaderMoviePeople,
    ContainerMoviePeople,
    PersonLink,
    PersonName,
    PersonInfo,
    PersonImage,
} from "../../../../common/Credits/styled";
import { MainWrapper } from "../../../../common/MainWrapper";

const MoviePageDetails = () => {
    const movie = useSelector(selectMovieDetails);
    const credits = useSelector(selectMovieCredits);
    const cast = credits.cast;
    const crew = credits.crew;

    return (
        <>
            {movie.backdrop_path && (
                <Backdrop
                    backdrop_path={movie.backdrop_path}
                    title={movie.original_title}
                    rate={movie.vote_average}
                    votes={movie.vote_count}
                />
            )}
            {movie.poster_path && (
                <MovieTile
                    poster_path={movie.poster_path}
                    title={movie.original_title}
                    release={movie.release_date}
                    production={movie.production_countries}
                    genres={movie.genres}
                    rate={movie.vote_average}
                    votes={movie.vote_count}
                    description={movie.overview}
                />
            )}
            {cast.length > 0 && (
                <MainWrapper>
                    <HeaderMoviePeople>Cast</HeaderMoviePeople>
                    <ContainerMoviePeople>
                        {cast.map((actor) =>
                            <PersonLink key={actor.id}
                            >
                                {actor.profile_path && (
                                    <PersonImage src={`https://image.tmdb.org/t/p/w500/${actor.profile_path}`} alt="" />
                                )}
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
                    <HeaderMoviePeople>Crew</HeaderMoviePeople>
                    <ContainerMoviePeople>
                        {crew.map((member) =>
                            <PersonLink key={member.id}
                            >
                                {member.profile_path && (
                                    <PersonImage src={`https://image.tmdb.org/t/p/w500/${member.profile_path}`} alt="" />
                                )}
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