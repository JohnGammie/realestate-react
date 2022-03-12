import React, { useEffect, useState } from "react";
import magnify from "../images/magnify.svg";
import { StyledSearchInput, DropdownInput } from "./styles/SearchInput.styled";

export const SearchInput = (props) => {
  const [options, setOptions] = useState([]);

  const fetchOptions = async () => {
    await fetch(process.env.REACT_APP_API_URL + "/search/suburbs", {
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setOptions(data.map((item) => item.name));
      });
  };

  useEffect(() => {
    fetchOptions();
  }, []);

  const generateOptions = () => {
    let collection = [];
    options.forEach((item, index) =>
      collection.push(
        <option key={index} value={item}>
          {item}
        </option>
      )
    );
    return collection;
  };

  return (
    <StyledSearchInput>
      <img src={magnify} alt="magnify" />
      <DropdownInput
        id="suburbs"
        name="suburbs"
        value={props.input}
        onChange={(e) => props.setInput(e.target.value)}
      >
        {generateOptions()}
      </DropdownInput>
    </StyledSearchInput>
  );
};

export default SearchInput;
