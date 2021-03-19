import React from 'react'
import { render, screen } from '@testing-library/react'

import '@testing-library/jest-dom'

import { TasksList } from './TasksList'
import { Task } from '@/entities'

test('Deve adicionar tarefa corretamente', async () => {
  const tasks: Task[] = [
    { id: '123', description: 'description', isDone: false },
  ]
  render(<TasksList tasks={tasks} toggleIsDoneTaskInteractor={null} />)

  const task = screen.getByText(/description/i)

  expect(task).toBeInTheDocument()
})
