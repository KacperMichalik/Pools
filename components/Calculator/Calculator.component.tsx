import Link from "next/link";
import { FC, useState } from "react";
import styled from "styled-components";
import { IPool } from "../../apollo/interfaces";
import { HeadingH1, HeadingH3, Text } from "../Typography/Typography.component";
import { HeadingClass } from "../Typography/Typography.type";
import {
  StyledContentWrapper,
  StyledSectionWrapper,
  StyledWrapper,
} from "./Calculator.style";
import { CalculatorInferface } from "./Calculator.type.";

const MainWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.blackDark};
  border-radius: 20px;
  border: 1px solid ${({ theme }) => theme.colors.greyDark};
  overflow: hidden;
  padding: 24px 24px 24px 40px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 1000px;
  margin: 40px 0;
`;

const CurrencyWrapper = styled.div`
  position: relative;
  text-align: left;
  padding-right: 40px;
  &.to {
    padding: 40px;
    padding-left: 72px;
    background-color: ${({ theme }) => theme.colors.blackLight};
    border: 1px solid ${({ theme }) => theme.colors.greyDark};
    border-radius: 20px;
  }
`;

const CurrencyInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const NameWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

const IconWrapper = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 100px;
  background-color: ${({ theme }) => theme.colors.greyDark};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 8px;
  &.to {
    background-color: ${({ theme }) => theme.colors.greyDark};
  }
`;

const BalanceWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const Icon = styled.img`
  width: 10px;
  height: 16px;
`;

const ButtonIcon = styled.img`
  width: 20px;
  height: 20px;
  margin: auto;
`;

const Input = styled.input`
  font-family: ${({ theme }) => theme.fontFamily};
  font-weight: 500;
  font-size: 30px;
  line-height: 40px;
  color: ${({ theme }) => theme.colors.white};
  background: none;
  border: none;
  margin: 40px 0;
  &:focus-visible {
    outline: none;
  }
`;

const SwapButtonWrapper = styled.div`
  width: 96px;
  height: 96px;
  border-radius: 100px;
  background-color: ${({ theme }) => theme.colors.greyDark};
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  left: -46px;
  top: 0;
  bottom: 0;
  margin: auto;
`;

const Circle = styled.div`
  width: 72px;
  height: 72px;
  border-radius: 100px;
  background-color: ${({ theme }) => theme.colors.primary};
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: auto;
  cursor: pointer;
  transition: 0.2s;
  &:hover {
    transform: scale(0.95);
  }
`;

const Calculator: FC<CalculatorInferface> = ({ pool }) => {
  const formatValue = (value: string) => {
    const dotIndex = value.indexOf(".");
    const formatedValue = value.substring(0, dotIndex + 4);
    return formatedValue;
  };

  const [token0Value, setToken0Value] = useState(pool.token0Price);
  return (
    <>
      <StyledSectionWrapper>
        <Link href={"/"}>
          <div>
            <HeadingH3>Back to main page</HeadingH3>
          </div>
        </Link>
        {/* <HeadingH3>Pool address : {pool.id}</HeadingH3> */}
        <MainWrapper>
          <CurrencyWrapper>
            <CurrencyInfo>
              <NameWrapper>
                <HeadingH3>{pool.token0.name}</HeadingH3>
              </NameWrapper>
              <BalanceWrapper>
                <Text className={HeadingClass.GREY}>
                  Decimals: {pool.token0.decimals}
                </Text>
              </BalanceWrapper>
            </CurrencyInfo>
            <Input
              value={token0Value}
              onChange={(event) => setToken0Value(event.target.value)}
            />
            <Text className={HeadingClass.GREY}>
              {`1 ${pool.token0.symbol} = ${formatValue(pool.token1Price)}
              ${pool.token1.symbol}`}
            </Text>
          </CurrencyWrapper>

          <CurrencyWrapper className="to">
            {/* <SwapButtonWrapper>
              <Circle><ButtonIcon src={IconSwap} /></Circle>
            </SwapButtonWrapper> */}
            <CurrencyInfo>
              <NameWrapper>
                <HeadingH3>{pool.token1.name}</HeadingH3>
              </NameWrapper>
              <BalanceWrapper>
                <Text className={HeadingClass.GREY}>
                  Decimals: {pool.token0.decimals}
                </Text>
              </BalanceWrapper>
            </CurrencyInfo>
            <Input
              disabled
              value={parseInt(token0Value) / parseInt(pool.token0Price)}
            />

            <Text className={HeadingClass.GREY}>
              {`1 ${pool.token1.symbol} = ${formatValue(pool.token0Price)}
              ${pool.token0.symbol}`}
            </Text>
          </CurrencyWrapper>
        </MainWrapper>
      </StyledSectionWrapper>
    </>
  );
};

export { Calculator };
