import React from "react";
import { useSelector } from "react-redux";
import {
    selectMovieDetails,
    selectMovieCast,
    selectMovieCrew,
} from "../movieDetailsSlice";
import MovieTile from "./components/MovieTile";
import Backdrop from "./components/Backdrop";
import MovieCast from "./components/MovieCast";
import MovieCrew from "./components/MovieCrew";



const MoviePageDetails = () => {
    const movieDetails = useSelector(selectMovieDetails);
    const movieCrew = useSelector(selectMovieCrew);
    const movieCast = useSelector(selectMovieCast);

    return (
        <>
            {movieDetails.map(({ original_title, vote_average, vote_count, backdrop_path }) => (
                <Backdrop
                    title={original_title}
                    rating={vote_average}
                    votes={vote_count}
                    backdrop_path={backdrop_path}
                />
            )
            )}
            {movieDetails.map(({
                poster_path,
                title,
                release_date,
                production_countries,
                vote_average,
                vote_count,
                overview,
                genres,
            }) => (
                <MovieTile
                    poster_path={poster_path}
                    title={title}
                    release_date={release_date}
                    rating={vote_average}
                    votes={vote_count}
                    countries={production_countries}
                    article={overview}
                    genres={genres}
                />
            ))}
            {movieCast.lengh > 0 && movieCast.map((actor) => (
                < MovieCast 
                    key={actor.credit_id}
                    path={actor.profile_path}
                    name={actor.original_name}
                    role={actor.character}
                    id={actor.id}
                />
            ))}
            {movieCrew.lengh > 0 && movieCrew.map((member) => (
                <MovieCrew 
                    key={member.credit_id}
                    path={member.profile_path}
                    name={member.original_name}
                    role={member.job}
                    id={member.id}
                />
            ))}
        </>
    );
};

export default MoviePageDetails;