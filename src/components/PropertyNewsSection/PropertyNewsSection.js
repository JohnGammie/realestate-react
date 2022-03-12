import React from "react";
import Card from "./Card";
import { Carousel } from "../styles/PropertyNewSection.styled";

const PropertyNewsSection = () => {
  return (
    <Carousel>
      <Card
        image="/assets/images/a-baby-monkey-sits-on-branches-and-smiles.jpg"
        title="Lorem ipsum dolor sit amet consectetur."
        readTime="4 mins read"
      />
      <Card
        image="/assets/images/a-baby-monkey-sits-on-branches-and-smiles.jpg"
        title="Lorem ipsum dolor sit amet consectetur."
        readTime="4 mins read"
      />
      <Card
        image="/assets/images/a-baby-monkey-sits-on-branches-and-smiles.jpg"
        title="Lorem ipsum dolor sit amet consectetur."
        readTime="4 mins read"
      />
    </Carousel>
  );
};

export default PropertyNewsSection;
