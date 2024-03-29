import React from "react";
import CV from "../../assets/PhanNgocLinhDuy-Frontend.pdf";

export default function CTA() {
  return (
    <div className="cta">
      <a href={CV} download className="btn">
        Download My CV
      </a>
      <a href="#contact" className="btn btn-primary">
        Let's talk
      </a>
    </div>
  );
}
