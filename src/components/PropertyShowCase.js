import React from "react";
import {
  StyledPropertyShowCase,
  SubImages,
  Description,
  Agent,
} from "./styles/PropertyShowCase.styled";

import image1 from "../images/home-search.jpg";
import image2 from "../images/flamingo-in-the-jungle.jpg";
import image3 from "../images/jungle-babbler-perched-on-stump.jpg";

// @TODO thinking this component gets fed props from the SearchResults page of a random item. including images?
const PropertyShowCase = (props) => {
  let streetAddress = props.x ?? "28  Test St";
  let suburb = props.suburb ?? "Test suburb";
  let agent = props.agent ?? "John Doe";

  const viewProperty = () => {
    console.log("clicked view property showcase");
    // @TODO imeplement view property showcase
  };

  return (
    <StyledPropertyShowCase>
      <h1>Property showcase</h1>
      <div>
        <img src={image1} alt="" />
        <SubImages>
          <img src={image2} alt="" />
          <img src={image3} alt="" />
        </SubImages>
        <Description>
          <p>{streetAddress}</p>
          <p>{suburb}</p>
          <button onClick={() => viewProperty()}>View property</button>
        </Description>
        <Agent>
          <p>{agent}</p>
          <img src={image1} alt="" />
        </Agent>
      </div>
    </StyledPropertyShowCase>
  );
};

export default PropertyShowCase;
