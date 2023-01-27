import { GlobalStyle } from "./GlobalStyle";
import React from "react";
import { ThemeProvider } from "styled-components";
import { Normalize } from "styled-normalize";
import { theme } from "./theme";
import Navigation from "../../Navigation";

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Normalize />
      <GlobalStyle />
      <Navigation />
    </ThemeProvider>
  );
};

export default App;
