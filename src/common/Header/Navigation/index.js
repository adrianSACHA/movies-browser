import React from "react";
import {
  Menu,
  Icon,
  Logo,
  Text,
  Wrapper,
  MenuItem,
  Search,
  MainWrapper,
} from "./styled";

const Navigation = () => (
  <MainWrapper>
    <Wrapper>
      <Logo>
        <Icon>Icon</Icon>
        <Text>Movies Browser</Text>
      </Logo>
      <Menu>
        <MenuItem>Movies</MenuItem>
        <MenuItem>People</MenuItem>
      </Menu>
      <Search />
    </Wrapper>
  </MainWrapper>
);
export default Navigation;
