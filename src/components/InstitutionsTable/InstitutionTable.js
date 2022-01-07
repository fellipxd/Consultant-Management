import React from "react";
import { Link } from "react-router-dom";
import Table from "../TableUtils/Table";
import styled from "styled-components";
import { AiOutlineEye } from "react-icons/ai";

const TableWrapper = styled.div`
  height: max-content;
  padding: 4rem;

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

const ActionBtn = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-direction: row;
`;

const Container = styled.div`
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  padding: 20px;
  background-color: #f9f9f9;
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
      institution: "Viable Knowledge Masters",
      state: "FCT",
      lga: "Abuja Manucipal Area Council",
      address: "plot 5501, first Avenue Gwarimpa",
      email: "info@viableknowledgemasters.com",
    },
    {
      id: 2,
      institution: "Bouwer Ltd",
      state: "Edo State",
      lga: "Owan West",
      address: "4677 Langtown Road Perrysburg OH 43551",
      email: "CeciliaKLynch@dayrep.com",
    },
    {
      id: 3,
      institution: "Hanifat LLC",
      state: "FCT",
      lga: "AMAC",
      address: " Behind Golden Gate Hotel, Zone 5, Wuse",
      email: "doker34@alvinneo.com",
    },
    {
      id: 4,
      institution: "Jimoh-Onohinosen",
      state: "FCT",
      lga: "Abuja",
      address: " Plot 283, Samuel Akintola Boulevard, Garki 2",
      email: "bakertree@nonise.com",
    },
    {
      id: 5,
      institution: "Oyebola Group",
      state: "Rivers",
      lga: "Port Harcourt",
      address: "3, Nwogu Street, Rumuomasi",
      email: "denis4arkin@arss.me",
    },
    {
      id: 6,
      institution: "Wilcox, Adegboye and Adewale",
      state: "Lagos",
      lga: " Lawanson",
      address: "59, Olatilewa Street",
      email: "meso111@ilcommunication.com",
    },
    {
      id: 7,
      institution: "Elizabeth Group",
      state: "Lagos",
      lga: "Lagos Island",
      address: "Idowu, Martins Street, Victoria Island",
      email: "sarko@playfuny.com",
    },
    {
      id: 8,
      institution: "Akeem-omosanya and Sons",
      state: "Delta",
      lga: " Ethiope East",
      address: "2,Pharmacist M Okotie Street",
      email: "victordittz@ottappmail.com",
    },
    {
      id: 9,
      institution: "Abiola-Israel & co",
      state: "Tehran",
      lga: "Iran",
      address: "155 Shahid Fahazi Street, Vali Asri",
      email: "mkosirog@vireonidae.com",
    },
    {
      id: 10,
      institution: "Iyalla Inc.",
      state: "Lagos",
      lga: " Ikoyi",
      address: " 48 Awolowo Road",
      email: "rspecialt@tirtalayana.com",
    },
    {
      id: 11,
      institution: "Agboola Group",
      state: "Edo",
      lga: "Oredo",
      address: "35,2nd East Circular Road",
      email: "jsiplon@btcmod.com",
    },
    {
      id: 12,
      institution: "Samuel PLC",
      state: "Lagos",
      lga: "Epe",
      address: "60, Kakawa street",
      email: "bodydinamo@sharyndoll.com",
    },
  ];
  return [...data];
};

function InstitutionTable({ handleClick }) {
  const columns = React.useMemo(
    () => [
      {
        Header: "Action",
        accessor: "action",
        Cell: (row) => (
          <ActionBtn>
            <ViewButton to="/" style={{ cursor: "pointer" }}>
              <AiOutlineEye />
            </ViewButton>
          </ActionBtn>
        ),
      },
      {
        Header: "Institution",
        accessor: "institution",
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
    ],
    []
  );
  const data = React.useMemo(() => getData(), []);

  return (
    <TableWrapper>
      <Container>
        <div className="head">
          <h5>LIST OF ALL INSTITUTIONS</h5>
        </div>
        <hr />
        <div className="uk-animation-fade">
          <Table columns={columns} data={data} />
        </div>
      </Container>
    </TableWrapper>
  );
}

export default InstitutionTable;
