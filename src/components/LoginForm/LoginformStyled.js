import styled from "styled-components";
import { Link } from "react-router-dom";

export const Wrap = styled.div`
  background-color: #fff;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
  padding: 2rem ;
  margin: auto;
  width: 75%;

 

  @media screen and (max-width:768px){
    width: 100%;
    padding: 3rem;
    font-size: 0.8rem;
  }
`;
export const FormWrap = styled.div`
  display: flex;
  flex-direction: column;
  .label{
    font-weight: bold;
  }
  .row{
    display: flex;
    flex-direction: column;
    width: 75%;
    margin: auto;
  }
   .input-error {
    border-color: $error-color;
    padding: 10px;
  }
  .input{
    padding: 10px;
    border: none;
    
  } 
  .input:focus{
    outline: 2px solid blue;
    
}
  .error {
    color: red;
    font-size: 0.8rem;
    font-weight: 700;
    
  }

  .disabled-btn {
    cursor: not-allowed;
    background: #2636C3;
    border: none;
    opacity: 0.5;
    color: white;
    width: 75%;
    padding: 8px;
    margin: 10px auto 0 auto;
    
  }
  .button{
    background-color: #2636C3;
    border: none;
    color: white;
    width: 75%;
    padding: 8px;
    margin: 10px auto 0 auto;

    &:hover {
      background-color: #1A268D;
      transition: 0.8s ease;
    }
  }
  @media screen and (max-width:768px){
    .row{
    width: 100%;
  }
  }
`

export const ForgotPassword = styled(Link)`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 40px;
`;

export const Heading = styled.h2`
  text-align: center;
`;

export const SignupRoute = styled.div`
  text-align: center;
  margin-top: 20px;
`;
