import React from "react";
import { Link } from 'react-router-dom';
import Footer from "../../components/Footer/Footer";
import LandingNav from "../../components/Navbar";
import {
  Body,
  InstitutionHeader,
  Logo,
  InstitutionName,
  DescContainer,
  DescWrapper,
  Overview,
  Desc,
  Subhead,
  Contact,
  Info,
  ContactSection,
  SocialContacts,
  IconsContainer,
  LogoFooter
} from "./InstitutionProfileStyled";
import {BsFacebook, BsInstagram, BsTwitter} from 'react-icons/bs'
import {FaLinkedinIn} from 'react-icons/fa'

import Pic from "../../Assets/vkm_logo 3.png";

const InstitutionProfile = () => {
  return (
    <>
      <LandingNav />
      <Body>
        <InstitutionHeader>
          <Logo>
            <img src={Pic} alt="institution logo" />
          </Logo>
          <InstitutionName>Viable knowledge masters</InstitutionName>
        </InstitutionHeader>
        <DescContainer>
          <DescWrapper>
            <Overview>
              <Subhead>Overview</Subhead>
              <Desc>
                Irure exercitation officia dolor dolore quis deserunt magna qui
                dolor consectetur culpa dolore et. Deserunt excepteur excepteur
                occaecat do non nisi. Commodo tempor et cupidatat commodo
                pariatur consequat officia elit. In dolore tempor in et fugiat.
                Reprehenderit nulla magna officia fugiat nisi laboris. Dolore
                incididunt tempor sit sit. Laborum nulla do nostrud deserunt
                elit duis mollit do reprehenderit irure labore velit officia id
                Proident reprehenderit ipsum sint ex dolore fugiat ea Lorem
                dolor nostrud. Nisi minim Lorem pariatur ea. Quis non anim
                dolore consectetur. Fugiat pariatur voluptate sint voluptate
                fugiat. Fugiat laboris aliquip sint dolore occaecat commodo qui
                adipisicing elit sunt consequat dolor. Aliqua nisi esse esse
                reprehenderit culpa. Amet dolor eiusmod deserunt deserunt
                labore.
                Irure exercitation officia dolor dolore quis deserunt magna qui
                dolor consectetur culpa dolore et. Deserunt excepteur excepteur
                occaecat do non nisi. Commodo tempor et cupidatat commodo
                pariatur consequat officia elit. In dolore tempor in et fugiat.
                Reprehenderit nulla magna officia fugiat nisi laboris. Dolore
                incididunt tempor sit sit. Laborum nulla do nostrud deserunt
                elit duis mollit do reprehenderit irure labore velit officia id
                Proident reprehenderit ipsum sint ex dolore fugiat ea Lorem
                dolor nostrud. Nisi minim Lorem pariatur ea. Quis non anim
                dolore consectetur. Fugiat pariatur voluptate sint voluptate
                fugiat. Fugiat laboris aliquip sint dolore occaecat commodo qui
                adipisicing elit sunt consequat dolor. Aliqua nisi esse esse
                reprehenderit culpa. Amet dolor eiusmod deserunt deserunt
                labore.
              </Desc>
             
              <ContactSection>
              <Contact>
                  <Subhead>Contact Information</Subhead>
                  <Info>
                      Viable Knowledge Masters,
                      Plot C114 Platinum Plaza, 
                      Second Floor 1st Avenue, 
                      Gwarimpa. Abuja
                  
                  <br/>
                  <br/>
                  <ul>
                      <li>Phone: +234906413838</li>
                      <li>Email: info@viableknowledgemasters.com</li>
                  </ul>
                  </Info>
                  
              </Contact>
              <SocialContacts>
                  <IconsContainer>
                  <LogoFooter>
               <Link to='/'>
                 <BsTwitter style={{color:'white', fontSize:'20px'}}/>
               </Link>
           </LogoFooter>
           <LogoFooter>
               <Link to='/'>
                 <FaLinkedinIn style={{color:'white', fontSize:'20px'}}/>
               </Link>
           </LogoFooter>
           <LogoFooter>
               <Link to='/'>
                 <BsInstagram style={{color:'white', fontSize:'20px'}} />
               </Link>
           </LogoFooter>
           
               <Link to='/'>
                 <BsFacebook style={{fontSize:"30px", color:'2636C3'}} />
               </Link>
          
                  </IconsContainer>
              </SocialContacts>
              </ContactSection>
              
            </Overview>
          </DescWrapper>
        </DescContainer>
      </Body>
      <Footer />
    </>
  );
};

export default InstitutionProfile;
