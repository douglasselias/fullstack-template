export interface AddTaskUseCase {
  add(description: string): MaybePromise<void>
}
