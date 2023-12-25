import React from "react";
import Input from "./Input.jsx";
import { Link } from "react-router-dom";
import Button from "./Button.jsx";


// import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import * as formik from 'formik';
import * as yup from 'yup';

import Validation from "../validate/validate.js";


const myForm = ({ title, inputArr, buttText, type }) => {

  const { Formik } = formik;
  console.log(Validation(type));

  // const schema = yup.object().shape({
  //   firstName: yup.string().required("First Name is required"),
  //   lastName: yup.string().required("Last Name is required"),
  //   // username: yup.string().required(),
  //   email: yup.string().required("Email is required"),

  //   city: yup.string().required("City is required"),
  //   address: yup.string().required("Address is required"),
  //   password: yup.string().required("Password is required"),
  //   dob: yup.date().required("Date of Birth is required"),
  //   terms: yup.bool().required().oneOf([true], 'Terms must be accepted'),
  // });

  const handleSubmit = (values) => {

    console.log(values);

  }

  return (
    <div className="myForm">
      {/* <form>

        {inputArr.map((inp) => {
          return (
            <Input
              label={inp.label}
              name={inp.name}
              optionsArr={inp.optionsArr}
              placeholder={inp.placeholder}
              radioOne={inp.radioOne}
              radioTwo={inp.radioTwo}
              type={inp.type}
              isDisabled={inp.disable}
            />
          );
        })}

        {title == "Login" ? (
          <Link to="/forgetpassword">Forget Password? </Link>
        ) : null}

        <Button buttText={buttText} />
      </form> */}



      {/* <h1>{title}</h1> */}



      <Formik
        validationSchema={Validation(type)}
        onSubmit={console.log}
        initialValues={{

        }}
      >
        {({ handleSubmit, handleChange, values, touched, errors }) => (
          <Form noValidate onSubmit={handleSubmit}>


            {inputArr && inputArr.map((inp, i) =>
            
              <Input
                onChange={handleChange}
                // isInvalid={!!errors.city}
                value={values[inp.name]}
                error={errors[inp.name]}
                label={inp.label}
                name={inp.name}
                optionsArr={inp.optionsArr}
                placeholder={inp.placeholder}
                radioOne={inp.radioOne}
                radioTwo={inp.radioTwo}
                type={inp.type}
                isDisabled={inp.disable}
              />)}


            <Form.Group className="mb-3 d-none">
              <Form.Check
                required
                name="terms"
                label="Agree to terms and conditions"
                onChange={handleChange}
                isInvalid={!!errors.terms}
                feedback={errors.terms}
                feedbackType="invalid"

              />
            </Form.Group>



            <Button type="submit" buttText={buttText} />
          </Form>
        )}
      </Formik>



    </div>
  );
};

export default myForm;








// function FormExample() {
//   const { Formik } = formik;

//   const schema = yup.object().shape({
//     firstName: yup.string().required(),
//     lastName: yup.string().required(),
//     username: yup.string().required(),
//     city: yup.string().required(),
//     state: yup.string().required(),
//     zip: yup.string().required(),
//     terms: yup.bool().required().oneOf([true], 'Terms must be accepted'),
//   });

//   return (
//     <Formik
//       validationSchema={schema}
//       onSubmit={console.log}
//       initialValues={{
//         firstName: 'Mark',
//         lastName: 'Otto',
//         username: '',
//         city: '',
//         state: '',
//         zip: '',
//         terms: false,
//       }}
//     >
//       {({ handleSubmit, handleChange, values, touched, errors }) => (
//         <Form noValidate onSubmit={handleSubmit}>
//           <Row className="mb-3">
//             <Form.Group as={Col} md="4" controlId="validationFormik01">
//               <Form.Label>First name</Form.Label>
//               <Form.Control
//                 type="text"
//                 name="firstName"
//                 value={values.firstName}
//                 onChange={handleChange}
//                 isValid={touched.firstName && !errors.firstName}
//               />
//               <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
//             </Form.Group>
//             <Form.Group as={Col} md="4" controlId="validationFormik02">
//               <Form.Label>Last name</Form.Label>
//               <Form.Control
//                 type="text"
//                 name="lastName"
//                 value={values.lastName}
//                 onChange={handleChange}
//                 isValid={touched.lastName && !errors.lastName}
//               />

//               <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
//             </Form.Group>
//             <Form.Group as={Col} md="4" controlId="validationFormikUsername">
//               <Form.Label>Username</Form.Label>
//               <InputGroup hasValidation>
//                 <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
//                 <Form.Control
//                   type="text"
//                   placeholder="Username"
//                   aria-describedby="inputGroupPrepend"
//                   name="username"
//                   value={values.username}
//                   onChange={handleChange}
//                   isInvalid={!!errors.username}
//                 />
//                 <Form.Control.Feedback type="invalid">
//                   {errors.username}
//                 </Form.Control.Feedback>
//               </InputGroup>
//             </Form.Group>
//           </Row>
//           <Row className="mb-3">
//             <Form.Group as={Col} md="6" controlId="validationFormik03">
//               <Form.Label>City</Form.Label>
//               <Form.Control
//                 type="text"
//                 placeholder="City"
//                 name="city"
//                 value={values.city}
//                 onChange={handleChange}
//                 isInvalid={!!errors.city}
//               />

//               <Form.Control.Feedback type="invalid">
//                 {errors.city}
//               </Form.Control.Feedback>
//             </Form.Group>
//             <Form.Group as={Col} md="3" controlId="validationFormik04">
//               <Form.Label>State</Form.Label>
//               <Form.Control
//                 type="text"
//                 placeholder="State"
//                 name="state"
//                 value={values.state}
//                 onChange={handleChange}
//                 isInvalid={!!errors.state}
//               />
//               <Form.Control.Feedback type="invalid">
//                 {errors.state}
//               </Form.Control.Feedback>
//             </Form.Group>
//             <Form.Group as={Col} md="3" controlId="validationFormik05">
//               <Form.Label>Zip</Form.Label>
//               <Form.Control
//                 type="text"
//                 placeholder="Zip"
//                 name="zip"
//                 value={values.zip}
//                 onChange={handleChange}
//                 isInvalid={!!errors.zip}
//               />

//               <Form.Control.Feedback type="invalid">
//                 {errors.zip}
//               </Form.Control.Feedback>
//             </Form.Group>
//           </Row>
//           <Form.Group className="mb-3">
//             <Form.Check
//               required
//               name="terms"
//               label="Agree to terms and conditions"
//               onChange={handleChange}
//               isInvalid={!!errors.terms}
//               feedback={errors.terms}
//               feedbackType="invalid"
//               id="validationFormik0"
//             />
//           </Form.Group>
//           <Button type="submit">Submit form</Button>
//         </Form>
//       )}
//     </Formik>
//   );
// }
