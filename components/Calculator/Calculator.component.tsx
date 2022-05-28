import { FC, useState } from "react";

import { formatValue } from "../../utils";
import { HeadingH3, Text } from "../Typography/Typography.component";
import { HeadingClass } from "../Typography/Typography.type";
import {
  MainWrapper,
  CurrencyWrapper,
  CurrencyInfo,
  NameWrapper,
  BalanceWrapper,
  Input,
  SwapButtonWrapper,
  Circle,
} from "./Calculator.style";
import { CalculatorInferface } from "./Calculator.type.";

const Calculator: FC<CalculatorInferface> = ({ pool }) => {
  const [token0Value, setToken0Value] = useState(pool.token0Price);
  return (
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
          className="border"
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
          <Circle>
            <ButtonIcon src={IconSwap} />
          </Circle>
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
  );
};

export { Calculator };
