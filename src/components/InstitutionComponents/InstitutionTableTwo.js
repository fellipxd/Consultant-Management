import React from "react";
import {Link} from 'react-router-dom'
import Table , { AvatarCell, SelectColumnFilter, StatusPill } from "../TableUtils/Table";
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
      id: 1,
      institution: "Viable Knowledge Masters",
      state: "FCT",
      lga: "Abuja Manucipal Area Council",
      address: "plot 5501, first Avenue Gwarimpa",
      email: "info@viableknowledgemasters.com",
      status: "active",
    },
    {
      id: 2,
      institution: "Bouwer Ltd",
      state: "Edo State",
      lga: "Owan West",
      address: "4677 Langtown Road Perrysburg OH 43551",
      email: "CeciliaKLynch@dayrep.com",
      status: "active",
    },
    {
      id: 3,
      institution: "Hanifat LLC",
      state: "FCT",
      lga: "AMAC",
      address: " Behind Golden Gate Hotel, Zone 5, Wuse",
      email: "doker34@alvinneo.com",
      status: "active",
    },
    {
      id: 4,
      institution: "Jimoh-Onohinosen",
      state: "FCT",
      lga: "Abuja",
      address: " Plot 283, Samuel Akintola Boulevard, Garki 2",
      email: "bakertree@nonise.com",
      status: "active",
    },
    {
      id: 5,
      institution: "Oyebola Group",
      state: "Rivers",
      lga: "Port Harcourt",
      address: "3, Nwogu Street, Rumuomasi",
      email: "denis4arkin@arss.me",
      status: "active",
    },
    {
      id: 6,
      institution: "Wilcox, Adegboye and Adewale",
      state: "Lagos",
      lga: " Lawanson",
      address: "59, Olatilewa Street",
      email: "meso111@ilcommunication.com",
      status: "active",
    },
    {
      id: 7,
      institution: "Elizabeth Group",
      state: "Lagos",
      lga: "Lagos Island",
      address: "Idowu, Martins Street, Victoria Island",
      email: "sarko@playfuny.com",
      status: "active",
    },
    {
      id: 8,
      institution: "Akeem-omosanya and Sons",
      state: "Delta",
      lga: " Ethiope East",
      address: "2,Pharmacist M Okotie Street",
      email: "victordittz@ottappmail.com",
      status: "active",
    },
    {
      id: 9,
      institution: "Abiola-Israel & co",
      state: "Tehran",
      lga: "Iran",
      address: "155 Shahid Fahazi Street, Vali Asri",
      email: "mkosirog@vireonidae.com",
      status: "active",
    },
    {
      id: 10,
      institution: "Iyalla Inc.",
      state: "Lagos",
      lga: " Ikoyi",
      address: " 48 Awolowo Road",
      email: "rspecialt@tirtalayana.com",
      status: "active",
    },
    {
      id: 11,
      institution: "Agboola Group",
      state: "Edo",
      lga: "Oredo",
      address: "35,2nd East Circular Road",
      email: "jsiplon@btcmod.com",
      status: "active",
    },
    {
      id: 12,
      institution: "Samuel PLC",
      state: "Lagos",
      lga: "Epe",
      address: "60, Kakawa street",
      email: "bodydinamo@sharyndoll.com",
      status: "active",
    },
    
  ];
  return [...data];
} ;

function InstitutionTableTwo({ handleClick }) {
  const columns = React.useMemo(
    () => [
      {
        Header: "Action",
        accessor: "action",
        Cell: row => (
          <ActionBtn>
               <ViewButton
                      to='/institution-info'
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
        Header: "Institution",
        accessor: "institution",
        Cell: AvatarCell,
      },
      {
        Header: "State",
        accessor: "state",
      },
      {
        Header: "LGA",
        accessor: "lga",
      },
      {
        Header: "Address",
        accessor: "address",
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
            <h5>LIST OF ALL INSTITUTIONS</h5>
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


export default InstitutionTableTwo;

