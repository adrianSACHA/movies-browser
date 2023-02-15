import React from "react";
import { Loop, MainSearch, StyledInput, Wrapper } from "./styled";
import {
    searchQueryParamName,
    useQueryParameter,
    useReplaceQueryParameter,
} from "../../../Query/queryParameters";
import { useLocation } from "react-router-dom";

export const Search = () => {
    const location = useLocation();
    const query = useQueryParameter(searchQueryParamName);
    const replaceQueryParameter = useReplaceQueryParameter();

    const onInputChange = ({ target }) => {
        replaceQueryParameter({
            key: searchQueryParamName,
            value: target.value.trim() !== "" ? target.value : undefined,
        });
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