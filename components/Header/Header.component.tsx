import { FC } from "react";
import { HeadingH1 } from "../Typography/Typography.component";

import { StyledSpan, StyledWrapper } from "./Header.style";

const Header: FC = ({}) => {
  return (
    <StyledWrapper>
      <HeadingH1>
        Get <StyledSpan>pools</StyledSpan> info
      </HeadingH1>
    </StyledWrapper>
  );
};

export { Header };
