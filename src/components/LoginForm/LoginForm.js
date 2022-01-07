import React from "react";
import {
  FormWrap,
  Wrap,
  // ForgotPassword,
  Heading,
  SignupRoute,
} from "./LoginformStyled";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { LoginSchema } from "./LoginSchema";
import axios from "axios";
import { useState } from "react";
import { useHistory } from "react-router-dom";

const initialValues = {
  email: "",
  password: "",
};

const LoginForm = (props) => {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
 
  const history = useHistory()
  return (


    
    <Wrap>
      <Heading>Sign In</Heading>
      <Formik
        initialValues={initialValues}
        validationSchema={LoginSchema}
        onSubmit={(values) => {
          
          setLoading(true);
          axios
            .post(
              "auth",
              values
            )
            .then((res) => {
              localStorage.setItem("token", res.data.token);
              localStorage.setItem("role", res.data.role);
              console.log(res)
              history.push("/dashboard");    
          })
            .catch((err) => {
              const resMessage =
                (err.response &&
                  err.response.data &&
                  err.response.data.message) ||
                err.message ||
                err.toString();

              setLoading(false);
              setMessage(resMessage);
            
            });
        }}
      >
        {(formik) => {
          const { errors, touched, isValid, dirty } = formik;
          return (
            <div>
                <p>Login details</p>
                <p> user: user@gmail.com password: password</p>
                <p> super admin: super@gmail.com  password: password</p>
                <span style={{color: 'red'}}>If invalid user prompts. The backend server requires a couple minutes to startup </span>
                  {message && (
                    <div className="form-group">
                      <div className="alert alert-danger" role="alert">
                        Invalid user
                      </div>
                    </div>
                  )}      
              <Form>
                <FormWrap>
                  <div className="row">
                    <label htmlFor="email" className="label">
                      Email
                    </label>
                    <Field
                      type="email"
                      name="email"
                      id="email"
                      className={
                        errors.email && touched.email ? "input-error" : "input"
                      }
                    />
                    <ErrorMessage
                      name="email"
                      component="span"
                      className="error"
                    />
                  </div>
                  <div className="row">
                    <label htmlFor="password" className="label">
                      Password
                    </label>
                    <Field
                      type="password"
                      name="password"
                      id="password"
                      className={
                        errors.password && touched.password
                          ? "input-error"
                          : "input"
                      }
                    />
                    <ErrorMessage
                      name="password"
                      component="span"
                      className="error"
                    />
                  </div>
                  
                  <button
                    type="submit"
                    className={!(dirty && isValid) ? "disabled-btn" : "button"}
                    disabled={!(dirty && isValid)}
                  >
                    {!loading ? "login" : "loading..."}
                  </button>
               
                </FormWrap>
              </Form>
            </div>
          );
        }}
      </Formik>
      <SignupRoute>
        Not Registered?
        <a href="/signup" className="text-blue-50">
          {" "}
          Sign Up
        </a>
      </SignupRoute>
    </Wrap>
  );
};

export default LoginForm;
