import { useState } from "react";
import { Alert, Button, Form } from "react-bootstrap";

const initialFormData = {
  userName: "",
  userEmail: "",
};

export function InscriptionsForm({ eventId, onRegister }) {
  const [showSucess, setShowSucess] = useState(false);
  const [isSubmiting, setIsSubmiting] = useState(false);
  const [errorMsg, setErrorMsg] = useState();
  const [formData, setFormData] = useState(initialFormData);
  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      setErrorMsg(undefined);
      setIsSubmiting(true);
      await fetch(`${process.env.REACT_APP_API_URL}/inscriptions`, {
        method: "POST",
        body: JSON.stringify({
          name: formData.userName,
          email: formData.userEmail,
          eventId: parseInt(eventId),
        }),
        headers: {
          "content-type": "application/json",
        },
      });
      setShowSucess(true);
      setFormData(initialFormData);
      onRegister();
    } catch (err) {
      console.error(err);
      setErrorMsg("Falha ao fazer a inscrição. Tente novamente");
    }
    setIsSubmiting(false);
  };
  return (
    <>
      <h2>Inscreva-se!</h2>
      {showSucess && (
        <Alert
          className="alerta"
          dismissible
          onClose={() => setShowSucess(false)}
        >
          Sua inscrição foi adicionada com sucesso!
        </Alert>
      )}
      {errorMsg && <Alert variant="danger">{errorMsg}</Alert>}
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="inscription-name" className="mb-3">
          <Form.Label className="m-0 inscricao">Nome:</Form.Label>
          <Form.Control
            placeholder="Informe seu nome"
            value={formData.userName}
            onChange={handleChange}
            name="userName"
            required
          />
        </Form.Group>
        <Form.Group controlId="inscription-email" className="mb-3">
          <Form.Label className="m-0 inscricao">E-mail:</Form.Label>
          <Form.Control
            type="email"
            placeholder="exemplo@exemplo.com"
            value={formData.userEmail}
            onChange={handleChange}
            name="userEmail"
            required
          />
        </Form.Group>
        <Button type="submit" disabled={isSubmiting}>
          Inscrever
        </Button>
      </Form>
    </>
  );
}
