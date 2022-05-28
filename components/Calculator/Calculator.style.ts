import styled from "styled-components";

const StyledSectionWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: left;
  margin: 10vh 0 10vh;
  border-radius: ${({ theme }) => theme.borderRadius};
`;

const StyledContentWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 32px;
  display: flex;
  margin: 10vh 0 10vh;
  border-radius: ${({ theme }) => theme.borderRadius};
  border: 1px solid ${({ theme }) => theme.colors.greyDark};
`;

const StyledWrapper = styled.div`
  width: 100%;
  /* height: 100%; */
  border-radius: ${({ theme }) => theme.borderRadius};
  border: 1px solid ${({ theme }) => theme.colors.greyDark};
  background: ${({ theme }) => theme.colors.blackLight};
  /* margin-bottom: 50px; */
  padding: 16px 32px;
  display: grid;
  /* grid-template-rows: 1fr; */
  justify-content: center;
  align-items: center;
  /* grid-gap: 32px; */
  /* grid-template-columns: 2fr 2fr 2fr 1fr; */
`;

const StyledCardWrapper = styled.div`
  width: 100%;
`;

export { StyledWrapper, StyledSectionWrapper, StyledContentWrapper };
