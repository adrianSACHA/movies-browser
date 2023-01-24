import React from "react";
import { GlobalStyle } from "../../GlobalStyle";
import { ThemeProvider } from "styled-components";
import { theme } from "../../theme";
import { Normalize } from "styled-normalize";
import MoviesBrowser from "../../features/MoviesBrowser"

function App() {

  return (
    <ThemeProvider theme={theme}>
      <Normalize />
      <GlobalStyle />
      <MoviesBrowser />
    </ThemeProvider>
  );
}

export default App;
