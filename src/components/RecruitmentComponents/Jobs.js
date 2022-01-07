import React from "react";
import { Button } from "react-bootstrap";
import styled from "styled-components";
import JobCard from "./JobCard";

const Container = styled.div`
  background-color: #fff;
  padding: 10px 10px;
`;

const Top = styled.div`
  display: flex;
  border-bottom: 1px solid black;
  justify-content: space-between;
  padding: 10px 10px;
  margin-bottom: 50px;
 

  /* input{
        width: 300px;

    } */
  button {
    /* width: 120px; */
    background-color: #2636c3;
    color: #fff;
    padding: 10px 5px;
    font-size: 16px;
    text-align: center;
    border: none;
  }
`;
const Wrapper = styled.div`
  width: 90%;
  height: max-content;
  display: flex;
  flex-wrap: wrap;
  margin: auto;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 768px) {
    margin-bottom: 20px;
    align-items: center;
    justify-content: center;
    padding: 10px;
  }
`;

const Jobs = ({ handleClick }) => {
  let role = localStorage.getItem("role");
  return (
    <Container>
      <Top>
        <h3>All Jobs</h3>
        {/* <input type ='text' placeholder='Search'/> */}
        {role === "USER" ? null : (
          <Button variant="primary" onClick={handleClick}>
            <i class="bi bi-plus-lg" />
            Add New{" "}
          </Button>
        )}
      </Top>
      <Wrapper>
        <JobCard role={role} />
      </Wrapper>
    </Container>
  );
};

export default Jobs;
