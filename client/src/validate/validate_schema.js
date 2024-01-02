import * as yup from 'yup';

export const validateSchema = {
  firstName: yup.string().required("First Name is required").min(3, "First name should have more than 3 characters").max(30, "First name cannot exceed 30 characters"),
  lastName: yup.string().required("Last Name is required").min(3, "Last name should have more than 3 characters").max(30, "Last name cannot exceed 30 characters"),
  username: yup.string().required("Username is required").min(3, "Username should have more than 3 characters").max(30, "Username cannot exceed 30 characters"),
  email: yup.string().required("Email is required"),
  password: yup
    .string()
    .required("Password is required")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]/,
      'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character [@$!%*?&#]'
    )
    .min(8, 'Password must be at least 8 characters')
    .max(20, 'Password must be at most 20 characters'),
  city: yup.string().required("City is required").min(3, "City should have more than 3 characters").max(30, "City cannot exceed 30 characters"),
  address: yup.string().required("Address is required"),
  // password: yup.string().required("Password is required"),
  dob: yup.date().required("Date of Birth is required"),
  terms: yup.bool().required().oneOf([true], 'Terms must be accepted'),
  gender: yup.string().required('Please select an option'),
  type: yup.string().required('Please select an option'),

};
