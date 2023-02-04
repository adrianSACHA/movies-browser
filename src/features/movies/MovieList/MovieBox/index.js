import React from "react";
import { MainWrapper } from "../../../../common/MainWrapper";
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
  GreySubtitle,
  TagsWraper,
  Tag,
} from "./styled";

const MovieBox = ({ genres, movies }) => (
  <MainWrapper>
    {movies.map((movie) => (
      <MoviesListWrapper>
        <LinkToMoviePage
          key={movies.indexOf(movie)}
          to={`/movie/:id${movie.id}`}
        >
          <MovieWrapper>
            {movie.poster_path ? (
              <Image
                src={`https://image.tmbd.org/t/p/original/${movie.poster_path}`}
                alt=""
              />
            ) : (
              <Image />
            )}
            <DescriptionWrapper>
              {movie.title && <Title>{movie.title}</Title>}
              {movie.release_date && (movie.department || movie.charakter) ? (
                <GreySubtitle>
                  {movie.department || movie.character} (
                  {movie.release_date.slice(0, 4)})
                </GreySubtitle>
              ) : movie.release_date ? (
                <GreySubtitle>{movie.release_date.slice(0, 4)}</GreySubtitle>
              ) : movie.department || movie.character ? (
                <GreySubtitle>
                  {movie.department || movie.character}
                </GreySubtitle>
              ) : null}
              {movie.genre_ids && genres ? (
                <TagsWraper>
                  {movie.genre_ids.map((genre_id) => (
                    <Tag key={genre_id}>
                      {genres.find((genre) => genre.id === genre_id).name}
                    </Tag>
                  ))}
                </TagsWraper>
              ) : (
                ""
              )}
            </DescriptionWrapper>
            {movie.vote_average > 0 && (
              <RatingWrapper>
                <Star />
                <Rate>{movie.vote_average.toFixed(2)}</Rate>
                {movie.vote_count && (
                  <Votes>{`${movie.vote_count} votes`}</Votes>
                )}
              </RatingWrapper>
            )}
          </MovieWrapper>
        </LinkToMoviePage>
      </MoviesListWrapper>
    ))}
  </MainWrapper>
);

export default MovieBox;