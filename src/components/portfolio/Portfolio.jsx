import React from "react";
import portfolio1 from "../../assets/portfolio1.png";
import portfolio2 from "../../assets/portfolio2.png";
import portfolio3 from "../../assets/portfolio3.png";
import portfolio4 from "../../assets/portfolio4.png";

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
      image: portfolio2,
      title: "Wooder",
      github: "   https://github.com/linhduy2192001/wooder ",
      demo: "https://linhduy2192001.github.io/wooder/",
    },
    {
      id: 3,
      image: portfolio3,
      title: "CFD-Course",
      github: "https://github.com/linhduy2192001/CFD-Course",
      demo: "https://cfd-course-gamma.vercel.app/",
    },
    {
      id: 4,
      image: portfolio4,
      title: "Shopper",
      github: "https://github.com/linhduy2192001/react-furniture-ecommerce",
      demo: "https://react-furniture-ecommerce-lovat.vercel.app/",
    },
  ];
  return (
    <section className="page-section" id="portfolio">
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
