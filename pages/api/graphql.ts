import { ApolloServer, gql } from 'apollo-server-micro'

import { User } from '@/domain/entities/user'

type Parent = string
type Args = string
type Context = string
type Resolver = (parent: Parent, args: Args, context: Context) => unknown

const typeDefs = gql`
  type Query {
    users: [User!]!
  }

  type User {
    name: String
  }
`

type QueryRes = {
  users: Resolver
}

type R = {
  Query: QueryRes
}

const resolvers: R = {
  Query: {
    users(parent, args, context): User[] {
      return [{ name: 'Nextjs' }]
    },
  },
}

const apolloServer = new ApolloServer({ typeDefs, resolvers })

export const config = {
  api: {
    bodyParser: false,
  },
}

export default apolloServer.createHandler({ path: '/api/graphql' })