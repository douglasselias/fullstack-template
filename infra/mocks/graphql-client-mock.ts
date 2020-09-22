import { GraphQLClient, HttpResponse } from '@/data/protocols/graphql-client'

export function mockGraphQLClient(): GraphQLClient {
  return {
    async request() {
      return mockGraphQLResponse()
    },
  }
}

export function mockGraphQLResponse(): HttpResponse {
  return {
    data: {},
    errors: [],
  }
}
