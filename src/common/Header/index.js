import React from "react";
import { Wrapper } from "./styled";
import { Search } from "./Search";
import { Navigation } from "./Navigation";

const Header = () => (
  <Wrapper>
    <Navigation />
    <Search />
  </Wrapper>
);
export default Header;
