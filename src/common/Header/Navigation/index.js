import React from "react";
import { Menu, Icon, Logo, Text, Wrapper, MenuItemLink, Search } from "./styled";

const Navigation = () => (
  <Wrapper>
    <Logo>
      <Icon>Icon</Icon>
      <Text>Movies Browser</Text>
    </Logo>
    <Menu>
      <MenuItemLink to={"/popularmovies"}>Movies</MenuItemLink>
      <MenuItemLink to={"/people"}>People</MenuItemLink>
    </Menu>
    <Search />
  </Wrapper>
);
export default Navigation;
