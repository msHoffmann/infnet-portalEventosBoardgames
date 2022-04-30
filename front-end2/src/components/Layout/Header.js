import { Container, Nav, Navbar, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo from "../../assets/img/logo-teste.png";

export function Header() {
  return (
    <header>
      <Navbar expand="md" className="main-navbar">
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img src={Logo} alt="Boardgames" width={140} height={80} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-header" />
          <Navbar.Collapse id="navbar-header">
            <Nav className="ms-auto">
              <div>
                <Button
                  as={Link}
                  to="/"
                  variant="outline-warning"
                  className="text-uppercase"
                >
                  Home
                </Button>{" "}
                <Button
                  as={Link}
                  to="/eventos"
                  variant="outline-warning"
                  className="text-uppercase"
                >
                  Eventos
                </Button>{" "}
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}
