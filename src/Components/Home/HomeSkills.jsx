import React from "react";

function HomeSkills() {
  return (
    <div className="row home-skills-container">
      <div className="col skills-container-image">
        <img src="images/tech-stack.png" alt="" height="400" width="400" />
      </div>
      <div className="col skills-container-text">
        <h1 id="skills-text-headline">My Tech Stack</h1>
        <br />
        <p className="skills-container-text-paragraph">
          I have very broad interest across many different technologies. I have
          used HTML/CSS, Bootstrap, Javascript and jQuery for Front-End
          Development, the MERN Stack (MongoDB, Express.js, React.js, Node.js)
          for Full-Stack Development, Flutter for Mobile Development and Python,
          R and SQL for Data Science and Machine Learning. I have also coded in
          Java and C++ and enjoy learning new languages and technologies. <br />
          In my mathematics degree I have specialized in Statistics and Machine
          Learning and worked with Pandas, Tensorflow and Keras to implement
          Artificial and Convolutional Neural Networks.
        </p>
      </div>
    </div>
  );
}

export default HomeSkills;
