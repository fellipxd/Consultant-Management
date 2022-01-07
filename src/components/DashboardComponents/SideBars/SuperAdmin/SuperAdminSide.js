import React from "react";
import Badge from "@mui/material/Badge";
import * as AiIcons from "react-icons/ai";
import {
  Container,
  SidebarWrapper,
  SidebarLink,
  Logout,
} from "./SuperAdminSideStyled";



const handleLogout = () => {
  localStorage.clear()
  document.location.href = '/'
 
}


const SuperAdminSide = (props) => {
  
 
   
  return (
  
    <Container {...props} scrollNav={props.scrollNav}>
      <div className={`active ${props.inactive ? "inactive" : ""}`}>
        <SidebarWrapper>
          <div className="menu-bars" onClick={props.toggle}>
            <AiIcons.AiOutlineClose />
          </div>
         <div className='link_wrapper'>
         <SidebarLink to="/dashboard" onClick={props.toggle}  >
            {" "}
            <i className="bi bi-house-door" />{" "}
            <div className={`active_p ${props.inactive ? "inactive_p" : ""}`}>
              Home
            </div>
          </SidebarLink>

          <SidebarLink to="/institution-table"  onClick={props.toggle}>
            {" "}
            <i className="bi bi-building" />{" "}
            <div className={`active_p ${props.inactive ? "inactive_p" : ""}`}>
              Institution
            </div>
          </SidebarLink>
          <SidebarLink to="/consultants" onClick={props.toggle}> 
            {" "}
            <i className="bi bi-person" />{" "}
            <div className={`active_p ${props.inactive ? "inactive_p" : ""}`} >
              Consultants
            </div>
          </SidebarLink>
          <SidebarLink to="/recruitment" onClick={props.toggle}>
            {" "}
            <i className="bi bi-briefcase" />
            <div className={`active_p ${props.inactive ? "inactive_p" : ""}`}>
              {" "}
              Recruitments
            </div>
          </SidebarLink>
          <SidebarLink to="/projects" onClick={props.toggle}> 
            {" "}
            <i className="bi bi-pencil-square" />{" "}
            <div className={`active_p ${props.inactive ? "inactive_p" : ""}`}>
              Projects
            </div>
          </SidebarLink>
          <SidebarLink to="/" onClick={props.toggle}>
            {" "}
            <i className="bi bi-chat-square-text" />{" "}
            <div className={`active_p ${props.inactive ? "inactive_p" : ""}`}>
              Messages
            </div>
            <Badge
              badgeContent={3}
              color="primary"
              style={{ marginLeft: "20px" }}
            />
          </SidebarLink>
          <SidebarLink to="/" onClick={props.toggle}>
            {" "}
            <i className="bi bi-cash-stack" />{" "}
            <div className={`active_p ${props.inactive ? "inactive_p" : ""}`}>
              Payments
            </div>
          </SidebarLink>
          <SidebarLink to="/" onClick={props.toggle}>
            {" "}
            <i className="bi bi-journal" />{" "}
            <div className={`active_p ${props.inactive ? "inactive_p" : ""}`}>
              Audit trail
            </div>
          </SidebarLink>
          <SidebarLink to="/profile" onClick={props.toggle}>
            {" "}
            <i className="bi bi-person-badge" />{" "}
            <div className={`active_p ${props.inactive ? "inactive_p" : ""}`}>
              Profile
            </div>
          </SidebarLink>
         </div>
         <SidebarLink to='/' onClick={handleLogout}  >
         <Logout onClick={props.toggle}>
            <i className="bi bi-door-open" />
            <p className={`active_p ${props.inactive ? "inactive_p" : ""}`}>Logout</p>
          </Logout>
         </SidebarLink>
        </SidebarWrapper>
      </div>
    </Container>
  );
};

export default SuperAdminSide;
