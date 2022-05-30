import { Container } from "react-bootstrap"
import styled from "styled-components"
import { AuthForm } from "../../components/AuthForm"


export function LoginView () {
    return (
        
        <Background className="bg-dark d-flex">
        <Container className= "rounded p-3 p-md-5">
            <AuthForm />
            </Container>
        </Background>

    )
}


const Background = styled.main
`
background-image: url('../img/login.jpg');
  background-size: cover;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px
  `