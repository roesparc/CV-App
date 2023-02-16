import React from "react";
import "../styles/Cv.css";
import PersonalInfo from "./PersonalInfo";
import Introduction from "./Introduction";
import WorkExperience from "./WorkExperience";

class Cv extends React.Component {
  render() {
    return (
      <div className="cv-create">
        <PersonalInfo />
        <Introduction />
        <WorkExperience />
      </div>
    );
  }
}

export default Cv;
