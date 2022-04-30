import { Container } from "react-bootstrap";
import { Layout } from "../../components/Layout";

export function NotFoundView() {
  return (
    <Layout>
      <Container className="text-center">
        <div class="alert alert-danger" role="alert">
          Página não encontrada.<br></br>Utilize o Menu Principal para navegar
          entre as páginas.
        </div>
      </Container>
    </Layout>
  );
}
