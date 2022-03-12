import React from "react";
import { StyledFooter } from "./styles/Footer.styled";

const Footer = () => {
  return (
    <StyledFooter>
      <p>
        Website created for educational purposes by John Gammie, based on{" "}
        <a href="https://realestate.com.au"> realestate.com.au</a>
      </p>

      <p>
        Source code can be found at{" "}
        <a href="https://github.com/JohnGammie/realestate-react">GitHub</a>
      </p>
    </StyledFooter>
  );
};

export default Footer;
