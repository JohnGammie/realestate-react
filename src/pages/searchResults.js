import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

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
      contentCollection.push(
        // @TODO generate meaningful components from this json data
        <div key={index}>{JSON.stringify(searchResult)}</div>
      );
    });
    return contentCollection;
  };

  useEffect(() => {
    fetchSearchResults();
  }, []);

  return <div>{generatePageContent()}</div>;
};

export default SearchResults;
