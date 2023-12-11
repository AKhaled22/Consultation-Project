import React from 'react'
import logo from '../assets/OIP.jpg'
import Form from '../components/Form'

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
        <div className='loginHeader'>

            <img src={logo} width="150px" height="100px" />



        </div>

        <div>
            <Form inputArr = {inputArr} title="Login" buttText="Login"/>

        </div>





    </div>
  )
}

export default Login