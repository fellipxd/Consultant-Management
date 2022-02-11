import styled from "styled-components";
import { Link } from "react-router-dom";

export const SidebarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding:0 10px;
  width: 100%;
  height: 100%;
  justify-content: space-between;
  .active_p {
    display: flex;
    height: 100%;
    opacity: 1;
    transition:opacity 0.6s ease-in;
  }
  .inactive_p {
    opacity: 0;
    width: 0;height:0;
    transition: 0.3s ease-in;
  }

  .bi {
    font-size: 25px;
    margin-right: 10px;
  }

  .arrow {
    width: 100%;
    justify-content: right;
    position: relative;
    padding-left: 10px;
  }
  .link_wrapper{
    margin-top: 60px;
  
  }

  @media screen and (max-width: 978px) {
    margin-top: 60px;
    z-index: 1;
    display: flex;
    flex-direction: column;
    width: max-content;
    height: 100%;
    padding: 0;
  }
`;
export const SidebarLink = styled(Link)`
  margin-bottom: 20px;
  text-decoration: none;
  padding-left: 10px;
  color: black;
  display: flex;
  align-items: center;
  text-align: center;
  cursor: pointer;
  
 
  &&:hover {
    text-decoration: none;
  }
  @media screen and (max-width: 1024px) {
    margin-bottom: 10px;
  }

  @media screen and (max-width: 978px) {
    font-size: 30px;
    letter-spacing: 3px;
    margin-bottom: 15px;
  }

  @media screen and (max-width: 400px) {
    font-size: 20px;
    letter-spacing: 3px;
    margin-bottom: 10px;
  }
`;

export const Logout = styled.div`
  display: flex;
  font-size: 25px;
  padding-left: 10px;

  @media screen and (max-width: 978px) {
    font-size: 30px;
    letter-spacing: 3px;
  }
  @media screen and (max-width: 400px) {
    font-size: 22px;
    letter-spacing: 3px;
    margin-bottom: 10px;
  }
`;

export const Container = styled.nav`
  .active {
    grid-area: sidebar;
    --webkit-transition: all 0.5s;
    transition: all 0.5s;
    width: 15vw;
    height: 90vh;
    /* margin-top: 30px; */
    margin-left: 20px;
    background-color: #fff;
    position: relative;
    transition: 0.3s ease-in;
    /* top: ${({ scrollNav }) => (scrollNav ? "-4.5%" : "7.5%")}; */
  }

  .inactive {
    grid-area: sidebar;
    width: 4vw;
    transition: 0.3s ease-in;
  }

  .menu-bars {
    display: none;
    margin-bottom: 30px;
    text-decoration: none;
    margin-left: -6px;
    color: black;
    align-items: center;
    position: relative;
    left: -14%;
    color: blue;
    font-size: 2rem;
  }
  .inactive_menu {
    border-left: 5px yellow solid;
  }

  .active_menu {
    border-left: 5px #2636c3 solid;
  }
  @media screen and (max-width: 1024px) {
    /* top: ${({ scrollNav }) => (scrollNav ? "-4.5%" : "5%")};
    height: ${({ scrollNav }) => (scrollNav ? "100vh" : "85vh")}; */
  }

  @media screen and (max-width: 978px) {
    .active {
      position: fixed;
      transform: translate3d(
        ${(props) => (props.visible ? 0 : "-1000vw")},
        0,
        0
      );
      width: 100%;
      height: 100%;
      margin: auto;
      margin-top: 0%;
      margin-left: 0%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      border: 2px solid black;
      overflow: auto;
      top: 0%;
    }
  }

  @media screen and (max-width: 978px) {
    .menu-bars {
      display: flex;
      margin-bottom: 10px;
      top: -5%;
    }
  }
`;
