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

    addstadium: {
      StadName: validateSchema['StadName'],
      StadRows: validateSchema['StadRows'],
      StadCity: validateSchema['StadCity'],
      StadSeats: validateSchema['StadSeats']
    },
    
    addstadium: {
    StadName: validateSchema['StadName'],
    StadRows: validateSchema['StadRows'],
    StadCity: validateSchema['StadCity'],
    StadSeats: validateSchema['StadSeats']
    },

    creatematch:{
    HomeTeam: validateSchema['HomeTeam'],
    AwayTeam: validateSchema['AwayTeam'],
    MatchVenue: validateSchema['MatchVenue'],
    date: validateSchema['date'],
    time: validateSchema['time'],
    MainReferee:validateSchema['MainReferee'],
    Linesman1:validateSchema['Linesman1'],
    Linesman2:validateSchema['Linesman2']
    },
   
  };

  const schema = yup.object().shape(formSchema[type]);
  console.log( formSchema["login"] , type);

  return schema

  
};

export default Validation;
