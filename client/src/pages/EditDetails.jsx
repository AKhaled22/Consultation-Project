import React, { useEffect } from "react";
import Header from "../components/Header";
import MyForm from "../components/MyForm";
import { useSelector, useDispatch } from "react-redux";
import { setActivePage } from "../features/pageSlice";
import axios from "axios";
const EditDetails = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getUserDetails = async () => {
      try {
        const res = await axios.get(
          "http://localhost:3001/api/user/getDetails",
          {
            headers: {
              Authorization: localStorage.getItem("Token"),
            },
          }
        );
        console.log(res);
      } catch (err) {
        console.log(err);
      }
    };

    dispatch(setActivePage("editdetails"));
    getUserDetails();
  }, []);

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
      label: "Address",
      placeholder: "8138 Mokattam",
      name: "address",
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
  const handleOnSubmit = async (values, errors) => {
    if (Object.keys(errors).length === 0) {
      try {
        const res = await axios.post(
          "http://localhost:3001/api/user/editDetails",
          values
        );
        console.log(res);
      } catch (err) {
        console.log(err);
      }
    }
  };
  return (
    <div>
      <Header />
      <MyForm
        inputArr={inputArr}
        type="editDetails"
        title="Edit Details"
        buttText="Confirm Edit"
        handleSub={handleOnSubmit}
      />
    </div>
  );
};
export default EditDetails;
