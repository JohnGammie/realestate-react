import React from "react";
import {
  SummarySection,
  SummaryGt,
  FilterSection,
  FilterSubSection,
} from "./styles/SearchResultsRefineFilters.styled";
import { useState } from "react";
import SearchFilterModal from "./SearchFilterModal";
import SearchInput from "./SearchInput";
import { createSearchParams, useNavigate } from "react-router-dom";

const SearchResultsRefineFilters = (props) => {
  const navigate = useNavigate();
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const submitSearch = (tabName, suburbName) => {
    let filterParams = {
      activeTabName: tabName,
      suburbName: suburbName ?? props.suburbName,
      propertyType: props.propertyType,
      priceMin: props.priceMin,
      priceMax: props.priceMax,
    };
    navigate({
      pathname: "/searchResults",
      search: `?${createSearchParams(filterParams)}`,
    });
    props.refetchData();
  };

  // @TODO make summary items clickable e.g. BUY > VIC > SUBURB each item will link to useful pages
  if (props.properties.length > 0) {
    return (
      <div>
        <SummarySection>
          {props.activeTabName} <SummaryGt>&gt;</SummaryGt>
          {props.properties[0].address.suburb.state} <SummaryGt>&gt;</SummaryGt>
          {props.properties[0].address.suburb.name}
        </SummarySection>
        <FilterSection>
          <FilterSubSection>
            <SearchInput
              input={props.suburbName}
              setInput={props.setSuburbName}
              submitSearch={(suburbName) => {
                props.setSuburbName(suburbName);
                submitSearch(props.activeTabName, suburbName);
              }}
            />
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
          submitSearch={(calledByChild, tabName) => {
            closeModal();
            submitSearch(tabName);
          }}
          activeTabName={props.activeTabName}
          setActiveTabName={props.setActiveTabName}
        />
      </div>
    );
  } else {
    return <>Loading</>;
  }
};

export default SearchResultsRefineFilters;
