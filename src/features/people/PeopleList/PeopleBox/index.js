import React from "react";
import {
  PeopleListWrapper,
  PersonWrapper,
  LinkToPersonPage,
  Image,
} from "./styled";

const PeopleBox = ({ page, query, people }) => (
  <PeopleListWrapper>
    {people.map((person) => (
    <LinkToPersonPage
      key={people.indexOf(person)} 
      to={`/people/person/${person.id}`}
      >

      <PersonWrapper>
        <ImageBackground>
          {path ? (
            <Image src={`https://image.tmdb.org/t/p/w500/${path}`} 
            />
          ) : (
            <Image />
          )}
        </ImageBackground>
        <Description>
          <Name>{name}</Name>
          <Role>{role}</Role>
        </Description>
        
      </PersonWrapper>
    </LinkToPersonPage>
    ))}
  </PeopleListWrapper>
);

export default PeopleBox;
