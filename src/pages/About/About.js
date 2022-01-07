import React from 'react'
import LandingNav from '../../components/Navbar';
import Footer from '../../components/Footer/Footer'
import HeroAbout from '../../components/HeroAbout/HeroAbout';
import { Container } from 'react-bootstrap';
import styled from "styled-components";
import Services from '../../components/Services/Services'


const AboutWrapper = styled.div`
    width: 100%;
    height: 100%;
    margin: 5% 0;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
    padding: 5% 2%;


`

const About = () => {
    return (
        <>
            <LandingNav />
            <HeroAbout />

                <Container>
                <AboutWrapper>
                
                <div>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ornare convallis eros, ac cursus mauris
                vestibulum nec. Integer quis interdum dui. Aliquam
                lectus lectus, sagittis a ex non, ullamcorper laoreet urna. Ut sodales faucibus condimentum. Cras sagittis
                pretium lectus id rutrum. Etiam lacinia viverra iaculis. Ut vel arcu vel nisi scelerisque dictum. Praesent 
                consectetur condimentum arcu, porta faucibus massa sagittis a. Ut sit amet magna eu risus egestas molestie 
                ut sit amet sem. Etiam congue leo a libero facilisis commodo.
                </p>
                <p>
                Vivamus viverra tempor porttitor. Suspendisse tempus, eros nec tempus sollicitudin, urna lectus
                lobortis risus, vel faucibus justo turpis et tortor. Donec et turpis sit amet velit cursus 
                viverra quis eu purus. Nulla placerat elementum purus, sed faucibus purus aliquam et. Etiam 
                at odio eget odio convallis malesuada euismod ac libero. Vestibulum aliquam molestie 
                sollicitudin. Aliquam pulvinar nunc urna, non eleifend nulla porttitor eu. Donec vitae diam quis
                rat venenatis scelerisque sed et justo. Etiam feugiat neque eu mollis vestibulum. Sed eu justo sit 
                met sapien ultrices porttitor sit amet dignissim risus. Nullam hendrerit semper efficitur. 
                Nulla facilisi. Donec et dolor augue. Nulla feugiat porta nisi, in interdum massa suscipit vitae.
                </p>
                </div>
                <Services/>
                </AboutWrapper>
            </Container>

            <Footer />
        </>
    )
}

export default About
