import React from "react";
import { RatingWrapper, Star, Rate, Votes } from "./styled";

export const Rating = () => (
  <RatingWrapper>
    <Star />
    <Rate>8.6</Rate>
    <Votes>2567 votes</Votes>
  </RatingWrapper>
);