import React from "react";
import styled from "styled-components";
import { Form, Col, Row, Button} from "react-bootstrap";
import TextEditor from "../TextEditor/TextEditor";
import { Link } from "react-router-dom";

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
const BackButton = styled(Link)`
position: absolute;
right: 0;

  .bi{
    font-size: 30px;
  }
`
const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
 border-bottom: 1px solid #cccccc;
  position: relative;
  margin-bottom: 20px;
`
















const EditJob = ({handleClick}) => {
   
  return (
    <>
      <TableWrapper >
          
        <Container>
        <Top>
                <h5>Edit Job Post</h5>
                <BackButton to='./recruitment'><i class="bi bi-arrow-left-short"/></BackButton>
                <hr />
                </Top>
          <Form>
            <Row className="mb-3 d-flex flex-column flex-md-row">
              <Form.Group as={Col} controlId="formGridName">
                <Form.Label>Job Title</Form.Label>
                <Form.Control placeholder="Job Title" />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridInstitution">
                <Form.Label>Number for hire</Form.Label>
                <Form.Control placeholder="Number for hire" />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridType">
                <Form.Label>Job Type</Form.Label>
                <Form.Control as="Select" defaultValue="-Select-">
                  <option>-Select-</option>
                  <option value="1">Full Time</option>
                  <option value="2">Part-TIme</option>
                  <option value="3">Contract</option>
                </Form.Control>
              </Form.Group>

        
            </Row>
            <Row>
            <Form.Group as={Col} controlId="formGridRemote">
                <Form.Label>Remote</Form.Label>
                <Form.Control as="Select" defaultValue="-Select-">
                  <option>-Select-</option>
                  <option value="1">Yes</option>
                  <option value="2">No</option>
                </Form.Control>
              </Form.Group>

              

              <Form.Group as={Col} controlId="formGridLga">
                <Form.Label>Select Institution</Form.Label>
                <Form.Control as="Select" defaultValue="-Select-">
                  <option>-Select-</option>
                  <option value="1">Male</option>
                  <option value="2">Female</option>
                  <option value="3">I prefer not to say</option>
                </Form.Control>
              </Form.Group>
              <Form.Group as={Col} controlId="formGridDate">
                <Form.Label>Closing Date</Form.Label>
                <Form.Control type='date' placeholder="Number for hire" />
              </Form.Group>
            </Row>          
          
                    <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Job Description</Form.Label>
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

export default EditJob;
