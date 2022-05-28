import { FC } from "react";
import { StyledH1, StyledH3, StyledH5, StyledText } from "./Typography.style";
import { HeadingType } from "./Typography.type";

const HeadingH1: FC<HeadingType> = ({ children, className }) => {
  return <StyledH1 className={className}>{children}</StyledH1>;
};

const HeadingH3: FC<HeadingType> = ({ children, className }) => {
  return <StyledH3 className={className}>{children}</StyledH3>;
};

const HeadingH5: FC<HeadingType> = ({ children, className }) => {
  return <StyledH5 className={className}>{children}</StyledH5>;
};

const Text: FC<HeadingType> = ({ children, className }) => {
  return <StyledText className={className}>{children}</StyledText>;
};

export { HeadingH1, HeadingH3, HeadingH5, Text };
