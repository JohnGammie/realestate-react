import styled from "styled-components";

export const StyledSearchFilters = styled.div`
  display: flex;
  justify-content: center;
  gap: 8px;

  border-radius: 10px;

  &:hover {
    background-color: lightgrey;
  }

  & div {
    display: flex;
    gap: 8px;
  }
`;

export const ModalHeading = styled.div`
  font-size: 36px;
  font-weight: bolder;
  text-align: center;
`;

export const ModalTabs = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

export const ModalTab = styled.div`
  border-bottom: 0.5px solid lightgrey;
  text-align: center;
  padding: 8px;
`;

export const ModalSectionContainer = styled.div`
  padding: 24px;
  display: flex;
  flex-direction: column;
  // align-items: center;
  border-bottom: 0.5px solid lightgrey;

  & > ul {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 5%;
  }

  .radioButton {
    font-size: 24px;
    display: flex;
    gap: 6px;
    align-items: center;
  }
`;

export const ModalSectionHeading = styled.div`
font-weight: bolder;
font-size 24px;
margin-bottom: 8px;`;

export const ModalFooter = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 18px 0px;

  button {
    font-size: 24px;
    border: 1px solid lightgrey;
    background-color: white;
    border-radius: 10px;

    :hover {
      background-color: gainsboro;
    }
  }

  #search {
    color: white;
    background-color: red;
    padding 4px 16px;
    border: none;

    :hover {
      background-color: darkred;
    }
  }
`;

export const StyledModalDropdown = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;

  & > label {
    font-size: 24px;
  }

  & > select {
    font-size: 18px;
    border-radius: 10px;
    background-color: inherit;
  }
`;
