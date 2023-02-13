import React from "react";
import { StyledSpinner, Wrapper } from "./styled";
import { Title } from "../../components/Title";

export const Loading = () => (
    <Wrapper>
        <Title title={"Loading..."} />
        <StyledSpinner />
    </Wrapper>
);
