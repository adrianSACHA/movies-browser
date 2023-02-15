
import React from "react";
import { Header, PictureWrapper, Picture } from "./styled";
import { MainWrapper } from "../../components/MainWrapper";
import { searchQueryParamName, useQueryParameter } from "../../Query/queryParameters";

export const NoResults = () => {
    const query = useQueryParameter(searchQueryParamName);

    return (
        <MainWrapper>
            <Header>{`Sorry, there are no results for "${query}"`}</Header>
            <PictureWrapper>
                <Picture />
            </PictureWrapper>
        </MainWrapper>
    );
};