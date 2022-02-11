import React from "react";
import styled from "styled-components";
import { data } from "./CardData"; 

const Card = styled.div`
  background: ${(props) => props.bg};
  display: flex;
  /* flex: 1; */
  width: 32%;
  height: 150px;
  padding: 20px 60px;
  align-items: center;
  justify-content: space-between;
  margin: auto;
  position: relative;

  @media screen and (max-width: 1024px) {
    margin-top: 10px;
    margin-right: 20px;
  }

  @media screen and (max-width: 768px) {
    padding: 30px;
    width: 300px;
    margin-right: 0;
  }
`;
const Details = styled.div`
display: flex;
flex-direction: column;
`;
const Desc = styled.h2`
  font-size: 30px;
  color: ${(props) => props.color};
  margin-right: 20px;

  @media screen and (max-width: 768px) {
    font-size: 25px;
  }
`;
const Num = styled.h2`
  font-size: 60px;
  color: ${(props) => props.color};
  margin-right: 20px;

  @media screen and (max-width: 768px) {
    font-size: 25px;
  }
`;

const IconWrapper = styled.div``;
const Icon = styled.div`
  font-size: 60px;
  color: #000;
  margin: 20px;
  opacity: ${(props) => props.opacity};

  @media screen and (max-width: 768px) {
    font-size: 45px;
  }
`;

const Datacard = (props) => {
  return (
    <>
      {data.map((data) => (
        <Card key={data.id} bg={data.bg}>
          <Details>
            <Desc color={data.color}>{data.title}</Desc>
            <Num color={data.color}>{data.amount}</Num>
          </Details>
          <IconWrapper>
            <Icon className={data.icon} opacity={data.opacity} />
          </IconWrapper>
        </Card>
      ))}
    </>
  );
};

export default Datacard;
