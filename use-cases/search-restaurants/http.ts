import axios from 'axios'

import { Restaurant } from '@/entities/restaurant'

export async function http(query: string): Promise<Restaurant[]> {
  const filter = query ? '?q=' + query : ''
  const { data } = await axios.get('http://localhost:3001/restaurants' + filter)
  return data
}
