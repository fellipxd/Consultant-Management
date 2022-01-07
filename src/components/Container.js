import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  padding: 60px 100px 60px 100px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.bg};
  position: relative;

  @media screen and (max-width: 768px) {
    padding: 20px;
    flex-direction: column;
  }
`;

const Container = (props) => {
  return <Wrapper bg={props.bg}>{props.children}</Wrapper>;
};

export default Container;
