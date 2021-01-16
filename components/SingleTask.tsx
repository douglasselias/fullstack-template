import { Task } from '@/entities'

export function SingleTask(props: Props) {
  const { task } = props

  return <li key={task.id}>{task.description}</li>
}

type Props = {
  task: Task
}
