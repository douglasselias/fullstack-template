import fs from 'fs'

import { AddTaskRepository } from '@/use-cases/add-task/add-task.repository'
import { Task } from '@/entities'
import { FsListTasks } from './fs-list-tasks'

export class FsAddTask implements AddTaskRepository {
  async add(task: Task): Promise<void> {
    const repo = new FsListTasks()
    const tasks = repo.list()

    tasks.push(task)

    fs.writeFileSync(__dirname + '/tasks.json', JSON.stringify({ tasks }))
  }
}
