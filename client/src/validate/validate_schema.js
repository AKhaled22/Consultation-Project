import * as yup from 'yup';

export const validateSchema = {
  firstName: yup.string().required("First Name is required"),
  lastName: yup.string().required("Last Name is required"),
  username: yup.string().required("Username is required"),
  email: yup.string().required("Email is required"),

  city: yup.string().required("City is required"),
  address: yup.string().required("Address is required"),
  password: yup.string().required("Password is required"),
  dob: yup.date().required("Date of Birth is required"),
  terms: yup.bool().required().oneOf([true], 'Terms must be accepted'),
};
