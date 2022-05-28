import { Form, Button } from "react-bootstrap";
import { useState } from "react";
import { createUser } from "../../services/Users.service";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { userLogin } from "../../store/User/user.actions";

export function RegisterForm({ redirectAfterLogin }) {
    const [isSubmiting, setIsSubmiting] = useState(false)
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
    useDispatch()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleSubmit = async (event) => {
        event.preventDefault()
        try {
          setIsSubmiting(true)
          const userData = await createUser(formData)
          dispatch(userLogin(userData))
          if (redirectAfterLogin) {
            navigate('/portal')
          }
        } catch (error) {
          console.log(error)
          const message = error.message === 'Email already exists'
          ? 'Este E-mail já está em uso.'
          : 'Falha ao fazer Cadastro. Tente novamente.'
          toast.error(message)
          setIsSubmiting(false)

        }
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
            minLength={4}
          />
        </Form.Group>
        <Button type='submit' disabled={isSubmiting}>Criar Conta</Button>
        </Form>

    )
}