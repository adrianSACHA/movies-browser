import React from "react";
import {
    BackdropImageContainer,
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
import pleksa from "./images/pleksa.svg";
import posterBig from "./images/poster-big.png";
import { ReactComponent as Star } from "./images/Star.svg";

const Backdrop = () => (
    <BackdropWrapper>
        <BackdropImageContainer>
            <Pleksa src={pleksa} alt=""/>
        </BackdropImageContainer>
        <BackdropInfoContainer>
            <LongTitle>Mulan long title</LongTitle>
            <Rating>
                <Star />
                <RateBig>7,8</RateBig>
                <RateSmall>/ 10</RateSmall>
            </Rating>
            <Votes>335 votes</Votes>
        </BackdropInfoContainer>
        <BackdropImageContainer>
            <BackdropImage src={posterBig} alt="" />
        </BackdropImageContainer>
    </BackdropWrapper>
);

export default Backdrop;