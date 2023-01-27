import React from "react";
import { GlobalStyle } from "./GlobalStyle";
import { ThemeProvider } from "styled-components";
import { Normalize } from "styled-normalize";
import MoviesBrowser from "../../features/MoviesBrowser"
import { theme } from "./theme";
import Navigation from "../../Navigation";

function App() {

  return (
    <ThemeProvider theme={theme}>
      <Normalize />
      <GlobalStyle />
      <Navigation />
      <MoviesBrowser />
    </ThemeProvider>
  );
}

export default App;
