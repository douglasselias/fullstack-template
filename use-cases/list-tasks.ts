import { Task } from '@/entities'

export interface ListTasks {
  list(): Promise<Task[]>
}
