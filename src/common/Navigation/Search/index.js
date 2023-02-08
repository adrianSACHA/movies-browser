import { Loop, MainSearch, StyledInput, Wrapper } from "./styled";
import React from "react";

export const Search = () => (
  <Wrapper>
    <MainSearch>
    <Loop />
    <StyledInput placeholder="Search for movies..."/>
    </MainSearch>
  </Wrapper>
);
