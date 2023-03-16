import React from "react";
import "./about.css";
import me from "../../assets/me-about.jpg";
import { VscFolderLibrary } from "react-icons/vsc";
import { FaSchool } from "react-icons/fa";

import { FaAward } from "react-icons/fa";
export default function About() {
  return (
    <section className="page-section" id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={me} alt="About Image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaSchool className="about__icon" />
              <h5>Education</h5>
              <small> 4th Years Student</small>
            </article>
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Certificate </h5>
              <small>PET English</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Project</h5>
              <small>+Completed</small>
            </article>
          </div>

          <p>
            I am Duy. I am currently a senior student at Ton Duc Thang
            University. With the knowledge and specialized skills that I have
            accumulated during my studies at the university and CFD Circle, I
            believe that I am suitable for the position of a Front-end intern.
            In the future, I hope to become a Front-end developer, and the
            opportunity to work at your esteemed company will help me enhance my
            abilities.
          </p>

          <a href="#contact " className="btn btn-primary">
            Let's talk
          </a>
        </div>
      </div>
    </section>
  );
}
