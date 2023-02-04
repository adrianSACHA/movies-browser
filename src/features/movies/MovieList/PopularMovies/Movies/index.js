import React from "react";
import { useSelector } from "react-redux";
import {
  selectGenres,
  selectMovies,
  selectTotalResults,
} from "../../movieListSlice";
import {
  useQueryParameter,
  searchQueryParamName,
} from "../../../../../common/Query/queryParameters";
import { Title } from "../../../../../common/Title";
import { MainWrapper } from "../../../../../common/MainWrapper";
import MovieBox from "../../MovieBox";
import { NoResults } from "../../../../../common/states/NoResults";

const Movies = () => {
  const query = useQueryParameter(searchQueryParamName);
  const genres = useSelector(selectGenres);
  const movies = useSelector(selectMovies);
  const totalResults = useSelector(selectTotalResults);
  
  return totalResults === 0 ? (
    <NoResults />
  ) : (
    <>
      <MainWrapper>
        <Title titie={ !query ? "Popular Movies" : `Search result for "${query}" (${totalResults})`} />
        <MovieBox
          genres={genres}
          movies={movies}
        />
      </MainWrapper>
    </>
  );
};

export default Movies;
