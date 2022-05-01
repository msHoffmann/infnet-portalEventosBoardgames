import { Layout } from "../../components/Layout";
import CardEvents from "../../components/CardEvents";
import React, { useEffect, useState } from "react";
import "../../assets/css/app.css";
import { Loading } from "../../components/Loading";
import { Alert, Container, Col, Row } from "react-bootstrap";
import { getEvents } from "../../services/Events.services"

let events = [];

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
    <Layout className="bg_image">
      <Container className="bg-container">
        <h1 className="text-center text-black-4 mt-2">Próximos Eventos</h1>
        {loading && <Loading />}
        {errorMsg && (
          <Alert variant="danger" className="text-center">
            {errorMsg}
          </Alert>
        )}
        <Row>
          {events.map((event) => (
            <Col key={event.id}>
              <CardEvents events={event} />
            </Col>
          ))}
        </Row>
      </Container>
    </Layout>
  );
}
