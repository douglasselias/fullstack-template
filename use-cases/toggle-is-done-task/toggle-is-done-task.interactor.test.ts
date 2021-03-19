import { ToggleIsDoneTaskInteractor } from './toggle-is-done-task.interactor'
import { ToggleIsDoneTaskRepository } from './toggle-is-done-task.repository'

class ToggleIsDoneTaskRepositoryStub implements ToggleIsDoneTaskRepository {
  toggle = jest.fn()
}

it('toggle task correctly', () => {
  const toggleIsDoneTaskRepositoryStub = new ToggleIsDoneTaskRepositoryStub()
  const interactor = new ToggleIsDoneTaskInteractor(
    toggleIsDoneTaskRepositoryStub
  )
  const id = 'abc-123'

  interactor.toggle(id)

  expect(toggleIsDoneTaskRepositoryStub.toggle).toHaveBeenCalledWith(id)
})
