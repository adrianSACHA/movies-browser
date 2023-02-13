import React from "react";
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
  ImageWrapper,
} from "./styled";

const MovieBox = ({ genres, movies }) => (
  <MoviesListWrapper>
    {movies.map((movie) => (
      <LinkToMoviePage
        key={movies.indexOf(movie)}
        to={`/movies/movie/${movie.id}`}
      >
        <MovieWrapper>
          <ImageWrapper>
            {movie.poster_path ? (
              <Image
                src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                alt=""
              />
            ) : (
              <Image />
            )}
          </ImageWrapper>
          <DescriptionWrapper>
            {movie.title && <Title>{movie.title}</Title>}
            {movie.release_date && (movie.department || movie.character) ? (
              <GreySubtitle>
                {movie.department || movie.character} (
                {movie.release_date.slice(0, 4)})
              </GreySubtitle>
            ) : movie.release_date ? (
              <GreySubtitle>{movie.release_date.slice(0, 4)}</GreySubtitle>
            ) : movie.department || movie.character ? (
              <GreySubtitle>{movie.department || movie.character}</GreySubtitle>
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
            {movie.vote_average > 0 && (
              <RatingWrapper>
                <Star />
                <Rate>{movie.vote_average.toFixed(1)}</Rate>
                {movie.vote_count && (
                  <Votes>{`${movie.vote_count} votes`}</Votes>
                )}
              </RatingWrapper>
            )}
          </DescriptionWrapper>
        </MovieWrapper>
      </LinkToMoviePage>
    ))}
  </MoviesListWrapper>
);

export default MovieBox;
