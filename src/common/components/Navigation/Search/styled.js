import styled from "styled-components";
import { ReactComponent as Search } from "./Search.svg";
import { DebounceInput } from "react-debounce-input";

export const Wrapper = styled.div`
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        flex-grow: 2;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileTiny}px) {
        width: 100%;
    }
`;

export const MainSearch = styled.div`
    min-width: 350px;
    display: flex;
    align-items: center;
    gap: 19px;
    background: ${({ theme }) => theme.colors.white};
    border-radius: 33px;
    border: 1px solid ${({ theme }) => theme.colors.mystic};
    height: 48px;
    flex-shrink: 2;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        min-width: auto;
        height: 44px;
        width: 100%;
        gap: 8px;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileTiny}px) {
        width: 100%;
    }
`;

export const Loop = styled(Search)`
    align-items: center;
    justify-content: center;
    width: 24px;
    height: 24px;
    margin: 15px 0 15px 26px;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        width: 12px;
        margin: 15px 0 15px 18px;
    }
`;

export const StyledInput = styled(DebounceInput)`
    font-weight: 400;
    font-size: 16px;
    line-height: 1.5;
    color: ${({ theme }) => theme.colors.waterloo};
    border: none;
    outline: 0;
    width: 100%;
    background-color: transparent;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        max-height: 44px;
        width: 100%;
        font-size: 13px;
    }
`;
