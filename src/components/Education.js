import React from "react";
import "../styles/Education.css";
import { sampleEducation } from "../assets/templateContent";
import EducationForm from "./EducationForm";
import EducationOverview from "./EducationOverview";

class Education extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isEditing: false,

      educationHistory: [sampleEducation.sample1, sampleEducation.sample2],
    };

    this.activateEdit = this.activateEdit.bind(this);
    this.inputChange = this.inputChange.bind(this);
    this.saveChanges = this.saveChanges.bind(this);
    this.cancelChanges = this.cancelChanges.bind(this);
    this.addEducation = this.addEducation.bind(this);
    this.deleteEducation = this.deleteEducation.bind(this);
  }

  activateEdit() {
    this.unsavedChanges = this.state;

    this.setState({ isEditing: true });
  }

  inputChange(e, id, field) {
    const { educationHistory } = this.state;

    const updatedEducationHistory = educationHistory.map((educationEntry) =>
      educationEntry.id === id
        ? { ...educationEntry, [field]: e.target.value }
        : educationEntry
    );

    this.setState({ educationHistory: updatedEducationHistory });
  }

  saveChanges(e) {
    e.preventDefault();

    this.setState({ isEditing: false });
  }

  cancelChanges() {
    this.setState(this.unsavedChanges);
  }

  addEducation() {
    const { educationHistory } = this.state;

    this.setState({
      educationHistory: [...educationHistory, sampleEducation.emptyTemplate()],
    });
  }

  deleteEducation(id) {
    const { educationHistory } = this.state;

    const updatedEducationHistory = educationHistory.filter(
      (educationEntry) => educationEntry.id !== id
    );

    this.setState({ educationHistory: updatedEducationHistory });
  }

  render() {
    const { isEditing, educationHistory } = this.state;

    return (
      <div className="education">
        <h2>Education</h2>

        {isEditing ? (
          <EducationForm
            educationHistory={educationHistory}
            saveChanges={this.saveChanges}
            inputChange={this.inputChange}
            deleteEducation={this.deleteEducation}
            cancelChanges={this.cancelChanges}
            addEducation={this.addEducation}
          />
        ) : (
          <EducationOverview
            educationHistory={educationHistory}
            activateEdit={this.activateEdit}
          />
        )}
      </div>
    );
  }
}

export default Education;
