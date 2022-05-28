import { Navbar , Container , Nav , Dropdown } from "react-bootstrap";
import DropdownItem from "react-bootstrap/esm/DropdownItem";
import NavbarToggle from "react-bootstrap/esm/NavbarToggle";
import styled from "styled-components";
import { useDispatch, useSelector } from 'react-redux';
import { logout } from "../../services/Users.service";
import { useNavigate } from 'react-router-dom';
import { userLogout } from "../../store/User/user.actions";
import { selectUser } from "../../store/User/user.selectors";

export function Topbar({ onOpen }) {
  
  const user = useSelector(selectUser) 
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const handleLogout = () => {
    logout()
    dispatch(userLogout())
    navigate('/')
  }

  return (
  <Navbar bg='light' expand='lg' >
     <Container fluid>
      <NavbarToggle onClick={onOpen}/>
      <Nav className="ms-auto">
      <Dropdown align='end'>
        <Dropdown.Toggle variant='light'>{user.name}</Dropdown.Toggle>
        <MenuStyled>
          <DropdownItem onClick={handleLogout}>Sair</DropdownItem>
        </MenuStyled>
      </Dropdown>
      </Nav>
      </Container>
    </Navbar>
  );
}

const MenuStyled = styled(Dropdown.Menu)`
position: absolute !important;
`