import { Container, Nav, Navbar, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo from "../../assets/img/logo-teste.png";
import styled from 'styled-components'
import { useSelector } from "react-redux";
import { selectIsUserLoggedIn } from "../../store/User/user.selectors"


export function Header() {
  const userLoggedIn = useSelector(selectIsUserLoggedIn)
  return (
    <header>
      <NavBarStyled expand="md">
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img src={Logo} alt="Boardgames" width={140} height={80} />
          </Navbar.Brand>
          <NavBarToggleStyled aria-controls="navbar-header" />
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
                </Button>
                <Button
                  as={Link}
                  to="/eventos"
                  variant="outline-warning"
                  className="text-uppercase"
                >
                  Eventos
                </Button>
              {userLoggedIn ? (<Button
                  as={Link}
                  to="/portal"
                  variant="outline-warning"
                  className="text-uppercase"
                >
                  Acessar Portal
                </Button>) : (<Button
                  as={Link}
                  to="/portal/login"
                  variant="outline-warning"
                  className="text-uppercase"
                >
                  Login
                </Button>)}
              </div>
            </Nav>

          </Navbar.Collapse>
        </Container>
      </NavBarStyled>
    </header>
  );
}


const NavBarStyled = styled(Navbar)`
  background-color: rgb(52, 12, 54);
`

const NavBarToggleStyled = styled(Navbar.Toggle)`
  background: #FFF;
  border: none;
`
