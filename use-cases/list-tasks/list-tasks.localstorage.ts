import { Task } from '@/entities'
import { ListTasksRepository } from './list-tasks.repository'

export class ListTasksLocalStorage implements ListTasksRepository {
  async list(): Promise<Task[]> {
    const tasks = localStorage.getItem('tasks')
    return JSON.parse(tasks || '[]')
  }
}
