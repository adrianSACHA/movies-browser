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
  MainWrapper,
} from "./styled";

export const Navigation = () => (
  <MainWrapper>
    <Wrapper>
      <StyledLink to="/">
        <Logo>
          <Icon />
          <Text>Movies Browser</Text>
        </Logo>
      </StyledLink>
      <Menu>
        <MenuItemLink to={"/movies"}>Movies</MenuItemLink>
        <MenuItemLink to={"/people"}>People</MenuItemLink>
      </Menu>
      <Search />
    </Wrapper>
  </MainWrapper>
);
