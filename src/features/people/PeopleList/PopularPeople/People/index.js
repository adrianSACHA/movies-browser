import React from "react"; 
import { useSelector } from "react-redux";
import {
    selectPeople,
    selectTotalResults,
    selectTotalPages
} from "../../peopleListSlice";
import { useQueryParameter, searchQueryParamName } from "../../../../../common/Query/queryParameters";
import { Title } from "../../../../../common/Title";
import { MainWrapper } from "../../../../../common/MainWrapper";
import PeopleBox from "../../PeopleBox";
import { NoResults } from "../../../../../common/states/NoResults";
import { Footer } from "../../../../../common/Footer";


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
            <Title title={ !query ? "Popular People" : `Search result for "${query}" (${totalResults})`} />
              <PeopleBox people={people} /> 
          </MainWrapper>
          <Footer totalPages={totalPages} />
        </>
    );
};


export default People;
