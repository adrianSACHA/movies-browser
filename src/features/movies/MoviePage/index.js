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



const MoviePage = () => {
    const dispatch = useDispatch();
    const {id} = useParams();
    const movieId = useSelector(selectMovieId);
    const cast = useSelector(selectMovieCast);
    const crew = useSelector(selectMovieCrew);
    const stateLoading = useSelector(selectMovieStatus);
    const query = useQueryParameter("search");

    useEffect(() => {
        query = null && dispatch(fetchMovieDetails(id));
    }, [dispatch, id, query]);

    return (
        <>
        {stateLoading === "loading" 
        ? (<Loading />) 
        : stateLoading === "error"}
        ? (<ErrorBox />)
        : query === null ?
            <Backdrop />
            <MovieTile />
            <MovieCast />
        </>
    )

};

export default MoviePage;