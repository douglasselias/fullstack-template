import { AddTaskLocalStorage } from './add-task.localstorage'

test('Deve executar localStorage.setItem com valores corretos', async () => {
  jest.spyOn(Storage.prototype, 'setItem')

  const repository = new AddTaskLocalStorage()
  const task = { id: '123', description: 'desc', isDone: false }

  await repository.add(task)

  expect(localStorage.setItem).toHaveBeenCalledWith(
    'tasks',
    JSON.stringify([task])
  )
})
