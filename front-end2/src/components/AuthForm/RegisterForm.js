import { Form, Button } from "react-bootstrap";
import { useState } from "react";

export function RegisterForm() {
    const [formData, setFormData] = useState({
        name:'',
        email: '',
        password:''
    })
    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        })
    }
    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(FormData)
    }
    return (
        <Form onSubmit={handleSubmit}>
        <p className="h4">Cadastre-se</p>
        <Form.Group controlId="register-name" className="mb-3">
          <Form.Label className="m-0">Nome:</Form.Label>
          <Form.Control
            placeholder="Informe o seu Nome"
            value={formData.name}
            onChange={handleChange}
            name="name"
            required
          />
        </Form.Group>
        <Form.Group controlId="register-email" className="mb-3">
          <Form.Label className="m-0">E-mail:</Form.Label>
          <Form.Control
            type="email"
            placeholder="exemplo@exemplo.com"
            value={formData.email}
            onChange={handleChange}
            name="email"
            required
          />
        </Form.Group>
        <Form.Group controlId="register-email" className="mb-3">
          <Form.Label className="m-0">Senha:</Form.Label>
          <Form.Control
            type="password"
            placeholder="Senha de Acesso"
            value={formData.password}
            onChange={handleChange}
            name="password"
            required
          />
        </Form.Group>
        <Button type="submit">
          Criar Conta
        </Button>
        </Form>

    )
}