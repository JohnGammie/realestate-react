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
import { createSearchParams, useNavigate } from "react-router-dom";

const PropertyShowCase = (props) => {
  const navigate = useNavigate();
  if (props.property) {
    let streetAddress =
      props.property.address.streetNumber +
        " " +
        props?.property?.address?.streetName ?? "28  Test St";
    let suburb = props.property.address.suburb.name ?? "Test suburb";
    let agent = props.property.agent.name ?? "John Doe"; // @TODO agent not in the property database yet

    const viewProperty = () => {
      // redirect to page, new page can re-request property data with props.data.id
      let params = { id: props.property._id };
      navigate({
        pathname: "/property",
        search: `?${createSearchParams(params)}`,
      });
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
  } else {
    return <>Loading</>;
  }
};

export default PropertyShowCase;
