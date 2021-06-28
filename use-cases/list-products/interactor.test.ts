import { interactor } from './interactor'

describe('List Products - Interactor', () => {
  it('returns empty list when no restaurant IDd is provided', async () => {
    const repository = jest.fn()
    const listProducts = interactor(repository)
    const restaurantID = ''

    const result = await listProducts(restaurantID)

    expect(result).toEqual([])
  })

  it('calls repository with specified restaurant ID', async () => {
    const repository = jest.fn()
    const listProducts = interactor(repository)
    const restaurantID = 'abc-123'

    await listProducts(restaurantID)

    expect(repository).toHaveBeenCalledWith(restaurantID)
  })
})
