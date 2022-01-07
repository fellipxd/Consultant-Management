import React, { useState, useEffect } from "react";
import styled from "styled-components";
import DashNav from "../components/DashboardComponents/SideBars/SuperAdmin/DashNav";
import SuperAdminSide from "../components/DashboardComponents/SideBars/SuperAdmin/SuperAdminSide";
import InstitutionSide from '../components/DashboardComponents/SideBars/institution/InstitutionSide' 
import UserSide from "../components/DashboardComponents/SideBars/UserSide";

const Grid = styled.div`
  position: relative;
  background-color: #eeeeee;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 300px) {
    width: fit-content;
  }
`;

const GridHeader = styled.header`
  position: fixed;
  width: 100vw;
  z-index: 4;
`;
const GridMain = styled.div`
  position: relative;
  left: 18%;
  width: 80%;
  margin-top: 30px;
  top: 0%;
  min-height: 100vh;
  flex: 1;

  @media screen and (max-width: 978px) {
    width: 100%;

    left: 0;
  }
`;

const Body = styled.div`
    padding-top: 5%;
    background-color: #F1EFFF;
    @media screen and (max-width:500px){
      margin-top: 10%;
    }
`

const SideNav = styled.div`
  height: 100vh;
  width: min-content;
  position: fixed;
  z-index: 2;
  display: flex;
  flex: 1;

  @media screen and (max-width: 978px) {
    height: 100%;
  }
`;

// const Access = styled.div`
//   .move {
//     margin-right: 20px;
//   }
// `;

const DashboardLayout = ({ children, user, ...rest }) => {
  const [showNav, setShowNav] = useState(0);
  

  const toggle = () => {
    setShowNav(Number(!showNav));
  };
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };
 

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  const [inactive, setInactive] = useState(false);
  const click = () => {
    setInactive(!inactive);
    console.log("click");
  };
 
    return (
      <Grid {...rest}>
        <GridHeader>
          <DashNav toggle={toggle} user={user} />
        </GridHeader>
        <Body>
          <SideNav>
           
            {user.role === "SUPER" && (
         <SuperAdminSide
         visible={showNav}
         toggle={toggle}
         scrollNav={scrollNav}
         inactive={inactive}
         click={click}
         user={user}
       />
      )}
            {user.role === "INSTITUTION_MANAGER" && (
         <InstitutionSide
         visible={showNav}
         toggle={toggle}
         scrollNav={scrollNav}
         inactive={inactive}
         click={click}
         user={user}
       />
      )}     {user.role === "USER" && (
         <UserSide
         visible={showNav}
         toggle={toggle}
         scrollNav={scrollNav}
         inactive={inactive}
         click={click}
         user={user}
       />
      )}
       
          </SideNav>
  
          <GridMain
            className={`active ${inactive ? "inactive" : ""}`}
            user={user}
          >
            {children}
          </GridMain>
        </Body>
      </Grid>
    );
  
};

export default DashboardLayout;
