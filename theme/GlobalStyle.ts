import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    @font-face {
        font-family: 'Space Grotesk';
        font-display: block;
        font-style: normal;
        font-weight: 400;
        src: url("../assets/fonts/SpaceGrotesk-Regular.ttf") format('opentype');
    }


    *, *::before, *::after {
        box-sizing: border-box;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    html {
        scroll-behavior:smooth;
    }

    body{
        background-color:${({ theme }) => theme.colors.blackDark};
        font-family: ${({ theme }) => theme.fontFamily};
        margin:0;
        padding: 0;
    }

    h1, h2, h3, h4, h5, h6, p{
        font-family: ${({ theme }) => theme.fontFamily};
        margin:0;
    }

`;
