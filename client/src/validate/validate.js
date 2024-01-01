import * as yup from 'yup';
import { validateSchema } from './validate_schema.js';

const Validation = (type) => {
  const formSchema = {
    register: {
      firstName: validateSchema['firstName'],
      lastName: validateSchema['lastName'],
      username: validateSchema['username'],
      address: validateSchema['address'],
      dob: validateSchema['dob'],
      city: validateSchema['city'],
      gender: validateSchema['gender'],
      type: validateSchema['type'],



      email: validateSchema['email'],
      password: validateSchema['password'],
      // 'confirm password': validateSchema['confirmPassword']
    },
  
    login: {
      email: validateSchema['email'],
      password: validateSchema['password'],
      terms: validateSchema['terms']
    },
    // 'forgot password': {
    //   email: validateSchema['email']
    // },
    // 'reset password': {
    //   password: validateSchema['password'],
    //   'confirm password': validateSchema['confirmPassword']
    // },
    // 'change password': {
    //   'old password': validateSchema['oldPassword'],
    //   password: validateSchema['password'],
    //   'confirm password': validateSchema['confirmPassword']
    // }
   
  };

  const schema = yup.object().shape(formSchema[type]);
  console.log( formSchema["login"] , type);

  return schema

  
};

export default Validation;
