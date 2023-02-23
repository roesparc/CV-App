import { useRef } from "react";
import { useReactToPrint } from "react-to-print";

import "../styles/Cv.css";

import PersonalInfo from "./PersonalInfo/PersonalInfo";
import Introduction from "./Introduction/Introduction";
import WorkExperience from "./WorkExperience/WorkExperience";
import Education from "./Education/Education";

const Cv = () => {
  const cvRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => cvRef.current,
  });

  return (
    <div className="cv-create" ref={cvRef}>
      <PersonalInfo />
      <Introduction />
      <WorkExperience />
      <Education />

      <button className="print-button" onClick={handlePrint}>
        <i className="fa-solid fa-file-pdf"></i>
      </button>
    </div>
  );
};

export default Cv;
