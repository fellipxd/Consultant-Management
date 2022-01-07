import styled from "styled-components";

export const Desc = styled.div`
  flex: 1;
  z-index: 10;

  span {
    color: #2636c3;
  }

  @media screen and (max-width: 768px) {
    order: 1;
    
  }
`;

export const Head = styled.h1`
  font-size: 60px;

  @media screen and (max-width: 1024px) {
    font-size: 50px;
  }

  @media screen and (max-width: 768px) {
    font-size: 40px;
  }
  @media screen and (max-width: 468px) {
    font-size: 30px;
  }
`;

export const Text = styled.div`
  font-size: 20px;
  text-align: justify;
  @media screen and (max-width: 768px) {
    font-size: 15px;
  }
`;

export const ImageContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-content: center;
  height: 100%;
  width: 100%;
  margin-top: -40px;

  /* @media screen and (max-width: 768px) {
    position: absolute;
    
  } */
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  background-size: cover;

  
`;
