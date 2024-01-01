import * as yup from 'yup';

export const validateSchema = {
  firstName: yup.string().required("First Name is required"),
  lastName: yup.string().required("Last Name is required"),
  username: yup.string().required("Username is required"),
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
  city: yup.string().required("City is required"),
  address: yup.string().required("Address is required"),
  // password: yup.string().required("Password is required"),
  dob: yup.date().required("Date of Birth is required"),
  terms: yup.bool().required().oneOf([true], 'Terms must be accepted'),
  gender: yup.string().required('Please select an option'),
  type: yup.string().required('Please select an option'),
  StadName:yup.string().required("Stadium name is required"),
  StadRows:yup.number().positive().integer().required('Number of seats is required'),
  StadCity:yup.string().required('Please select a city'),
  StadSeats:yup.number().positive().integer().required('Number of seats is required'),
  HomeTeam:yup.string().required('Please select an option'),
  AwayTeam:yup.string().required('Please select an option'),
  MatchVenue:yup.string().required('Please select an option'),
  date:yup.date().required("Match date is required"),
  time: yup.string().required('Match time is required'),
  MainReferee:yup.string().required('Please select an option'),
  Linesman1:yup.string().required('Please select an option'),
  Linesman2:yup.string().required('Please select an option'),
};
