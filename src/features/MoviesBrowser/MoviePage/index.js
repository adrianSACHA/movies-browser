import React from "react";
import MovieTile from "./MovieTile";
import Backdrop from "./Backdrop";
import MovieCast from "./MovieCast";

const MoviePage = () => (
    <>
        <Backdrop />
        <MovieTile />
        <MovieCast />
    </>
);

export default MoviePage;