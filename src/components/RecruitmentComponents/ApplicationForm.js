import React from "react";
import styled from "styled-components";
import { Form, Col, Row, Button, CloseButton } from "react-bootstrap";
import TextEditor from "../TextEditor/TextEditor";

const TableWrapper = styled.div`
  height: max-content;
  margin-bottom: 0.7rem;

`;
const Container = styled.div`
  background-color: white;
  padding: 30px 20px;
  margin-top: 33px;

`;

const Desc = styled.div`
  border: 1px solid #cccccc;

  .top {
    border-bottom: 1px solid #cccccc;
  }
`;














const Application = ({handleClick}) => {
   
  return (
    <>
      <TableWrapper >
          
        <Container>
        <CloseButton onClick={handleClick}/>
                <h5>Apply for this job</h5>
                <hr />
          <Form>
            <Row className="mb-3 d-flex flex-column flex-md-row">
              <Form.Group as={Col} controlId="formGridName">
                <Form.Label>First Name</Form.Label>
                <Form.Control placeholder="First Name" />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridLastName">
                <Form.Label>Last Name</Form.Label>
                <Form.Control placeholder="Last Name" />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control placeholder="Email" />
              </Form.Group>

        
            </Row>
            <Row className="mb-3 d-flex flex-column flex-md-row">
              <Form.Group as={Col} controlId="formGridName">
                <Form.Label>Upload Cv</Form.Label>
                <Form.Control type='file'  />
              </Form.Group>

              

        
            </Row>
           
          
                    <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Cover Letter</Form.Label>
              <Desc>
                <TextEditor />
              </Desc>
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Container>
      </TableWrapper>
    </>
  );
};

export default Application;
