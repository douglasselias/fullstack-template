import { Task } from '@/entities'
import { ListTasksInteractor } from './list-tasks.interactor'
import { ListTasksRepository } from './list-tasks.repository'

class ListTasksRepositoryStub implements ListTasksRepository {
  async list(): Promise<Task[]> {
    return [{ id: '123', description: 'description', isDone: false }]
  }
}

const listTasksRepositoryStub = new ListTasksRepositoryStub()
const listTasksInteractor = new ListTasksInteractor(listTasksRepositoryStub)

test('Deve listar tarefas corretamente', async () => {
  const result = await listTasksInteractor.list()

  expect(result).toEqual([
    { id: '123', description: 'description', isDone: false },
  ])
})
