import React from "react";
import "../styles/Cv.css";
import PersonalInfo from "./PersonalInfo";
import Introduction from "./Introduction";

class Cv extends React.Component {
  render() {
    return (
      <div className="cv-create">
        <PersonalInfo />
        <Introduction />
      </div>
    );
  }
}

export default Cv;
