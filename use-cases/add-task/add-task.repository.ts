import { Task } from '@/entities'

export interface AddTaskRepository {
  add(task: Task): MaybePromise<void>
}
