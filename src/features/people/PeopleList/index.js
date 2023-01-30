import React from "react";
import { MainWrapper } from "../../../common/MainWrapper";
import { Title } from "../../../common/Title";
import poster from "./images/poster.jpg";
import {
  PeopleListWrapper,
  PersonWrapper,
  LinkToPersonPage,
  Image,
} from "./styled";

const PeopleList = () => (
  <MainWrapper>
    <Title>Popular people</Title>
    <PeopleListWrapper>
      <LinkToPersonPage to={"/people"}>
        <PersonWrapper>
          <Image src={poster} alt="" />
        </PersonWrapper>
      </LinkToPersonPage>
    </PeopleListWrapper>
  </MainWrapper>
);

export default PeopleList;
