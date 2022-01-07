import React from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Formik } from "formik";
import { ConsultantSignupSchema } from "./SignupSchema";
import {gender} from './genderData'
const SignupFormConsultant = () => {
    return (
        <>
           <Formik
            validationSchema={ConsultantSignupSchema}
            onSubmit={console.log}
            initialValues={{
              fname:"",
              email:"",
              lname:"",
              password:"",
              passwordConfirmation:"",
              date:"",
              gender:"",
              phoneNumber:"",
            }}
           >
             {({handleSubmit, handleChange, values, touched, errors}) => (
                <Form noValidate onSubmit={handleSubmit}>
                <hr/>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridFirstName">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control  placeholder="Enter First Name" 
                          type="text"
                          name="fname"
                          value={values.fname}
                          onChange={handleChange}
                          isValid={touched.fname && !errors.fname}
                          isInvalid={!!errors.fname}
                        />
                         <Form.Control.Feedback type="invalid">
                          {errors.fname}
                        </Form.Control.Feedback>
                        </Form.Group>
    
                        <Form.Group as={Col} controlId="formGridLastName">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control placeholder="Enter Last Name" 
                           type="text"
                           name="lname"
                           value={values.lname}
                           onChange={handleChange}
                           isValid={touched.lname && !errors.lname}
                           isInvalid={!!errors.lname}
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.lname}
                        </Form.Control.Feedback>
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" 
                            name="email"
                            value={values.email}
                            onChange={handleChange}
                            isValid={touched.email && !errors.email}
                            isInvalid={!!errors.email}
                        />
                          <Form.Control.Feedback type="invalid">
                          {errors.email}
                        </Form.Control.Feedback>
                        </Form.Group>
    
                        <Form.Group as={Col} controlId="formGridPDOB">
                        <Form.Label>Date Of Birth</Form.Label>
                        <Form.Control type="date" 
                           value={values.date}
                           onChange={handleChange}
                           isValid={touched.date && !errors.date}
                           isInvalid={!!errors.date}
                        />
                          <Form.Control.Feedback type="invalid">
                          {errors.email}
                        </Form.Control.Feedback>
                        </Form.Group>
                    </Row>
    
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridPhoneNumber">
                            <Form.Label>Phone Number</Form.Label>
                            <Form.Control  type="number" placeholder="Enter Phone Number" 
                                value={values.phoneNumber}
                                onChange={handleChange}
                                isValid={touched.phoneNumber && !errors.phoneNumber}
                                isInvalid={!!errors.phoneNumber}
                            />
                             <Form.Control.Feedback type="invalid">
                          {errors.phoneNumber}
                        </Form.Control.Feedback>
                        </Form.Group>
    
                        <Form.Group as={Col} controlId="formGridSex">
                        <Form.Label>Sex</Form.Label>
                            <Form.Control as="Select"
                             value={values.gender}
                             onChange={handleChange}
                             isValid={touched.gender && !errors.gender}
                             isInvalid={!!errors.gender}
                            >
                                <option>-Select-</option>
                               {gender.map((gender, key) => (
                                 <option key={key}>{gender}</option>
                                 ))}
                            </Form.Control>
                            <Form.Control.Feedback type="invalid">
                          {errors.gender}
                        </Form.Control.Feedback>
                        </Form.Group>
                    </Row>
    
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type='password' placeholder="Enter Password"  
                           value={values.password}
                           onChange={handleChange}
                           isValid={touched.password && !errors.password}
                           isInvalid={!!errors.password}
                        />
                          <Form.Control.Feedback type="invalid">
                          {errors.password}
                        </Form.Control.Feedback>
                        </Form.Group>
    
                        <Form.Group as={Col} controlId="formGridConfirmPassword">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control type='password' placeholder="Enter Password"
                           value={values.passwordConfirmation}
                           onChange={handleChange}
                           isValid={touched.passwordConfirmation && !errors.passwordConfirmation}
                           isInvalid={!!errors.passwordConfirmation}
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.passwordConfirmation  }
                        </Form.Control.Feedback>
                        </Form.Group>
        
                    </Row>
                    <br />
                    <Row className="justify-content-md-center">
                        <Col xs lg='auto'>
                            <Button variant="primary" type="submit" md="auto">
                                Sign up
                            </Button>
                        </Col>
                        
                    </Row>
                    
                    </Form>
             )}
           </Formik>
                <br />
                <Row className="justify-content-md-center">
                    <Col xs lg="auto">
                        <Form.Text >
                                Already Registered?<Link to="/login" className='text-primary'>Sign In</Link>
                        </Form.Text> 
                    </Col>  
                </Row>
        </>
    )
}

export default SignupFormConsultant;
