import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import SearchResultPropertyCard from "../components/searchResultPropertyCard";
import "./pages.css";
import Footer from "../components/Footer";

const SearchResults = () => {
  const { state } = useLocation();
  const [pageContent, setpageContent] = useState([]);

  const fetchSearchResults = async () => {
    console.log(state.searchQuery);
    await fetch(
      process.env.REACT_APP_API_URL +
        "/search" +
        `?searchType=${state.searchQuery.activeTabName}&suburbName=${state.searchQuery.suburbName}&propertyType=${state.searchQuery.propertyType}&priceMin=${state.searchQuery.priceMin}&priceMax=${state.searchQuery.priceMax}`,
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
      console.log(searchResult);
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

  const mainColumnHeading = () => {
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
        <div>Sort dropdown</div>
      </div>
    );
  };

  useEffect(() => {
    fetchSearchResults();
  }, []);

  return (
    <div>
      <div className="refineSearch">Refine search filters</div>
      <div id="searchResultPageContent">
        <div>
          {mainColumnHeading()}
          {generatePageContent()}
        </div>
        <div>
          Property Showcase. Choose 1 property at random to display here?
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SearchResults;
