import styled from "styled-components";

export const Desc = styled.div`
  flex: 1;
  padding: 5px;
  z-index: 10;

  @media screen and (max-width: 768px) {
    order: 2;
  }
`;

export const Text = styled.div`
  font-size: 20px;
  @media screen and (max-width: 768px) {
    font-size: 15px;
  }
`;

export const Title = styled.h2`
  font-size: 30px;
`;

export const ServiceDesc = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 50px;
  max-width: 850px;
`;

export const ImageContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-content: center;
  float: right;
  @media screen and (max-width: 768px) {
    order: 1;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  background-size: cover;
`;

export const FormWrapper = styled.form`
  padding: 40px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  margin-top: 30px;
  max-width: 850px;
`;
export const FormContent = styled.form``;

export const ImageWrapper = styled.div`
  width: 80%;
`
