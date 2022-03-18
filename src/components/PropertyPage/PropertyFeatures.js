import React from "react";
import { useEffect } from "react";
import { Feature } from "../styles/PropertyPage";
import { StyledPropertyFeatures } from "../styles/PropertyPage";

import dumbbellImage from "../../images/dumbbell.svg";
import swimImage from "../../images/swim.svg";
import bathtubImage from "../../images/bathtub-outline.svg";
import balconyImage from "../../images/balcony.svg";
import radiatorImage from "../../images/radiator.svg";
import fridgeImage from "../../images/fridge-outline.svg";
import secureImage from "../../images/lock.svg";
import intercomImage from "../../images/deskphone.svg";

// Define X features
// Displays 3 at random
const PropertyFeatures = () => {
  const featuresCollection = [];

  const gym = (
    <Feature>
      <img src={dumbbellImage} alt="" /> <p>Gym</p>
    </Feature>
  );

  const swimmingPool = (
    <Feature>
      <img src={swimImage} alt="" /> <p>Swimming pool</p>
    </Feature>
  );

  const bath = (
    <Feature>
      <img src={bathtubImage} alt="" /> <p>Bath</p>
    </Feature>
  );

  const balcony = (
    <Feature>
      <img src={balconyImage} alt="" /> <p>Balcony</p>
    </Feature>
  );

  const heating = (
    <Feature>
      <img src={radiatorImage} alt="" /> <p>Heating</p>
    </Feature>
  );

  const dishwasher = (
    <Feature>
      <img src={fridgeImage} alt="" />
      <p>Dishwasher</p>
    </Feature>
  );

  const secureParking = (
    <Feature>
      <img src={secureImage} alt="" /> <p>Secure parking</p>
    </Feature>
  );

  const intercom = (
    <Feature>
      <img src={intercomImage} alt="" /> <p>Intercom</p>
    </Feature>
  );

  featuresCollection.push(
    gym,
    swimmingPool,
    bath,
    balcony,
    heating,
    dishwasher,
    secureParking,
    intercom
  );

  const getThreeRandomFeatures = () => {
    const shuffled = featuresCollection.sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, 3);

    const collection = [];
    selected.map((feature, index) => {
      collection.push(<li key={index}>{feature}</li>);
    });

    return collection;
  };

  return (
    <StyledPropertyFeatures>
      <ul>{getThreeRandomFeatures()}</ul>
    </StyledPropertyFeatures>
  );
};

export default PropertyFeatures;
