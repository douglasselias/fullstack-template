import { ToggleIsDoneTaskLocalStorage } from './toggle-is-done-task.localstorage'
import { ListTasksLocalStorage } from '@/use-cases/list-tasks/list-tasks.localstorage'

it('Toggle task on local storage correctly', async () => {
  const stubTask = {
    id: 'abc-123',
    description: 'description stub',
    isDone: false,
  }
  const listTasksLocalStorage = new ListTasksLocalStorage()
  localStorage.setItem('tasks', JSON.stringify([stubTask]))

  jest.spyOn(Storage.prototype, 'setItem')

  const repository = new ToggleIsDoneTaskLocalStorage()

  await repository.toggle(stubTask.id)

  const tasks = await listTasksLocalStorage.list()

  expect(tasks[0].isDone).toBe(true)
})
