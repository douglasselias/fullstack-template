import { AddTaskRepository } from '@/use-cases/add-task/add-task.repository'
import { Task } from '@/entities'
import { RepositoryListTasks } from './repository-list-tasks'

export class RepositoryAddTask implements AddTaskRepository {
  async add(task: Task): Promise<void> {
    const repo = new RepositoryListTasks()
    const tasks = await repo.list()

    tasks.push(task)

    localStorage.setItem('tasks', JSON.stringify(tasks))
  }
}
