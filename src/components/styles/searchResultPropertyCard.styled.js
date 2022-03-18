import styled from "styled-components";

export const PropertyCard = styled.div`
  border: 1px solid grey;
  margin: 12px 0px;
  max-width: 50vw;
  border-radius: 10px;
`;

export const PropertyCardImage = styled.img`
  width: 100%;
  height: 450px;
`;

export const PropertyPrice = styled.div`
  font-weight: bolder;
font-size 1.5em;
`;

export const PropertyCardItem = styled.div`
  padding: 6px 0px;
`;

export const PropertyCardText = styled.div`
  padding: 12px;

  :hover {
    background-color: gainsboro;
  }
`;
