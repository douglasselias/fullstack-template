import axios from 'axios'

import { Restaurant } from '@/entities/restaurant'

export async function http(query: string): Promise<Restaurant[]> {
  const filter = query ? '?q=' + query : ''
  const { data }: { data: Restaurant[] } = await axios.get(
    'http://localhost:3001/restaurants' + filter
  )
  return data.map((r) => ({
    id: r.id,
    imageURL: r.imageURL,
    name: r.name,
    category: r.category,
    rating: r.rating,
    distance: r.distance,
    deliveryTimeRange: r.deliveryTimeRange,
    deliveryTax: r.deliveryTax,
  }))
}
