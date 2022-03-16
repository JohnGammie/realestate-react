import styled from "styled-components";

export const StyledHeadingSummary = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  background-color: #f9f7fc;
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
