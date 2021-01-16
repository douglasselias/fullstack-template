// import { IndexPage } from '@/presentation/index-page'
// import {
//   RepositoryAddTask,
//   RepositoryListTasks,
//   FsAddTask,
//   FsListTasks,
// } from '@/infra'
// import { ListTasksInteractor } from '@/use-cases/list-tasks/list-task-interactor'
// import { AddTaskInteractor } from '@/use-cases/add-task/add-task-interactor'

// export function IndexPageFactory() {
//   const repositoryAddTask = new RepositoryAddTask()
//   const repositoryListTasks = new RepositoryListTasks()

//   const listTasks = new ListTasksInteractor(repositoryListTasks)
//   const addTask = new AddTaskInteractor(repositoryAddTask)

//   return <IndexPage addTask={addTask} listTasks={listTasks} />
// }

// export function IndexPageFactoryFS() {
//   const fsListTasks = new FsListTasks()
//   const fsAddTask = new FsAddTask()

//   const listTasks = new ListTasksInteractor(fsListTasks)
//   const addTask = new AddTaskInteractor(fsAddTask)

//   return <IndexPage addTask={addTask} listTasks={listTasks} />
// }
export {}
