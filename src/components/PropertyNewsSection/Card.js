import React from "react";
import {
  CardTitle,
  CardReadTime,
  StyledCard,
} from "../styles/PropertyNewSection.styled";

const Card = (props) => {
  return (
    <StyledCard>
      <img src={props.image} alt="" />
      <CardTitle>{props.title}</CardTitle>
      <CardReadTime>{props.readTime}</CardReadTime>
    </StyledCard>
  );
};

export default Card;
