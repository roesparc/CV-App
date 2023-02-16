import React from "react";
import "../styles/Cv.css";
import PersonalInfo from "./PersonalInfo";
import Introduction from "./Introduction";
import WorkExperience from "./WorkExperience";
import Education from "./Education";

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
