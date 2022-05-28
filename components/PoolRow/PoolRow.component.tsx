import Link from "next/link";
import { FC } from "react";
import {
  HeadingH1,
  HeadingH3,
  HeadingH5,
} from "../Typography/Typography.component";
import {
  StyledArrowButton,
  StyledLine,
  StyledTextWrapper,
  StyledWrapper,
} from "./PoolRow.style";
import { IPoolRow } from "./PoolRow.type";

const PoolRow: FC<IPoolRow> = ({
  id,
  token0Symbol,
  token1Symbol,
  priceRatio,
}) => {
  return (
    <Link href={`pools/${id}`}>
      <StyledWrapper>
        <HeadingH3>{token0Symbol + "/" + token1Symbol}</HeadingH3>

        <StyledLine />

        <HeadingH5>{priceRatio.substring(0, 7)}</HeadingH5>

        <StyledArrowButton />
      </StyledWrapper>
    </Link>
  );
};

export { PoolRow };
