import React from "react";
import { useSelector } from "react-redux";
import {
    selectMovieDetails,
    selectMovieCredits,
} from "../movieDetailsSlice";
import MovieTile from "./components/MovieTile";
import Backdrop from "./components/Backdrop";
import MovieCast from "./components/MovieCast";
import MovieCrew from "./components/MovieCrew";



const MoviePageDetails = () => {
    const movie = useSelector(selectMovieDetails);
    const credits = useSelector(selectMovieCredits);

    return (
        <>
            {movie.backdrop_path && (
                <Backdrop
                    backdrop={movie.backdrop_path}
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

            {credits.cast && credits.cast.map((actor) => (
                < MovieCast
                    key={actor.credit_id}
                    path={actor.profile_path}
                    name={actor.original_name}
                    role={actor.character}
                    id={actor.id}
                />
            ))}
            {credits.crew > 0 && credits.crew.map((member) => (
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