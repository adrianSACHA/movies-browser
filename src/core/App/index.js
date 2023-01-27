import React from "react";
import { GlobalStyle } from "./GlobalStyle";
import React from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme";
import { Normalize } from "styled-normalize";
import MoviesBrowser from "../../features/MoviesBrowser"
import { theme } from "./theme";
import Navigation from "../../Navigation";

function App() {

  return (
    <ThemeProvider theme={theme}>
      <Normalize />
      <GlobalStyle />
      <MoviesBrowser />
      <Navigation />
    </ThemeProvider>
  );
}

export default App;
