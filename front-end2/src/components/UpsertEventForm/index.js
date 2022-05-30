import { Form, Button } from "react-bootstrap";
import { useState } from "react";


const EmptyFormData = {
    name: '',
    company: '',
    shortdescription: '',
    description: '',
    image: ''
}

export function UpsetEventForm({ initialValue = EmptyFormData, buttonLabel = 'Cadastrar', onSubmit }) {
    const [formData, setFormData] = useState(initialValue)
    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        })
    }
    const handleSubmit = (event) => {
        event.preventDefault()
        onSubmit(formData)
    }
    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group className='mb-3' controlId="event-name">
                <Form.Label className='mb-0'>Nome:</Form.Label>
                <Form.Control
                    placeholder="Nome do Evento"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
            </Form.Group>
            <Form.Group className='mb-3' controlId="event-company">
                <Form.Label className='mb-0'>Empresa:</Form.Label>
                <Form.Control
                    placeholder="Nome da Empresa"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    required
                />
            </Form.Group>
            <Form.Group className='mb-3' controlId="event-short-description">
                <Form.Label className='mb-0'>Descrição Curta:</Form.Label>
                <Form.Control
                    placeholder="Texto curto para Próximos Eventos"
                    name="shortdescription"
                    value={formData.shortdescription}
                    onChange={handleChange}
                    required
                    as='textarea'
                />
            </Form.Group>
            <Form.Group className='mb-3' controlId="event-description">
                <Form.Label className='mb-0'>Descrição Longa:</Form.Label>
                <Form.Control
                    placeholder="Todas as informações do Evento"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    required
                    as='textarea'
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="event-image">
        <Form.Label className="mb-0">Imagem</Form.Label>
        <Form.Control
          placeholder="Imagem que aparece no Próximos Eventos"
          name="image"
          value={formData.image}
          onChange={handleChange}
          required
        />
        <Form.Text>Coloque aqui sua imagem do site <a href="https://cloudinary.com/" target='_blank' rel="noreferrer">Cloudinary</a>.</Form.Text>
      </Form.Group>
                <Button type='submit'>{buttonLabel}</Button>
        </Form>
    )
}