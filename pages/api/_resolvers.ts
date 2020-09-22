import { Task } from '@/domain/entities'
import { ListTasks } from '@/domain/use-cases'
import { resolverArgs } from './_utils'

const dbTasks = []

export const resolvers = {
  Query: {
    ['tasks']: resolverArgs(tasks),
  },

  Mutation: {
    ['addTask']: resolverArgs(addTask),
    ['toggleIsDoneTask']: resolverArgs(toggleIsDoneTask),
  },
}

function tasks(): Promise<Task[]> {
  const dbListTasks = new DBListTasks(dbTasks)
  return dbListTasks.list()
}

function addTask({ args }: TaskArgs): Task | void {
  const task: Task = {
    id: new Date().getTime().toString(),
    description: args.description,
    isDone: false,
  }

  dbTasks.push(task)

  return task
}

function toggleIsDoneTask({ args }: TaskArgs): Task[] {
  dbTasks.forEach((task: Task) => {
    if (task.id === args.id) {
      task.isDone = !task.isDone
    }
  })

  return dbTasks
}

type TaskArgs = { args: Task }

class DBListTasks implements ListTasks {
  constructor(private db: Task[]) {}

  async list(): Promise<Task[]> {
    return this.db
  }
}
