import React from "react";
import ProjectPreview from "./ProjectPreview";

function ProjectFeaturing() {
  var data = [
    {
      image: "images/wundr-main.png",
      headline: "Wundr Community App",
      text:
        "A social media/community app for creating, exploring and joining self growth challenges. This app was the product of my start-up Wundr and scaled to 300 users."
    },
    {
      image: "images/Hex.png",
      headline: "Hex Game",
      text:
        "Board Game written with Python and Tkinter. It can be played human vs human or human vs AI, where the AI can be chosen from 3 different models: A Game Tree AI, a Monte Carlo randomized AI or a Neural Network AI."
    }
  ];

  return (
    <div id="carouselControls" className="carousel slide" data-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <ProjectPreview data={data[0]} />
        </div>
        <div className="carousel-item">
          <ProjectPreview data={data[1]} />
        </div>
      </div>
      <a
        className="carousel-control-prev"
        href="#carouselControls"
        role="button"
        data-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a
        className="carousel-control-next"
        href="#carouselControls"
        role="button"
        data-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
  );
}

export default ProjectFeaturing;
