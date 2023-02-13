import React from "react";
import { useSelector } from "react-redux";
import { selectMovieDetails, selectMovieCredits } from "../movieDetailsSlice";
import BigTile from "../../../../common/components/BigTile/index";
import Backdrop from "./Backdrop/index";
import { Title } from "../../../../common/components/Title";
import { MainWrapper } from "../../../../common/components/MainWrapper";
import PeopleBox from "../../../../common/components/PeopleBox";

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
                    title={movie.title}
                    rate={movie.vote_average}
                    votes={movie.vote_count}
                />
            )}
            {movie.poster_path && (
                <BigTile
                    poster_path={movie.poster_path}
                    title={movie.title}
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
                    <Title title={"Cast"} />
                    <PeopleBox people={cast} />
                </MainWrapper>
            )}
            {crew.length > 0 && (
                <MainWrapper>
                    <Title title={"Crew"} />
                    <PeopleBox people={crew} />
                </MainWrapper>
            )}
        </>
    );
};

export default MoviePageDetails;
