export interface ToggleIsDoneTaskRepository {
  toggle(id: string): MaybePromise<void>
}
