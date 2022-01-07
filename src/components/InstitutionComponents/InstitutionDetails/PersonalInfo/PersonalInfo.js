import React from "react";
import styled from "styled-components";
import EditProfileModal from "./EditProfileModal";

const Container = styled.div`
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  padding: 20px;
  .head {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #cccccc;
    align-items: center;
    padding: 15px 5px;
    margin-bottom: 20px;
  }
  button {
    padding: 10px 30px;
    color: #fff;
    background: #2636c3;
    border: none;
  }
  span {
    color: #979797;
  }
`;
const Desc = styled.div`
  .desc-box {
    height: 300px;
    overflow-y: scroll;
    border: 5px solid #eeeeee;
    padding: 20px;
    text-align: justify;

    ::-webkit-scrollbar {
      width: 12px;
    }
    ::-webkit-scrollbar-track {
      background: #eeeeee;
    }

    ::-webkit-scrollbar-thumb {
      background-color: #2636c3;
      border-radius: 20px;
      border: 3px solid #eee;
    }
  }
`;
const PersonalInfo = ({ role }) => {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <Container>
      <div className="head">
        <h5>PERSONAL INFORMATION</h5>
        {role === "USER" ? null : (
          <button onClick={() => setModalShow(true)}>Edit Profile</button>
        )}
      </div>
      <div className="row text-left mb-4">
        <div class="col-sm">
          <span>Institution Name:</span>
          <p>Viable Knowledge Masters</p>
        </div>
        <div class="col-sm">
          <span>Email:</span>
          <p>info@viableknowledgemasters.com</p>
        </div>
        <div class="col-sm">
          <span>Address:</span>
          <p>First Avenue, Gwarimpa</p>
        </div>
      </div>
      <div className="row text-left mb-4">
        <div class="col-sm">
          <span>Phone Number:</span>
          <p>08102546982</p>
        </div>
        <div class="col-sm">
          <span>City:</span>
          <p>Abuja</p>
        </div>
        <div class="col-sm">
          <span>State:</span>
          <p>FCT</p>
        </div>
      </div>
      <div className="row text-left mb-4">
        <div class="col-sm">
          <span>LGA:</span>
          <p>Abuja Municipal Area Council</p>
        </div>
        <div class="col-sm">
          <span>Zip Code:</span>
          <p>900108</p>
        </div>
        <div class="col-sm">
          <span>Status:</span>
          <p>Active</p>
        </div>
      </div>
      <Desc>
        Overview
        <div className="desc-box">
          Sint laborum veniam fugiat velit quis ex ex laboris reprehenderit
          fugiat irure exercitation et sit. Nostrud aliqua ullamco dolor
          occaecat aute culpa. Labore irure aute irure exercitation non irure
          commodo sunt ut esse excepteur labore enim deserunt. Aute exercitation
          non magna duis ad. Proident qui do in consequat laboris cillum minim
          tempor eiusmod aliquip adipisicing. Qui consectetur do laborum esse
          mollit qui. Incididunt adipisicing consectetur dolor pariatur occaecat
          id amet in consectetur consectetur cillum ut. Duis enim elit laborum
          enim ipsum labore amet cupidatat. Reprehenderit incididunt fugiat quis
          velit qui velit qui qui duis. Labore velit ex non nostrud eiusmod.
          Exercitation tempor veniam et cillum ea consectetur laborum. Voluptate
          sint voluptate excepteur culpa pariatur consectetur ea cillum cillum
          exercitation nisi aliquip. Adipisicing quis magna ut consectetur
          adipisicing ad officia nulla occaecat veniam ipsum incididunt tempor.
          Culpa minim labore do aute aliqua duis. Ea quis mollit commodo ipsum
          adipisicing nulla consequat consectetur excepteur in reprehenderit
          aute proident anim. Fugiat ea id fugiat labore anim nulla qui
          consectetur aliquip dolore minim ad Lorem fugiat. Culpa non nulla amet
          cupidatat nulla sint pariatur. Sint laborum veniam fugiat velit quis
          ex ex laboris reprehenderit fugiat irure exercitation et sit. Nostrud
          aliqua ullamco dolor occaecat aute culpa. Labore irure aute irure
          exercitation non irure commodo sunt ut esse excepteur labore enim
          deserunt. Aute exercitation non magna duis ad. Proident qui do in
          consequat laboris cillum minim tempor eiusmod aliquip adipisicing. Qui
          consectetur do laborum esse mollit qui. Incididunt adipisicing
          consectetur dolor pariatur occaecat id amet in consectetur consectetur
          cillum ut. Duis enim elit laborum enim ipsum labore amet cupidatat.
          Reprehenderit incididunt fugiat quis velit qui velit qui qui duis.
          Labore velit ex non nostrud eiusmod. Exercitation tempor veniam et
          cillum ea consectetur laborum. Voluptate sint voluptate excepteur
          culpa pariatur consectetur ea cillum cillum exercitation nisi aliquip.
          Adipisicing quis magna ut consectetur adipisicing ad officia nulla
          occaecat veniam ipsum incididunt tempor. Culpa minim labore do aute
          aliqua duis. Ea quis mollit commodo ipsum adipisicing nulla consequat
          consectetur excepteur in reprehenderit aute proident anim. Fugiat ea
          id fugiat labore anim nulla qui consectetur aliquip dolore minim ad
          Lorem fugiat. Culpa non nulla amet cupidatat nulla sint pariatur.
        </div>
      </Desc>
      <EditProfileModal show={modalShow} onHide={() => setModalShow(false)} />
    </Container>
  );
};

export default PersonalInfo;
