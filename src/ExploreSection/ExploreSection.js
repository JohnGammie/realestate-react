import React from "react";
import { useState } from "react";
import {
  StyledExploreSection,
  Cards,
  Button,
  Buttons,
} from "../components/styles/ExploreSection.styled";
import Card from "./Card";

const ExploreSection = (props) => {
  const tabNames = ["Buying", "Renting", "Selling", "Researching"];
  const [activeTabName, setActiveTabName] = useState(tabNames[props.tab ?? 0]);
  const cardContent = require("./CardContent.json");

  const generateButtons = () => {
    const tabCollection = [];
    tabNames.forEach((tabName, index) => {
      let styleOfActiveButton = () => {
        if (tabName === activeTabName) {
          return {
            border: "2px solid black",
          };
        }
      };
      tabCollection.push(
        <Button
          key={index}
          onClick={() => setActiveTabName(tabName)}
          style={styleOfActiveButton()}
        >
          {tabName}
        </Button>
      );
    });
    return <>{tabCollection}</>;
  };

  const generateCards = () => {
    let cardsCollection = [];
    cardContent[activeTabName].forEach((card, index) => {
      cardsCollection.push(
        <Card
          key={activeTabName + index}
          title={card.title}
          content={card.content}
          linkText={card.linkText}
          linkUrl={card.linkUrl}
          image={card.image}
        ></Card>
      );
    });

    return cardsCollection;
  };

  return (
    <StyledExploreSection>
      <Buttons>{generateButtons()}</Buttons>
      <Cards>{generateCards()}</Cards>
    </StyledExploreSection>
  );
};

export default ExploreSection;
