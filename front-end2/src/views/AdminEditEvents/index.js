import { useState } from "react";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { LayoutPortal } from '../../components/LayoutPortal'
import { Loading } from "../../components/Loading";
import { UpsetEventForm } from "../../components/UpsertEventForm";
import { getEventById, updateEvent } from "../../services/Events.service";

export function AdminEditEventView() {
    const { id } = useParams()
    const [event, setEvent] = useState()
    useEffect(() => {
        const fetchEvent = async () => {
            try {
                const eventData = await getEventById(id)
                setEvent(eventData)
            } catch {
                toast.error('Falha ao buscar dados do Evento. Recarregue a página.')
            }
        }
        fetchEvent()
    }, [id])
    const navigate = useNavigate()
    const handleSubmit = async (formData) => {
        try {
             updateEvent(id, formData)
             toast.success('Evento alterado com sucesso.')
             navigate("/portal/eventos")
        } catch (error) {
           toast.error('Falha ao alterar Evento. Tente novamente.') 
        }
    }
    return (
        <LayoutPortal>
            <h1 className='mt-4'>Editar Evento</h1>
            {event ? (
                <UpsetEventForm
                    initialValue={{
                        name: event.name,
                        company: event.company,
                        shortdescription: event.shortdescription,
                        description: event.description,
                        image: event.image
                    }}
                    buttonLabel='Alterar'
                    onSubmit={handleSubmit}
                />
            ) : (
                <Loading />
            )}
        </LayoutPortal>
    )
}