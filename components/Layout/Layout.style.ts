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
  display: block;
  font-size: 24px;
  position: absolute;
  text-shadow: 0px 4px 25px #f60663;
  margin-left: 0;
  left: 0;
  color: ${({ theme }) => theme.colors.primary};
`;

export { LayoutWrapper, StyledLogo };
