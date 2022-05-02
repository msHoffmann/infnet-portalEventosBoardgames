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
    <Layout className="bg_image">
      <Container className="container-home">
        <BannerHome className="shadow border p-4 p-md-5 my-3 banner-home d-md-flex">
          <div>
            <h1>Bem-vindo(a) ao Portal de Eventos de Boardgames!</h1>
            <p class="pp">Fique por dentro das novidades da sua região.</p>
            <Button
              as={Link}
              to="/eventos"
              variant="outline-warning"
              className="text-uppercase"
            >
              Eventos
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
              <h3 className="h3carousel">Evento 1 - Regional Catan</h3>
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
    </Layout>
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
}`
