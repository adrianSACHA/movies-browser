import React from "react";
import {
    StyledButton,
    IconArrowPrevious,
    IconArrowNext,
    Title,
} from "./styled";

export const ButtonPrev = ({ title, onClick, disabled, mobile }) => (
    <StyledButton disabled={disabled} onClick={onClick}>
        <IconArrowPrevious />
        <IconArrowPrevious mobile={mobile} hide="true" />
        <Title>{title}</Title>
    </StyledButton>
);

export const ButtonNext = ({ title, onClick, disabled, mobile }) => (
    <StyledButton disabled={disabled} onClick={onClick}>
        <Title>{title}</Title>
        <IconArrowNext />
        <IconArrowNext mobile={mobile} hide="true" />

    </StyledButton>
);
