import React from "react";
import filters from "../images/filter.svg";
import { StyledSearchFilters } from "./styles/SearchFilters.styled";

const SearchFilters = (props) => {
  const openFiltersModal = () => {
    console.log("TODO: Implement filters modal form");
  };

  return (
    <StyledSearchFilters onClick={openFiltersModal}>
      <img src={filters} alt="filters" />
      <div>Filters</div>
    </StyledSearchFilters>
  );
};

export default SearchFilters;
