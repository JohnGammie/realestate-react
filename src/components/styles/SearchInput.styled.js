import styled from "styled-components";

export const StyledSearchInput = styled.div`
  display: flex;
  //   border: 1px blue solid;
  gap: 0.25em;

  border-radius: 10px;

  &:hover {
    background-color: lightgrey;
  }
`;

export const Input = styled.input`
  border: none;
  background-color: inherit;
  width: 100%;

  &:focus {
    outline: none;
  }
`;
