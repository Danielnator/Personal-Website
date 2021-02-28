import React from "react";

function HomeIntro() {
  return (
    <div className="row intro-container">
      <div className="col intro-container-text">
        <p className="my-name-is">Hi, my name is</p>
        <h1 id="intro-text-headline-1">Daniel Ruminski.</h1>
        <h1 id="intro-text-headline-2">I am a Software Engineer.</h1>
        <br />
        <p className="intro-container-text-paragraph">
          I have always loved math, coding and solving complex challenges. I got
          a B.Sc. degree in mathematics from Humboldt-University Berlin and have
          started a master's, but then decided to pursue my start-up Wundr. In
          my studies I have specialized in Stochastics and Machine Learning;
          during my start-up experience I discovered my passion for building
          things. Currently, I am looking for a full-time Software Engineering
          role.
        </p>
      </div>
      <div className="col intro-container-image">
        <img src="images/Daniel.jpg" alt="Daniel" height="100%" width="100%" />
      </div>
    </div>
  );
}

export default HomeIntro;

/*
- Enjoy PM, Design.

*/
