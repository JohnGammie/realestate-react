import styled from "styled-components";

export const StyledCard = styled.div`
  border: 1px solid black;
  border-radius: 10px;

  & img {
    width: 224px;
    height: 128px;
  }
`;

export const CardTitle = styled.div`
  font-weight: bold;
`;

export const CardReadTime = styled.div`
  color: grey;
`;

export const Carousel = styled.div`
  display: flex;
  gap: 8px;
`;
