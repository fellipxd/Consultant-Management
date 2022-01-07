import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { data } from "./DummyJobs";

const Card = styled.div`
  min-width: 300px;
  min-height: 400px;
  display: flex;
  flex-direction: column;
  margin-right: 40px;
  margin-bottom: 40px;
  padding: 20px;
  box-shadow: 1px 1px 8px 1px rgba(0, 0, 0, 0.25);

  span {
    color: #2636c3;
    font-size: 18px;
    font-weight: bold;
  }

  .endDate {
    font-weight: bold;
  }

  @media screen and (max-width: 978px) {
    margin-right: 0;
  }
`;
const Top = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Desc = styled.div`
  width: 100%;
  margin-top: 20px;
  margin-bottom: 20px;
  padding: 0 10px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`;
const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-evenly;
  i {
    margin-left: 5px;
  }
  .button {
    margin-left: 5px;
  }

  @media screen and (max-width: 400px) {
    flex-direction: column;
  }
  @media screen and (max-width: 400px) {
    .button {
      width: 100%;
      margin-bottom: 5px;
    }
  }
`;

const JobCard = (props) => {
  // const status = value ? value.toLowerCase() : "unknown";
  return (
    <>
      {data.map((data) => (
        <Card key={data.id}>
          <Top>
            <span>{data.title}</span>
          </Top>
          <Desc>
            <p>Institution:{data.institution}</p>
            <p>Job Type: {data.type}</p>
            <p>Remote: {data.remote}</p>
            <p>Positions: {data.positions}</p>
            <p>Date Posted: {data.posted}</p>
          </Desc>
          <p className="endDate">Closing Date: {data.close}</p>
          <ButtonGroup>
            <Link to="./job-details">
              {" "}
              <Button variant="primary" className="button">
                View Job
                <i class="bi bi-eye-fill" />
              </Button>
            </Link>

            {props.role === "USER" ? null : (
              <Link to="./edit-job">
                {" "}
                <Button variant="primary" className="button">
                  Edit
                  <i class="bi bi-pencil-square" />
                </Button>
              </Link>
            )}
            {props.role === "USER" ? null : (
              <Button variant="danger" className="button">
                Delete
                <i class="bi bi-trash-fill" />
              </Button>
            )}
          </ButtonGroup>
        </Card>
      ))}
    </>
  );
};

export default JobCard;
