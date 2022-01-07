import React from "react";
import Table, { SelectColumnFilter, StatusPill } from "../TableUtils/Table"; // new
import styled from 'styled-components';
import { Link } from "react-router-dom";
import { AiOutlinePlus, AiOutlineEye, AiOutlineDelete } from "react-icons/ai";

const ViewButton = styled(Link)`
  color: #2636c3;
  font-size: 25px;
  text-align: center;
  padding: 0 2px;
  margin: 0 5px;
  display: flex;
`;
const DeleteButton = styled.div`
  color: red;
  font-size: 25px;
  text-align: center;
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
      task: "Road Development",
      institution: 27,
      start: "2021-05-15",
      end: "2021-12-15",
      priority: "High",
      status: "in progress",
    },
    {
      task: "Avalon",
      institution: 7,
      start: "2021-06-25",
      end: "2021-09-12",
      priority: "high",
      status: "in progress",
    },
    {
      task: "Cooper",
      institution: 2,
      start: "2020-08-01",
      end: "2021-01-01",
      priority: "High",
      status: "cancelled",
    },
    {
      task: "Looped",
      institution: 6,
      start: "2020-08-19",
      end: "2020-10-8",
      priority: "High",
      status: "completed",
    },
    {
      task: "Shopify",
      institution: 1,
      start: "2019-04-01",
      end: "2019-05-30",
      priority: "High",
      status: "completed",
    },
    {
      task: "Jane Cooper",
      institution: 9,
      start: "2020-01-01",
      end: "2020-07-12",
      priority: "Low",
      status: "completed",
    },
    {
      task: "Running Man",
      institution: 1,
      start: "2020-01-01",
      end: "2020-01-15",
      priority: "Low",
      status: "cancelled",
    },
  ];
  return [...data];
};

function TasksTable({ handleClick }) {
  const columns = React.useMemo(
    () => [
      {
        Header: "Action",
        accessor: "action",
        Cell: row => (
          <ActionBtn>
               <ViewButton
                      to='/task-info'
                      style={{ cursor: "pointer" }}
                >
                        <AiOutlineEye />
                </ViewButton>
                <DeleteButton
                        style={{ cursor: "pointer" }}
                >
                        <AiOutlineDelete />
                 </DeleteButton>
           </ActionBtn>
        )
      },
      {
        Header: "Tasks",
        accessor: "task",
    
      },
      {
        Header: "Institution",
        accessor: "institution",
      },

      {
        Header: "Start Date",
        accessor: "start",
      },
      {
        Header: "End Date",
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
        Filter: SelectColumnFilter,
        filter: "includes",
      },
    ],
    []
  );

  const data = React.useMemo(() => getData(), []);


  return (
      <Container>
      <div className='head'>
            <h5>LIST OF ALL TASKS</h5>
            <button
            onClick = {(event) => handleClick()}
            ><AiOutlinePlus/> Add New</button>
            
        </div> 
        <hr />

        <div className="uk-animation-fade">
          <Table columns={columns} data={data} />
        </div>

      </Container>
  );
}

export default TasksTable;
