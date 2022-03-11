import styled from "styled-components";

export const SearchContainer = styled.div`
  width: 70vw;

  background-color: white;
  border-radius: 10px;

  font-size: 24px;
  color: black;
`;

export const TabsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);

  border-bottom: 1px solid lightgrey;
`;

export const Tab = styled.div`
  display: flex;
  justify-content: center;
  color: black;
  padding: 1em;

  border-bottom: transparent;
  transition: border-bottom 1s ease-out;
`;

export const SearchDetailsContainer = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr 1fr;
  padding: 1em;
`;

export const SearchButton = styled.button`
  color: white;
  background-color: red;
  border-radius: 15px;
  border: none;
  font-size: 1em;

  &:hover {
    background-color: darkred;
  }
`;
