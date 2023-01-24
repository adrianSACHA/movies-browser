import { GlobalStyle } from "./GlobalStyle";
import { ThemeProvider } from "styled-components";
import { Normalize } from "styled-normalize";

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Normalize />
      <GlobalStyle />
      
    </ThemeProvider>
  );
};

export default App;
