import { Navbar , Container , Nav , Dropdown } from "react-bootstrap";
import DropdownItem from "react-bootstrap/esm/DropdownItem";
import NavbarToggle from "react-bootstrap/esm/NavbarToggle";
import styled from "styled-components";

export function Topbar({ onOpen }) {
  return (
    <Navbar bg='light' expand='lg' >
     <Container fluid>
      <NavbarToggle onClick={onOpen}/>
      <Nav className="ms-auto">
      <Dropdown align='end'>
        <Dropdown.Toggle variant='light'>Frania</Dropdown.Toggle>
        <MenuStyled>
          <DropdownItem>Sair</DropdownItem>
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