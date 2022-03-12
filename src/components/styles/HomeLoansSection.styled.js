import styled from "styled-components";

export const StyledHomeLoansSection = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  height: 100%;
`;

export const StyledHomeLoansSectionLeft = styled.div`
  & > img {
    width: 100%;
    height: 100%;
  }
`;

export const StyledHomeLoansSectionRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 15%;

  background-color: gainsboro;
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
`;

export const Content = styled.div`
  font-weight: bolder;
  font-size: 36px;
`;

export const Button = styled.div`
  background-color: dimgray;
  color: white;
  width: 50%;
  height: 20%;

  font-weight: bolder;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 10px;

  &:hover {
    background-color: black;
  }
`;
