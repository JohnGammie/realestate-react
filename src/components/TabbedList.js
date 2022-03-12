import React, { useState } from "react";
import {
  TabList,
  TabListItem,
  TabListDescription,
  TabListLinkContainer,
  TabListLinkItem,
  TabListSection,
} from "./styles/TabbedList.styled";

const TabbedList = () => {
  let jsonFile = require("./TabbedList.json");

  const [activeTabIndex, setActiveTab] = useState(0);

  const generateTabs = () => {
    let tabsCollection = [];

    const highlightStyle = (index) => {
      if (index === activeTabIndex) {
        return { borderBottom: "2px solid red" };
      }
    };

    jsonFile.tabs.forEach((tab, index) => {
      tabsCollection.push(
        <TabListItem
          key={index}
          onClick={() => setActiveTab(index)}
          style={highlightStyle(index)}
        >
          {tab.tabName}
        </TabListItem>
      );
    });

    return <TabList>{tabsCollection}</TabList>;
  };

  const generateActiveTabContent = () => {
    let tabContent = jsonFile.tabs[activeTabIndex];
    let returnTabContents = [];

    tabContent.tabLinks.forEach((tabLink, index) => {
      returnTabContents.push(
        <TabListLinkItem key={index}>
          <a href={tabLink.url}>{tabLink.description}</a>
        </TabListLinkItem>
      );
    });

    return (
      <>
        <TabListDescription>{tabContent.tabDescription}</TabListDescription>
        <TabListLinkContainer>{returnTabContents}</TabListLinkContainer>
      </>
    );
  };

  return (
    <TabListSection>
      {generateTabs()}
      {generateActiveTabContent()}
    </TabListSection>
  );
};

export default TabbedList;
