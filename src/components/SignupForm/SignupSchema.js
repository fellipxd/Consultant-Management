import * as Yup from "yup";
import {gender} from './genderData'

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

export const ConsultantSignupSchema = Yup.object().shape({
  fname: Yup.string().min(2, "Mininum 2 characters").required("Required!"),
  lname: Yup.string().min(2, "Mininum 2 characters").required("Required!"),
  email: Yup.string().email().required("Required!"),
  password: Yup.string().required("Required!"),
  passwordConfirmation: Yup.string().oneOf(
    [Yup.ref("password"), null],
    "Passwords must match"
  ),
  date: Yup.date().default(() => new Date()),  
  gender: Yup.string().required("Please select").oneOf(gender),
  // phone: Yup.string().number().required("Required!"),
  phoneNumber: Yup.string().required("Required!").matches(phoneRegExp, 'Phone number is not valid')

  // .min(6, "Password is too short - should be 6 chars minimum")
})



