import styled from "styled-components";
import { Link } from 'react-router-dom'

export const FooterWrapper = styled.div`
  background-color: #f1efff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 10px;
  
`;
export const Logo = styled.div`
  margin: auto;
  height: 80px;

  img{
    height: 100%;
    background-size: cover;
  }
`;
export const Top = styled.div`
    width: 95%;
    margin: auto;
  display: flex;
  flex-direction: row;
  border-bottom: 3px solid lightgray;
  justify-content: space-between;
  padding-bottom: 10px;

  @media screen and (max-width:768px){
      flex-direction: column;
  }

`;
export const About = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-left: 3rem;
    justify-content: center;

    @media screen and (max-width:768px){
      margin-bottom: 20px;
      align-items: center;
      text-align: center;
      padding-left: 0;
  }
`;
export const AboutText = styled.div`
    max-width: 400px;
 `

export const Center = styled.div`
    display: flex;
    flex: 1;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    @media screen and (max-width:768px){
      margin-bottom: 20px;
  }
`

export const LogoFooter = styled.div`
 height: 30px;
 width: 30px;
 border-radius: 50%;
 display: flex;
 align-items: center;
 justify-content: center; 
 background-color: #2636C3;
 margin-right: 20px;

`

export const Right = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    text-align: center;
    justify-content: end;

`

export const FooterLink = styled(Link)`
    margin-right: 10px;
    text-decoration: none;
`
export const Bottom = styled.div`
 display: flex;
 justify-content: center;
 align-items: center;
 padding: 5px ;
 margin-top: 10px;
`
