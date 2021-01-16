import fs from 'fs'

import { ListTasksRepository } from '@/use-cases/list-tasks/list-tasks.repository'

export class FsListTasks implements ListTasksRepository {
  list() {
    const file = fs.readFileSync(__dirname + '/tasks.json', {
      encoding: 'utf8',
      flag: 'r',
    })

    const parsedFile = JSON.parse(file)

    return parsedFile.tasks
  }
}
