import { Task } from '@/entities'

export interface ListTasksRepository {
  list(): Promise<Task[]>
}
