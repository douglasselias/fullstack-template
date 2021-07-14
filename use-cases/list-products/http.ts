import axios from 'axios'

import { Product } from '@/entities/product'

export async function http(restaurantID: string): Promise<Product[]> {
  const url = `http://localhost:3001/restaurants/${restaurantID}`
  const { data } = await axios.get(url)
  return data.products
}
