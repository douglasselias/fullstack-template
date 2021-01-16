import { useState } from 'react'

import { Input, Button } from '@/components/base'
import { AddTaskUseCase } from './add-task.usecase'

export function AddTaskPresentation(props: Props): JSX.Element {
  const { addTaskUseCase, callback } = props
  const [description, setDescription] = useState('')

  async function onClickAddTask() {
    await addTaskUseCase.add(description)
    callback()
  }

  return (
    <>
      <Input
        onChange={(value) => setDescription(value)}
        placeholder="Digite uma tarefa"
      />
      <Button onClick={onClickAddTask}>Adicionar</Button>
    </>
  )
}

type Props = {
  addTaskUseCase: AddTaskUseCase
  callback(): void
}
