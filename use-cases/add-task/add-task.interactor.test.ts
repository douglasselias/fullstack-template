import { AddTaskInteractor } from './add-task.interactor'
import { AddTaskRepository } from './add-task.repository'
import { IdGenerator } from './id-generator.infra'

class AddTaskRepositoryStub implements AddTaskRepository {
  add = jest.fn()
}

const idStub = '123'
class IdGeneratorStub implements IdGenerator {
  generate = jest.fn(() => idStub)
}

it('adds task correctly', async () => {
  const addTaskRepositoryStub = new AddTaskRepositoryStub()
  const idGeneratorStub = new IdGeneratorStub()
  const interactor = new AddTaskInteractor(
    addTaskRepositoryStub,
    idGeneratorStub
  )
  const description = 'description'

  await interactor.add(description)

  expect(addTaskRepositoryStub.add).toHaveBeenCalledWith({
    id: idStub,
    description,
    isDone: false,
  })
})
