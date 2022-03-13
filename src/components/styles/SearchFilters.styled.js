import styled from "styled-components";

export const StyledSearchFilters = styled.div`
  display: flex;
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
  color: red;
`;

export const ModalSectionContainer = styled.div`
  margin: 24px;
`;

export const ModalSectionHeading = styled.div`
font-weight: bolder;
font-size 24px;`;
