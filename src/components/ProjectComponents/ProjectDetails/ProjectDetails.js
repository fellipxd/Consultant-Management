import React from "react";
import styled from "styled-components";
import ProjectTabs from "./ProjectTabs.js";

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

const ProjectDetails = () => {
  return (
    <Container>
      <Wrapper>
        <h2 className="name">Front-End Development</h2>
        <ProjectTabs />
      </Wrapper>
    </Container>
  );
};

export default ProjectDetails;
