import { Task } from '@/entities'

export interface ListTasksUseCase {
  list(): MaybePromise<Task[]>
}
