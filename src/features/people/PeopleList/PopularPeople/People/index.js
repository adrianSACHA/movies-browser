import React from "react";
import { useSelector } from "react-redux";
import {
    selectPeople,
    selectTotalResults,
    selectTotalPages
} from "../../peopleListSlice";
import { useQueryParameter, searchQueryParamName } from "../../../../../common/Query/queryParameters";
import { Title } from "../../../../../common/components/Title";
import { MainWrapper } from "../../../../../common/components/MainWrapper";


import PeopleBox from "../../../../../common/components/PeopleBox";

import { NoResults } from "../../../../../common/states/NoResults";
import { Footer } from "../../../../../common/components/Footer";

const People = () => {
    const query = useQueryParameter(searchQueryParamName);
    const totalPages = useSelector(selectTotalPages);
    const people = useSelector(selectPeople);
    const totalResults = useSelector(selectTotalResults);

    return totalResults === 0 ? (
        <NoResults />
    ) : (
        <>
            <MainWrapper>
                <Title title={!query ? "Popular People" : `Search result for "${query}" (${totalResults})`} />
                <PeopleBox people={people} />
            </MainWrapper>
            <Footer totalPages={totalPages} />
        </>
    );
};

export default People;