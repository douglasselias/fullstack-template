import { Product } from '@/entities/product'
import { Repository } from './repository'

export function interactor(repository: Repository) {
  return async (restaurantID: string): Promise<Product[]> => {
    return restaurantID ? repository(restaurantID) : []
  }
}
