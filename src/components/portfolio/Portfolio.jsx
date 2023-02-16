import React from "react";
import portfolio1 from "../../assets/portfolio1.png";
import portfolio2 from "../../assets/portfolio2.jpg";
import portfolio3 from "../../assets/portfolio3.jpg";
import portfolio4 from "../../assets/portfolio4.jpg";
import portfolio5 from "../../assets/portfolio5.png";
import portfolio6 from "../../assets/portfolio6.jpg";
import "./portfolio.css";

export default function Portfolio() {
  const projects = [
    {
      id: 1,
      image: portfolio1,
      title: "Sunset Sorrento",
      github: "https://github.com/linhduy2192001/sunset",
      demo: "https://linhduy2192001.github.io/sunset/",
    },
    {
      id: 2,
      image: portfolio1,
      title: "Sunset Sorrento",
      github: "https://github.com/linhduy2192001/sunset",
      demo: "https://linhduy2192001.github.io/sunset/",
    },
    {
      id: 3,
      image: portfolio1,
      title: "Sunset Sorrento",
      github: "https://github.com/linhduy2192001/sunset",
      demo: "https://linhduy2192001.github.io/sunset/",
    },
    {
      id: 4,
      image: portfolio1,
      title: "Sunset Sorrento",
      github: "https://github.com/linhduy2192001/sunset",
      demo: "https://linhduy2192001.github.io/sunset/",
    },
    {
      id: 5,
      image: portfolio1,
      title: "Sunset Sorrento",
      github: "https://github.com/linhduy2192001/sunset",
      demo: "https://linhduy2192001.github.io/sunset/",
    },
  ];
  return (
    <section id="portfolio">
      <h5>Portfolio</h5>
      <h2>My Project</h2>

      <div className="container portfolio__container">
        {projects.map(({ id, image, github, demo, title }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt="" />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} target="_blank" className="btn">
                  Github
                </a>
                <a className="btn btn-primary" href={demo} target="_blank">
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
