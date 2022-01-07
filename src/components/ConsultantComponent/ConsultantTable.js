import React from "react";
import {Link} from 'react-router-dom'
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
      id: 1,
      name: "Jane Doe",
      institution: "Viable Knowledge masters",
      phone: "08153648751",
      gender: "Female",
      email: "info@vkm.com",
      status: "Active",
    },
    {
      id: 2,
      name: "John Doe",
      institution: "Coca Cola",
      phone: "07036587412",
      gender: "Male",
      email: "info@cocacola.com",
      status: "Active",
    },
    {
      id: 3,
      name: "Tyrion Lannister",
      institution: "The Lions",
      phone: "09015487896",
      gender: "Male",
      email: "tyrion@got.com",
      status: "Active",
    },
    {
      id: 4,
      name: "Danny Targaryen",
      institution: "Fire and Blood",
      phone: "08154789632",
      gender: "Female",
      email: "danny@got.com",
      status: "Inactive",
    },
  ];
  return [...data];
} ;

function ConsultantTable({ handleClick }) {
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
      },
      {
        Header: "Institution",
        accessor: "institution",
      },
      {
        Header: "Phone Number",
        accessor: "phone",
      },
      {
        Header: "Gender",
        accessor: "gender",
      },
      {
        Header: "Email",
        accessor: "email",
      },
      {
        Header: "Status",
        accessor: "status",
        Cell: StatusPill,
        Filter: SelectColumnFilter,
        filter: "includes",
      },
    ], []
  );
  const data = React.useMemo(() => getData(), []);

  return (
    <TableWrapper>
      <Container>
      <div className='head'>
            <h5>LIST OF ALL CONSULTANTS</h5>
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
  

// const ConsultantTable = ({ handleClick }) => {
//   return (
//     <TableWrapper>
//       <div className="row">
//         <div className="col">
//           <div className="uk-animation-fade">
//             <MaterialTable
//               actions={[
//                 {
//                   icon: "Add",
//                   tooltip: "Add User",
//                   isFreeAction: true,
//                   onClick: (event) => handleClick(),
//                 },
//                 {
//                   icon: "Edit",
//                   tooltip: "Edit User",
//                   onClick: (event, rowData) =>
//                     alert("You saved " + rowData.name),
//                 },
//                 {
//                   icon: "Delete",
//                   tooltip: "Delete User",
//                   onClick: (event, rowData) =>
//                     alert("You want to delete " + rowData.name),
//                 },
//               ]}
//               components={{
//                 Action: (props) => {
//                   if (props.action.icon === "Add") {
//                     return (
//                       <AddButton
//                         onClick={(event) => props.action.onClick(event)}
//                         style={{ cursor: "pointer" }}
//                       >
//                         Add New {<AiOutlinePlus />}
//                       </AddButton>
//                     );
//                   }
//                   if (props.action.icon === "Edit") {
//                     return (
//                       <EditButton
//                       to='/consultant-info'
//                       style={{ cursor: "pointer" }}
//                       >
//                         <AiOutlineEye />
//                       </EditButton>
//                     );
//                   }
//                   if (props.action.icon === "Delete") {
//                     return (
//                       <DeleteButton
//                         onClick={(event) =>
//                           props.action.onClick(event, props.data)
//                         }
//                         style={{ cursor: "pointer" }}
//                       >
//                         <AiOutlineDelete />
//                       </DeleteButton>
//                     );
//                   }
//                 },
//               }}
//               icons={tableIcons}
//               data={dummyData}
//               title="List All Consultants"
//               columns={[
//                 {
//                   title: "Name",
//                   field: `name`,
//                   align: "left",
//                   headerStyle: {
//                     color: "#726883",
//                     fontSize: "15px",
//                     overflow: "hidden",
//                   },
//                   cellStyle: () => ({
//                     fontSize: "14px",
//                     textTransform: "capitalize",
//                   }),
//                 },
//                 {
//                   title: "Institution",
//                   field: `institution`,
//                   align: "left",
//                   headerStyle: {
//                     color: "#726883",
//                     fontSize: "15px",
//                     overflow: "hidden",
//                   },
//                   cellStyle: () => ({
//                     fontSize: "14px",
//                     textTransform: "capitalize",
//                   }),
//                 },
//                 {
//                   title: "Phone Number",
//                   field: `phone`,
//                   align: "left",
//                   headerStyle: {
//                     color: "#726883",
//                     fontSize: "15px",
//                     overflow: "hidden",
//                   },
//                   cellStyle: () => ({
//                     fontSize: "14px",
//                     textTransform: "capitalize",
//                   }),
//                 },
//                 {
//                   title: "Gender",
//                   field: `gender`,
//                   align: "left",
//                   headerStyle: {
//                     color: "#726883",
//                     fontSize: "15px",
//                     overflow: "hidden",
//                   },
//                   cellStyle: () => ({
//                     fontSize: "14px",
//                     textTransform: "capitalize",
//                   }),
//                 },
//                 {
//                   title: "Email",
//                   field: `email`,
//                   align: "left",
//                   headerStyle: {
//                     color: "#726883",
//                     fontSize: "15px",
//                     overflow: "hidden",
//                   },
//                   cellStyle: () => ({
//                     fontSize: "14px",
//                     textTransform: "lowercase",
//                   }),
//                 },
//                 {
//                   title: "Status",
//                   field: `status`,
//                   align: "left",
//                   headerStyle: {
//                     color: "#726883",
//                     fontSize: "15px",
//                     overflow: "hidden",
//                   },
//                   cellStyle: () => ({
//                     fontSize: "14px",
//                     textTransform: "capitalize",
//                   }),
//                 },
//               ]}
//               options={{
//                 pageSize: 5,
//                 pageSizeOptions: [5, 10, 20, 30, 50, 100, 200, 500],
//                 showTitle: true,
//                 headerStyle: {
//                   color: "#002c85",
//                 },
//               }}
//             />
//           </div>
//         </div>
//       </div>
//     </TableWrapper>
//   );
// };

export default ConsultantTable;
