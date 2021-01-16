import { Task } from '@/entities'
import { AddTaskRepository } from './add-task.repository'
import { ListTasksLocalStorage } from '@/use-cases/list-tasks/list-tasks.localstorage'

export class AddTaskLocalStorage implements AddTaskRepository {
  async add(task: Task): Promise<void> {
    const repository = new ListTasksLocalStorage()
    const tasks = await repository.list()

    tasks.push(task)

    localStorage.setItem('tasks', JSON.stringify(tasks))
  }
}
