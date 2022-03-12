import React from "react";
import Card from "./Card";
import { Carousel } from "../styles/PropertyNewSection.styled";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const PropertyNewsSection = () => {
  const NextArrowStyle = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "grey" }}
        onClick={onClick}
      />
    );
  };

  var settings = {
    dots: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrowStyle />,
  };

  return (
    <Carousel {...settings}>
      <Card
        image="/assets/images/a-baby-monkey-sits-on-branches-and-smiles.jpg"
        title="Title 1"
        readTime="4 mins read"
      />
      <Card
        image="/assets/images/a-baby-monkey-sits-on-branches-and-smiles.jpg"
        title="Title 2"
        readTime="4 mins read"
      />
      <Card
        image="/assets/images/a-baby-monkey-sits-on-branches-and-smiles.jpg"
        title="Title 3"
        readTime="4 mins read"
      />
      <Card
        image="/assets/images/a-baby-monkey-sits-on-branches-and-smiles.jpg"
        title="Title 4"
        readTime="4 mins read"
      />
      <Card
        image="/assets/images/a-baby-monkey-sits-on-branches-and-smiles.jpg"
        title="Title 5"
        readTime="4 mins read"
      />
      <Card
        image="/assets/images/a-baby-monkey-sits-on-branches-and-smiles.jpg"
        title="Title 6"
        readTime="4 mins read"
      />
    </Carousel>
  );
};

export default PropertyNewsSection;
