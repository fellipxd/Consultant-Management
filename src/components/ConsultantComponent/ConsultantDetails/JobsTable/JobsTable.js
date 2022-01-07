import React from "react";
import Table, { AvatarCell, SelectColumnFilter, StatusPill } from "../../../TableUtils/Table"; // new
import styled from 'styled-components';


const getData = () => {
  const data = [
    {
      name: "Road Development",
      team: 27,
      start: "2021-05-15",
      end: "2021-12-15",
      priority: "High",
      status: "in progress",
    },
    {
      name: "Avalon",
      team: 7,
      start: "2021-06-25",
      end: "2021-09-12",
      priority: "high",
      status: "in progress",
    },
    {
      name: "Cooper",
      team: 2,
      start: "2020-08-01",
      end: "2021-01-01",
      priority: "High",
      status: "cancelled",
    },
    {
      name: "Looped",
      team: 6,
      start: "2020-08-19",
      end: "2020-10-8",
      priority: "High",
      status: "completed",
    },
    {
      name: "Shopify",
      team: 1,
      start: "2019-04-01",
      end: "2019-05-30",
      priority: "High",
      status: "completed",
    },
    {
      name: "Jane Cooper",
      team: 9,
      start: "2020-01-01",
      end: "2020-07-12",
      priority: "Low",
      status: "completed",
    },
    {
      name: "Running Man",
      team: 1,
      start: "2020-01-01",
      end: "2020-01-15",
      priority: "Low",
      status: "cancelled",
    },
  ];
  return [...data];
};

function JobsTable() {
  const columns = React.useMemo(
    () => [
      {
        Header: "Name",
        accessor: "name",
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

  const Container = styled.div`
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
    padding: 20px;
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

  return (
    <div>
      <Container>
      <div className='head'>
            <h5>Jobs</h5>
            <button>Add New</button>
            
        </div> 
        <hr />
  
        <div className="mt-6">
          <Table columns={columns} data={data} />
        </div>
      </Container>
    </div>
  );
}

export default JobsTable;
