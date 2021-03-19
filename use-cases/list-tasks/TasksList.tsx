import { Task } from '@/entities'
import { ToggleIsDoneTaskUseCase } from '../toggle-is-done-task/toggle-is-done-task.usecase'

export function TasksList(props: Props): JSX.Element {
  const { tasks, toggleIsDoneTaskInteractor } = props

  return (
    <ul className="list-disc">
      {tasks.map((task) => (
        <li
          key={task.id}
          className={task.isDone ? 'line-through' : ''}
          onClick={() => toggleIsDoneTaskInteractor.toggle(task.id)}
        >
          {task.description}
        </li>
      ))}
    </ul>
  )
}

type Props = {
  tasks: Task[]
  toggleIsDoneTaskInteractor: ToggleIsDoneTaskUseCase
}
