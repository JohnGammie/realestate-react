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
    width: 80%;
    height: 128px;
  }
`;

export const CardTitle = styled.div`
  font-weight: bold;
`;

export const CardReadTime = styled.div`
  color: grey;
`;

export const Carousel = styled(Slider)``;
