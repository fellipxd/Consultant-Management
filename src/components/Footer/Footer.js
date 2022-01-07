import React from 'react'

import { Link } from 'react-router-dom'
import { FooterWrapper, Top, About, AboutText, LogoFooter, Center, Right, FooterLink, Bottom } from './FooterStyled'
import {BsFacebook, BsInstagram, BsTwitter} from 'react-icons/bs'
import {FaLinkedinIn} from 'react-icons/fa'





const Footer = () => {
    return (
        <FooterWrapper>
          <Top>
          <About>
          <div>
           <Link style={{textDecoration:'none', color:'black'}}>CMS</Link>
          </div>
           <AboutText>
           Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
           </AboutText>
           </About>
           <Center>
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
          
           </Center>
           <Right>
                <FooterLink to='/'> FAQ</FooterLink>
                <FooterLink to='/'>Pricing</FooterLink>
                <FooterLink to='/'>Privacy Policy</FooterLink>
                <FooterLink to='/'> Terms And Conditions</FooterLink>
           </Right>
          </Top>
          <Bottom>
                
                <p><span>&copy;</span> Midas</p>
          </Bottom>
        </FooterWrapper>
    )
}

export default Footer
