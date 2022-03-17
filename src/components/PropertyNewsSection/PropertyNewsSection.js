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
        title="Melbourne prices continue to rise"
        readTime="4 mins read"
        linkUrl="/melbourne-prices"
      />
      <Card
        image="/assets/images/closeup-of-single-open-jungle-flower.jpg"
        title="Award winning designs now available"
        readTime="2 mins read"
        linkUrl="/award-winning-designs"
      />
      <Card
        image="/assets/images/lantern-lit-jungle-hut.jpg"
        title="Market Watch: Trouble in Sydney"
        readTime="3 mins read"
        linkUrl="/market-watch-sydney"
      />
      <Card
        image="/assets/images/man-wearing-loose-clothing-walks-through-jungle.jpg"
        title="Impact of South East Queensland floods"
        readTime="4 mins read"
        linkUrl="/impact-of-qld-floods"
      />
      <Card
        image="/assets/images/jungle-babbler-perched-on-stump.jpg"
        title="Ideas for your next investment"
        readTime="5 mins read"
        linkUrl="/ideas-for-investment"
      />
      <Card
        image="/assets/images/proud-parrot-on-jungle-tree-branch.jpg"
        title="How to Downsize"
        readTime="6 mins read"
        linkUrl="/downsize"
      />
    </Carousel>
  );
};

export default PropertyNewsSection;
