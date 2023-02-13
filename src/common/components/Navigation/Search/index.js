import React from "react";
import { Loop, MainSearch, StyledInput, Wrapper } from "./styled";
import {
    searchQueryParamName,
    useQueryParameter,
    useReplaceQueryParameter,
} from "../../../Query/queryParameters";
import { createSearchParams, useLocation, useNavigate } from "react-router-dom";
import {
    toPopularMovies,
    toMoviePage,
    toPeople,
    toPerson,
} from "../../../../core/App/routes";

export const Search = () => {
    const location = useLocation();
    const query = useQueryParameter(searchQueryParamName);
    const replaceQueryParameter = useReplaceQueryParameter();
    const navigate = useNavigate();

    const setPage = (page) => {
        replaceQueryParameter({
            key: "page",
            value: page,
        });
    };

    const onInputChange = ({ target }) => {
        if (location.pathname.split("/")[1] === toMoviePage.split("/")[1]) {
            navigate({
                pathname: toPopularMovies,
                search: createSearchParams({
                    [searchQueryParamName]: target.value,
                }).toString(),
            });
        } else if (location.pathname.split("/")[1] === toPerson.split("/")[1]) {
            navigate({
                pathname: toPeople,
                search: createSearchParams({
                    [searchQueryParamName]: target.value,
                }).toString(),
            });
        } else {
            setPage(1);
            replaceQueryParameter({
                key: searchQueryParamName,
                value: target.value.trim() !== "" ? target.value : "",
            });
        }
    };

    return (
        <Wrapper>
            <MainSearch>
                <Loop />
                <StyledInput
                    placeholder={
                        location.pathname.includes("people")
                            ? "Search for people..."
                            : "Search for movies..."
                    }
                    value={query || ""}
                    onChange={onInputChange}
                />
            </MainSearch>
        </Wrapper>
    );
};

export default Search;