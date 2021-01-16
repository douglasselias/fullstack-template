export interface AddTaskUseCase {
  add(description: string): Promise<void>
}
