
import React, { useState } from 'react';
import styled from "styled-components";
import {Form, Col, Row, Button, CloseButton} from "react-bootstrap";
import axios from 'axios';

const TableWrapper = styled.div`
  height: max-content;
  margin-top: 0.7rem;
  flex: 1;
`;
const Container = styled.div`
  background-color: white;
  padding: 30px 20px;
  margin-top: 33px;
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
    @media screen and (max-width:978px){
      width: 60%;
    }
`;
const ImageContainer = styled.div`
    box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px,
    rgb(209, 213, 219) 0px 0px 0px 1px inset;
    width: 20%;
    height: 30vh;
    background-color: #fff;
    padding: 0;
    margin: 16px;
    @media screen and (max-width:978px){
      width: 60%;
    }
`;
const BrowseBtn = styled.div`
    border: 2px dashed #bbb;
    width: 20.5%;
    // height: 50px;
    background-color: #fff;
    text-align: center;
    color: #222;
    border-radius: 5px;
    padding:0;
    margin: 0;
`;



const AddConsultant = ({handleClick}) => {

      // file upload
  const [picture, setPicture] = useState(null);
  const [imgData, setImgData] = useState(null);
  const fileSelectedHandler = e => {
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

  const fileUploadHandler = () => {
    const fd = new FormData();
    fd.append('picture', setPicture, setPicture.name);
    axios.post('url', fd)
    .then(res => {
      // upload here
      alert(res);
    });
  }
    return (
        <>
        <TableWrapper>
            <Container>
                <CloseButton onClick={handleClick}/>
                <h5>Add New</h5>
                <hr />
                <Form>
                    <Row className="mb-3 d-flex flex-column flex-md-row">
                        <Form.Group as={Col} controlId="formGridFirstName">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridLastName">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control placeholder="1234 Main St" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>
                    </Row>
                    <Row className="mb-3 d-flex flex-column flex-md-row">
                        <Form.Group as={Col} controlId="formGridPhone">
                        <Form.Label>Phone Number</Form.Label>
                        <Form.Control type="phone" placeholder="Enter phone number" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridGender">
                        <Form.Label>Gender</Form.Label>
                         <Form.Control as='Select' defaultValue="-Select-">
                            <option>-Select-</option>
                            <option value="1">Male</option>
                            <option value="2">Female</option>
                            <option value="3">I prefer not to say</option>
                        </Form.Control>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridInstitution">
                        <Form.Label>Select Institution</Form.Label>
                         <Form.Control as='Select' defaultValue="-Select-">
                            <option>-Select-</option>
                            <option value="1">Male</option>
                            <option value="2">Female</option>
                            <option value="3">I prefer not to say</option>
                        </Form.Control>
                        </Form.Group>
                    </Row>
                    <Row className="mb-3 d-flex flex-column flex-md-row">
                        <ImageContainer>
                        <ImageUpload alt="" src={imgData} picture={picture} />
                        </ImageContainer>
                        <Form.Group className="mb-3">
                            <Form.Control type="file"  id="actual-btn" onChange={fileSelectedHandler} accept="image/*"  multiple = "false"  style={{display:'none'}}/>
                        <BrowseBtn>
                        <Form.Label for="actual-btn" style={{padding:'10% 7%', cursor: 'pointer'}}>
                           Browse Files...
                        </Form.Label>
                        </BrowseBtn>
                        </Form.Group>
               
                    </Row>

                 

                    <Button variant="primary" type="submit" onClick={fileUploadHandler}>
                        Submit
                    </Button>
                </Form>
                </Container>
            </TableWrapper>
        </>
    )
}

export default AddConsultant
