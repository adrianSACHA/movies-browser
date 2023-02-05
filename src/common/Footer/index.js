import React from "react";
import {
  useQueryParameter,
  useReplaceQueryParameter,
} from "../Query/queryParameters";
import { Wrapper } from "./styled";

const Footer = ({ totalPages }) => {
  const queryParameter = +useQueryParameter("page");
  const page = queryParameter ? queryParameter : 1;
  const lastPageNumber = totalPages > 500 ? 500 : totalPages;

  const replaceQueryParameter = useReplaceQueryParameter();
  const setPage = (page) => {
    replaceQueryParameter({
      key: "page",
      value: page,
    });
  };

  const firstPage = () => {
    setPage(1);
  };
  const nextPage = () => {
    if (page < lastPageNumber) setPage(page +1);
  };
  const previousPage = () => {
    if(page !== 1) setPage(page - 1);
  };
  const lastPage = () => {
    setPage(lastPageNumber);
  };

  return (
    <Wrapper>
      <Button></Button>
      <Button></Button>
      <PaginationCounter>

      </PaginationCounter>
      <Button></Button>
      <Button></Button>
    </Wrapper>
  )
};
