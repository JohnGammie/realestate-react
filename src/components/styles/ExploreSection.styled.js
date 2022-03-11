import styled from "styled-components";

export const StyledExploreSection = styled.div`
  display: flex;
  flex-direction: column;
  height: 40vh;
`;

export const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 8px;
`;

export const StyledCard = styled.div`
  border: 1px solid lightgrey;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 8px;

  border-radius: 5px;

  & img {
    display: flex;
    align-self: center;
    width: 120px;
    height: 120px;
  }
`;

export const CardTitle = styled.div`
  font-weight: bolder;
  font-size: 24px;
  padding: 8px;
`;

export const CardContent = styled.div`
  font-size: 18px;
  color: grey;
  padding: 8px;
`;

export const CardLink = styled.div`
  color: blue;
  padding: 8px;
`;

export const Button = styled.button`
  padding: 12px;
  border-radius: 10px;
  border: 0.5px solid grey;
`;

export const Buttons = styled.div`
  display: flex;
  gap: 8px;
  margin-bottom: 12px;
`;
