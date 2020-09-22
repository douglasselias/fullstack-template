import { gql } from 'apollo-server-micro'

export const typeDefs = gql`
  type Query {
    tasks: [Task!]!
  }

  type Task {
    id: String
    description: String
    isDone: Boolean
  }
`
