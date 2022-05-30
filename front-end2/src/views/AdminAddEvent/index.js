import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import { LayoutPortal} from "../../components/LayoutPortal"
import { UpsetEventForm } from "../../components/UpsertEventForm"
import { createEvent } from "../../services/Events.service"


export function AdminAddEventView () {
    const navigate = useNavigate()
    const handleSubmit = async (formData) => {
        try {
            await createEvent(formData)
            toast.success('Evento cadastrado com sucesso.')
            navigate('/portal/eventos')
        } catch {
          toast.error('Falha ao cadastrar Evento. Tente novamente.')  
        }
    }

    return (
        <LayoutPortal>
        <h1 className='mt-4'>Cadastro de Novo Evento</h1>
        <UpsetEventForm onSubmit={handleSubmit}/>
        </LayoutPortal>
    )
}