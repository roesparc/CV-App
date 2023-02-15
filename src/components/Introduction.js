import React from "react";
import "../styles/Introduction.css";
import { introductionContent } from "../assets/templateContent";
import IntroductionForm from "./IntroductionForm";
import IntroductionOverview from "./IntroductionOverview";

class Introduction extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isEditing: false,

      content: introductionContent,
    };

    this.unsavedChanges = undefined;

    this.activateEdit = this.activateEdit.bind(this);
    this.inputChange = this.inputChange.bind(this);
    this.saveChanges = this.saveChanges.bind(this);
    this.cancelChanges = this.cancelChanges.bind(this);
  }

  activateEdit() {
    this.setState({ isEditing: true });

    this.unsavedChanges = this.state;
  }

  inputChange(e) {
    this.setState({ content: e.target.value });
  }

  saveChanges(e) {
    e.preventDefault();

    this.setState({ isEditing: false });
  }

  cancelChanges(e) {
    e.preventDefault();

    this.setState(this.unsavedChanges);
  }

  render() {
    const { isEditing, content } = this.state;

    return (
      <div className="introduction">
        <h2>Introduction</h2>

        {isEditing ? (
          <IntroductionForm
            content={content}
            saveChanges={this.saveChanges}
            inputChange={this.inputChange}
            cancelChanges={this.cancelChanges}
          />
        ) : (
          <IntroductionOverview
            content={content}
            activateEdit={this.activateEdit}
          />
        )}
      </div>
    );
  }
}

export default Introduction;
