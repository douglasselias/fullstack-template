import { useRef } from 'react'

import { AddTaskUseCase } from './add-task.usecase'

export function AddTaskPresentation(props: Props) {
  const { addTaskUseCase, callback } = props
  const inputTask = useRef<HTMLInputElement>()

  async function handleAddTask() {
    await addTaskUseCase.add(inputTask.current.value)
    callback()
  }

  return (
    <>
      <input ref={inputTask} placeholder="Digite uma tarefa" />
      <button onClick={handleAddTask}>Adicionar</button>
    </>
  )
}

type Props = {
  addTaskUseCase: AddTaskUseCase
  callback(): void
}
