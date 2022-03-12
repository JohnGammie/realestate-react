import styled from "styled-components";

export const StyledFooter = styled.div`
  background-color: gainsboro;
  width: 100%;
  height: 15vh;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 12px;

  & p > a {
    text-decoration: none;
    color: blue;
  }
`;
