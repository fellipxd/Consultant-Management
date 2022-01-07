import React from 'react'

import LoginForm from '../../components/LoginForm/LoginForm'
import LandingNav from '../../components/Navbar'
import Illus from '../../Assets/SignIn.png'
import {Body, ImageContainer, ImageWrapper, FormContainer, FormWrapper} from './LoginStyled'
const Login = (props) => {
    return (
        <>
        <LandingNav/>
       
           <Body>
          <ImageContainer>
          <ImageWrapper>
                <img src={Illus} alt='illus'/>
            </ImageWrapper>
          </ImageContainer>
           <FormContainer>
               <FormWrapper>
               <LoginForm/>
               </FormWrapper>
           </FormContainer>
           </Body>
        
        </>
    )
}

export default Login
  