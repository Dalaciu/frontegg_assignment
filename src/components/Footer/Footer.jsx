import React from "react";
import { FooterContainer, Disclaimer } from "./Footer.elements";

function Footer() {
  return (
    <FooterContainer>
      <Disclaimer>
        <p>
          I hope you like it {"\u{1F642}"},<br />
          <br />
          Sebastian.
        </p>
      </Disclaimer>
    </FooterContainer>
  );
}

export default Footer;
