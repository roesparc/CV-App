import React from "react";
import "../../styles/WorkExperience.css";
import { sampleWorkExperience } from "../../assets/templateContent";
import WorkExperienceForm from "./WorkExperienceForm";
import WorkExperienceOverview from "./WorkExperienceOverview";

class WorkExperience extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isEditing: false,

      jobHistory: [
        sampleWorkExperience.sample1,
        sampleWorkExperience.sample2,
        sampleWorkExperience.sample3,
      ],
    };

    this.unsavedChanges = undefined;

    this.activateEdit = this.activateEdit.bind(this);
    this.inputChange = this.inputChange.bind(this);
    this.saveChanges = this.saveChanges.bind(this);
    this.cancelChanges = this.cancelChanges.bind(this);
    this.addJob = this.addJob.bind(this);
    this.deleteJob = this.deleteJob.bind(this);
  }

  activateEdit() {
    this.setState({ isEditing: true });

    this.unsavedChanges = this.state;
  }

  inputChange(e, id, field) {
    const { jobHistory } = this.state;

    const updatedJobHistory = jobHistory.map((job) =>
      job.id === id ? { ...job, [field]: e.target.value } : job
    );

    this.setState({ jobHistory: updatedJobHistory });
  }

  saveChanges(e) {
    e.preventDefault();

    this.setState({ isEditing: false });
  }

  cancelChanges() {
    this.setState(this.unsavedChanges);
  }

  addJob() {
    const { jobHistory } = this.state;

    this.setState({
      jobHistory: [...jobHistory, sampleWorkExperience.emptyTemplate()],
    });
  }

  deleteJob(id) {
    const { jobHistory } = this.state;

    const updatedJobHistory = jobHistory.filter((job) => job.id !== id);

    this.setState({ jobHistory: updatedJobHistory });
  }

  render() {
    const { isEditing, jobHistory } = this.state;

    return (
      <div className="work-experience">
        <h2>Work Experience</h2>

        {isEditing ? (
          <WorkExperienceForm
            jobHistory={jobHistory}
            inputChange={this.inputChange}
            saveChanges={this.saveChanges}
            cancelChanges={this.cancelChanges}
            addJob={this.addJob}
            deleteJob={this.deleteJob}
          />
        ) : (
          <WorkExperienceOverview
            jobHistory={jobHistory}
            activateEdit={this.activateEdit}
          />
        )}
      </div>
    );
  }
}

export default WorkExperience;
