import { apiUrl } from "./api.services"

export const getEvents = async () => {
    const response = await fetch(
        `${apiUrl}/events`)
      if (!response.ok) {
        throw new Error("Response not ok.")
      }
      return response.json()
}



export const getEventById = async (eventId) => {
    const response = await fetch(
        `${apiUrl}/events/${eventId}?_embed=inscriptions`
      );
      if (!response.ok) {
        throw new Error("Response not ok.");
      }
      return response.json()
}