import styled from "styled-components";
import avatar from "../../../../Assets/vkm_logo 3.png";

const Navbar = styled.nav`
  position: -webkit-sticky;
  position: sticky;
  width: 100%;
  background-color: #fff;
  grid-area: nav;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 50px 10px 50px;
  z-index: 100;
  box-shadow: 1px 1px 5px 1px rgba(0, 0, 0, 0.25);
  @media screen and (max-width: 420px) {
    padding: 10px 30px 10px 30px;
    
  }
`;

const NavIcon = styled.div`
  display: none;
  .bi {
    font-size: 30px;
    color: blue;
  }
  @media screen and (max-width: 978px) {
    display: flex;
  }
`;

const NavLeft = styled.div``;

const NavRight = styled.div`
  display: flex;

  .details {
    display: flex;
    flex-direction: column;
    margin-left: 10px;
    margin-bottom: -15px;
  }
  .name {
    font-size: 23px;
    margin-bottom: -10px;
  }
  @media only screen and (max-width: 978px) {
    .details {
      display: none;
    }
  }
`;
const Avatar = styled.div`
  img {
    border-radius: 50%;
  }
`;

const DashNav = ({ toggle, user }) => {
  return (
    <Navbar>
      <NavIcon onClick={toggle}>
        <i class="bi bi-list" />
      </NavIcon>
      <NavLeft>
        <h2>Consultant Management System</h2>
      </NavLeft>
      <NavRight>
        <Avatar>
          {" "}
          <img width="40" src={avatar} alt="avatar" />
        </Avatar>
        <div className="details">
          <p className="name">{user.firstName} {user.lastName}</p>
          <p className="email">{user.email}</p>
        </div>
      </NavRight>
    </Navbar>
  );
};

export default DashNav;
