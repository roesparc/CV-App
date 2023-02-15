import React from "react";

class IntroductionOverview extends React.Component {
  render() {
    const { content, activateEdit } = this.props;

    return (
      <div className="introduction-overview">
        <p>{content}</p>
        <button className="edit-button" onClick={activateEdit}>
          Edit
        </button>
      </div>
    );
  }
}

export default IntroductionOverview;
