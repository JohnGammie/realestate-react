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

const SearchMain = (props) => {
  const tabNames = ["Buy", "Rent", "Sold", "Address", "Agents"];
  const [activeTabName, setActiveTabName] = useState(tabNames[props.tab ?? 0]);
  const [inputText, setInputText] = useState("Box Hill");
  // @TODO need to build 'form-state' out of this object
  let searchQuery = {
    "activeTabName:": activeTabName,
    "inputText:": inputText,
  };

  const debugOutputSearchState = () => {
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

  const submitSearch = () => {
    console.log("TODO: Submit search");
    debugOutputSearchState();
  };

  return (
    <SearchContainer>
      <TabsContainer>{Tabs()}</TabsContainer>
      <SearchDetailsContainer>
        <SearchInput input={inputText} setInput={setInputText} />
        <SearchFilters />
        <SearchButton onClick={() => submitSearch()}>Search</SearchButton>
      </SearchDetailsContainer>
    </SearchContainer>
  );
};

export default SearchMain;
