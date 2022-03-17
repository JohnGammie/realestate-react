import React from "react";
import { useNavigate } from "react-router-dom";
import {
  CardTitle,
  CardReadTime,
  StyledCard,
} from "../styles/PropertyNewSection.styled";

const Card = (props) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(props.linkUrl);
  };

  return (
    <StyledCard>
      <img src={props.image} alt="" />
      <CardTitle onClick={() => handleCardClick()}>{props.title}</CardTitle>
      <CardReadTime>{props.readTime}</CardReadTime>
    </StyledCard>
  );
};

export default Card;
