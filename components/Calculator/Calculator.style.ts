import styled from "styled-components";

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
  outline: none;
  margin: 40px 0;
  &:focus-visible {
    outline: none;
  }
  &.border {
    border: 2px solid ${({ theme }) => theme.colors.primary};
    border-radius: 10px;
    padding: 8px;
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

export {
  MainWrapper,
  CurrencyWrapper,
  CurrencyInfo,
  NameWrapper,
  IconWrapper,
  BalanceWrapper,
  Input,
  SwapButtonWrapper,
  Circle,
};
