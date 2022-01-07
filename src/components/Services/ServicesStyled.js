import styled from "styled-components";

export const Desc = styled.div`
  flex: 1;
  padding: 5px;
  z-index: 10;
`;

export const Text = styled.div`
  font-size: 20px;
 
  @media screen and (max-width: 768px) {
    font-size: 15px;
  }
`;

export const Title = styled.h2`
  font-size: 30px;

  @media screen and (max-width: 768px){
    font-size: 24px;
    margin-bottom: 20px;
  }
`;

export const Sub = styled.h3`
  font-size: 23px;
`;

export const ServiceDesc = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 50px;
  max-width: 850px;
  margin-left: auto;
`;

export const ImageContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-content: center;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  background-size: cover;
`;

export const ImageWrapper = styled.div`
  width: 80%;
  
`
