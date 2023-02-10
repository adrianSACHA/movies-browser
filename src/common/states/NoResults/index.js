
import React from "react";
import { PictureWrapper, Picture } from "./styled";
import { MainWrapper } from "../../MainWrapper";
import { Title } from "../../Title/index";
import { searchQueryParamName, useQueryParameter } from "../../Query/queryParameters";

export const NoResults = () => {
const query = useQueryParameter(searchQueryParamName);

    return (
        <MainWrapper>
            <Title title={`Sorry, there are no result for "${query}"`}/>
            <PictureWrapper>
                <Picture />
            </PictureWrapper>
        </MainWrapper>
    );
};