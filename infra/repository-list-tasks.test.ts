import { RepositoryListTasks } from '@/infra'

test('Deve executar localStorage.getItem com valores corretos', async () => {
  jest.spyOn(Storage.prototype, 'getItem')

  const repositoryListTasks = new RepositoryListTasks()

  await repositoryListTasks.list()

  expect(localStorage.getItem).toHaveBeenCalledWith('tasks')
})
