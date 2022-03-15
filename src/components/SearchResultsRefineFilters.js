import React from "react";
import {
  SummarySection,
  SummaryGt,
  FilterSection,
  FilterSubSection,
} from "./styles/SearchResultsRefineFilters.styled";
import magnify from "../images/magnify.svg";

const SearchResultsRefineFilters = (props) => {
  console.log(props);
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
            <div>Property Type</div>
            <div>Price</div>
          </FilterSubSection>
        </FilterSection>
      </div>
    );
  } else {
    return <>Loading</>;
  }
};

export default SearchResultsRefineFilters;
