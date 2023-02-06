import React from "react";
import { imgBaseUrl } from "../../../../../../common/catchApi/apiValue";
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

const Backdrop = ({ movie }) => (

        <BackdropWrapper>
            {movie.backdrop_path && movie.map((backdrop_path, title, vote_average, vote_count) => (
                <BackdropContainer>
                    <Pleksa />
                    <BackdropImage src={`${imgBaseUrl}/w1280${backdrop_path}`} alt={`poster of ${title}`} />
                    <BackdropInfoContainer>
                        <LongTitle>{title}</LongTitle>
                        <Rating>
                            <StarIcon />
                            <RateBig>{vote_average}</RateBig>
                            <RateSmall>/ 10</RateSmall>
                            <Votes>{vote_count} votes</Votes>
                        </Rating>
                    </BackdropInfoContainer>
                </BackdropContainer>
            ))}
        </BackdropWrapper>
);

export default Backdrop;