export interface IdGenerator {
  generate(): MaybePromise<string>
}
