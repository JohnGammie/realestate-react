import styled from "styled-components";

export const StyledHeadingSummary = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  background-color: #f9f7fc;
  margin-bottom: 24px;
`;

export const HeadingDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 24px;

  div {
    border: 1px solid lightgrey;
    border-radius: 10px;
    padding: 12px 36px;
    text-align: center;
  }

  div:hover {
    border: 3px solid grey;
  }
`;

export const Images = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 4px;

  img {
    width: 100%;
    height: 100%;
  }
`;

export const SmallerImages = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;

  img {
    height: 100%;
  }
`;

export const StyledAgentCard = styled.div`
  border: 1px solid grey;
  border-radius: 10px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 12px;
`;

export const AgentCardImage = styled.div`
  img {
    width: 80px;
    height: 80px;
    border-radius: 50px;
  }
`;

export const AgentCardDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  & button {
    width: 100%;
    background-color: red;
    color: white;
    border-radius: 10px;
    border: none;
    font-size: 24px;
    padding: 4px 24px;
  }

  & button:hover {
    background-color: darkred;
  }
`;

export const Feature = styled.div`
  display: flex;
  gap: 8px;
`;

export const StyledPropertyFeatures = styled.div`
  font-weight: 100;

  li {
    list-style: none;
  }
`;
