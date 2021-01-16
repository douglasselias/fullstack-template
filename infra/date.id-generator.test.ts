import { DateIdGenerator } from './date.id-generator'

const dateIdGenerator = new DateIdGenerator()

const spy = jest.spyOn(Date.prototype, 'getMilliseconds')

test('Gera corretamente um id', () => {
  dateIdGenerator.generate()

  expect(spy).toHaveBeenCalled()
})
