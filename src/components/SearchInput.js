import React from "react";
import magnify from "../images/magnify.svg";
import { StyledSearchInput, Input } from "./styles/SearchInput.styled";

export const SearchInput = (props) => {
  return (
    <StyledSearchInput>
      <img src={magnify} alt="magnify" />
      <Input
        type="text"
        placeholder={props.input}
        onInput={(e) => props.setInput(e.target.value)}
      />
    </StyledSearchInput>
  );
};

export default SearchInput;
