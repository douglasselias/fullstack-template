import faker from 'faker'

import { Task } from '@/domain/entities'

export function mockTaskList(): Task[] {
  return [
    mockTask(),
    mockTask(),
    mockTask(),
  ]
}

function mockTask(): Task {
  return {
    id: faker.random.uuid(),
    description: faker.random.words(),
    isDone: faker.random.boolean(),
  }
}