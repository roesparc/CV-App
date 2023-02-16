import React from "react";

class EducationForm extends React.Component {
  render() {
    const {
      educationHistory,
      saveChanges,
      inputChange,
      deleteEducation,
      cancelChanges,
      addEducation,
    } = this.props;

    return (
      <form className="education-form" onSubmit={saveChanges}>
        {educationHistory.map((educationEntry) => (
          <div key={educationEntry.id} className="education-entry-edit">
            <div className="field-institution-edit">
              <input
                type="text"
                value={educationEntry.fieldOfStudy}
                placeholder="Field of Study"
                onChange={(e) =>
                  inputChange(e, educationEntry.id, "fieldOfStudy")
                }
              />{" "}
              |{" "}
              <input
                type="text"
                value={educationEntry.institution}
                placeholder="Institution"
                onChange={(e) =>
                  inputChange(e, educationEntry.id, "institution")
                }
              />
            </div>

            <div className="start-end-date-edit">
              <input
                type="text"
                value={educationEntry.startDate}
                placeholder="Start Date"
                onChange={(e) => inputChange(e, educationEntry.id, "startDate")}
              />{" "}
              –{" "}
              <input
                type="text"
                value={educationEntry.endDate}
                placeholder="End Date"
                onChange={(e) => inputChange(e, educationEntry.id, "endDate")}
              />
            </div>

            <button
              className="delete-button"
              type="button"
              onClick={() => deleteEducation(educationEntry.id)}
            >
              Delete
            </button>
          </div>
        ))}

        <button className="save-button">Save</button>

        <button className="cancel-button" type="button" onClick={cancelChanges}>
          Cancel
        </button>

        <button className="add-button" type="button" onClick={addEducation}>
          Add
        </button>
      </form>
    );
  }
}

export default EducationForm;
