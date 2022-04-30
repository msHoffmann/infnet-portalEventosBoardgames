import Card from "react-bootstrap/Card";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export function CardEvents({ events }) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={events.image} alt={events.name} />
      <Card.Body className="d-flex flex-column">
        <Card.Title>{events.name}</Card.Title>
        <Card.Text>{events.shortdescription}</Card.Text>
        <Button
          as={Link}
          to={`/eventos/${events.id}`}
          variant="warning"
          className="mt-auto"
          align
        >
          Inscreva-se!
        </Button>
      </Card.Body>
    </Card>
  );
}

export default CardEvents;
