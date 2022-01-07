
import React from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const SignupFormInstitution = () => {
    return (
        <>
            <Form>
           <hr/>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridFirstName">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control  placeholder="Enter First Name" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridLastName">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control placeholder="Enter Last Name" />
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPhoneNumber">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control  type="number" placeholder="Enter Phone Number" />
                    </Form.Group>
                </Row>

                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridInstitutionName">
                    <Form.Label>Institution</Form.Label>
                    <Form.Control placeholder="Enter Institution Name" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridIndustry">
                    <Form.Label>Industry</Form.Label>
                        <Form.Control as="Select">
                            <option>-Select-</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </Form.Control>
                    </Form.Group>
                </Row>

                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type='password' placeholder="Enter Password" />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridConfirmPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control type='password' placeholder="Enter Password" />
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

export default SignupFormInstitution;
