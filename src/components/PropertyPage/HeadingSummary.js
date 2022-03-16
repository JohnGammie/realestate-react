import React from "react";
import {
  StyledHeadingSummary,
  HeadingDetails,
  Images,
  SmallerImages,
} from "../styles/PropertyPage";
import { currencyFormatter } from "../../helpers/currencyFormatter";

const HeadingSummary = (props) => {
  return (
    <StyledHeadingSummary>
      <HeadingDetails>
        <h1>
          {props.address.streetNumber} {props.address.streetName} ,{" "}
          {props.address.suburb.name} {props.address.suburb.state}{" "}
          {props.address.suburb.postcode}
        </h1>
        <h2>{currencyFormatter.format(props.price)}</h2>
        <div>Contact Agent</div>
      </HeadingDetails>
      <Images>
        <img src={props.image1} alt="" />
        <SmallerImages>
          <img src={props.image2} alt="" />
          <img src={props.image3} alt="" />
        </SmallerImages>
      </Images>
    </StyledHeadingSummary>
  );
};

export default HeadingSummary;
