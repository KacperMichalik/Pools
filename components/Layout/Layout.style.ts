import styled from "styled-components";

const LayoutWrapper = styled.div`
  max-width: 1200px;
  height: 100%;
  margin: 0 auto;
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

const StyledLogo = styled.h2`
  cursor: pointer;
  display: block;
  font-size: 24px;
  position: absolute;
  text-shadow: 0px 4px 35px #f60663;
  left: 0;
  color: ${({ theme }) => theme.colors.primary};
`;

export { LayoutWrapper, StyledLogo };
