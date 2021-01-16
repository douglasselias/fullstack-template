import { IdGenerator } from '@/use-cases/add-task/id-generator.infra'

export class DateIdGenerator implements IdGenerator {
  generate(): string {
    return new Date().getMilliseconds().toString()
  }
}
