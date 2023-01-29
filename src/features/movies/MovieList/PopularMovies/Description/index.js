import React from "react";
import { Title, DescriptionWrapper, Year, TagsWraper, Tags } from "./styled";

const Description = () => (

<DescriptionWrapper>
  <Title>Mulan</Title>
  <Year>2020</Year>
  <TagsWraper>
    <Tags>Comedy</Tags>
    <Tags>Fantasy</Tags>
    <Tags>Action</Tags>
    <Tags>Family</Tags>
  </TagsWraper>
</DescriptionWrapper>

);

export default Description;
