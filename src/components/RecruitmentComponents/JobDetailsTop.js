import React from 'react'
import styled from "styled-components";



const Details = styled.div`
  background-color: #fff;
  margin-bottom: 30px;
`;
const Header = styled.div`
  border-bottom: 1px solid #cccccc;
  padding: 10px;
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;

  button {
    width: 120px;
    height: 40px;
    background-color: #2636c3;
    color: #fff;
    padding: 10px 5px;
    font-size: 14px;
    text-align: center;
    border: none;
    margin-left: 30px;
  }
`;
const Tags = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0 40px;
`;
const JobDetailsTop = () => {
    return (
        <Details>
        <Header>
          <h3>Job Details</h3>
        </Header>
        <Tags>
          <div className="row">
            <p className="col-2">Job Type:</p>
            <p className="col-6">Full Time</p>
          </div>
          <div className="row">
            <p className="col-2">Experience:</p>
            <p className="col-6">Mid-level</p>
          </div>
          <div className="row">
            <p className="col-2">Positions:</p>
            <p className="col-6">5</p>
          </div>
          <div className="row">
            <p className="col-2">Closing Date:</p>
            <p className="col-6">5th Novenber, 2021</p>
          </div>
          <div className="row">
            <p className="col-2">Status:</p>
            <p className="col-6"> Active</p>
          </div>
        </Tags>
      </Details>
    )
}

export default JobDetailsTop
