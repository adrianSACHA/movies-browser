import React from "react";
import { imgBackdrop } from "../../../../../../common/catchApi/apiValue";
import {
    BackdropContainer,
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

const Backdrop = ({title, backdrop_path, vote_average, vote_count}) => {
    return (
        <>
        <BackdropWrapper >
            <BackdropContainer>
                <BackdropImage src={`${imgBackdrop}${backdrop_path}`}
              alt={`poster of ${title}`}/>
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
            </BackdropWrapper>
        </>
    );
};

export default Backdrop;