import React from "react";
import PersonalInfo from "./PersonalInfo";
import "../styles/Cv.css";

class Cv extends React.Component {
  render() {
    return (
      <div className="cv-create">
        <PersonalInfo />
      </div>
    );
  }
}

export default Cv;
