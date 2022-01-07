import React, { useState } from "react";
import styled from "styled-components";
import { Form, Col, Row, Button } from "react-bootstrap";
import TextEditor from "../../../TextEditor/TextEditor";

const TableWrapper = styled.div`
  height: max-content;
  margin-top: 0.7rem;
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

const ImageUpload = styled.img`
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  position: relative;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;
const ImageContainer = styled.div`
  box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px,
    rgb(209, 213, 219) 0px 0px 0px 1px inset;
  width: 40%;
  height: 30vh;
  background-color: #fff;
  padding: 0;
  margin: 16px;

  @media screen and (max-width: 978px) {
    width: 60%;
  }
`;
const BrowseBtn = styled.div`
  border: 2px dashed #bbb;
  width: 40%;
  // height: 50px;
  background-color: #fff;
  text-align: center;
  color: #222;
  border-radius: 5px;
  padding: 0;
  margin: 0;
  @media screen and (max-width: 978px) {
    width: 60%;
  }
`;

const EditProfile = ({ handleClick }) => {
  const [picture, setPicture] = useState(null);
  const [imgData, setImgData] = useState(null);
  const fileSelectedHandler = (e) => {
    if (e.target.files[0]) {
      console.log("picture: ", e.target.files);
      setPicture(e.target.files[0]);
      const reader = new FileReader();
      reader.addEventListener("load", () => {
        setImgData(reader.result);
      });
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  /* const fileUploadHandler = () => {
      const fd = new FormData();
      fd.append('picture', setPicture, setPicture.name);
      axios.post('url', fd)
      .then(res => {
        // upload here
        alert(res);
      });
    } */
  return (
    <>
      <TableWrapper>
        <Container>
          {/* <CloseButton onClick={handleClick}/>
                <h5>Add New</h5>
                <hr /> */}
          <Form>
            <Row className="mb-3 d-flex flex-column flex-md-row">
              <Form.Group as={Col} controlId="formGridName">
                <Form.Label>First Name</Form.Label>
                <Form.Control placeholder="First Name" />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridName">
                <Form.Label>Last Name</Form.Label>
                <Form.Control placeholder="Last Name" />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Email" />
              </Form.Group>
            </Row>
            <Row className="mb-3 d-flex flex-column flex-md-row">
              <Form.Group as={Col} controlId="formGridPhone">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control type="number" placeholder="Enter phone number" />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridAddress">
                <Form.Label>Email</Form.Label>
                <Form.Control placeholder="Address" />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridSex">
                <Form.Label>Gender</Form.Label>
                <Form.Control as="Select" defaultValue="-Select-">
                  <option>-Select-</option>
                  <option value="1">Male</option>
                  <option value="2">Female</option>
                  <option value="3">I prefer not to say</option>
                </Form.Control>
              </Form.Group>
            </Row>

            <Row className="mb-3 d-flex flex-column flex-md-row">
              <Form.Group as={Col} controlId="formGridInstitution">
                <Form.Label>Institution Name</Form.Label>
                <Form.Control placeholder="Institution Name" />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>City</Form.Label>
                <Form.Control as="Select" defaultValue="-Select-">
                  <option>-Select-</option>
                  <option value="1">Male</option>
                  <option value="2">Female</option>
                  <option value="3">I prefer not to say</option>
                </Form.Control>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridState">
                <Form.Label>State</Form.Label>
                <Form.Control as="Select" defaultValue="-Select-">
                  <option>-Select-</option>
                  <option value="1">Male</option>
                  <option value="2">Female</option>
                  <option value="3">I prefer not to say</option>
                </Form.Control>
              </Form.Group>
            </Row>

            <Row className="mb-3 d-flex flex-column flex-md-row">
              <Form.Group as={Col} controlId="formGridLga">
                <Form.Label>LGA</Form.Label>
                <Form.Control as="Select" defaultValue="-Select-">
                  <option>-Select-</option>
                  <option value="1">Male</option>
                  <option value="2">Female</option>
                  <option value="3">I prefer not to say</option>
                </Form.Control>
              </Form.Group>
              <Form.Group as={Col} controlId="formGridZip">
                <Form.Label>Zip Code</Form.Label>
                <Form.Control type="number" placeholder="Zip Code" />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridStatus">
                <Form.Label>Status</Form.Label>
                <Form.Control as="Select" defaultValue="-Select-">
                  <option>-Select-</option>
                  <option value="1">Active</option>
                  <option value="2">Inactive</option>
                </Form.Control>
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <ImageContainer>
                <ImageUpload alt="" src={imgData} />
              </ImageContainer>
              <Form.Group className="mb-3">
                <Form.Control
                  type="file"
                  id="actual-btn"
                  onChange={fileSelectedHandler}
                  accept="image/*"
                  multiple="false"
                  style={{ display: "none" }}
                />
                <BrowseBtn>
                  <Form.Label
                    for="actual-btn"
                    style={{ padding: "10% 7%", cursor: "pointer" }}
                  >
                    Browse Files...
                  </Form.Label>
                </BrowseBtn>
              </Form.Group>
            </Row>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Description</Form.Label>
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

export default EditProfile;
