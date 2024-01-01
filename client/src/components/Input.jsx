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

            <Form.Select
              name={name}
              aria-label="Default select example"
              onChange={onChange}
              >



              <option selected>Please Select a {label}</option>
              {optionsArr.map((options) => {
                return <option value={options}>{options}</option>;
              })}
            </Form.Select>
            <Form.Control.Feedback className={`${error ? "d-block" : ""}`} type="invalid">
              {error}
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
      ) : type == "radio" ? (

        // <Row className="mb-3">
        //   <Form.Group md="4">
        //     {/* <Form></Form> */}
        //     <Form.Check
        //       inline
        //       label= {radioOne}
        //       name={name}
        //       type="radio"
        //       value={value}
        //       disabled = {isDisabled}
        //     />
        //     <Form.Check
        //       inline
        //       label={radioTwo}
        //       name={name}
        //       type="radio"
        //       disabled = {isDisabled}
        //     />
        //   </Form.Group>
        // </Row>
        <div className="radioButtons mb-3">
          <div className="radiobutt">
            <input
              type="radio"
              id={radioOne}
              name={name}
              value={radioOne[0]}
              disabled={isDisabled}
              onChange={onChange}
            />
            <label for={radioOne}>{radioOne}</label>
          </div>
          <div className="radiobutt">
            <input
              type="radio"
              id={radioTwo}
              name={name}
              value={radioTwo[0]}
              disabled={isDisabled}
              onChange={onChange}
              // checked={value === 'option1'}
            />
            <label for={radioTwo}>{radioTwo}</label>
          </div >
        </div >
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
