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
      // terms: validateSchema["terms"],
    },

    editDetails: {
      username: validateSchema["username"],
      password: validateSchema["password"],
      confirmPassword: validateSchema["confirmPassword"],

      // Can change Name?? AAO
      firstname: validateSchema["firstName"],
      lastname: validateSchema["lastName"],

      city: validateSchema["city"],
      address: validateSchema["address"],
      email: validateSchema["email"],


    },
    bill: {
      cardHolderName: validateSchema["cardHolderName"],
      cardNumber: validateSchema["cardNumber"],
      expiryDate: validateSchema["expiryDate"],
      code: validateSchema["code"]
    }
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
  // console.log(formSchema["login"], type);

  return schema;
};

export default Validation;
