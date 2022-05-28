import { Col, Row } from "react-bootstrap";
import { LoginForm } from "./LoginForm";
import { RegisterForm } from "./RegisterForm";
import styled from "styled-components";
import { Container } from "react-bootstrap";

export function AuthForm({ redirectAfterLogin = true }) {
    return (
        <Container>
            <RowStyled>
                <ColStyled xs={12} lg='auto' className='flex-fill'><LoginForm redirectAfterLogin={redirectAfterLogin} /></ColStyled>
            </RowStyled>
            <RowStyled>
                <ColStyled xs={12} lg='auto' className='flex-fill'><RegisterForm redirectAfterLogin={redirectAfterLogin} /></ColStyled>
            </RowStyled>
        </Container>
    )
}


const RowStyled = styled(Row)`
margin-bottom: 10px;
background-color: white;
`

const ColStyled = styled(Col)`
    /* border: 1px solid black; */
    padding: 20px;
    box-shadow: 10px;
    padding-bottom: 10px;
`


// const Other = styled(Col)`
// text-align: center;
// padding: 16px 0;
// @media(min-width: 992px){
//     padding-left: 42px;
//     padding-right: 42px;
//     align-self: cente;
// }
// `



// const Teste = styled(Row)`
// padding-bottom: 10px;
