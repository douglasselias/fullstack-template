import React from 'react'
import { render, fireEvent, screen, waitFor } from '@testing-library/react'

import '@testing-library/jest-dom'

import { AddTaskPresentation } from './add-task.presentation'
import { AddTaskUseCase } from './add-task.usecase'

class AddTaskInteractorStub implements AddTaskUseCase {
  add = jest.fn()
}

const addTaskInteractorStub = new AddTaskInteractorStub()
const callback = jest.fn()

test('Deve adicionar tarefa corretamente', async () => {
  render(
    <AddTaskPresentation
      addTaskUseCase={addTaskInteractorStub}
      callback={callback}
    />
  )

  const taskInput = screen.getByPlaceholderText(/tarefa/i)
  const submitButton = screen.getByText(/adicionar/i)

  const description = 'description'
  fireEvent.change(taskInput, { target: { value: description } })
  fireEvent.click(submitButton)

  expect(addTaskInteractorStub.add).toHaveBeenCalledWith(description)
  await waitFor(() => {
    expect(callback).toHaveBeenCalled()
  })
})
