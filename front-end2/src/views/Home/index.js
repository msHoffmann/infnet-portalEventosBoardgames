import { Button, Container } from "react-bootstrap";
import { Layout } from "../../components/Layout";
import Catan from "../../assets/img/catan.jpg";
import Pokemon from "../../assets/img/pokemon.png";
import Essen from "../../assets/img/essen.jpg";
import Diversao from "../../assets/img/diversao.jpg";
import { Link } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";
import styled from "styled-components";

export function HomeView() {
  return (
    <LayoutStyled>
      <Container>
        <BannerHome className="shadow border p-4 p-md-5 my-3 d-md-flex">
          <div>
            <h1>Bem-vindo(a) ao Portal de Eventos de Boardgames!</h1>
            <Pstyled>Fique por dentro das novidades da sua região.</Pstyled>
            <Button
              as={Link}
              to="/eventos"
              variant="outline-warning"
              className="bg-warning text-white text-uppercase"
            >
              EVENTOS
            </Button>{" "}
          </div>
        </BannerHome>
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block imgcarousel"
              src={Catan}
              alt="First slide"
            />
            <Carousel.Caption className="teste">
              <h3>Evento 1 - Regional Catan</h3>
              <p className="pcarousel">Abril de 2022</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block imgcarousel"
              img
              src={Essen}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>Evento 2 - Mundial Essen</h3>
              <p>Maio de 2022</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block imgcarousel"
              img
              src={Pokemon}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>Evento 3 - Regional Pokémon</h3>
              <p>Junho de 2022</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block imgcarousel"
              img
              src={Diversao}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>Diversão Offline</h3>
              <p>Julho de 2022</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Container>
    </LayoutStyled>
  );
}

const BannerHome = styled.div`
  padding: 4px;
  align-items: center;
  display: flex;
  & h1 {
    color: #2a0810;
  }
  & p {
    font-size: 1.125rem;
  }
  & > div {
    flex: 1;
  }
`;


const LayoutStyled = styled(Layout)`
  background-image: url('../img/background.png');
  background-size: cover;
  height: auto;
  color: #f5f5f5;
`

const Pstyled = styled.p`
  text-shadow: 2px 2px #f4f1f4;
  color:black;
  margin-top: 0.5rem;
`

// ERRO!!!!
// const ButtonStyled = styled(Button)`
//   background-color: azure;
//   font-stretch: expanded;
//   font-size: 16px;
// `