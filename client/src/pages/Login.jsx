import React , {useEffect} from 'react'
import MyForm from '../components/MyForm'
import Header from '../components/Header'
import { setUserType } from '../features/userSlice'
import { useSelector, useDispatch } from 'react-redux'
import { setActivePage } from '../features/pageSlice'



const Login = () => {
    // type, label, placeholder, name, optionsArr, radioOne, radioTwo 
    const dispatch = useDispatch()

    useEffect(() => {
    
    
        dispatch(setActivePage("login")) 
      
    }, [])
    

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

            <MyForm type="login" inputArr={inputArr} title="Login" buttText="Login" />






        </div>
    )
}

export default Login