import React from "react";
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';


const Input = ({
  type,
  label,
  placeholder,
  name,
  optionsArr,
  radioOne,
  radioTwo,
  isDisabled,
  onChange,
  // isInvalid={!!errors.city}
  error,
  value
}) => {
  // console.log(error);
  return (
    // <div className="myInput">
    <>
      {/* <div>{label}</div> */}
      {type == "dropdown" ? (
        <Row className="mb-3">
          <Form.Group md="4">
            <Form.Label>{label}</Form.Label>

            <Form.Select name={name} aria-label="Default select example">



              <option selected>Please Select a {label}</option>
              {optionsArr.map((options) => {
                return <option value={options}>{options}</option>;
              })}
            </Form.Select>
          </Form.Group>
        </Row>
      ) : type == "radio" ? (

        <Row className="mb-3">
          <Form.Group md="4">
            {/* <Form></Form> */}
            radio
          </Form.Group>
        </Row>
        // <div className="radioButtons">
        //   <div className="radiobutt">
        //     <input
        //       type="radio"
        //       id={radioOne}
        //       name={name}
        //       value={radioOne}
        //       disabled={isDisabled}
        //     />
        //     <label for={radioOne}>{radioOne}</label>
        //   </div>
        //   <div className="radiobutt">
        //     <input
        //       type="radio"
        //       id={radioTwo}
        //       name={name}
        //       value={radioTwo}
        //       disabled={isDisabled}
        // />
        // <label for={radioTwo}>{radioTwo}</label>
        //   </div >
        // </div >
      ) : (
  // <input
  //   type={type}
  //   placeholder={placeholder}
  //   name={name}
  //   disabled={isDisabled}
  // />
  <Row className="mb-3">
    <Form.Group md="4" >
      <Form.Label>{label}</Form.Label>
      {/* <InputGroup hasValidation>
            <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text> */}
      <Form.Control
        type={type}
        placeholder={placeholder}
        aria-describedby="inputGroupPrepend"
        name={name}
        value={value}
        onChange={onChange}
        isInvalid={!!error}
        disabled={isDisabled}
      />
      <Form.Control.Feedback type="invalid">
        {error}
      </Form.Control.Feedback>
      {/* </InputGroup> */}
    </Form.Group>
  </Row>
)}
    </>
  );
};

export default Input;
