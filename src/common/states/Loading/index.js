import React from "react";
import { StyledSpinner, Wrapper } from "./styled";
import { Title } from "../../Title";

export const Loading = () => (
    <Wrapper>
        <Title title={"Loading..."} />
        <StyledSpinner />
    </Wrapper>
);
