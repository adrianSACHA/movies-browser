import React from "react";
import { toPeople, toPopularMovies } from "../../../core/App/routes";
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
                    <Text>Movies&nbsp;Browser</Text>
                </Logo>
            </StyledLink>
            <Menu>
                <MenuItemLink to={toPopularMovies}>Movies</MenuItemLink>
                <MenuItemLink to={toPeople}>People</MenuItemLink>
            </Menu>
            <Search />
        </Wrapper>
    </MainWrapper>
);