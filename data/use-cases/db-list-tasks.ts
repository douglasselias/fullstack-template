import { Task } from '@/domain/entities'
import { ListTasks } from '@/domain/use-cases'

class DBListTasks implements ListTasks {
  constructor(private db: Task[]) {}

  async list(): Promise<Task[]> {
    return this.db
  }
}
