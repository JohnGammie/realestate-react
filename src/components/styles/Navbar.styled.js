import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavbarContainer = styled.div`
  display: flex;
  gap: 2em;
  justify-content: space-between;
  margin-bottom: 18px;
`;

export const NavbarIcon = styled(Link)`
  display: flex;
  font-size: 2em;
  align-items: center;
  text-decoration: none;
  color: black;
`;

export const NavbarItems = styled.div`
  display: flex;
  gap: 1em;
  font-size: 1em;
  align-items: center;
`;

export const NavbarItemLink = styled(Link)`
  padding: 0.5rem;
  text-decoration: none;
  color: black;

  &:hover {
    background-color: lightgrey;
  }
`;

export const NavbarUser = styled.div`
  display: flex;
  align-items: center;
  gap: 1em;
`;

export const NavbarButton = styled(Link)`
  padding: 0.5em 1em;
  border-radius: 10px;
  text-decoration: none;
  font-size: 1.2em;

  border: none;
  background: ${(props) => (props.primary ? "red" : "white")};
  color: ${(props) => (props.primary ? "white" : "black")};

  &:hover {
    background-color: ${(props) => (props.primary ? "darkred" : "lightgrey")};
  }
`;
