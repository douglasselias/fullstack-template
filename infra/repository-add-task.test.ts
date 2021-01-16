import { RepositoryAddTask } from '@/infra'

test('Deve executar localStorage.setItem com valores corretos', async () => {
  jest.spyOn(Storage.prototype, 'setItem')

  const repositoryAddTask = new RepositoryAddTask()
  const task = { id: '123', description: 'desc', isDone: false }

  await repositoryAddTask.add(task)

  expect(localStorage.setItem).toHaveBeenCalledWith(
    'tasks',
    JSON.stringify([task])
  )
})
