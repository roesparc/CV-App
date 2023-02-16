import examplePhoto from "./example-photo.jpg";
import uniqid from "uniqid";

export const samplePersonalInfo = {
  name: "John Doe",
  title: "Software Developer",
  mail: "john_doe@mail.com",
  phone: "012 345 6789",
  location: "Mexico City",
  photoUrl: examplePhoto,
};

export const introductionContent =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

export const sampleWorkExperience = {
  sample1: {
    id: uniqid(),
    position: "Senior Software Developer",
    company: "Apple",
    startDate: "2020",
    endDate: "Present",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },

  sample2: {
    id: uniqid(),
    position: "Junior Web Developer",
    company: "Google",
    startDate: "2018",
    endDate: "2020",
    description:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },

  sample3: {
    id: uniqid(),
    position: "Digital Marketing Manager",
    company: "Amazon",
    startDate: "2015",
    endDate: "2018",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },

  emptyTemplate: () => ({
    id: uniqid(),
    position: "",
    company: "",
    startDate: "",
    endDate: "",
    description: "",
  }),
};

export const sampleEducation = {
  sample1: {
    id: uniqid(),
    fieldOfStudy: "Computer Science",
    institution: "Harvard University",
    startDate: "2014",
    endDate: "2019",
  },

  sample2: {
    id: uniqid(),
    fieldOfStudy: "Marketing",
    institution: "Stanford University",
    startDate: "2010",
    endDate: "2014",
  },

  emptyTemplate: () => ({
    id: uniqid(),
    fieldOfStudy: "",
    institution: "",
    startDate: "",
    endDate: "",
  }),
};
