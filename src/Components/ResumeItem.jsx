import React from "react";

function ResumeItem(props) {
  return (
    <div className="resume-item">
      <div className="resume-logo">
        <img src={props.data.img} alt="some logo" />
      </div>
      <div className="resume-description">
        <h3>{props.data.headline}</h3>
        <p>{props.data.sub1}</p>
        <p style={props.data.sub2 === "" ? { display: "None" } : {}}>
          {props.data.sub2}
        </p>
      </div>
    </div>
  );
}

export default ResumeItem;
