import React from "react";
import { Route, Routes, Navigate, HashRouter } from "react-router-dom";
import { GlobalStyle } from "./GlobalStyle";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme";
import { Navigation } from "../../common/Navigation";
import { toPopularMovies, toMoviePage, toPeople, toPerson } from "./routes";
import PopularMovies from "../../features/movies/MovieList/PopularMovies";
import MoviePage from "../../features/movies/MoviePage";
import PopularPeople from "../../features/people/PeopleList/PopularPeople";
import PersonPage from "../../features/people/PersonPage";


function App() {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <HashRouter>
                <Navigation />
                <Routes>
                    <Route path={toPopularMovies} element={<PopularMovies />} />
                    <Route path={toMoviePage} element={<MoviePage />} />
                    <Route path={toPeople} element={<PopularPeople />} />
                    <Route path={toPerson} element={<PersonPage />} />
                    <Route
                        path="/"
                        element={<Navigate replace to={toPopularMovies} />}
                    />
                </Routes>
            </HashRouter>
        </ThemeProvider>
    );
}

export default App;