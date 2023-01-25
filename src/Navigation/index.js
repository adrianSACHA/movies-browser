import React from "react";
import { Menu, Icon, Logo, Text, Wrapper, MenuItem, Search } from "./style";

const Navigation = () => (
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
);
export default Navigation;
