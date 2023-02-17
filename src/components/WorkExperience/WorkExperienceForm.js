import React from "react";

class WorkExperienceForm extends React.Component {
  render() {
    const {
      jobHistory,
      inputChange,
      saveChanges,
      cancelChanges,
      addJob,
      deleteJob,
    } = this.props;

    return (
      <form className="work-experience-form" onSubmit={saveChanges}>
        {jobHistory.map((job) => (
          <div key={job.id} className="job-edit">
            <div className="position-company-edit">
              <input
                type="text"
                value={job.position}
                placeholder="Position"
                onChange={(e) => inputChange(e, job.id, "position")}
              />{" "}
              |{" "}
              <input
                type="text"
                value={job.company}
                placeholder="Company"
                onChange={(e) => inputChange(e, job.id, "company")}
              />
            </div>

            <div className="start-end-date-edit">
              <input
                type="text"
                value={job.startDate}
                placeholder="Start Date"
                onChange={(e) => inputChange(e, job.id, "startDate")}
              />{" "}
              –{" "}
              <input
                type="text"
                value={job.endDate}
                placeholder="End Date"
                onChange={(e) => inputChange(e, job.id, "endDate")}
              />
            </div>

            <textarea
              className="description-edit"
              value={job.description}
              placeholder="Job Description"
              onChange={(e) => inputChange(e, job.id, "description")}
            />

            <button
              className="delete-button"
              type="button"
              onClick={() => deleteJob(job.id)}
            >
              Delete
            </button>
          </div>
        ))}

        <button className="save-button">Save</button>

        <button className="cancel-button" type="button" onClick={cancelChanges}>
          Cancel
        </button>

        <button className="add-button" type="button" onClick={addJob}>
          Add
        </button>
      </form>
    );
  }
}

export default WorkExperienceForm;
