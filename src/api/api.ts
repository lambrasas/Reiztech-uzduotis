import axios from 'axios'
import { Show } from '../types/show'

const BASE_URL = import.meta.env.VITE_API_BASE_URL

export const fetchShows = async (): Promise<Show[]> => {
  try {
    const response = await axios.get(`${BASE_URL}/shows`)
    return response.data
  } catch (error) {
    console.error('Error fetching shows: ', error)
    throw error
  }
}
export const fetchShowById = async (id: number) => {
  try {
    const response = await axios.get(`${BASE_URL}/shows/${id}`)
    return response.data
  } catch (error) {
    console.error('Error fetching specific show', error)
    throw error
  }
}
