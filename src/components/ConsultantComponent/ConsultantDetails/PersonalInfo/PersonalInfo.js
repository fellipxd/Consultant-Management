import React from "react";
import styled from "styled-components";
import EditProfileModal from "./EditProfileModal";

const Container = styled.div`
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  padding: 20px;
    .head{
        display: flex;
        justify-content: space-between;
        border-bottom:1px solid #cccccc;
        align-items: center;
        padding: 15px 5px;
        margin-bottom: 20px;
    }
    button{
        padding: 10px 30px;
        color: #fff;
        background:#2636C3;
        border: none;
    }
  span {
    color: #979797;
  }
`;

const PersonalInfo = ({user}) => {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <Container>
       <div className='head'>
            <h5>PERSONAL INFORMATION</h5>
            <button onClick={() => setModalShow(true)}>Edit Profile</button>
        </div> 
      <div className="row text-left mb-4">
        <div class="col-sm">
          <span>First Name:</span>
          <p>Jane</p>
        </div>
        <div class="col-sm">
          <span>Last Name:</span>
          <p>Doe</p>
        </div>
        <div class="col-sm">
          <span>Email:</span>
          <p>Janedoe@mail.com</p>
        </div>
      </div>
      <div className="row text-left mb-4">
        <div class="col-sm">
          <span>Phone Number:</span>
          <p>08102546982</p>
        </div>
        <div class="col-sm">
          <span>Address:</span>
          <p>First Avenue, Gwarimpa</p>
        </div>
        <div class="col-sm">
          <span>Gender:</span>
          <p>Female</p>
        </div>
      </div>
      <div className="row text-left mb-4">
        <div class="col-sm">
          <span>City:</span>
          <p>Abuja</p>
        </div>
        <div class="col-sm">
          <span>State:</span>
          <p>FCT</p>
        </div>
        <div class="col-sm">
          <span>Zip Code:</span>
          <p>900108</p>
        </div>
      </div>
      <div className="row text-left mb-4">
        <div class="col-sm">
          <span>Institution:</span>
          <p>Viable Knowledge Masters</p>
        </div>
        <div class="col-sm">
          <span>LGA:</span>
          <p>Abuja Manucipal Area Council</p>
        </div>
        <div class="col-sm">
          <span>Status:</span>
          <p>Active</p>
        </div>
      </div>

      <EditProfileModal  show={modalShow}
        onHide={() => setModalShow(false)}/>
    </Container>
  );
};

export default PersonalInfo;
