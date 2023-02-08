import React from "react";
import { Search } from "./Search";
import {
  Menu,
  Icon,
  Logo,
  Text,
  Wrapper,
  MenuItemLink,
  StyledLink,
} from "./styled";

export const Navigation = () => (
  <Wrapper>
    <StyledLink to="/">
      <Logo>
        <Icon>Icon</Icon>
        <Text>Movies Browser</Text>
      </Logo>
    </StyledLink>
    <Menu>
      <MenuItemLink to={"/popularMovies"}>Movies</MenuItemLink>
      <MenuItemLink to={"/people"}>People</MenuItemLink>
    </Menu>
    <Search />
  </Wrapper>
);
