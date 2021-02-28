import React from "react";

function HomeLanguages() {
  return (
    <div className="row home-language-container">
      <div className="col language-container-image">
        <img src="images/language-flags.png" alt="" width="400" />
      </div>
      <div className="col language-container-text">
        <h1 id="language-text-headline">I am a polyglot</h1>
        <br />
        <p className="language-container-text-paragraph">
          I love traveling, meeting new people and exploring different cultures.
          One of my biggest passions is learning foreign languages. I grew up
          biligual German/Polish, studied English in school, taught myself
          Spanish, learned Chinese when studying abroad in Shanghai and
          currently I am trying to become fluent in Japanese.
        </p>
      </div>
    </div>
  );
}

export default HomeLanguages;
