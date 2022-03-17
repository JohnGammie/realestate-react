import React, { useEffect, useState } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import SearchResultPropertyCard from "../components/searchResultPropertyCard";
import "./pages.css";
import Footer from "../components/Footer";
import PropertyShowCase from "../components/PropertyShowCase";
import SearchResultsRefineFilters from "../components/SearchResultsRefineFilters";

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const [pageContent, setpageContent] = useState([]);
  const [activeTabName, setActiveTabName] = useState(
    searchParams.get("activeTabName")
  );
  const [suburbName, setSuburbName] = useState(searchParams.get("suburbName"));
  const [propertyType, setPropertyType] = useState(
    searchParams.get("propertyType")
  );
  const [priceMin, setPriceMin] = useState(searchParams.get("priceMin"));
  const [priceMax, setPriceMax] = useState(searchParams.get("priceMax"));

  const fetchSearchResults = async (sortQuery) => {
    if (!sortQuery) {
      document.getElementById("sortDropdown").selectedIndex = 0; // Data comes in unsorted. Reset the sorting options to default
    }

    await fetch(
      process.env.REACT_APP_API_URL +
        "/search" +
        `?searchType=${activeTabName}&suburbName=${suburbName}&propertyType=${propertyType}&priceMin=${priceMin}&priceMax=${priceMax}&sort=${sortQuery}`,
      {
        header: {
          Accept: "application/json",
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        setpageContent(data);
      });
  };

  const generatePageContent = () => {
    let contentCollection = [];

    pageContent.forEach((searchResult, index) => {
      contentCollection.push(
        // @TODO generate meaningful components from this json data
        <SearchResultPropertyCard
          key={index}
          data={searchResult}
        ></SearchResultPropertyCard>
      );
    });
    return contentCollection;
  };

  const generateMainColumnHeading = () => {
    let options = { Buy: "to Buy", Rent: "to Rent", Sold: "Sold" };
    let optionString = options[pageContent[0]?.listingType];

    return (
      <div>
        <h2>
          Properties {optionString} in {pageContent[0]?.address.suburb.name} ,{" "}
          {pageContent[0]?.address.suburb.state}{" "}
          {pageContent[0]?.address.suburb.postcode}
        </h2>
        <p>{pageContent.length} results</p>
        <div>
          <label>Sort</label>{" "}
          <select
            id="sortDropdown"
            onChange={(event) => getSortedResults(event.target.value)}
          >
            <option value="default">Most relevant</option>
            <option value="ascending">Price (Lowest - Highest)</option>
            <option value="descending">Price (Highest - Lowest)</option>
          </select>
        </div>
      </div>
    );
  };

  const getSortedResults = (sortQuery) => {
    fetchSearchResults(sortQuery);
  };

  const getRandomPropertyToShowCaseIndex = () => {
    return Math.floor(Math.random() * pageContent.length);
  };

  useEffect(() => {
    fetchSearchResults();
  }, []);

  return (
    <div id="searchResultPage">
      <SearchResultsRefineFilters
        properties={pageContent}
        propertyType={propertyType}
        setPropertyType={setPropertyType}
        priceMin={priceMin}
        setPriceMin={setPriceMin}
        priceMax={priceMax}
        setPriceMax={setPriceMax}
        submit={() => fetchSearchResults()}
        activeTabName={searchParams.get("activeTabName")}
        setActiveTabName={setActiveTabName}
        suburbName={suburbName}
        setSuburbName={setSuburbName}
        searchParams={searchParams}
        refetchData={fetchSearchResults}
      />
      <div id="searchResultPageContent">
        <div>
          {generateMainColumnHeading()}
          {generatePageContent()}
        </div>
        <div>
          <PropertyShowCase
            property={pageContent[getRandomPropertyToShowCaseIndex()]}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SearchResults;
