export interface LoginUseCase {
  login(email: string, password: string): Promise<Error | boolean>
}
