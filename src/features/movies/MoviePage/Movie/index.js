import React from "react";
import { useSelector } from "react-redux";
import { selectMovieDetails, selectMovieCredits } from "../movieDetailsSlice";
import MovieTile from "./components/MovieTile";
import Backdrop from "./components/Backdrop";
import {
  HeaderMoviePeople,
  ContainerMoviePeople,
  PersonName,
  PersonInfo,
  PersonImage,
  PersonWrapper,
  LinkToPersonPage,
} from "../../../../common/Credits/styled";
import { MainWrapper } from "../../../../common/MainWrapper";
import picture from "../../../../common/Credits/Picture.svg";

const MoviePageDetails = () => {
  const movie = useSelector(selectMovieDetails);
  const credits = useSelector(selectMovieCredits);
  const cast = credits.cast;
  const crew = credits.crew;

  return (
    <>
      {movie.backdrop_path && (
        <Backdrop
          backdrop_path={movie.backdrop_path}
          title={movie.title}
          rate={movie.vote_average}
          votes={movie.vote_count}
        />
      )}
      {movie.poster_path && (
        <MovieTile
          poster_path={movie.poster_path}
          title={movie.title}
          release={movie.release_date}
          production={movie.production_countries}
          genres={movie.genres}
          rate={movie.vote_average}
          votes={movie.vote_count}
          description={movie.overview}
        />
      )}
      {cast.length > 0 && (
        <MainWrapper>
          <HeaderMoviePeople>Cast</HeaderMoviePeople>
          <ContainerMoviePeople>
            {cast.map((actor) => (
              <LinkToPersonPage
                key={actor.id}
                to={`/people/person/${actor.id}`}
              >
                <PersonWrapper>
                  {actor.profile_path ? (
                    <PersonImage
                      src={`https://image.tmdb.org/t/p/w500/${actor.profile_path}`}
                      alt=""
                    />
                  ) : (
                    <PersonImage src={picture} alt="" />
                  )}
                  {actor.name && <PersonName>{actor.name}</PersonName>}
                  {actor.character && (
                    <PersonInfo>{actor.character}</PersonInfo>
                  )}
                </PersonWrapper>
              </LinkToPersonPage>
            ))}
          </ContainerMoviePeople>
        </MainWrapper>
      )}
      {crew.length > 0 && (
        <MainWrapper>
          <HeaderMoviePeople>Crew</HeaderMoviePeople>
          <ContainerMoviePeople>
            {crew.map((member) => (
              <LinkToPersonPage
                key={member.id}
                to={`/people/person/${member.id}`}
              >
                <PersonWrapper>
                  {member.profile_path ? (
                    <PersonImage
                      src={`https://image.tmdb.org/t/p/w500/${member.profile_path}`}
                      alt=""
                    />
                  ) : (
                    <PersonImage src={picture} alt="" />
                  )}
                  {member.name && <PersonName>{member.name}</PersonName>}
                  {member.department && (
                    <PersonInfo>{member.department}</PersonInfo>
                  )}
                </PersonWrapper>
              </LinkToPersonPage>
            ))}
          </ContainerMoviePeople>
        </MainWrapper>
      )}
    </>
  );
};

export default MoviePageDetails;
