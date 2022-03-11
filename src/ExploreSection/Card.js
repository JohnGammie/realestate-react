import React from "react";
import { useState } from "react";
import {
  StyledCard,
  CardTitle,
  CardContent,
  CardLink,
} from "../components/styles/ExploreSection.styled";
import { useNavigate } from "react-router-dom";

const Card = (props) => {
  const navigate = useNavigate();
  const [highLightedCard, setHighLightedCard] = useState(false);

  const highlightLink = () => {
    setHighLightedCard(true);
  };

  const unhighlightLink = () => {
    setHighLightedCard(false);
  };

  const applyHightlightStyle = () => {
    return highLightedCard ? { textDecoration: "underline" } : {};
  };

  return (
    <StyledCard
      onMouseEnter={highlightLink}
      onMouseLeave={unhighlightLink}
      onClick={() => navigate(props.linkUrl)}
    >
      <img src={props.image} alt="cardImage" />
      <CardTitle>{props.title}</CardTitle>
      <CardContent>{props.content}</CardContent>
      <CardLink style={applyHightlightStyle()}>{props.linkText}</CardLink>
    </StyledCard>
  );
};

export default Card;
