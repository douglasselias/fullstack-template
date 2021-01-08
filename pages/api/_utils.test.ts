import { resolverArgs } from './_utils'

test('Converte parâmetros da função resolver para objeto', () => {
  const result = resolverArgs({}, {}, {}, {})
  expect(result).toStrictEqual({ parent: {}, args: {}, context: {}, info: {} })
})
