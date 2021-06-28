import { Repository } from './repository'

export function interactor(repository: Repository) {
  return (restaurantID: string) => {
    return restaurantID ? repository(restaurantID) : []
  }
}
