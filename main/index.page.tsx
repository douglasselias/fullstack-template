import { useState } from 'react'

import { Header } from '@/components/base'
import { TasksList } from '@/use-cases/list-tasks/TasksList'

import { ListTasksLocalStorage } from '@/use-cases/list-tasks/list-tasks.localstorage'
import { AddTaskLocalStorage } from '@/use-cases/add-task/add-task.localstorage'
import { DateIdGenerator } from '@/infra/date.id-generator'

import { ListTasksInteractor } from '@/use-cases/list-tasks/list-tasks.interactor'
import { AddTaskInteractor } from '@/use-cases/add-task/add-task.interactor'

import { AddTaskPresentation } from '@/use-cases/add-task/add-task.presentation'

const listTasksLocalStorage = new ListTasksLocalStorage()
const listTasksInteractor = new ListTasksInteractor(listTasksLocalStorage)

const addTaskLocalStorage = new AddTaskLocalStorage()
const dateIdGenerator = new DateIdGenerator()
const addTaskInteractor = new AddTaskInteractor(
  addTaskLocalStorage,
  dateIdGenerator
)

export function IndexPage(): JSX.Element {
  const [tasks, setTasks] = useState([])

  async function callback() {
    const tasks = await listTasksInteractor.list()
    setTasks(tasks)
  }

  return (
    <>
      <Header>Tarefas</Header>
      <AddTaskPresentation
        addTaskUseCase={addTaskInteractor}
        callback={callback}
      />
      <TasksList tasks={tasks} />
    </>
  )
}
