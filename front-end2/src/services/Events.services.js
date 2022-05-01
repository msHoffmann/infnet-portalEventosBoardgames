export const getEvents = async () => {
    const response = await fetch(
        `${process.env.REACT_APP_API_URL}/events`)
      if (!response.ok) {
        throw new Error("Response not ok.")
      }
      return response.json()
}



export const getEventById = async (eventId) => {
    const response = await fetch(
        `${process.env.REACT_APP_API_URL}/events/${eventId}?_embed=inscriptions`
      );
      if (!response.ok) {
        throw new Error("Response not ok.");
      }
      return response.json()
}