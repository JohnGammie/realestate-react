import styled from "styled-components";
import Slider from "react-slick";

export const StyledCard = styled.div`
  border: 1px solid black;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 4px;

  & img {
    max-width: 80%;
    max-height: 200px;
  }

  &:hover {
    color: blue;
    cursor: pointer;
  }
`;

export const CardTitle = styled.div`
  font-weight: bold;
`;

export const CardReadTime = styled.div`
  color: grey;
`;

export const Carousel = styled(Slider)``;
