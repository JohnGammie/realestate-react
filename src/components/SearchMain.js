import React from "react";
import {
  TabsContainer,
  Tab,
  SearchDetailsContainer,
  SearchContainer,
  SearchButton,
} from "./styles/SearchMain.styled";
import SearchInput from "./SearchInput";
import SearchFilters from "./SearchFilters";
import { useState } from "react";
import { useEffect } from "react";

const SearchMain = (props) => {
  const tabNames = ["Buy", "Rent", "Sold", "Address", "Agents"];
  const [activeTabName, setActiveTabName] = useState(tabNames[props.tab ?? 0]);
  const [inputText, setInputText] = useState("Box Hill");
  // @TODO probably get these values form an API endpoint
  // @TODO need to build 'form-state' out of this object
  const [propertyType, setPropertyType] = useState("Any"); // use prop from parent, then null?? "House?""
  const [priceMin, setPriceMin] = useState(0);
  const [priceMax, setPriceMax] = useState(0);

  const debugOutputSearchState = () => {
    let searchQuery = {
      "activeTabName:": activeTabName,
      "inputText:": inputText,
      "propertyType:": propertyType,
      "priceMin:": priceMin,
      "priceMax:": priceMax,
    };

    console.log(searchQuery);
  };

  const Tabs = () => {
    let tabCollection = [];
    tabNames.forEach((tabName, index) => {
      let styleOfActiveTab = () => {
        if (tabName === activeTabName) {
          return {
            borderBottom: "1px solid red",
            transition: "border-bottom 0.5s",
          };
        }
      };
      tabCollection.push(
        <Tab
          key={index}
          onClick={() => setActiveTabName(tabName)}
          style={styleOfActiveTab()}
        >
          {tabName}
        </Tab>
      );
    });
    return <>{tabCollection}</>;
  };

  const submitSearch = (calledByChild, filterTabName) => {
    if (calledByChild) {
      console.log("calledByChild");
      setActiveTabName(filterTabName); // setState is async, so below logging of state doesn't get this straight away
    }
    console.log("TODO: Submit search");
    debugOutputSearchState();
  };

  return (
    <SearchContainer>
      <TabsContainer>{Tabs()}</TabsContainer>
      <SearchDetailsContainer>
        <SearchInput input={inputText} setInput={setInputText} />
        <SearchFilters
          propertyType={propertyType}
          setPropertyType={(obj) => setPropertyType(obj)}
          priceMin={priceMin}
          setPriceMin={(obj) => setPriceMin(obj)}
          priceMax={priceMax}
          setPriceMax={(obj) => setPriceMax(obj)}
          submitSearch={submitSearch}
        />
        <SearchButton onClick={() => submitSearch()}>Search</SearchButton>
      </SearchDetailsContainer>
    </SearchContainer>
  );
};

export default SearchMain;
