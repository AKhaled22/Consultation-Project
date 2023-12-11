import React from 'react'
import Header from '../components/Header'
import Form from '../components/Form'
const Register = () => {
    const inputArr = [
        {
            type: "text",
            label: "Username",
            placeholder: "username",
            name: "username"
            // optionsArr:
            // radioOne:
            // radioTwo:

        },
        {
            type: "password",
            label: "Password",
            placeholder: "********",
            name: "password"
        },
        {
            type: "text",
            label: "First Name",
            placeholder: "Ahmed",
            name: "firstname"
            // optionsArr:
            // radioOne:
            // radioTwo:

        },
        {
            type: "text",
            label: "Last Name",
            placeholder: "Toaima",
            name: "lastname"
            // optionsArr:
            // radioOne:
            // radioTwo:

        },
        {
            type: "date",
            label: "Date of Birth",
            // placeholder: "username@gmail.com",
            name: "dob"
            // optionsArr:
            // radioOne:
            // radioTwo:

        },
        {
            type: "radio",
            // label: "",
            // placeholder: "username@gmail.com",
            name: "gender",
            // optionsArr:
            radioOne: "Male",
            radioTwo: "Female"

        },
        {
            type: "dropdown",
            label: "City",
            // placeholder: "username@gmail.com",
            name: "city",
            optionsArr:["Cairo", "Luxor", "Aswan", "Alexandria", "Sharm el Sheikh" , "Hurghada"]
            // radioOne:
            // radioTwo:

        },
        {
            type: "text",
            label: "Adress",
            placeholder: "8138 Mokattam",
            name: "adress"
            // optionsArr:
            // radioOne:
            // radioTwo:

        },
        {
            type: "email",
            label: "Email",
            placeholder: "username@gmail.com",
            name: "email"
            // optionsArr:
            // radioOne:
            // radioTwo:

        },
        {
            type: "radio",
            // label: "",
            // placeholder: "username@gmail.com",
            name: "gender",
            // optionsArr:
            radioOne: "Fan",
            radioTwo: "Manager"

        }
    ]


    return (
        <div>
            <Header />

            <Form inputArr={inputArr} title="Register" buttText="Register" />






        </div>
    )
}

export default Register