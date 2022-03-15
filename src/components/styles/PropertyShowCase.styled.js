import styled from "styled-components";

export const StyledPropertyShowCase = styled.div`
  width: 100%;
  border: 1px solid grey;
  border-radius: 10px;
  & img {
    max-width: 250px;
  }

  & h1 {
    padding: 12px;
  }
`;

export const SubImages = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1px;

  & img {
    width: 100%;
    height: 100%;
  }
`;

export const Description = styled.div`
  padding: 12px;

  & button {
    background-color: white;
    border-radius: 5px;
    padding: 8px 16px;
  }
`;

export const Agent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
  & img {
    width: 60px;
    height: 60px;
    border-radius: 50px;
    margin-bottom: 10px;
  }
`;
