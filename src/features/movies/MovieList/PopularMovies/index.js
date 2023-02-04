import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  searchQueryParamName,
  useQueryParameter,
} from "../../../../common/Query/queryParameters";
import { fetchMovies, isQuery, selectStatus, setPage } from "../movieListSlice";
import { ErrorBox } from "../../../../common/states/ErrorBox";
import { Loading } from "../../../../common/states/Loading";
import Movies from "./Movies";

const PopularMovies = () => {
  const dispatch = useDispatch();
  const status = useSelector(selectStatus);
  const page = +useQueryParameter("page");
  const query = useQueryParameter(searchQueryParamName);

  useEffect(() => {
    if (!page) {
      dispatch(setPage(1));
    } else {
      dispatch(setPage(page));
    }
    dispatch(isQuery(query));
    dispatch(fetchMovies());
  }, [dispatch, page, query]);

  return {
    loading: <Loading />,
    succes: <Movies />,
    error: <ErrorBox />,
  }[status];
};

export default PopularMovies;
