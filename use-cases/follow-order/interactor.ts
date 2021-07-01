import { Repository } from './repository'

export function interactor(repository: Repository) {
  return (orderID: number) => {
    return orderID ? repository(orderID) : {}
  }
}
