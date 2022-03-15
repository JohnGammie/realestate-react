import styled from "styled-components";

export const SummarySection = styled.div`
  padding: 12px 30px;
  // margin-left 30px;
  border-top: 1px solid grey;
  border-bottom: 1px solid grey;
  background-color: white;
`;

export const SummaryGt = styled.span`
  margin: 0px 20px;
`;

export const FilterSection = styled(SummarySection)`
  display: flex;
  justify-content: space-between;
`;

export const FilterSubSection = styled.div`
  display: flex;
  gap: 18px;

  & div {
    border: 1px solid lightgrey;
    border-radius: 10px;
    padding: 12px 36px;
    display: flex;
    align-items: center;
  }

  & div:hover {
    background-color: gainsboro;
    border: 2px solid black;
  }
`;
