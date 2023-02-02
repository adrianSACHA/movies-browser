import React from "react";
import { MainWrapper } from "../../../../common/MainWrapper";
import { Title } from "../../../../common/Title";
import poster from "./images/poster.jpg";
import {
  MoviesListWrapper,
  Image,
  MovieWrapper,
  LinkToMoviePage,
  RatingWrapper,
  Star,
  Rate,
  Votes, 
  Title, 
  DescriptionWrapper, 
  Year, 
  TagsWraper, 
  Tag,
} from "./styled";

const MovieBox = () => (
  <MainWrapper>
    <Title>Popular Movies</Title>
    <MoviesListWrapper>
      <LinkToMoviePage to={"/movie/:id"}>
        <MovieWrapper>
          <Image src={poster} alt="" />
          <DescriptionWrapper>
            <Title>Mulan</Title>
            <Year>2020</Year>
            <TagsWraper>
              <Tag>Comedy</Tag>
              <Tag>Fantasy</Tag>
              <Tag>Action</Tag>
              <Tag>Family</Tag>
            </TagsWraper>
          </DescriptionWrapper>
          <RatingWrapper>
            <Star />
            <Rate>8.6</Rate>
            <Votes>2567 votes</Votes>
          </RatingWrapper>
        </MovieWrapper>
      </LinkToMoviePage>
    </MoviesListWrapper>
  </MainWrapper>
);

export default MovieBox;
