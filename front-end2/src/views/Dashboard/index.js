import { Alert } from "react-bootstrap";
import { useSelector } from "react-redux";
import { LayoutPortal } from "../../components/LayoutPortal";
import { selectUser } from "../../store/User/user.selectors";

export function DashboardView () {
    const user = useSelector(selectUser)
    return(
        <LayoutPortal>
        <h1 className="mt-4">Bem-vindo(a) {user.name}!</h1>
        {user.type === 1 ? (
            <p>Utilize o Menu para gerenciar os dados.</p>
        ) : (
            <Alert variant="info">Olá! Você receberá as informações dos Eventos por e-mail.</Alert>
        )}
        </LayoutPortal>
    )
} 