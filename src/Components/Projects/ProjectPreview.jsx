import React from "react";

function ProjectPreview(props) {
  return (
    <div className="project-preview row">
      <div className="col">
        <img src={props.data.image} alt="" height="400px" width="430px" />
      </div>
      <div className="col project-preview-text">
        <h2>{props.data.headline}</h2>
        <p>{props.data.text}</p>
      </div>
    </div>
  );
}

export default ProjectPreview;
