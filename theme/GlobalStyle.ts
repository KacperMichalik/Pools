import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    h1, h2, h3, h4, h5, h6, p{
        font-family: ${({ theme }) => theme.fontFamily};
        margin:0;
    }
    body{
        background-color:${({ theme }) => theme.colors.blackDark};
        font-family: ${({ theme }) => theme.fontFamily};
        margin:0;
    }
`;
