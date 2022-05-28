import styled from "styled-components";

const StyledWrapper = styled.div`
  width: 80%;
  height: 100%;
  margin: 0 auto;
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10vh 0 10vh;
`;

const StyledSpan = styled.span`
  color: ${({ theme }) => theme.colors.primary};
`;

export { StyledWrapper, StyledSpan };
