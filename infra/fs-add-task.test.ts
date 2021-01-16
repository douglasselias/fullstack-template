import fs from 'fs'

import { FsAddTask } from './fs-add-task'

jest.spyOn(fs, 'writeFileSync')

beforeEach(() => {
  fs.writeFileSync(__dirname + '/tasks.json', JSON.stringify({ tasks: [] }))
})

test('Deve listar as tarefas corretamente', async () => {
  const fsListTasks = new FsAddTask()

  await fsListTasks.add({
    id: '123',
    description: 'description',
    isDone: false,
  })

  expect(fs.writeFileSync).toHaveBeenCalledWith(
    __dirname + '/tasks.json',
    JSON.stringify({
      tasks: [
        {
          id: '123',
          description: 'description',
          isDone: false,
        },
      ],
    })
  )
})
