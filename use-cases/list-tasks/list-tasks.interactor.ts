import { Task } from '@/entities'
import { ListTasksRepository } from './list-tasks.repository'
import { ListTasksUseCase } from './list-tasks.usecase'

export class ListTasksInteractor implements ListTasksUseCase {
  constructor(private readonly repository: ListTasksRepository) {}

  list(): Promise<Task[]> {
    return this.repository.list()
  }
}
