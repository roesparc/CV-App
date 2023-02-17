import React from "react";
import "../styles/Cv.css";
import PersonalInfo from "./PersonalInfo/PersonalInfo";
import Introduction from "./Introduction/Introduction";
import WorkExperience from "./WorkExperience/WorkExperience";
import Education from "./Education/Education";

class Cv extends React.Component {
  render() {
    return (
      <div className="cv-create">
        <PersonalInfo />
        <Introduction />
        <WorkExperience />
        <Education />
      </div>
    );
  }
}

export default Cv;
