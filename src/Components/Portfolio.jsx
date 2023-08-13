/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/bulletin-board.jpg";

const imageAltText = "Board with sticky notes";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Plain HTML, CSS, JavaScript Quiz App 🎉",
    description:
      "A quiz app that generates questions and answers from the Trivia API, and allows users to see their score at the end.",
    url: "https://quiz-app-roan-rho.vercel.app",
  },
  {
    title: "Storefront Backend API",
    description:
      "This is a backend implementation of an e-commerce API, using typescript as the primary language, with a PostgreSQL database and comprehensive test coverage.",
    url: "https://github.com/grand-rick001/Storefront-Backend-API",
  },
  {
    title: "My First Portfolio Website",
    description:
      "My first portfolio website that showcases some projects I built as well as my skills.",
    url: "https://portfolio-grand-rick001.vercel.app",
  },
  {
    title: "Storefront E-commerce Website",
    description:
      "A storefront e-commerce website that allows users to browse products, add them to their cart and checkout, built with Angular.",
    url: "https://my-store-final.vercel.app/",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
