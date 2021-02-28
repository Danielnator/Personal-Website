import React from "react";

function ProjectWidget(props) {
  return (
    <div className="project-widget">
      <img
        src={props.data.image ? props.data.image : "images/Daniel.jpg"}
        alt="some img"
        height="300px;"
        width="100%"
      />
      <h2>{props.data.title}</h2>
      <p>{props.data.subtitle}</p>
    </div>
  );
}

export default ProjectWidget;
