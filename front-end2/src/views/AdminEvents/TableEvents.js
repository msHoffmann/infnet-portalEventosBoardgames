import { Table, Button, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { deleteEvent } from "../../services/Events.service";
import { useState } from "react";

export function TableEvents({ events, onDeleteEvent}) {
    const [eventToDelete, setEventToDelete] = useState()
    const hideModal = () => {setEventToDelete(undefined)}
    const handleClick = async (event) => {
        setEventToDelete(event)
    }
    const handleDelete = async () => {
        try {
           await deleteEvent(eventToDelete.id)
           await onDeleteEvent()
           toast.success('EVENTO deletado com sucesso!')
        } catch (error) {
            toast.error('Falha ao deletar Evento. Tente novamente.')   
        }
        hideModal()
    }
    return (
        <>
            <Table hover responsive>
                <thead>
                    <tr>
                        <th>Nº</th>
                        <th>Nome</th>
                        <th>Empresa</th>
                        <th />
                    </tr>
                </thead>
                <tbody>
                    {events.map(event => (
                        <tr key={event.id}>
                            <td>{event.id}</td>
                            <td>{event.name}</td>
                            <td>{event.company}</td>
                            <td className="d-grid gap-1 d-sm-table-cell">
                                <Button
                                    size='sm'
                                    as={Link}
                                    to={`/portal/eventos/${event.id}`}
                                >Editar</Button>
                                <Button
                                    size='sm'
                                    className="ms-sm-1"
                                    variant='danger'
                                    onClick={() => handleClick(event)}
                                    to={`/portal/eventos/${event.id}`}
                                >Deletar</Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
                </Table>
                <Modal show={eventToDelete} onHide={hideModal}>
                    <Modal.Header closeButton>
                        <Modal.Title>ATENÇÃO!!!</Modal.Title>
                        <Modal.Body>Ao clicar em confirmar, o <strong>{eventToDelete?.name}</strong> será excluído. Deseja realmente remover o <strong>Evento</strong>?</Modal.Body>
                    </Modal.Header>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={hideModal}>Cancelar</Button>
                        <Button variant="danger" onClick={handleDelete}>Deletar EVENTO</Button>
                    </Modal.Footer>
                </Modal>   
        </>
  )
}