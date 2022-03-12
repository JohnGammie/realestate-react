import React, { useState } from "react";
import magnify from "../images/magnify.svg";
import {
  StyledSearchInput,
  Input,
  DropdownInput,
} from "./styles/SearchInput.styled";

export const SearchInput = (props) => {
  // @TODO get drop down data items from an API endpoint
  // @TODO possibly introduce state of the Select dropdown,
  // which is then also returnable to potential Parent components through a method call. (e.g. to build out the SearchMain overall query)
  return (
    <StyledSearchInput>
      <img src={magnify} alt="magnify" />
      {/* <Input
        type="text"
        placeholder={props.input}
        onInput={(e) => props.setInput(e.target.value)}
      /> */}
      <DropdownInput
        id="suburbs"
        name="suburbs"
        value={props.input}
        onChange={(e) => props.setInput(e.target.value)}
      >
        <option value="Box Hill">Box Hill</option>
        <option value="South Yarra">South Yarra</option>
        <option value="Carlton">Carlton</option>
        <option value="Fitzroy">Fitzroy</option>
      </DropdownInput>
    </StyledSearchInput>
  );
};

export default SearchInput;
