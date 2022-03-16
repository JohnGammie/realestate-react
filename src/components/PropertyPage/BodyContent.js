import React from "react";
import PropertyFeatures from "./PropertyFeatures";

const BodyContent = (props) => {
  return (
    <div>
      <h1>{props.description.title}</h1>
      <p>{props.description.content}</p>
      <div>
        <h1>Property Features</h1>
        <PropertyFeatures />
      </div>
    </div>
  );
};

export default BodyContent;
