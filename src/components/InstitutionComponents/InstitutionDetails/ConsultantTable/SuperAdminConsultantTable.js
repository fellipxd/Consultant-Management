import React from "react";
import Table, { AvatarCell, SelectColumnFilter, StatusPill } from "../../../TableUtils/Table"; 
import {Link} from 'react-router-dom'
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
      name: "Jane Cooper",
      email: "jane.cooper@example.com",
      phone: "09077382756",
      role: "Admin",
      status: "active",
      sex: "Female",
    },
    {
      name: "Cody Fisher",
      email: "cody.fisher@example.com",
      phone: "09077382756",
      role: "Admin",
      status: "active",
      sex: "male",
    },
    {
      name: "Esther Howard",
      email: "esther.howard@example.com",
      phone: "09077382756",
      role: "Admin",
      status: "inactive",
      sex: "Female",
    },
    {
      name: "Jenny Wilson",
      email: "jenny.wilson@example.com",
      phone: "09077382756",
      role: "Admin",
      status: "Active",
      sex: "Female",
    },
    {
      name: "Kris Watson",
      email: "kristin.watson@example.com",
      phone: "09077382756",
      role: "Admin",
      status: "Active",
      sex: "male",
    },
    {
      name: "Cameron Williamson",
      email: "cameron.williamson@example.com",
      phone: "09077382756",
      role: "consultant",
      status: "Active",
      sex: "male",
    },
  ];
  return [...data];
};

function ProjectsTable({handleClick, role}) {
  const columns = React.useMemo(
    () => [
      {
        Header: "Action",
        accessor: "action",
        Cell: row => (
          <ActionBtn>
               <ViewButton
                      to='/consultant-info'
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
        Header: "Name",
        accessor: "name",
        Cell: AvatarCell,
      },
      {
        Header: "Email",
        accessor: "email",
      },
      {
        Header: "Phone",
        accessor: "phone",
      },

      {
        Header: "Gender",
        accessor: "sex",
      },
      {
        Header: "Role",
        accessor: "role",
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
    <div className='head'>
          <h5>VIEW CONSULTANTS</h5>
        
          {role === "USER" ?  null  : <button 
           onClick = {(event) => handleClick()}
           ><AiOutlinePlus/> Add New</button>  }
          
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
