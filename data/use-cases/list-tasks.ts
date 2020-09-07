import { Task } from '@/domain/entities'
import { ListTasks } from '@/domain/use-cases'
import { GraphQLClient } from '@/data/protocols'

export class RemoteListTasks implements ListTasks {
  constructor(
    private readonly url: string,
    private readonly graphqlClient: GraphQLClient<Task[]>
  ) { }

  async list(): Promise<Task[]> {
    const response = await this.graphqlClient.request({
      url: this.url,
      headers: { 'Content-type': 'application/json', },
      body: { query: '{ tasks: { id, description, isDone } }' }
    })

    return response.data
  }
}