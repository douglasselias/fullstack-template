export interface AddTask {
  add(description: string): Promise<void>
}
