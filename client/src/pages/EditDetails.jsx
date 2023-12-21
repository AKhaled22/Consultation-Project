import React from "react";
import Header from "../components/Header";
import Form from "../components/Form";
const EditDetails = () => {
  const inputArr = [
    {
      type: "text",
      label: "Username",
      placeholder: "username",
      name: "username",
      disable: false,
    },
    {
      type: "password",
      label: "Password",
      placeholder: "********",
      name: "password",
      disable: false,
    },
    {
      type: "password",
      label: "Confirm Password",
      placeholder: "********",
      name: "confirmPassword",
      disable: false,
    },
    {
      type: "text",
      label: "First Name",
      placeholder: "Ahmed",
      name: "firstname",
      disable: false,
    },
    {
      type: "text",
      label: "Last Name",
      placeholder: "Toaima",
      name: "lastname",
      disable: false,
    },
    {
      type: "date",
      label: "Date of Birth",
      name: "dob",
      disable: true,
    },
    {
      type: "radio",
      name: "gender",
      radioOne: "Male",
      radioTwo: "Female",
      disable: true,
    },
    {
      type: "dropdown",
      label: "City",
      name: "city",
      optionsArr: [
        "Cairo",
        "Luxor",
        "Aswan",
        "Alexandria",
        "Sharm el Sheikh",
        "Hurghada",
      ],
      disable: false,
    },
    {
      type: "text",
      label: "Adress",
      placeholder: "8138 Mokattam",
      name: "adress",
      disable: false,
    },
    {
      type: "email",
      label: "Email",
      placeholder: "username@gmail.com",
      name: "email",
      disable: false,
    },
    {
      type: "radio",
      name: "gender",
      radioOne: "Fan",
      radioTwo: "Manager",
      disable: true,
    },
  ];
  return (
    <div>
      <Header />
      <Form inputArr={inputArr} title="Edit Details" buttText="Confirm Edit" />
    </div>
  );
};
export default EditDetails;
