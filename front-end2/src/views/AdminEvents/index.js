import { LayoutPortal } from '../../components/LayoutPortal'
import { PortalHeader } from '../../components/PortalHeader'
import { toast } from 'react-toastify'
import { getEvents } from '../../services/Events.service'
import { useEffect, useState } from 'react'
import { Loading } from '../../components/Loading'
import { TableEvents } from './TableEvents'

export function AdminEventsView (){
    const [events, setEvents] = useState([])
    const [loading, setLoading] = useState(true)

    const fetchEvents = async () => {
        try {
            const data = await getEvents()
            setEvents(data)
        } catch {
            toast.error ('Falha ao buscar os Eventos. Carregue a página.')
        }
        setLoading(false)
    }
    useEffect(() => {
        fetchEvents()
    }, [])
    return (
        <LayoutPortal>
        <PortalHeader
            title='Próximos Eventos'
            buttonText='Novo Evento'
            buttonLink='/portal/eventos/cadastro'
        />
        {loading && <Loading />}
        <TableEvents events={events} onDeleteEvent={fetchEvents}/>
    </LayoutPortal>
    )
}