import { ApolloServer, gql } from 'apollo-server-micro'

import { User, Task } from '@/domain/entities'

type Parent = string
type Args = string
type Context = string
type Resolver = (parent: Parent, args: { id: string, description: string }, context: Context) => unknown

const typeDefs = gql`
  type Query {
    tasks: [Task!]!
  }

  type Task {
    id: String
    description: String
    isDone: Boolean
  }
`

type QueryRes = {
  tasks: Resolver
}

type MutationRes = {
  addTask: Resolver
  toggleIsDoneTask: Resolver
}

type R = {
  Query: QueryRes
  Mutation: MutationRes
}

const dbTasks = []

const resolvers: R = {
  Query: {
    tasks(parent, args, context): Task[] {
      return dbTasks
    },
  },
  Mutation: {
    addTask(parent, args, context): Task | void {
      const task: Task = {
        id: new Date().getTime().toString(),
        description: args.description,
        isDone: false
      }
      dbTasks.push(task)
      // return {id, description, }
    },
    toggleIsDoneTask(parent, args, context): void {
      dbTasks.forEach((task: Task) => {
        if (task.id === args.id) {
          task.isDone = !task.isDone
        }
      })
      // return {}
    }
  }
}

const apolloServer = new ApolloServer({ typeDefs, resolvers })

export const config = {
  api: {
    bodyParser: false,
  },
}

export default apolloServer.createHandler({ path: '/api/graphql' })