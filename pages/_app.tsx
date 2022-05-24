import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../theme/GlobalStyle";
import { Theme } from "../theme/Theme";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />

      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default App;
