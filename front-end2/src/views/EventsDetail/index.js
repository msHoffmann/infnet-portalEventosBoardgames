import { useCallback, useEffect, useState } from "react";
import { Alert, Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { Layout } from "../../components/Layout";
import { Loading } from "../../components/Loading";
import { NotFoundView } from "../NotFound";
import { InscriptionsForm } from "../EventsDetail/inscriptionsForm";
import { Inscriptions } from "../EventsDetail/inscriptions";
import { getEventById } from "../../services/Events.service.js";
import styled from "styled-components";

export function EventsDetailView() {
  const { id } = useParams();
  const [event, setEvent] = useState();
  const [loading, setLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState();
  const fetchEvent = useCallback(async () => {
    console.log(getEventById);
    try {
      const data = await getEventById(id);
      setEvent(data);
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
    <LayoutStyled>
      <ContainerStyled>
        {errorMsg ? (
          <Alert variant="danger" className="mt-3">
            {errorMsg}
          </Alert>
        ) : (
          <>
            <h1 className="text-center mb-10">{event.name}</h1>
            <img src={event.image} className="img-fluid img-carousel" alt="Imagem do Evento" />
            <p className="pp">
              <strong>Empresa:</strong> {event.company}
            </p>
            <p className="pp">{event.description}</p>
            <Inscriptions inscriptions={event.inscriptions} />
            {console.log(event.inscriptions)}
            <InscriptionsForm eventId={id} onRegister={fetchEvent} />
          </>
        )}
      </ContainerStyled>
    </LayoutStyled>
  );
}

const ContainerStyled = styled(Container)`
  background-color: white;
  max-width: 900px;
  box-shadow: 2px 10px 10px 10px rgba(15, 15, 15, 0.3);
  padding: 1rem 1rem;
  margin-top: 20px;
  margin-bottom: 20px;
`;
const LayoutStyled = styled(Layout)`
  background-image: url("../img/background.png");
  background-size: cover;
  height: auto;
`;
