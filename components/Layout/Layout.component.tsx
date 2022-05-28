import Link from "next/link";
import { FC } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../../theme/GlobalStyle";
import { Theme } from "../../theme/Theme";
import { LayoutWrapper, StyledLogo } from "./Layout.style";
import { LayoutInterface } from "./Layout.type";

const Logo: FC = () => {
  return (
    <Link href={`/`}>
      <StyledLogo>pools</StyledLogo>
    </Link>
  );
};

const Layout: FC<LayoutInterface> = ({ children }) => {
  return (
    <>
      <ThemeProvider theme={Theme}>
        <GlobalStyle />
        <LayoutWrapper>
          <Logo />
          {children}
        </LayoutWrapper>
      </ThemeProvider>
    </>
  );
};

export { Layout };
