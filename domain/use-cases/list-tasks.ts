import { Task } from '@/domain/entities/task';

export interface ListTasks {
  list(): Promise<Task[]>
}