import { Col, Row } from "react-bootstrap";
import { LoginForm } from "./LoginForm";
import { RegisterForm } from "./RegisterForm";
import styled from "styled-components";
import { Container } from "react-bootstrap";

export function AuthForm (){
    return (
        <Container>
       <Teste>
            <Col xs={12} lg='auto' className='flex-fill'><LoginForm /></Col>
        </Teste>

        <Row>
            <Col xs={12} lg='auto' className='flex-fill'><RegisterForm /></Col>
        </Row>
        </Container>
    )
}


const Other = styled(Col)`
text-align: center;
padding: 16px 0;
@media(min-width: 992px){
    padding-left: 42px;
    padding-right: 42px;
    align-self: cente;
}
`

const Teste = styled(Row)`
padding-bottom: 10px;
`