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

async function addTask({ args }: TaskArgs): Promise<Task> {
  const task: Task = {
    id: new Date().getTime().toString(),
    description: args.description,
    isDone: false,
  }

  dbTasks.push(task)

  return task
}

async function toggleIsDoneTask({ args }: TaskArgs): Promise<Task[]> {
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
