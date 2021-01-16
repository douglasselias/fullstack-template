import { ListTasksLocalStorage } from './list-tasks.localstorage'

test('Deve executar localStorage.getItem com valores corretos', async () => {
  jest.spyOn(Storage.prototype, 'getItem')

  const repositoryListTasks = new ListTasksLocalStorage()

  await repositoryListTasks.list()

  expect(localStorage.getItem).toHaveBeenCalledWith('tasks')
})
