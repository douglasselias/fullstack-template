import { Restaurant } from '@/entities'

import { Repository } from './repository'

export function interactor(repository: Repository) {
  return async (query: string): Promise<Restaurant[]> => {
    return repository(query)
  }
}
