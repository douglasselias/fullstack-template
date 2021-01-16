import { Task } from '@/entities'

export function TasksList(props: Props): JSX.Element {
  const { tasks } = props

  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>{task.description}</li>
      ))}
    </ul>
  )
}

type Props = {
  tasks: Task[]
}
