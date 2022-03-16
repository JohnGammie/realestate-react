import React from "react";
import {
  SummarySection,
  SummaryGt,
  FilterSection,
  FilterSubSection,
} from "./styles/SearchResultsRefineFilters.styled";
import magnify from "../images/magnify.svg";
import { useState } from "react";
import SearchFilterModal from "./SearchFilterModal";

const SearchResultsRefineFilters = (props) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  // @TODO make summary items clickable e.g. BUY > VIC > SUBURB each item will link to useful pages
  if (props.properties.length > 0) {
    return (
      <div>
        <SummarySection>
          {props.searchQuery.activeTabName} <SummaryGt>&gt;</SummaryGt>
          {props.properties[0].address.suburb.state} <SummaryGt>&gt;</SummaryGt>
          {props.properties[0].address.suburb.name}
        </SummarySection>
        <FilterSection>
          <FilterSubSection>
            <img src={magnify} alt="" />
            <p>Address info</p>
          </FilterSubSection>
          <FilterSubSection>
            <div onClick={openModal}>Filter properties</div>
          </FilterSubSection>
        </FilterSection>
        <SearchFilterModal
          modalIsOpen={modalIsOpen}
          closeModal={closeModal}
          propertyType={props.propertyType}
          setPropertyType={(obj) => props.setPropertyType(obj)}
          priceMin={props.priceMin}
          setPriceMin={(obj) => props.setPriceMin(obj)}
          priceMax={props.priceMax}
          setPriceMax={(obj) => props.setPriceMax(obj)}
          submitSearch={() => {
            props.submit();
            closeModal();
          }}
          activeTabName={props.activeTabName}
        />
      </div>
    );
  } else {
    return <>Loading</>;
  }
};

export default SearchResultsRefineFilters;
