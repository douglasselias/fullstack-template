import { interactor } from './interactor'

describe('Search Restaurants - Interactor', () => {
  it('returns empty list when no query is provided', async () => {
    const repository = jest.fn()
    const searchRestaurants = interactor(repository)
    const query = ''

    const result = await searchRestaurants(query)

    expect(result).toEqual([])
  })

  it('calls repository with specified query', async () => {
    const repository = jest.fn()
    const searchRestaurants = interactor(repository)
    const query = 'outback'

    await searchRestaurants(query)

    expect(repository).toHaveBeenCalledWith(query)
  })
})
