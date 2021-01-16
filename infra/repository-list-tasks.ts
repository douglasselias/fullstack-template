import { ListTasksRepository } from '@/use-cases/list-tasks/list-tasks.repository'
import { Task } from '@/entities'

export class RepositoryListTasks implements ListTasksRepository {
  async list(): Promise<Task[]> {
    const tasks = localStorage.getItem('tasks')
    return JSON.parse(tasks || '[]')
  }
}
