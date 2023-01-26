import React from "react";
import {
    BackdropImage,
    BackdropWrapper,
    Pleksa,
    BackdropInfoContainer,
    Rating,
    RateBig,
    RateSmall,
    Votes,
    LongTitle,
} from "./styled";
import pleksa from "./images/pleksa.svg"
import posterBig from "./images/poster-big.png"
import { ReactComponent as Star } from "./images/Star.svg"

const Backdrop = () => (
    <BackdropWrapper>
        <Pleksa src={pleksa} alt="" />
        <BackdropInfoContainer>
            <LongTitle>Mulan long title</LongTitle>
            <Rating>
                <Star />
                <RateBig>7,8</RateBig>
                <RateSmall>/ 10</RateSmall>
            </Rating>
            <Votes>335 votes</Votes>
        </BackdropInfoContainer>
        <BackdropImage src={posterBig} alt="" />
    </BackdropWrapper>
);

export default Backdrop;