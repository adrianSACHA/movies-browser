import React from "react";
import {
    BackdropImageContainer,
    BackdropWrapper,
    BackdropInfoContainer,
    Rating,
    RateBig,
    RateSmall,
    Votes,
    LongTitle,
} from "./styled";
import { ReactComponent as Star } from "./images/Star.svg";

const Backdrop = (posterBig) => (
        <BackdropWrapper>
            <BackdropImageContainer image={posterBig}>
            <BackdropInfoContainer>
                <LongTitle>Mulan long title</LongTitle>
                <Rating>
                    <Star />
                    <RateBig>7,8</RateBig>
                    <RateSmall>/ 10</RateSmall>
                    <Votes>335 votes</Votes>
                </Rating>

            </BackdropInfoContainer>
            </BackdropImageContainer>
        </BackdropWrapper>
);

export default Backdrop;