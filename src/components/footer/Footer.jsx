import React from "react";
import { AiFillFacebook, AiFillInstagram, AiFillGithub } from "react-icons/ai";
import "./footer.css";
export default function Footer() {
  return (
    <footer>
      <a href="#" className="footer__logo">
        Linh Duy
      </a>
      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.facebook.com/duypnl219/">
          <AiFillFacebook />
        </a>
        <a href="">
          <AiFillInstagram />
        </a>
        <a href="">
          <AiFillGithub />
        </a>
      </div>
      <div className="footer__copyright">
        <small>&copy; Linh Duy. All rights reserved </small>
      </div>
    </footer>
  );
}
