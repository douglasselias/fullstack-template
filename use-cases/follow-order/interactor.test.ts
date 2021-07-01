import { interactor } from './interactor'

describe('Follow Order - Interactor', () => {
  it('returns empty object when no order ID is provided', async () => {
    const repository = jest.fn()
    const followOrder = interactor(repository)
    const orderID = 0

    const result = await followOrder(orderID)

    expect(result).toEqual({})
  })

  it('calls repository with specified order ID', async () => {
    const repository = jest.fn()
    const followOrder = interactor(repository)
    const orderID = 111

    await followOrder(orderID)

    expect(repository).toHaveBeenCalledWith(orderID)
  })
})
