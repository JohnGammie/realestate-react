import React from "react";
import filters from "../images/filter.svg";
import { StyledSearchFilters } from "./styles/SearchFilters.styled";
import { useState, useEffect } from "react";
import SearchFilterModal from "./SearchFilterModal";

const SearchFilters = (props) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [activeTabName, setActiveTabName] = useState(props.activeTabName);

  useEffect(() => {
    console.log("search filters: " + activeTabName);
  }, [activeTabName]);

  const openModal = () => {
    setActiveTabName(props.activeTabName);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <StyledSearchFilters>
      <div onClick={openModal}>
        <img src={filters} alt="filters" />
        <div>Filters</div>
      </div>

      <SearchFilterModal
        modalIsOpen={modalIsOpen}
        closeModal={closeModal}
        propertyType={props.propertyType}
        setPropertyType={(obj) => props.setPropertyType(obj)}
        priceMin={props.priceMin}
        setPriceMin={(obj) => props.setPriceMin(obj)}
        priceMax={props.priceMax}
        setPriceMax={(obj) => props.setPriceMax(obj)}
        submitSearch={props.submitSearch}
        activeTabName={activeTabName}
        setActiveTabName={props.setActiveTabName}
      />
    </StyledSearchFilters>
  );
};

export default SearchFilters;
