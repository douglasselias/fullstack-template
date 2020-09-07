import { RemoteListTasks } from '@/data/use-cases'
import { mockTaskList, GraphQLClientSpy } from '@/data/mocks'
import { Task } from '@/domain/entities'

type SUT = {
  sut: RemoteListTasks
  graphqlClientSpy: GraphQLClientSpy<Task[]>
}

function makeSut(): SUT {
  const spy = new GraphQLClientSpy()
  const sut = new RemoteListTasks('/api/graphql', spy)
  return {
    sut,
    graphqlClientSpy: spy
  }
}

describe('Listagem de tarefas', () => {
  test('Executa com o url correto', async () => {
    const { sut, graphqlClientSpy } = makeSut()
    await sut.list()
    expect(graphqlClientSpy.url).toBe('/api/graphql')
  })
})