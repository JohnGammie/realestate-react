import React from "react";
import { useNavigate } from "react-router-dom";
import {
  StyledAgentCard,
  AgentCardImage,
  AgentCardDetails,
} from "../styles/PropertyPage";

const AgentCard = (props) => {
  const navigate = useNavigate();

  const navigateAgentContactPage = () => {
    navigate("/contact-agent", {
      state: { name: props.agent.name, phoneNumber: props.agent.phoneNumber },
    });
  };

  return (
    <StyledAgentCard>
      <AgentCardImage>
        <img src={props.image1} alt="" />
      </AgentCardImage>
      <AgentCardDetails>
        <div>{props.agent.name}</div>
        <div>{props.agent.phoneNumber}</div>
        <button onClick={navigateAgentContactPage}>Contact</button>
      </AgentCardDetails>
    </StyledAgentCard>
  );
};

export default AgentCard;
