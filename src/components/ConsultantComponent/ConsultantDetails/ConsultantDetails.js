import React from 'react'
import styled from 'styled-components'
import avatar from "../../../Assets/vkm_logo 3.png";
import ConsultantTabs from './ConsultantTabs'


const Container = styled.div`
  @media screen and (max-width: 978px) {
    padding: 1rem;
  }
`
const Wrapper = styled.div`
  margin-top: 0.7rem;
 display: flex;
 flex-direction: column;
 align-items: center;
 background-color: #fff;
 justify-content: center;
 padding: 1rem;

  @media screen and (max-width: 978px) {
    padding: 1rem;
  }
`
const Top = styled.div`
    text-align: center;
    line-height: 4px;
    a{
        text-decoration: none;
    }
`
const Avatar = styled.div`
margin-bottom: 10px;
height: 150px;
  img {
    border-radius: 50%;
    height: 100%;
    border: 1px solid lightgray;
  }
`;




const ConsultantDetails = () => {
    return (
        <Container>
            <Wrapper>
            <Top>
            <Avatar>
          {" "}
          <img  src={avatar} alt="avatar" />
        </Avatar>
        <p className='name'>Jane Doe</p>
          <p className='number'>+2348045968256</p>
          {/* <a className='site' href='https://viableknowledgemasters.com/' target='blank'>https://viableknowledgemasters.com/</a> */}
            </Top>
            <ConsultantTabs/>
        </Wrapper>
        </Container>
    )
}

export default ConsultantDetails
