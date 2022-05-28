import styled from "styled-components";

const StyledWrapper = styled.div`
  width: 100%;
  border-radius: ${({ theme }) => theme.borderRadius};
  border: 1px solid ${({ theme }) => theme.colors.greyDark};
  background: ${({ theme }) => theme.colors.blackLight};
  margin-bottom: 50px;
  padding: 16px 32px;
  display: grid;
  grid-template-rows: 1fr;
  justify-content: center;
  align-items: center;
  grid-gap: 32px;
  grid-template-columns: 2fr 2fr 2fr 1fr;
`;

const StyledTextWrapper = styled.div`
  width: 100%;
`;

const StyledLine = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${({ theme }) => theme.colors.greyDark};
`;
const StyledArrowButton = styled.div`
  cursor: pointer;
  width: 40px;
  height: 40px;
  border-radius: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.colors.greyDark};
`;

const StyledPoolRows = styled.div`
  max-width: 768px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export {
  StyledWrapper,
  StyledLine,
  StyledArrowButton,
  StyledTextWrapper,
  StyledPoolRows,
};
