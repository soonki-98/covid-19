import styled from "styled-components";

export const StyledList = styled.ul<{
  direction: string;
}>`
  display: flex;
  flex-direction: ${(props) => props.direction === "col" && "column"};
  margin: 0;
  padding: 0;
  list-style: none;
`;
