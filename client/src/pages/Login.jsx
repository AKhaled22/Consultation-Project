import React from 'react'
import Form from '../components/Form'
import Header from '../components/Header'
import { setUserType } from '../features/userSlice'
import { useSelector, useDispatch } from 'react-redux'



const Login = () => {
    // type, label, placeholder, name, optionsArr, radioOne, radioTwo 

    const inputArr = [
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
            type: "password",
            label: "Password",
            placeholder: "********",
            name: "password"
        }
    ]


    return (
        <div>
            <Header />

            <Form inputArr={inputArr} title="Login" buttText="Login" />






        </div>
    )
}

export default Login