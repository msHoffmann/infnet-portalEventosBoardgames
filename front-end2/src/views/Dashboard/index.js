import { Alert } from "react-bootstrap";
import { LayoutPortal } from "../../components/LayoutPortal";

export function DashboardView () {
    return(
        <LayoutPortal>
        <h1 className="mt-4">Bem-vindo(a) Frania!</h1>
        <p>Utilize o Menu para gerenciar os dados.</p>
        <Alert variant="info">Olá! Você receberá as informações dos Eventos por e-mail.</Alert>
        </LayoutPortal>
    )
} 