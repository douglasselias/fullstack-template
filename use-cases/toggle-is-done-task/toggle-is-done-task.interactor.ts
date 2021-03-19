import { ToggleIsDoneTaskUseCase } from './toggle-is-done-task.usecase'
import { ToggleIsDoneTaskRepository } from './toggle-is-done-task.repository'

export class ToggleIsDoneTaskInteractor implements ToggleIsDoneTaskUseCase {
  constructor(
    private readonly toggleIsDoneTaskRepository: ToggleIsDoneTaskRepository
  ) {}

  toggle(id: string): void {
    this.toggleIsDoneTaskRepository.toggle(id)
  }
}
