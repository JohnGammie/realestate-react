import React from "react";
import { useLocation } from "react-router-dom";
import image1 from "../images/home-search.jpg";
import "./pages.css";

const ContactAgent = (props) => {
  const { state } = useLocation();
  return (
    <div className="contactAgentPage">
      <img src={image1} alt="" />
      <div>
        <p>{state.name}</p>
        <p>{state.phoneNumber}</p>
      </div>
    </div>
  );
};

export default ContactAgent;
