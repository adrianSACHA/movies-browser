import React from "react";
import {
  useQueryParameter,
  searchQueryParamName,
} from "../../Query/queryParameters";
import { StyledSpinner, TitleWrapper, WrappedSpinner, Wrapper } from "./styled";
import { Title } from "../../components/Title";

export const Loading = () => {
  const query = useQueryParameter(searchQueryParamName);

  return (
    <Wrapper>
      <TitleWrapper>
        <Title title={!query ? "" : `Search results for "${query}"`} />
      </TitleWrapper>
      <WrappedSpinner>
        <StyledSpinner />
      </WrappedSpinner>
    </Wrapper>
  );
};
