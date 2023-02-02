import React from "react";
import MovieTile from "./components/MovieTile";
import Backdrop from "./components/Backdrop";
import MovieCast from "./components/MovieCast";

const MoviePage = () => (
    <>
        <Backdrop />
        <MovieTile />
        <MovieCast />
    </>
);

export default MoviePage;