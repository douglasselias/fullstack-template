import { Task } from '@/domain/entities'

export interface ListTasks {
  list(): Promise<Task[]>
}
