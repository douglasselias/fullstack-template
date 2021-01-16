import { Task } from '@/entities'

export interface ListTasksUseCase {
  list(): Promise<Task[]>
}
