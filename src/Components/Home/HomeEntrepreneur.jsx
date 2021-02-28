import React from "react";

function HomeEntrepreneur() {
  return (
    <div className="row entrepreneur-container">
      <div className="col entrepreneur-container-text">
        <h1 id="entrepreneur-text-headline">
          I am a passionate about Entrepreneurship
        </h1>
        <br />
        <p className="entrepreneur-container-text-paragraph">
          I love building new things that can make an impact on society. I enjoy
          fast-paced, dynamic work environments and the diversity of challenges
          you face in the process of building a new product. In 2020 I decided
          to drop out of my masters degree to co-found Wundr: A community app
          built around self-growth challenges. Users could create, explore and
          join challenges such as meditating every day, being vegan for 30 days
          or working out twice a week. We worked in a team of 5 people, went
          through an accelerator program and scaled the app to 300 users. As the
          CTO I designed and coded the app, but I also worked a lot on product
          management, the business model and our strategy. Unfortunatley we
          ultimately decided to not keep working on the app. However, I am very
          grateful for the experience, since I have learned invaluable skills
          and lessons.
        </p>
      </div>
      <div className="col entrepreneur-container-image">
        <img src="images/Daniel-2.jfif" alt="Daniel" height="500" width="500" />
      </div>
    </div>
  );
}

export default HomeEntrepreneur;
