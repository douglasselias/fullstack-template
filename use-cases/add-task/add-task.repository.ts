import { Task } from '@/entities'

export interface AddTaskRepository {
  add(params: Task): Promise<void>
}
