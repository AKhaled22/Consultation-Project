import React from 'react'

const Input = ({ type, label, placeholder, name, optionsArr, radioOne, radioTwo }) => {

    console.log(optionsArr);
    return (
        <div className='myInput'>
            <div>{label}</div>
            {type == "dropdown" ?
                <select className="form-select" aria-label="Default select example" name={name}>
                    <option selected>Please Select {label}</option>
                    {optionsArr.map((options) =>{
                        return (

                            <option value={options}>{options}</option>

                        )
                    })}

                </select>

                : type == "radio"
                    ?
                    <div className='radioButtons'>
                        <div className='radiobutt'>
                            <input type="radio" id={radioOne} name={name} value={radioOne} />
                            <label for={radioOne}>{radioOne}</label>
                        </div>
                        <div className='radiobutt'>
                            <input type="radio" id={radioTwo} name={name} value={radioTwo} />
                            <label for={radioTwo}>{radioTwo}</label>
                        </div>
                    </div>
                    :
                    <input type={type} placeholder={placeholder} name={name} />
            }
        </div>
    )
}

export default Input