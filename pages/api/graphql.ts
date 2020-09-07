import { ApolloServer, gql } from 'apollo-server-micro'

import { User } from '@/domain/entities/user'

const typeDefs = gql`
  type Query {
    users: [User!]!
  }

  type User {
    name: String
  }
`

const resolvers = {
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