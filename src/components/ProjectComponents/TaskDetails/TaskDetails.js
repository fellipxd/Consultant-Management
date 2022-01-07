import React from "react";
import styled from "styled-components";
import TaskTabs from "./TaskTabs";

const Container = styled.div`
  @media screen and (max-width: 978px) {
    padding: 1rem;
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
`;

const TaskDetails = () => {
  return (
    <Container>
      <Wrapper>
        <h2 className="name">Front-End Development</h2>
        <TaskTabs />
      </Wrapper>
    </Container>
  );
};

export default TaskDetails;
