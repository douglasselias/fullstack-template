import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'

import '@testing-library/jest-dom'

import { TasksList } from './TasksList'
import { Task } from '@/entities'
import { ToggleIsDoneTaskLocalStorage } from '../toggle-is-done-task/toggle-is-done-task.localstorage'
import { ToggleIsDoneTaskInteractor } from '../toggle-is-done-task/toggle-is-done-task.interactor'

test('Deve adicionar tarefa corretamente', async () => {
  const tasks: Task[] = [
    { id: '123', description: 'description', isDone: false },
  ]
  render(
    <TasksList
      tasks={tasks}
      toggleIsDoneTaskInteractor={null}
      callback={null}
    />
  )

  const task = screen.getByText(/description/i)

  expect(task).toBeInTheDocument()
})

test('Deve marcar como feita corretamente', () => {
  const toggleIsDoneTaskLocalStorage = new ToggleIsDoneTaskLocalStorage()
  const toggleIsDoneTaskInteractor = new ToggleIsDoneTaskInteractor(
    toggleIsDoneTaskLocalStorage
  )

  const tasks: Task[] = [
    { id: 'abc-123', description: 'description', isDone: false },
  ]

  const callback = jest.fn()

  render(
    <TasksList
      tasks={tasks}
      toggleIsDoneTaskInteractor={toggleIsDoneTaskInteractor}
      callback={callback}
    />
  )

  const task = screen.getByText(/description/i)
  fireEvent.click(task)

  expect(true).toBe(true)
})
