import React from "react";
import {
  PropertyCard,
  PropertyPrice,
  PropertyCardItem,
  PropertyCardImage,
  PropertyCardText,
} from "./styles/searchResultPropertyCard.styled";
import image from "../images/home-search.jpg";
import image2 from "../images/flamingo-in-the-jungle.jpg";
import { currencyFormatter } from "../helpers/currencyFormatter";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SearchResultPropertyCard = (props) => {
  const addressProcess = () => {
    return (
      <>
        {props.data.address.streetNumber} {props.data.address.streetName} ,{" "}
        {props.data.address.suburb.name} {props.data.address.suburb.postcode}
      </>
    );
  };

  const formattedPrice = () => {
    return currencyFormatter.format(props.data.price);
  };

  const handleClick = () => {
    console.log("clicked");
    // redirect to page, new page can re-request property data with props.data.id
  };

  const NextArrowStyle = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          background: "grey",
          top: "65%",
          right: "5%",
        }}
        onClick={onClick}
      />
    );
  };

  var settings = {
    dots: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrowStyle />,
  };

  //   @TODO Add agent heading & image
  return (
    <PropertyCard>
      <Slider {...settings}>
        <PropertyCardImage
          src={image}
          alt="imageplaceholder"
        ></PropertyCardImage>
        <PropertyCardImage
          src={image2}
          alt="imageplaceholder"
        ></PropertyCardImage>
      </Slider>
      <PropertyCardText onClick={() => handleClick()}>
        <PropertyPrice>{formattedPrice()}</PropertyPrice>
        <PropertyCardItem>{addressProcess()}</PropertyCardItem>
        <PropertyCardItem>{props.data.propertyType}</PropertyCardItem>
      </PropertyCardText>
    </PropertyCard>
  );
};

export default SearchResultPropertyCard;
