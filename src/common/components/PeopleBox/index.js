import React from "react";
import {
    PeopleListWrapper,
    PersonWrapper,
    LinkToPersonPage,
    Image,
    Description,
    ImageBackground,
    Name,
    Function,
} from "./styled";

const PeopleBox = ({ people }) => (
    <PeopleListWrapper>
        {people.map((person) => (
            <LinkToPersonPage
                key={people.indexOf(person)}
                to={`/people/person/${person.id}`}
            >
                <PersonWrapper>
                    <ImageBackground>
                        {person.profile_path ? (
                            <Image
                                src={`https://image.tmdb.org/t/p/w500/${person.profile_path}`}
                            />
                        ) : (
                            <Image />
                        )}
                    </ImageBackground>
                    <Description>
                        <Name>{person.name}</Name>
                        {person.character && (
                            <Function>{person.character}</Function>
                        )}
                        {person.department && (
                            <Function>{person.department}</Function>
                        )}
                    </Description>
                </PersonWrapper>
            </LinkToPersonPage>
        ))}
    </PeopleListWrapper>
);

export default PeopleBox;
