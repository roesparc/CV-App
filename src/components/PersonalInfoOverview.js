import React from "react";

class PersonalInfoOverview extends React.Component {
  render() {
    const { personalInfo, activateEdit } = this.props;

    return (
      <div className="info-container">
        <div className="heading">
          <h2>{personalInfo.name}</h2>
          <h3>{personalInfo.title}</h3>
        </div>

        <img src={personalInfo.photoUrl} alt="Job applicant" />

        <div className="contact-details">
          <p>
            <i className="fa-solid fa-envelope" /> {personalInfo.mail}
          </p>

          <p>
            <i className="fa-solid fa-phone" /> {personalInfo.phone}
          </p>

          <p>
            <i className="fa-solid fa-location-dot" /> {personalInfo.location}
          </p>
        </div>

        <button className="edit-button" onClick={activateEdit}>
          Edit
        </button>
      </div>
    );
  }
}

export default PersonalInfoOverview;
