// import styled from "@emotion/styled";
import { useState } from "react";
import { Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { createInscription } from "../../services/Inscriptions.service";
import { AuthForm } from "../../components/AuthForm/index"
import { selectUser } from "../../store/User/user.selectors"
import { toast } from "react-toastify"

export function InscriptionsForm ({ eventId, onRegister }) {
  const user = useSelector(selectUser)
  const [isSubmiting, setIsSubmiting] = useState(false)
  const handleInscription = async () => {
    try {
      setIsSubmiting(true)
      await createInscription({
        name: user.name,
        email: user.email,
        eventId: parseInt(eventId),
        userId: user.id
      })
      toast.success('Inscrição feita com sucesso!')
      onRegister()
    } catch (err) {
      console.error(err)
      toast.error('Falha ao fazer inscrição. Tente novamente.')
    }
    setIsSubmiting(false)
  }
  return (
    <>
      <h2>Inscreva-se!</h2>
      {user ? (
        <Button onClick={handleInscription} disabled={isSubmiting}>Inscrever</Button>
      ) : (
        <>
          <p>Faça Login ou Cadastre-se!</p>
          <AuthForm redirectAfterLogin={false} />
        </>
      )}
    </>
  )
}

// const AlertStyled = styled(Alert)`
// color: rgb(59, 9, 223);`
