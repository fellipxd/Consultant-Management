import React from "react";
import styled from "styled-components";

const Header = styled.div`
  border-bottom: 1px solid #cccccc;
  padding: 10px;
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;

  button {
    width: 120px;
    height: 40px;
    background-color: #2636c3;
    color: #fff;
    padding: 10px 5px;
    font-size: 14px;
    text-align: center;
    border: none;
    margin-left: 30px;
  }
`;
const Description = styled.div`
  background-color: #fff;
  
`;
const Body = styled.div`
    padding: 10px 30px;
`
const Sub = styled.div`
    border-bottom: 1px solid #cccccc ;
    margin-bottom: 20px;
`
const Desc = styled.div`
    margin-bottom: 20px;
`

const JobDetails = ({handleClick, role}) => {
  console.log(role)
  return (
    <>
      

      <Description>
        <Header>
          <h3>Marketing Director</h3>
          <button onClick={handleClick}>Apply</button>
        </Header>
        <Body>
       <Desc>
       <Sub>
            <h4>Company Profile</h4>
        </Sub>
        <p>
           Aliquip exercitation voluptate mollit ea culpa elit. Consectetur exercitation qui dolor nisi labore est nostrud sunt consectetur elit fugiat. Incididunt est nostrud nisi est proident velit anim id elit nostrud laborum. Sunt ut cillum in do velit veniam commodo. Ad eu nisi cupidatat minim irure nulla veniam consequat id magna excepteur anim. Ut qui id amet nisi aliquip dolor veniam. Voluptate adipisicing enim est amet est.

Pariatur cupidatat cillum labore enim eu elit anim duis. Cillum officia sint qui duis cillum tempor magna ullamco sit. Est do laborum enim ipsum non consectetur voluptate est velit consectetur voluptate amet. Reprehenderit consectetur ea nisi mollit amet esse eu aliqua pariatur ut aliqua ipsum proident ipsum. Sint incididunt pariatur esse sunt nulla in consequat ut aute sint Lorem. Lorem do commodo amet laboris culpa proident consequat sint consectetur officia reprehenderit.

Fugiat ea culpa dolor adipisicing ipsum anim sit laborum. Amet incididunt reprehenderit ipsum nisi laborum adipisicing nulla cupidatat quis pariatur nostrud. Eiusmod exercitation consectetur nisi anim mollit elit elit eu consectetur occaecat commodo. 
        </p>
       </Desc>
       <Desc>
       <Sub>
            <h4>Job Description</h4>
        </Sub>
        <p>
           Aliquip exercitation voluptate mollit ea culpa elit. Consectetur exercitation qui dolor nisi labore est nostrud sunt consectetur elit fugiat. Incididunt est nostrud nisi est proident velit anim id elit nostrud laborum. Sunt ut cillum in do velit veniam commodo. Ad eu nisi cupidatat minim irure nulla veniam consequat id magna excepteur anim. Ut qui id amet nisi aliquip dolor veniam. Voluptate adipisicing enim est amet est.

Pariatur cupidatat cillum labore enim eu elit anim duis. Cillum officia sint qui duis cillum tempor magna ullamco sit. Est do laborum enim ipsum non consectetur voluptate est velit consectetur voluptate amet. Reprehenderit consectetur ea nisi mollit amet esse eu aliqua pariatur ut aliqua ipsum proident ipsum. Sint incididunt pariatur esse sunt nulla in consequat ut aute sint Lorem. Lorem do commodo amet laboris culpa proident consequat sint consectetur officia reprehenderit.

Fugiat ea culpa dolor adipisicing ipsum anim sit laborum. Amet incididunt reprehenderit ipsum nisi laborum adipisicing nulla cupidatat quis pariatur nostrud. Eiusmod exercitation consectetur nisi anim mollit elit elit eu consectetur occaecat commodo. 
        </p>
       </Desc>
       <Desc>
       <Sub>
            <h4>Required Skills</h4>
        </Sub>
        <ul>
            <li>  Ability to write code – HTML & CSS (SCSS flavor of SASS preferred when writing CSS)</li>
            <li>Proficient in Photoshop, Illustrator, bonus points for familiarity with Sketch (Sketch is our preferred     concepting)</li>
            <li> Cross-browser and platform testing as standard practice</li>
            <li> Experience using Invision a plus</li>
            <li> Experience in video production a plus or, at a minimum, a willingness to learn</li>
        </ul>
       </Desc>
       <Desc>
       <Sub>
            <h4>Required Skills</h4>
        </Sub>
        <ul>
            <li>  Advanced degree or equivalent experience in graphic and web design</li>
            <li> 3 or more years of professional design experience</li>
            <li> Direct response email experience</li>
            <li>  Ecommerce website design experience</li>
            <li> Familiarity with mobile and web apps preferred</li>
            <li>Excellent communication skills, most notably a demonstrated ability to solicit and address creative and design feedback</li>
            <li> Must be able to work under pressure and meet deadlines while maintaining a positive attitude and providing exemplary customer service</li>
            <li> Ability to work independently and to carry out assignments to completion within parameters of instructions given, prescribed routines, and standard accepted practices</li>
        </ul>
       </Desc>
       
        </Body>
      </Description>
    </>
  );
};

export default JobDetails;
