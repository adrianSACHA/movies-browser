import React from "react";
import {
    BackdropContainer,
    Pleksa,
    BackdropImage,
    BackdropWrapper,
    BackdropInfoContainer,
    StarIcon,
    Rating,
    RateBig,
    RateSmall,
    Votes,
    LongTitle,
} from "./styled";
import posterBig from "./images/poster-big.svg";

const Backdrop = () => (
    <BackdropWrapper>
        <BackdropContainer>
            <Pleksa />
            <BackdropImage src={posterBig} alt="" />
                <BackdropInfoContainer>
                    <LongTitle>Mulan long title</LongTitle>
                    <Rating>
                        <StarIcon />
                        <RateBig>7,8</RateBig>
                        <RateSmall>/ 10</RateSmall>
                        <Votes>335 votes</Votes>
                    </Rating>
                </BackdropInfoContainer>
        </BackdropContainer>
    </BackdropWrapper>
);

export default Backdrop;