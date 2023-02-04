
import React from "react";
import { PictureWrapper, Picture } from "./styled";
import { MainWrapper } from "../../MainWrapper";

export const NoResults = () => {
    return (
        <MainWrapper>
            <PictureWrapper>
                <Picture />
            </PictureWrapper>
        </MainWrapper>
    );
};