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


const imageURL = "https://image.tmdb.org/t/p";


const Backdrop = (title, rating, votes, backdrop_path) => {

    return (
        <>
            {backdrop_path && (
                <BackdropWrapper>
                    <BackdropContainer>
                        <Pleksa />
                        <BackdropImage src={`${imageURL}/w1280${backdrop_path}`} alt={`poster of ${title}`} />
                        <BackdropInfoContainer>
                            <LongTitle>{title}</LongTitle>
                            <Rating>
                                <StarIcon />
                                <RateBig>{rating}</RateBig>
                                <RateSmall>/ 10</RateSmall>
                                <Votes>{votes} votes</Votes>
                            </Rating>
                        </BackdropInfoContainer>
                    </BackdropContainer>
                </BackdropWrapper>
            )}
        </>
    );
};

export default Backdrop;