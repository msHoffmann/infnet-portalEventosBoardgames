import { useCallback, useEffect, useState } from "react";
import { Alert, Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { Layout } from "../../components/Layout";
import { Loading } from "../../components/Loading";
import { NotFoundView } from "../NotFound";
import { InscriptionsForm } from "../EventsDetail/inscriptionsForm";
import { Inscriptions } from "../EventsDetail/inscriptions";

export function EventsDetailView() {
  const { id } = useParams();
  const [event, setEvent] = useState();
  const [loading, setLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState();
  const fetchEvent = useCallback(async () => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/events/${id}?_embed=inscriptions`
      );
      if (!response.ok) {
        throw new Error("Response not ok.");
      }
      const data = await response.json();
      setEvent(data);
      console.log(data);
      setLoading(false);
    } catch (err) {
      const message =
        err.message === "Response not ok."
          ? "404"
          : "Falha ao buscar informações do Evento. Recarregue a página.";
      setErrorMsg(message);
      setLoading(false);
    }
  }, [id]);
  useEffect(() => {
    fetchEvent();
  }, [fetchEvent]);
  if (loading) {
    return <Loading />;
  }
  if (errorMsg === "404") {
    return <NotFoundView />;
  }
  return (
    <Layout className="bg_image">
      <Container className="course-detail-container bg-white container-eventos">
        {errorMsg ? (
          <Alert variant="danger" className="mt-3">
            {errorMsg}
          </Alert>
        ) : (
          <>
            <h1 className="text-center mb-10">{event.name}</h1>
            <img src={event.image} className="img-fluid img-carousel" />
            <p className="pp">
              <strong>Empresa:</strong> {event.company}
            </p>
            <p className="pp">{event.description}</p>
            <Inscriptions inscriptions={event.inscriptions} />
            {console.log(event.inscriptions)}
            <InscriptionsForm eventId={id} onRegister={fetchEvent} />
          </>
        )}
      </Container>
    </Layout>
  );
}
