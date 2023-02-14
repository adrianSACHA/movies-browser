import React from "react";
import {
    useQueryParameter,
    useReplaceQueryParameter,
} from "../../Query/queryParameters";
import { ButtonPrev, ButtonNext } from "./Buttons";
import { CounterBox, Wrapper, Span } from "./styled";

export const Footer = ({ totalPages }) => {
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
        if (page < lastPageNumber) setPage(page + 1);
    };
    const previousPage = () => {
        if (page !== 1) setPage(page - 1);
    };
    const lastPage = () => {
        setPage(lastPageNumber);
    };

    return (
        <Wrapper>
            <ButtonPrev disabled={page === 1} onClick={firstPage} title="First" mobile="true" />
            <ButtonPrev disabled={page === 1} onClick={previousPage} title="Previous" />
            <CounterBox>
                Page <Span>{page}</Span> of <Span>{lastPageNumber}</Span>
            </CounterBox>
            <ButtonNext disabled={page === lastPageNumber} onClick={nextPage} title="Next" />
            <ButtonNext disabled={page === lastPageNumber} onClick={lastPage} title="Last" mobile="true" />
        </Wrapper>
    );
};
