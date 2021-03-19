import { Task } from '@/entities'

export interface ListTasksRepository {
  list(): MaybePromise<Task[]>
}
