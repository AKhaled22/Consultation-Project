import React from 'react'
import Input from './Input'
import { Link } from 'react-router-dom'
import Button from './Button.jsx'

const Form = ({ title, inputArr, buttText }) => {




    return (
        <div className='myForm'>
            <form>

                <h1 >{title}</h1>

                {
                    inputArr.map((inp) => {
                        return (
                            <Input label={inp.label} name={inp.name} optionsArr={inp.optionsArr} placeholder={inp.placeholder} radioOne={inp.radioOne} radioTwo={inp.radioTwo} type={inp.type} />
                        )
                    })

                }


                {title == "Login" ?

                <Link to="/forgetpassword">Forget Password? </Link>

                :
                null
            }
                

                <Button buttText={buttText} />




            </form>
        </div>
    )
}

export default Form