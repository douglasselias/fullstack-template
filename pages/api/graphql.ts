import { ApolloServer } from 'apollo-server-micro'

import { typeDefs } from './_typedefs'
import { resolvers } from './_resolvers'

export const config = {
  api: {
    bodyParser: false,
  },
}

const apolloServer = new ApolloServer({ typeDefs, resolvers })

export default apolloServer.createHandler({ path: '/api/graphql' })
