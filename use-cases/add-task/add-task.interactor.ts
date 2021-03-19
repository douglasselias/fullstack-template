import { Task } from '@/entities'

import { AddTaskUseCase } from './add-task.usecase'
import { AddTaskRepository } from './add-task.repository'
import { IdGenerator } from './id-generator.infra'

export class AddTaskInteractor implements AddTaskUseCase {
  constructor(
    private readonly repository: AddTaskRepository,
    private readonly idGenerator: IdGenerator
  ) {}

  async add(description: string): Promise<void> {
    const task: Task = {
      id: await this.idGenerator.generate(),
      description,
      isDone: false,
    }

    await this.repository.add(task)
  }
}
