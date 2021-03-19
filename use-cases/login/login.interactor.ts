import { LoginUseCase } from './login.usecase'

interface LoginFetch {
  login(email: string, password: string): Promise<boolean>
}

// export class LoginInteractorHttp implements LoginUseCase {
//   constructor(private readonly repository: LoginFetch) {}

//   async login(email: string, password: string): Promise<boolean> {
//     return this.repository.login(email, password)
//   }
// }

// interface LoginDB {
//   hasEmail(email: string): Promise<boolean>
//   matchPassword(email: string, password: string): Promise<boolean>
//   login(email: string, password: string): Promise<boolean>
// }

// export class LoginInteractorDB implements LoginUseCase {
//   constructor(private readonly repository: LoginDB) {}

//   async login(email: string, password: string): Promise<Error | boolean> {
//     const hasEmail = await this.repository.hasEmail(email)
//     if (!hasEmail) throw Error('No email found')

//     const matchPassword = await this.repository.matchPassword(email, password)
//     if (!matchPassword) throw Error('Wrong password')

//     return true
//   }
// }
