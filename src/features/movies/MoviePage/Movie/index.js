import React from "react";
import { useSelector } from "react-redux";
import { selectMovieDetails, selectMovieCredits } from "../movieDetailsSlice";
import MovieTile from "./components/MovieTile";
import Backdrop from "./components/Backdrop";
import {
  HeaderMoviePeople
} from "../../../../common/components/Credits/styled";
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
        <MovieTile
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
          <HeaderMoviePeople>Cast</HeaderMoviePeople>
          <PeopleBox people={cast} />
        </MainWrapper>
      )}
      {crew.length > 0 && (
        <MainWrapper>
          <HeaderMoviePeople>Crew</HeaderMoviePeople>
          <PeopleBox people={crew} />
        </MainWrapper>
      )}
    </>
  );
};

export default MoviePageDetails;
