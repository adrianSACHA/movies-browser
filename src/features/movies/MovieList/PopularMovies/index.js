import React from "react";
import { MainWrapper } from "../../../../common/MainWrapper";
import { Title } from "../../../../common/Title";
import poster from "./images/poster.jpg";
import { MoviesListWrapper, Image, MovieWrapper, LinkToMoviePage } from "./styled";
import Description from "./Description";
import { Rating } from "./Rating"; 
import { getMovies } from "../../../../common/catchApi/apiDownload";

const PopularMovies = () => (
  <MainWrapper>
    <Title>Popular Movies</Title>
    
      <MoviesListWrapper>
        <LinkToMoviePage to={"/movie/:id"}>
          <MovieWrapper>
            <Image src={poster} alt="" />
            <Description />
            <Rating />
          </MovieWrapper>
        </LinkToMoviePage>

        <LinkToMoviePage to={"/movie/:id"}>
          <MovieWrapper>
            <Image src={poster} alt="" />
            <Description />
            <Rating />
          </MovieWrapper>
        </LinkToMoviePage>

        <LinkToMoviePage to={"/movie/:id"}>
          <MovieWrapper>
            <Image src={poster} alt="" />
            <Description />
            <Rating />
          </MovieWrapper>
        </LinkToMoviePage>

        <LinkToMoviePage to={"/movie/:id"}>
          <MovieWrapper>
            <Image src={poster} alt="" />
            <Description />
            <Rating />
          </MovieWrapper>
        </LinkToMoviePage>

        <LinkToMoviePage to={"/movie/:id"}>
          <MovieWrapper>
            <Image src={poster} alt="" />
            <Description />
            <Rating />
          </MovieWrapper>
        </LinkToMoviePage>

        <LinkToMoviePage to={"/movie/:id"}>
          <MovieWrapper>
            <Image src={poster} alt="" />
            <Description />
            <Rating />
          </MovieWrapper>
        </LinkToMoviePage>

        <LinkToMoviePage to={"/movie/:id"}>
          <MovieWrapper>
            <Image src={poster} alt="" />
            <Description />
            <Rating />
          </MovieWrapper>
        </LinkToMoviePage>

        <LinkToMoviePage to={"/movie/:id"}>
          <MovieWrapper>
            <Image src={poster} alt="" />
            <Description />
            <Rating />
          </MovieWrapper>
        </LinkToMoviePage>
        
      </MoviesListWrapper>
  </MainWrapper>
      
    
);

export default PopularMovies;
