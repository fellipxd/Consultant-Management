import React from "react";
import Container from "../Container";
import { Desc, Image, ImageContainer, Head, Text } from "./HeroStyled";
import HeroIllustration from "../../Assets/Business Plan.png";

const Hero = (props) => {
  return (
    <Container bg="#F1EFFF">
      <Desc className='uk-animation-slide-left'> 
        <Head>
          DISCOVER AND TRACK <span> CONSULTANTS</span> ACROSS THE GLOBE
        </Head>
        <Text>
          Cupidatat est sunt mollit nisi ut culpa ex incididunt deserunt laborum
          esse. Nulla laborum elit deserunt ex voluptate fugiat. Adipisicing et
          enim eu mollit cupidatat anim enim ullamco magna enim. Ut eiusmod
          dolor exercitation Lorem. Aliqua Lorem esse proident adipisicing et
          quis laborum.
        </Text>
      <a href='/signup'>
      <button type="button" class="btn btn-primary px-3 py-2 px-md-5 mt-3">
          LET'S GET STARTED
        </button>
      </a>
      </Desc>
      <ImageContainer className='uk-animation-slide-right'>
        <Image src={HeroIllustration} alt="hero illustration" />
      </ImageContainer>
    </Container>
  );
};

export default Hero;
