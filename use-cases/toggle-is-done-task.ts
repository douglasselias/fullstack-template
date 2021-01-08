export interface ToggleIsDoneTask {
  toggle(id: string): Promise<void>
}
