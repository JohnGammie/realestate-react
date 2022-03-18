import React from "react";
import {
  PropertyCard,
  PropertyPrice,
  PropertyCardItem,
  PropertyCardImage,
  PropertyCardText,
} from "./styles/searchResultPropertyCard.styled";
import image1 from "../images/home-search.jpg";
import image2 from "../images/flamingo-in-the-jungle.jpg";
import image3 from "../images/jungle-babbler-perched-on-stump.jpg";
import { currencyFormatter } from "../helpers/currencyFormatter";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate, createSearchParams } from "react-router-dom";

const SearchResultPropertyCard = (props) => {
  const navigate = useNavigate();

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
    // redirect to page, new page can re-request property data with props.data.id
    let params = { id: props.data._id };
    navigate({
      pathname: "/property",
      search: `?${createSearchParams(params)}`,
    });
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
    initialSlide: Math.floor(Math.random() * 3),
  };

  //   @TODO Add agent heading & image
  return (
    <PropertyCard>
      <Slider {...settings}>
        <PropertyCardImage
          src={image1}
          alt="imageplaceholder"
        ></PropertyCardImage>
        <PropertyCardImage
          src={image2}
          alt="imageplaceholder"
        ></PropertyCardImage>
        <PropertyCardImage
          src={image3}
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
