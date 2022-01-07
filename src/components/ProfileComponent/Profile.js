import React from "react";
import styled from "styled-components";
import avatar from "../../Assets/vkm_logo 3.png";
import EditProfileModal from "./EditProfileModal";


const Container = styled.div`
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  padding: 20px;
  background-color: #fff;
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

const Wrapper = styled.div`
  margin-top: 0.7rem;
 display: flex;
 flex-direction: column;
 align-items: center;
 background-color: #fff;
 justify-content: center;
 padding: 1rem;

  @media screen and (max-width: 978px) {
    padding: 1rem;
  }
`
const Top = styled.div`
    text-align: center;
    line-height: 4px;
    a{
        text-decoration: none;
    }
`
const Avatar = styled.div`
margin-bottom: 10px;
height: 150px;
  img {
    border-radius: 50%;
    height: 100%;
    border: 1px solid lightgray;
  }
`;


const PersonalInfo = ({user}) => {
  const [modalShow, setModalShow] = React.useState(false);


  return (
    <Container>

        <Wrapper>
            <Top>
            <Avatar>
          {" "}
          <img  src={avatar} alt="avatar" />
        </Avatar>
        <p className='name'>{user.firstName} {user.lastName}</p>
          <p className='number'>{user.phoneNumber}</p>
          {/* <a className='site' href='https://viableknowledgemasters.com/' target='blank'>https://viableknowledgemasters.com/</a> */}
            </Top>
          
        </Wrapper>
       <div className='head'>
            <h5>PROFILE INFORMATION</h5>
            <button onClick={() => setModalShow(true)}>Edit Profile</button>
        </div> 
      <div className="row text-left mb-4">
        <div class="col-sm">
          <span>First Name:</span>
          <p>{user.firstName}</p>
        </div>
        <div class="col-sm">
          <span>Last Name:</span>
          <p>{user.lastName}</p>
        </div>
        <div class="col-sm">
          <span>Email:</span>
          <p>{user.email}</p>
        </div>
      </div>
      <div className="row text-left mb-4">
        <div class="col-sm">
          <span>Phone Number:</span>
          <p>{user.phoneNumber}</p>
        </div>
        <div class="col-sm">
          <span>Address:</span>
          <p>{user.address}</p>
        </div>
        <div class="col-sm">
          <span>Gender:</span>
          <p>{user.gender}</p>
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
