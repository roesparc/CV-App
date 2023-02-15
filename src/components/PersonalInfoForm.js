import React from "react";

class PersonalInfoForm extends React.Component {
  render() {
    const {
      personalInfo,
      saveChanges,
      inputChange,
      changePhoto,
      cancelChanges,
    } = this.props;

    return (
      <form className="personal-info-form" onSubmit={saveChanges}>
        <div className="heading">
          <input
            type="text"
            value={personalInfo.name}
            placeholder="Name"
            onChange={(e) => inputChange(e, "name")}
          />
          <input
            type="text"
            defaultValue={personalInfo.title}
            placeholder="Title"
            onChange={(e) => inputChange(e, "title")}
          />
        </div>

        <img src={personalInfo.photoUrl} alt="Job applicant" />
        <label className="change-photo">
          <input type="file" onChange={changePhoto} />
          <i className="fa-solid fa-camera"></i>
        </label>

        <div className="contact-details">
          <label>
            <i className="fa-solid fa-envelope" />{" "}
            <input
              type="text"
              defaultValue={personalInfo.mail}
              placeholder="Title"
              onChange={(e) => inputChange(e, "mail")}
            />
          </label>

          <label>
            <i className="fa-solid fa-phone" />{" "}
            <input
              type="text"
              defaultValue={personalInfo.phone}
              placeholder="Title"
              onChange={(e) => inputChange(e, "phone")}
            />
          </label>

          <label>
            <i className="fa-solid fa-location-dot" />{" "}
            <input
              type="text"
              defaultValue={personalInfo.location}
              placeholder="Title"
              onChange={(e) => inputChange(e, "location")}
            />
          </label>
        </div>

        <button className="save-button">Save</button>
        <button className="cancel-button" onClick={cancelChanges}>
          Cancel
        </button>
      </form>
    );
  }
}

export default PersonalInfoForm;
