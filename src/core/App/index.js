import React from "react";
import { Route, Routes, Navigate, HashRouter } from "react-router-dom";
import { GlobalStyle } from "./GlobalStyle";
import { ThemeProvider } from "styled-components";
import { Normalize } from "styled-normalize";
import { theme } from "./theme";
import Navigation from "../../common/Header/Navigation";
import { toPopularMovies, toMoviePage } from "./routes";
import PopularMovies from "../../features/MoviesBrowser/movies/MovieList/MovieListPage/PopularMovies";
import MoviePage from "../../features/MoviesBrowser/movies/MoviePage";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Normalize />
      <GlobalStyle />
      <HashRouter>
        <Navigation />
        <Routes>
          <Route path={toPopularMovies} element={<PopularMovies />} />
          <Route path={toMoviePage} element={<MoviePage />} />
          <Route path={"*"} element={<Navigate replace to="/popularmovies" />} />

        </Routes>
      </HashRouter>
    </ThemeProvider>
  );
}

export default App;
