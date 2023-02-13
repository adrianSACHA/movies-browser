
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { searchQueryParamName, useQueryParameter } from "../../../../common/Query/queryParameters";
import { fetchPeople, setQuery, selectStatus, setPage } from "../peopleListSlice";
import People from "./People";
import { Loading } from "../../../../common/states/Loading";
import { ErrorBox } from "../../../../common/states/ErrorBox";

const PopularPeople = () => {
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
        if (query !== null) {
            dispatch(setQuery(query));
        }
        dispatch(fetchPeople());
    }, [dispatch, page, query]);

    return {
        loading: <Loading />,
        success: <People />,
        error: <ErrorBox />,
    }[status];
};

export default PopularPeople;