import React from "react";
import Container from "../Container";

import Service from "../../Assets/services.png";
import {
  Title,
  Desc,
  Image,
  ImageContainer,
  Text,
  ServiceDesc,
  Sub,
  ImageWrapper
} from "./ServicesStyled";

const Services = () => {
  return (
    <Container>
      <ImageContainer  className='uk-animation-slide-left'>
        <ImageWrapper>
          <Image src={Service} />
        </ImageWrapper>
      </ImageContainer>
      <Desc className='uk-animation-slide-right'>
        <ServiceDesc>
          <Title>
            We help our clients unlock growth by focusing on key solution areas:
          </Title>
          <Sub>Audit Service</Sub>
          <Text>
            Officia consequat non ea mollit dolor labore. Dolore aute qui Lorem
            culpa enim qui ullamco. Id aliqua minim occaecat tempor id eiusmod
            commodo ut. Proident qui consectetur irure consectetur aliquip
            laboris ut amet adipisicing sint proident veniam cillum. Dolor nisi
            aliquip ad ipsum dolor. Esse minim minim cillum consectetur ad.
          </Text>
        </ServiceDesc>
        <ServiceDesc>
          <Sub>Audit Service</Sub>
          <Text>
            Officia consequat non ea mollit dolor labore. Dolore aute qui Lorem
            culpa enim qui ullamco. Id aliqua minim occaecat tempor id eiusmod
            commodo ut. Proident qui consectetur irure consectetur aliquip
            laboris ut amet adipisicing sint proident veniam cillum. Dolor nisi
            aliquip ad ipsum dolor. Esse minim minim cillum consectetur ad.
          </Text>
        </ServiceDesc>
        <ServiceDesc>
          <Sub>Audit Service</Sub>
          <Text>
            Officia consequat non ea mollit dolor labore. Dolore aute qui Lorem
            culpa enim qui ullamco. Id aliqua minim occaecat tempor id eiusmod
            commodo ut. Proident qui consectetur irure consectetur aliquip
            laboris ut amet adipisicing sint proident veniam cillum. Dolor nisi
            aliquip ad ipsum dolor. Esse minim minim cillum consectetur ad.
          </Text>
        </ServiceDesc>
      </Desc>
    </Container>
  );
};

export default Services;
