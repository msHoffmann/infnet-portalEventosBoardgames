import styled from "@emotion/styled";
import { Dropdown } from "bootstrap";
import { Navbar , Container , Nav } from "react-bootstrap";
import DropdownItem from "react-bootstrap/esm/DropdownItem";
import NavbarToggle from "react-bootstrap/esm/NavbarToggle";

export function topBar() {
  return (
    <Navbar bg='light' expand='lg' >
     <Container fluid>
      <NavbarToggle />
      <Nav className="ms-auto">
      <Dropdown align='end'>
        <Dropdown.Toogle variant='light'>Frania</Dropdown.Toogle>
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