import React from "react";
import Container from "../Container";
import { Form } from "react-bootstrap";
import FormIllustration from "../../Assets/form.png";
import {
  Title,
  Desc,
  Image,
  ImageContainer,
  Text,
  ServiceDesc,
  FormWrapper,
  ImageWrapper
} from "../HelpForm/HelpformStyled";

const HelpForm = () => {
  return (
    <Container>
      <Desc className='uk-animation-slide-left'>
        <ServiceDesc>
          <Title>How can we help you?</Title>
          <Text>
            Officia consequat non ea mollit dolor labore. Dolore aute qui Lorem
            culpa enim qui ullamco. Id aliqua minim occaecat tempor id eiusmod
            commodo ut. Proident qui consectetur irure consectetur aliquip.
          </Text>
        </ServiceDesc>
        <FormWrapper>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Name</Form.Label>
            <Form.Control type="email" placeholder="Your Name" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Email </Form.Label>
            <Form.Control type="email" placeholder="Your Email" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Message</Form.Label>
            <Form.Control as="textarea" rows={3} placeholder="Message" />
          </Form.Group>
          <button type="button" class="btn btn-primary ">
            Send Message{" "}
          </button>
        </FormWrapper>
      </Desc>
      <ImageContainer className='uk-animation-slide-right'>
        <ImageWrapper>
          <Image src={FormIllustration} />
        </ImageWrapper>
      </ImageContainer>
    </Container>
  );
};

export default HelpForm;
