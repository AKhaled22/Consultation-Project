import * as yup from "yup";
import { validateSchema } from "./validate_schema.js";

const Validation = (type) => {
  const formSchema = {
    register: {
      firstName: validateSchema["firstName"],
      lastName: validateSchema["lastName"],
      username: validateSchema["username"],
      address: validateSchema["address"],
      dob: validateSchema["dob"],
      city: validateSchema["city"],
      gender: validateSchema["gender"],
      type: validateSchema["type"],

      email: validateSchema["email"],
      password: validateSchema["password"],
      // 'confirm password': validateSchema['confirmPassword']
    },

    login: {
      email: validateSchema["email"],
      password: validateSchema["password"],
      terms: validateSchema["terms"],
    },

    editDetails: {
      username: validateSchema["username"],
      password: validateSchema["password"],
      confirmPassword: validateSchema["confirmPassword"],

      // Can change Name?? AAO
      firstname: validateSchema["firstName"],
      lastname: validateSchema["lastName"],

      city: validateSchema["city"],
      // address: validateSchema["address"],
      email: validateSchema["email"],
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
      StadName: validateSchema["StadName"],
      StadRows: validateSchema["StadRows"],
      StadSeats: validateSchema["StadSeats"],
    },

    creatematch: {
      HomeTeam: validateSchema["HomeTeam"],
      AwayTeam: validateSchema["AwayTeam"],
      MatchVenue: validateSchema["MatchVenue"],
      date: validateSchema["date"],
      time: validateSchema["time"],
      MainReferee: validateSchema["MainReferee"],
      Linesman1: validateSchema["Linesman1"],
      Linesman2: validateSchema["Linesman2"],
      Ticketprice: validateSchema["Ticketprice"],
    },
  };

  const schema = yup.object().shape(formSchema[type]);
  console.log(formSchema["login"], type);

  return schema;
};

export default Validation;
