import styled from "styled-components";

export const TabListSection = styled.div`
  height: 40vh;
`;

export const TabList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  border-bottom: 0.2px solid lightgrey;
`;

export const TabListItem = styled.div`
  text-align: center;
  padding: 12px;
  font-size: 18px;
  font-weight: 500;
`;

export const TabListDescription = styled.div`
  padding: 16px;
`;

export const TabListLinkContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding: 16px;
`;

export const TabListLinkItem = styled.div`
  & a {
    text-decoration: none;
    color: inherit;
  }

  text-decoration: underline;
  color: grey;
  margin: 6px;
  &:hover {
    color: blue;
  }
`;
