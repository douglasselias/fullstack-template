export interface ToggleIsDoneTaskUseCase {
  toggle(id: string): MaybePromise<void>
}
