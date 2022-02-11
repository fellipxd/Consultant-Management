import React from "react";
import Datacard from "./Datacard";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  border: 1px solid black;
  height: max-content; 
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  /* padding-left: 10px; */


  @media screen and (max-width: 768px) {
    margin-bottom: 20px;
    align-items: center;
    justify-content: center;
    padding: 10px;
  }
`;

const DataCardDiv = () => {
  return (
    <Wrapper>
      <Datacard />
    </Wrapper>
  );
};

export default DataCardDiv;
