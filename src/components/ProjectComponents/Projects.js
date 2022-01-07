import React from "react";
import styled from 'styled-components';
import ProjectTable from "./ProjectTable";
import TasksTable from "./TasksTable";


const TableWrapper = styled.div`
  height: max-content;
  margin-top: 0.7rem;
  flex: 1;
`;



function Projects({ handleClick }) {



  return (
    <TableWrapper>
        <ProjectTable />
        <br/>
        <TasksTable />
        <br/>
    </TableWrapper>
  );
}

export default Projects;
