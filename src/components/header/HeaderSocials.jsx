import React from "react";
import { BsFacebook, BsGithub, BsLinkedin } from "react-icons/bs";

export default function HeaderSocials() {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/in/duy-phan-0704a5255/" target="_blank">
        <BsLinkedin />
      </a>
      <a
        href="https://github.com/linhduy2192001?tab=repositories"
        target="_blank"
      >
        <BsGithub />
      </a>
      <a href="https://www.facebook.com/duypnl219" target="_blank">
        <BsFacebook />
      </a>
    </div>
  );
}
