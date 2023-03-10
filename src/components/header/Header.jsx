import React from "react";
import CTA from "./CTA";
import "./header.css";
import me from "../../assets/me.jpg";
import HeaderSocials from "./HeaderSocials";

export default function Header() {
  return (
    <header className="page-section">
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Linh Duy</h1>
        <h5 className="text-light">Frontend Developer</h5>
        <CTA />
        <HeaderSocials />

        <div className="me">
          <img src={me} alt="me" />
        </div>

        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
}
