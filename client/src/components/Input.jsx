import React from 'react'

const Input = ({ type, label, placeholder, name, optionsArr, radioOne, radioTwo }) => {
    return (
        <div className='myInput'>
            <div>{label}</div>
            {type == "dropdown" ?

                <select className="form-select" aria-label="Default select example" name={name}>
                    <option selected>{placeholder}</option>
                    {optionsArr.map((option) => {
                        return (

                            <option value={option.value}>{option.value}</option>

                        )
                    })}

                </select>

                : type == "radio"
                    ?
                    <>
                        <input type="radio" id={radioOne}  name={name} value={radioOne} />
                        <label for={radioOne}>{radioOne}</label>
                        <input type="radio" id={radioTwo} name={name} value={radioTwo}/>
                        <label for={radioTwo}>{radioTwo}</label>

                    </>
                    :
                    <input type={type} placeholder={placeholder} name={name} />
            }
        </div>
    )
}

export default Input