import { Repository } from './repository'

export function interactor(repository: Repository) {
  return (query: string) => {
    return query ? repository(query) : []
  }
}
