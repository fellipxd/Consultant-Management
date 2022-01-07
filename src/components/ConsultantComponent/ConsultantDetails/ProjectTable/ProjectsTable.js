import React from "react";
import Table, { AvatarCell, SelectColumnFilter, StatusPill } from "../../../TableUtils/Table"; 
import {Link} from 'react-router-dom'
import styled from "styled-components";
import { AiOutlinePlus, AiOutlineEye, AiOutlineDelete } from "react-icons/ai";


const TableWrapper = styled.div`
  height: max-content;
  margin-top: 0.7rem;
  flex: 1;
`;
const ViewButton = styled(Link)`
  color: #2636c3;
  font-size: 25px;
  display: flex;
  padding: 0 2px;
  margin: 0 5px;
  display: flex;
`;
const DeleteButton = styled.div`
  color: red;
  font-size: 25px;
  display: flex;
  padding: 0 2px;
  margin: 0 5px;
  display: flex;
`;
const ActionBtn = styled.div`
  display: flex;
  justify-content: left;
  flex-direction: row;
  `;

const Container = styled.div`
box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
padding: 20px;
background-color: #fff;
  .head{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
button{
  padding: 10px 30px;
  color: #fff;
  background:#2636C3;
  border: none;

}
`
const getData = () => {
  const data = [
    {
      title: "Road Development",
      team: 27,
      start: "2021-05-15",
      end: "2021-12-15",
      priority: "High",
      status: "in progress",
    },
    {
      title: "Avalon",
      team: 7,
      start: "2021-06-25",
      end: "2021-09-12",
      priority: "high",
      status: "in progress",
    },
    {
      title: "Cooper",
      team: 2,
      start: "2020-08-01",
      end: "2021-01-01",
      priority: "High",
      status: "cancelled",
    },
    {
      title: "Looped",
      team: 6,
      start: "2020-08-19",
      end: "2020-10-8",
      priority: "High",
      status: "completed",
    },
    {
      title: "Shopify",
      team: 1,
      start: "2019-04-01",
      end: "2019-05-30",
      priority: "High",
      status: "completed",
    },
    {
      title: "Jane Cooper",
      team: 9,
      start: "2020-01-01",
      end: "2020-07-12",
      priority: "Low",
      status: "completed",
    },
    {
      title: "Running Man",
      team: 1,
      start: "2020-01-01",
      end: "2020-01-15",
      priority: "Low",
      status: "cancelled",
    },
  ];
  return [...data];
};

function ProjectsTable({handleClick}) {
  const columns = React.useMemo(
    () => [
      {
        Header: "Action",
        accessor: "action",
        Cell: row => (
          <ActionBtn>
               <ViewButton
                      to='/project-info'
                      style={{ cursor: "pointer" }}
                >
                        <AiOutlineEye />
                </ViewButton>
                <DeleteButton
                        style={{ cursor: "pointer" }}
                        // add onclick event handler to delete
                >
                        <AiOutlineDelete />
                 </DeleteButton>
           </ActionBtn>
        )
      },
      {
        Header: "Project title",
        accessor: "title",
        Cell: AvatarCell,
      },
      {
        Header: "Team",
        accessor: "team",
      },

      {
        Header: "Start",
        accessor: "start",
      },
      {
        Header: "End",
        accessor: "end",
      },
      {
        Header: "Priority",
        accessor: "priority",
      },
      {
        Header: "Status",
        accessor: "status",
        Cell: StatusPill,
        Filter: SelectColumnFilter, // new
        filter: "includes",
      },
    ],
    []
  );

  const data = React.useMemo(() => getData(), []);

  return (
    <TableWrapper>
    <Container>
    <div className='head'>
          <h5>VIEW PROJECTS</h5>
          <button 
           onClick = {(event) => handleClick()}
           ><AiOutlinePlus/> Add New</button>
          
      </div> 
      <hr />
      <div className="uk-animation-fade">
        <Table columns={columns} data={data} />
      </div>
    </Container>
  </TableWrapper>
  );
}

export default ProjectsTable;
