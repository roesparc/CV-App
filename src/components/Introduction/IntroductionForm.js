import React from "react";

class IntroductionForm extends React.Component {
  render() {
    const { content, saveChanges, inputChange, cancelChanges } = this.props;

    return (
      <form className="introduction-form" onSubmit={saveChanges}>
        <textarea
          value={content}
          placeholder="Introduction"
          onChange={inputChange}
        />

        <button className="save-button">Save</button>
        <button className="cancel-button" onClick={cancelChanges}>
          Cancel
        </button>
      </form>
    );
  }
}

export default IntroductionForm;
