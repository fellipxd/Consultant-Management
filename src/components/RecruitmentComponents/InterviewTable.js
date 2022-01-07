import React from "react";
import { Link } from "react-router-dom";
import Table, { SelectColumnFilter, StatusPill } from "../TableUtils/Table";
import styled from "styled-components";
import { AiOutlinePlus, AiOutlineEye, AiOutlineDelete } from "react-icons/ai";

const TableWrapper = styled.div`
  height: max-content;
  margin: 0.7rem 0;
  flex: 1;
`;
const ViewButton = styled(Link)`
  color: #2636c3;
  font-size: 25px;
  text-align: center;
  padding: 0 5px;
  margin: 0;
  display: flex;
`;
const DeleteButton = styled.div`
  color: red;
  font-size: 25px;
  text-align: center;
  padding: 0 5px;
  margin: 0;
  display: flex;
`;
const ActionBtn = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-direction: row;
`;

const Container = styled.div`
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  padding: 20px;
  background-color: #fff;
  .head {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  button {
    padding: 10px 30px;
    color: #fff;
    background: #2636c3;
    border: none;
  }
`;

const getData = () => {
  const data = [
    {
      id: 1,
      title: "Front-end Developer",
      name: "Jamie Lannister",
      email: "jamie@hotmail.com",
      dateApplied: 2021 - 12 - 25,
      status: "pending",
    },
    {
      id: 2,
      title: "Fullstack Developer",
      name: "Rob Blackwell",
      email: "blackwell@gmail.com",
      dateApplied: 2021 - 12 - 25,
      status: "approved",
    },
    {
      id: 3,
      title: "Personal Assistant",
      name: "Mark Woodburn",
      email: "mburn21@yahoo.com",
      dateApplied: 2021 - 12 - 25,
      status: "rejected",
    },
    {
      id: 4,
      title: "Building Manager",
      name: "Tito Oladimeji",
      email: "titobuilds@gmail.com",
      dateApplied: 2021 - 12 - 25,
      status: "pending",
    },
  ];
  return [...data];
};

function InterviewTable({ handleClick }) {
  const columns = React.useMemo(
    () => [
      {
        Header: "Action",
        accessor: "action",
        Cell: (row) => (
          <ActionBtn>
            <ViewButton to="/consultant-info" style={{ cursor: "pointer" }}>
              <AiOutlineEye />
            </ViewButton>
            <DeleteButton
              style={{ cursor: "pointer" }}
              // add onclick event handler to delete
            >
              <AiOutlineDelete />
            </DeleteButton>
          </ActionBtn>
        ),
      },
      {
        Header: "Job Title",
        accessor: "title",
      },
      {
        Header: "Candidate",
        accessor: "name",
      },
      {
        Header: "Email",
        accessor: "email",
      },
      {
        Header: "Date Applied",
        accessor: "dateApplied",
      },
      {
        Header: "Resume",
        accessor: "resume",
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
    <TableWrapper>
      <Container>
        <div className="head">
          <h5>LIST OF ALL CONSULTANTS</h5>
          <button onClick={(event) => handleClick()}>
            <AiOutlinePlus /> Add New
          </button>
        </div>
        <hr />
        <div className="uk-animation-fade">
          <Table columns={columns} data={data} />
        </div>
      </Container>
    </TableWrapper>
  );
}

export default InterviewTable;
