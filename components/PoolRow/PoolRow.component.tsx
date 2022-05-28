import Link from "next/link";
import { FC } from "react";
import { HeadingH3, HeadingH5 } from "../Typography/Typography.component";
import { StyledArrowButton, StyledLine, StyledWrapper } from "./PoolRow.style";
import { IPoolRow } from "./PoolRow.type";
import ArrowIcon from "../../assets/arrow.svg";
import Image from "next/image";

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

        <StyledArrowButton>
          <Image alt="arrow" src={ArrowIcon} />
        </StyledArrowButton>
      </StyledWrapper>
    </Link>
  );
};

export { PoolRow };
