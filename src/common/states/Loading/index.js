import React from "react";
import { StyledSpinner, Wrapper } from "./styled";
import { Title } from "../../Title";

export const Loading = () => (
  <Wrapper>
    <Title>Loading...</Title>
      <StyledSpinner />
  </Wrapper>
);
