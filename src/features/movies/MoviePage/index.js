import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import {
    fetchMovieDetails,
    selectMovieId,
    selectMovieStatus,
    selectMovieCast,
    selectMovieCrew,
} from "./movieDetailsSlice";
import useQueryParameter from "../../../core/useQueryParameter";
import { Loading } from "../../../common/states/Loading";
import { ErrorBox } from "../../../common/states/ErrorBox";
import MovieTile from "./components/MovieTile";
import Backdrop from "./components/Backdrop";
import MovieCast from "./components/MovieCast";
import MovieCrew from "./components/MovieCrew";



const MoviePage = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const movie = useSelector(selectMovieId);
    const cast = useSelector(selectMovieCast);
    const crew = useSelector(selectMovieCrew);
    const stateOfStatus = useSelector(selectMovieStatus);
    const query = useQueryParameter("search");

    useEffect(() => {
        query = null && dispatch(fetchMovieDetails(id));
    }, [dispatch, id, query]);

    return (
        <>
            {stateOfStatus === "error" ? (
                <ErrorBox />
            ) : stateOfStatus !== "success" ? (
                <Loading />
            ) : query === null && (
                <>
                    {movie.map(({ original_title, vote_average, vote_count, backdrop_path, id }) => (
                        <Backdrop
                            key={id}
                            title={original_title}
                            rating={vote_average}
                            votes={vote_count}
                            backdrop_path={backdrop_path}
                        />
                    )
                    )}
                    {movie.map(({
                        id, 
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
                        key={id}
                        id={id}
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
                    <MovieCast />
                    <MovieCrew />
                </>
            )}
        </>
    );
};

export default MoviePage;