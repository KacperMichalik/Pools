import "styled-components";

declare module "styled-components" {
  type Color = string;
  type FontWeight = number;
  export interface DefaultTheme {
    borderRadius: string;
    fontFamily: string;
    colors: {
      white: Color;
      blackDark: Color;
      blackLight: Color;
      primary: Color;
      greyDark: Color;
      greyLight: Color;
    };
    fontWeights: {
      light: FontWeight;
      regular: FontWeight;
      medium: FontWeight;
      semiBold: FontWeight;
      bold: FontWeight;
    };
  }
}
