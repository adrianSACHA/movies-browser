import React from "react";
import { useSelector } from "react-redux";
import {
    selectGenres,
    selectMovies,
    selectTotalPages,
    selectTotalResults,
} from "../../movieListSlice";
import {
    useQueryParameter,
    searchQueryParamName,
} from "../../../../../common/Query/queryParameters";
import { Title } from "../../../../../common/components/Title";
import { MainWrapper } from "../../../../../common/components/MainWrapper";
import MovieBox from "../../../../../common/components/MovieBox";
import { NoResults } from "../../../../../common/states/NoResults";
import { Footer } from "../../../../../common/components/Footer";

const Movies = () => {
    const query = useQueryParameter(searchQueryParamName);
    const genres = useSelector(selectGenres);
    const movies = useSelector(selectMovies);
    const totalResults = useSelector(selectTotalResults);
    const totalPages = useSelector(selectTotalPages);

    return totalResults === 0 ? (
        <NoResults />
    ) : (
        <>
            <MainWrapper>
                <Title
                    title={
                        !query
                            ? "Popular Movies"
                            : `Search result for "${query}" (${totalResults})`
                    }
                />
                <MovieBox genres={genres} movies={movies} />
            </MainWrapper>
            <Footer totalPages={totalPages} />
        </>
    );
};

export default Movies;
