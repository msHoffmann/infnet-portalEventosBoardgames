import { Layout } from "../../components/Layout";
import CardEvents from "../../components/CardEvents/index";
import React, { useEffect, useState } from "react";
import { Loading } from "../../components/Loading";
import { Alert, Container, Col, Row } from "react-bootstrap";
import { getEvents } from "../../services/Events.service"
import styled from "@emotion/styled";

export function EventsView() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState();

  useEffect(() => {
    const fetchEvents = async () => {
    try{
    const data = await getEvents()
    setEvents(data)
    } catch {
      setErrorMsg("Falha ao buscar Eventos. Recarregue a Página.");
    }
    setLoading(false)
  }
    fetchEvents()
  }, [])

  return (
    <LayoutSytled>
      <ContainerStyled>
        <h1 className="text-center text-black-4 mt-2">Próximos Eventos</h1>
        {loading && <Loading />}
        {errorMsg && (
          <Alert variant="danger" className="text-center">
            {errorMsg}
          </Alert>
        )}
        <RowStyled>
          {events.map((event) => (
            <Col key={event.id}>
              <CardEvents events={event} />
            </Col>
          ))}
        </RowStyled>
      </ContainerStyled>
    </LayoutSytled>
  );
}

const RowStyled = styled(Row)`
  margin-bottom: 20px;
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;

@media (min-width: 810px){
  grid-template-columns: 1fr 1fr;
}
@media (min-width: 811px){
  grid-template-columns: 1fr 1fr 1fr 1fr;
}
`

const ContainerStyled = styled(Container)`
display: flex;
flex-direction: column;
align-items: center;
text-align: center;
max-width: 80%;
`


const LayoutSytled = styled(Layout)
`
background-image: url('../img/background.png');
  background-size: cover;
  height: auto;
  color: #f5f5f5;
  `
