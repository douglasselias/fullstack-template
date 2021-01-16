import fs from 'fs'

import { FsListTasks } from './fs-list-tasks'

jest.spyOn(fs, 'readFileSync')

beforeEach(() => {
  fs.writeFileSync(__dirname + '/tasks.json', JSON.stringify({ tasks: [] }))
})

test('Deve listar as tarefas corretamente', async () => {
  const fsListTasks = new FsListTasks()

  const tasks = await fsListTasks.list()

  expect(fs.readFileSync).toHaveBeenCalledWith(__dirname + '/tasks.json', {
    encoding: 'utf8',
    flag: 'r',
  })
  expect(tasks).toMatchObject([])
})
