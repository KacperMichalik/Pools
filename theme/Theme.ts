import { DefaultTheme } from "styled-components";

const Theme: DefaultTheme = {
  borderRadius: "10px",
  fontFamily: `'Space Grotesk', monospace`,

  colors: {
    white: "#FFFFFF",
    blackDark: "#181A1D",
    blackLight: "#1C1E21",
    primary: "#F60663",
    greyDark: "#333333",
    greyLight: "#8E97A4",
  },
  fontWeights: {
    light: 300,
    regular: 400,
    medium: 500,
    semiBold: 600,
    bold: 700,
  },
};

export { Theme };
