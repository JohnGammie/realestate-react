import React from "react";
import {
  StyledAgentCard,
  AgentCardImage,
  AgentCardDetails,
} from "../styles/PropertyPage";

const AgentCard = (props) => {
  return (
    <StyledAgentCard>
      <AgentCardImage>
        <img src={props.image1} alt="" />
      </AgentCardImage>
      <AgentCardDetails>
        <div>John Doe</div>
        <div>5484798749849</div>
        <button>Contact</button>
      </AgentCardDetails>
      
    </StyledAgentCard>
  );
};

export default AgentCard;
