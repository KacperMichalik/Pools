import styled from "styled-components";

const StyledH1 = styled.h1`
  font-size: 64px;
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  color: ${({ theme }) => theme.colors.white};
`;

const StyledH3 = styled.h3`
  font-size: 24px;
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  color: ${({ theme }) => theme.colors.white};
`;

const StyledH5 = styled.h5`
  font-size: 36px;
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  color: ${({ theme }) => theme.colors.white};
`;

const StyledText = styled.p`
  font-size: 16px;
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  color: ${({ theme }) => theme.colors.white};
  &.grey {
    color: ${({ theme }) => theme.colors.greyLight};
  }
`;

export { StyledH1, StyledH3, StyledH5, StyledText };
