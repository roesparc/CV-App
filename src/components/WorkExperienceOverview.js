import React from "react";

class WorkExperienceOverview extends React.Component {
  render() {
    const { jobHistory, activateEdit } = this.props;

    return (
      <div className="work-experience-overview">
        {jobHistory.map((job) => (
          <div key={job.id} className="job">
            <h3 className="position-company">
              {job.position} | {job.company}
            </h3>

            <p className="start-end-date">
              {job.startDate} – {job.endDate}
            </p>

            <p className="description">{job.description}</p>
          </div>
        ))}

        <button className="edit-button" onClick={activateEdit}>
          Edit
        </button>
      </div>
    );
  }
}

export default WorkExperienceOverview;
