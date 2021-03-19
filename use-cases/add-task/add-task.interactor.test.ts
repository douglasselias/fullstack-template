import { AddTaskInteractor } from './add-task.interactor'
import { AddTaskRepository } from './add-task.repository'
import { IdGenerator } from './id-generator.infra'

class AddTaskRepositoryStub implements AddTaskRepository {
  add = jest.fn()
}

class IdGeneratorStub implements IdGenerator {
  id = 'abc-123'
  generate = jest.fn(() => this.id)
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
    id: idGeneratorStub.id,
    description,
    isDone: false,
  })
})
