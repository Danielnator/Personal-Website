import React from "react";
import ResumeItem from "./ResumeItem";
import { resumeEducationData, resumeExperienceData } from "../Data/resume-data";

function Resume() {
  const educationItems = resumeEducationData.map((eduData) => {
    return (
      <li key={eduData.id}>
        <ResumeItem data={eduData} />
      </li>
    );
  });

  const experienceItems = resumeExperienceData.map((expData) => {
    return (
      <li key={expData.id}>
        <ResumeItem data={expData} />
      </li>
    );
  });

  return (
    <div className="resume">
      <h1 className="resume-headline"> Resume </h1>
      <ul>
        <li>
          <h2 className="resume-subheadline">Experience</h2>
        </li>
        <li>
          <ul>{experienceItems}</ul>
        </li>
        <li>
          <h2 className="resume-subheadline">Education</h2>
        </li>
        <li>
          <ul>{educationItems}</ul>
        </li>
      </ul>
    </div>
  );
}

export default Resume;
