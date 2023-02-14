import React from "react";
import examplePhoto from "../assets/example-photo.jpg";
import "../styles/PersonalInfo.css";
import PersonalInfoForm from "./PersonalInfoForm";
import PersonalInfoOverview from "./PersonalInfoOverview";

class PersonalInfo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isEditing: false,
      name: "John Doe",
      title: "Software Developer",
      mail: "john_doe@mail.com",
      phone: "012 345 6789",
      location: "Mexico City",
      photoUrl: examplePhoto,
    };

    this.unsavedChanges = undefined;

    this.activateEdit = this.activateEdit.bind(this);
    this.inputChange = this.inputChange.bind(this);
    this.changePhoto = this.changePhoto.bind(this);
    this.saveChanges = this.saveChanges.bind(this);
    this.cancelChanges = this.cancelChanges.bind(this);
  }

  activateEdit() {
    this.setState({ isEditing: true });

    this.unsavedChanges = this.state;
  }

  inputChange(e, field) {
    this.setState({ [field]: e.target.value });
  }

  changePhoto(e) {
    const image = e.target.files[0];

    this.setState({ photoUrl: URL.createObjectURL(image) });
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
    const { isEditing } = this.state;

    return (
      <div className="personal-info">
        {isEditing ? (
          <PersonalInfoForm
            personalInfo={this.state}
            inputChange={this.inputChange}
            changePhoto={this.changePhoto}
            saveChanges={this.saveChanges}
            cancelChanges={this.cancelChanges}
          />
        ) : (
          <PersonalInfoOverview
            personalInfo={this.state}
            activateEdit={this.activateEdit}
          />
        )}
      </div>
    );
  }
}

export default PersonalInfo;
