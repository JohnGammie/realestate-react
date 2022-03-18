import React from "react";
import navbarIcon from "../images/window.svg";
import {
  NavbarContainer,
  NavbarIcon,
  NavbarItems,
  NavbarUser,
  NavbarButton,
  NavbarItemLink,
} from "./styles/Navbar.styled";

const Navbar = () => {
  return (
    <NavbarContainer>
      <NavbarIcon to="/">
        <img src={navbarIcon} alt="Icon" width="30px" />
        Realestate
      </NavbarIcon>
      <NavbarItems>
        <NavbarItemLink to="/buy">Buy</NavbarItemLink>
        <NavbarItemLink to="/rent">Rent</NavbarItemLink>
        <NavbarItemLink to="/sold">Sold</NavbarItemLink>
        <NavbarItemLink to="/home-loans">Home loans</NavbarItemLink>
      </NavbarItems>
      <NavbarUser>
        <NavbarButton to="/sign-in">Sign in</NavbarButton>
        <NavbarButton to="/join" primary="true">
          Join
        </NavbarButton>
      </NavbarUser>
    </NavbarContainer>
  );
};

export default Navbar;
