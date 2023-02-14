import React from "react";
import { useQueryParameter, searchQueryParamName } from "../../Query/queryParameters";
import { StyledSpinner, Wrapper } from "./styled";
import { Title } from "../../components/Title";

export const Loading = () => {
    const query = useQueryParameter(searchQueryParamName);

    return (
    <Wrapper>
        <Title title={!query ? "Loading..." : `Search result for "${query}"`} />
        <StyledSpinner />
    </Wrapper>
    );
};
