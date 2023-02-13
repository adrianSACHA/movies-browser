import React from "react";
import { imgBackdrop } from "../../../../../common/catchApi/apiValue";
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

const Backdrop = ({ title, backdrop_path, rate, votes }) => {
    return (
        <>
            <BackdropWrapper >
                <BackdropContainer>
                    <Pleksa />
                    <BackdropImage src={`${imgBackdrop}${backdrop_path}`}
                        alt={`poster of ${title}`} />
                    <BackdropInfoContainer>
                        <LongTitle>{title}</LongTitle>
                        <Rating>
                            <StarIcon />
                            <RateBig>{rate.toFixed(1)}</RateBig>
                            <RateSmall>/ 10</RateSmall>
                            <Votes>{votes} votes</Votes>
                        </Rating>
                    </BackdropInfoContainer>
                </BackdropContainer>
            </BackdropWrapper>
        </>
    );
};

export default Backdrop;