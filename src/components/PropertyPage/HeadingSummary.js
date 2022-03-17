import React from "react";
import {
  StyledHeadingSummary,
  HeadingDetails,
  Images,
  SmallerImages,
} from "../styles/PropertyPage";
import { currencyFormatter } from "../../helpers/currencyFormatter";
import { useNavigate } from "react-router-dom";

const HeadingSummary = (props) => {
  const navigate = useNavigate();

  const navigateAgentContactPage = () => {
    console.log(props);
    navigate("/contact-agent", {
      state: { name: props.agent.name, phoneNumber: props.agent.phoneNumber },
    });
  };

  return (
    <StyledHeadingSummary>
      <HeadingDetails>
        <h1>
          {props.address.streetNumber} {props.address.streetName} ,{" "}
          {props.address.suburb.name} {props.address.suburb.state}{" "}
          {props.address.suburb.postcode}
        </h1>
        <h2>{currencyFormatter.format(props.price)}</h2>
        <div onClick={navigateAgentContactPage}>Contact Agent</div>
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
