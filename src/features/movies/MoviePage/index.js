import React from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Loading } from "../../../common/states/Loading";
import { ErrorBox } from "../../../common/states/ErrorBox";
import MoviePageDetails from "./Movie";
import {
    fetchMovieDetails,
    selectMovieStatus,
    setMovieId,
} from "./movieDetailsSlice";

const MoviePage = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const status = useSelector(selectMovieStatus);

    useEffect(() => {
        dispatch(fetchMovieDetails());
        dispatch(setMovieId(id));
    }, [id, dispatch]);

    return {
        loading: <Loading />,
        success: <MoviePageDetails />,
        error: <ErrorBox />,
    }[status];
};

export default MoviePage;