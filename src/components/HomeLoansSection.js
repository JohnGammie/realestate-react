import React from "react";
import image from "../images/home-search.jpg";
import navbarIcon from "../images/window.svg";
import {
  StyledHomeLoansSection,
  StyledHomeLoansSectionLeft,
  StyledHomeLoansSectionRight,
  Logo,
  Content,
  Button,
} from "./styles/HomeLoansSection.styled";

const HomeLoansSection = () => {
  return (
    <StyledHomeLoansSection>
      <StyledHomeLoansSectionLeft>
        <img src={image} alt="" />
      </StyledHomeLoansSectionLeft>
      <StyledHomeLoansSectionRight>
        <Logo>
          <img src={navbarIcon} alt="Icon" width="30px" />
          Realestate
        </Logo>
        <Content>Explore your home loan options</Content>
        <Button>Compare Loans</Button>
      </StyledHomeLoansSectionRight>
    </StyledHomeLoansSection>
  );
};

export default HomeLoansSection;
