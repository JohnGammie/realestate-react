import React from "react";
import {
  CardTitle,
  CardReadTime,
  StyledCard,
} from "../styles/PropertyNewSection.styled";

const Card = (props) => {
  const handleCardClick = () => {
    console.log(`card clicked: ${props.title}`);
    // @TODO redirect to article
  };

  return (
    <StyledCard onClick={() => handleCardClick()}>
      <img src={props.image} alt="" />
      <CardTitle>{props.title}</CardTitle>
      <CardReadTime>{props.readTime}</CardReadTime>
    </StyledCard>
  );
};

export default Card;
