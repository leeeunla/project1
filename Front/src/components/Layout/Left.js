import styled from "styled-components";

const StyledDiv = styled.div`
  width: 100%;
  background-color: lightgoldenrodyellow;
`;

const H2 = styled.div`
  color: white;
`;
export function Left() {
  return (
    <>
      <StyledDiv>
        <h1>Left</h1>
      </StyledDiv>

      <H2>hello</H2>
    </>
  );
}
