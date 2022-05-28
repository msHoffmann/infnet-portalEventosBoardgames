import { apiUrl } from "./Api.service.js"
import { getAuthorizationHeaders } from "./Api.service"

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

export const deleteEvent = async eventId => {
  const response = await fetch(`${apiUrl}/events/${eventId}`, 
    {method: 'DELETE',
    headers: getAuthorizationHeaders()
  })
  if (!response.ok) {
    throw new Error('Response not ok.')
  }
}

export const createEvent = async (eventData) => {
  const body = JSON.stringify(eventData)
  const response = await fetch(`${apiUrl}/events`, {
    method: 'POST',
    body,
    headers: {
      'content-type': 'application/json',
      ...getAuthorizationHeaders()
    }
  })
  if (!response.ok) {
    throw new Error('Response not ok.')
  }
}

export const updateEvent = async (eventId, eventData) => {
  const body = JSON.stringify(eventData)
  const response = await fetch(`${apiUrl}/events/${eventId}`, {
    method: 'PUT',
    body,
    headers: {
      'content-type': 'application/json',
      ...getAuthorizationHeaders()
  }
}) 
    if (!response.ok) {
    throw new Error('Response not ok.')
  }
  }