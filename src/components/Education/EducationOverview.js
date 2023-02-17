import React from "react";

class EducationOverview extends React.Component {
  render() {
    const { educationHistory, activateEdit } = this.props;

    return (
      <div className="education-overview">
        {educationHistory.map((educationEntry) => (
          <div key={educationEntry.id} className="education-entry">
            <h3 className="field-institution">
              {educationEntry.fieldOfStudy} |{" "}
              <span className="h3-thin">{educationEntry.institution}</span>
            </h3>

            <p className="start-end-date">
              {educationEntry.startDate} – {educationEntry.endDate}
            </p>
          </div>
        ))}

        <button className="edit-button" onClick={activateEdit}>
          Edit
        </button>
      </div>
    );
  }
}

export default EducationOverview;
