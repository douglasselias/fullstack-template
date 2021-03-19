import { ListTasksLocalStorage } from '@/use-cases/list-tasks/list-tasks.localstorage'
import { ToggleIsDoneTaskRepository } from './toggle-is-done-task.repository'

export class ToggleIsDoneTaskLocalStorage
  implements ToggleIsDoneTaskRepository {
  async toggle(id: string): Promise<void> {
    const repository = new ListTasksLocalStorage()
    const tasks = await repository.list()

    const task = tasks.find((task) => task.id === id)
    task.isDone = !task.isDone

    localStorage.setItem('tasks', JSON.stringify(tasks))
  }
}
